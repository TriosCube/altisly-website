import { createError, getRequestHeader, readBody } from 'h3'
import {
  callDeepSeek,
  DeepSeekError,
  parseJsonReply,
  publicErrorFor,
  resolveApiKey,
} from '~/server/utils/deepseek'
import {
  briefFieldLimit,
  briefFields,
  emptyBrief,
  looksLikeEmail,
  requiredBriefFields,
  stageOrder,
  type DiagnoseBrief,
  type DiagnoseConcept,
  type DiagnoseSurvey,
} from '~/utils/diagnose'
import { site } from '~/data/site'

const windowMs = 60 * 60 * 1000
const maxRunsPerWindow = 5
const buckets = new Map<string, number[]>()

function takeSlot(key: string) {
  const now = Date.now()
  const recent = (buckets.get(key) ?? []).filter((stamp) => now - stamp < windowMs)

  if (recent.length >= maxRunsPerWindow) {
    buckets.set(key, recent)
    return false
  }

  recent.push(now)
  buckets.set(key, recent)

  if (buckets.size > 500) {
    for (const [bucketKey, stamps] of buckets) {
      if (stamps.every((stamp) => now - stamp >= windowMs)) buckets.delete(bucketKey)
    }
  }

  return true
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function normalizeBrief(value: unknown): DiagnoseBrief {
  const source = isRecord(value) ? value : {}
  const brief = { ...emptyBrief }

  for (const field of briefFields) {
    const raw = source[field]
    if (typeof raw === 'string') brief[field] = raw.trim().slice(0, briefFieldLimit)
  }

  return brief
}

function briefBlock(brief: DiagnoseBrief) {
  return [
    `Business: ${brief.business}`,
    `Industry: ${brief.industry}`,
    `What they sell: ${brief.offering}`,
    `Team size: ${brief.teamSize || 'not given'}`,
    `What breaks most often: ${brief.friction}`,
    `Tools they run today: ${brief.tools || 'not given'}`,
  ].join('\n')
}

const surveyPrompt = [
  'You are the Altisly diagnostic engine, run by Altisly, a tech-enabled consulting and venture building studio in Lagos.',
  'A business owner has submitted a short brief. Survey it the way an operator would: find where the work actually leaks.',
  'Rules:',
  '- Evidence, not opinion. Every friction must name the observable signal that would confirm it.',
  '- Be specific to this business. Generic advice that would fit any company is a failure.',
  '- Do not flatter. Do not hedge. Do not invent numbers you cannot justify. Express cost as a mechanism, not a fake figure.',
  '- Name one blind spot the owner did not mention but almost certainly has, given the shape of what they described.',
  '- Voice: concise product studio. Plain sentences. No marketing language. No em dashes.',
  '',
  'Reply with json only, matching exactly this shape:',
  '{',
  '  "read": "one sentence naming what this business really is, operationally",',
  '  "frictions": [{ "name": "short label", "symptom": "what the owner feels", "evidence": "the signal that confirms it", "cost": "what it costs while it stays unfixed" }],',
  '  "blind_spot": "the thing they did not mention that matters",',
  '  "questions": ["a question whose answer would change the build", "another"]',
  '}',
  'Give three or four frictions and two or three questions.',
].join('\n')

const conceptPrompt = [
  'You are the Altisly concept engine, run by Altisly, a tech-enabled consulting and venture building studio in Lagos.',
  'You are given a business brief and the diagnostic survey already run against it.',
  'Design the one bespoke system that answers exactly what the survey found. Not a template. Not a SaaS recommendation.',
  'Rules:',
  '- Every module must trace back to a named friction from the survey.',
  '- Exactly three agents. Each owns one piece of the operation and is named for what it owns, ending in the word "agent".',
  `- Exactly five phases, in this order and using these stage names: ${stageOrder.join(', ')}.`,
  '- The wedge is the honest part: state what makes this specific build hard, and why it needs a studio that has shipped multi tenant platforms and operations software rather than a template or an off the shelf tool. Name the risk of getting it wrong. Do not oversell and do not use the word "unlock".',
  '- The first move is what happens in week one. Small, concrete, verifiable.',
  '- Voice: concise product studio. Plain sentences. No marketing language. No em dashes. No exclamation marks.',
  '',
  'Reply with json only, matching exactly this shape:',
  '{',
  '  "system_name": "a plain name for the system, two or three words",',
  '  "premise": "one sentence on what the system is for",',
  '  "modules": [{ "name": "module name", "does": "what it does, one sentence" }],',
  '  "agents": [{ "name": "something agent", "owns": "what it owns, one sentence" }],',
  '  "phases": [{ "stage": "Scan", "move": "what happens", "output": "what you hold at the end of it" }],',
  '  "wedge": "two or three sentences on why this needs Altisly specifically",',
  '  "first_move": "one sentence on week one"',
  '}',
  'Give three or four modules.',
].join('\n')

function asString(value: unknown, fallback = '') {
  return typeof value === 'string' ? value.trim() : fallback
}

function asStringArray(value: unknown) {
  return Array.isArray(value) ? value.map((entry) => asString(entry)).filter(Boolean) : []
}

function shapeSurvey(value: unknown): DiagnoseSurvey {
  const source = isRecord(value) ? value : {}
  const frictions = Array.isArray(source.frictions) ? source.frictions : []

  const shaped: DiagnoseSurvey = {
    read: asString(source.read),
    frictions: frictions
      .filter(isRecord)
      .map((friction) => ({
        name: asString(friction.name),
        symptom: asString(friction.symptom),
        evidence: asString(friction.evidence),
        cost: asString(friction.cost),
      }))
      .filter((friction) => friction.name.length > 0)
      .slice(0, 4),
    blind_spot: asString(source.blind_spot),
    questions: asStringArray(source.questions).slice(0, 3),
  }

  if (shaped.frictions.length === 0) {
    throw new DeepSeekError(
      'Survey returned no frictions.',
      502,
      'The survey came back without findings. Try again with a little more detail.',
    )
  }

  return shaped
}

function shapeConcept(value: unknown): DiagnoseConcept {
  const source = isRecord(value) ? value : {}
  const list = (key: string) =>
    Array.isArray(source[key]) ? (source[key] as unknown[]).filter(isRecord) : []

  const shaped: DiagnoseConcept = {
    system_name: asString(source.system_name, 'Your system'),
    premise: asString(source.premise),
    modules: list('modules')
      .map((module) => ({ name: asString(module.name), does: asString(module.does) }))
      .filter((module) => module.name.length > 0)
      .slice(0, 4),
    agents: list('agents')
      .map((agent) => ({ name: asString(agent.name), owns: asString(agent.owns) }))
      .filter((agent) => agent.name.length > 0)
      .slice(0, 3),
    phases: list('phases')
      .map((phase) => ({
        stage: asString(phase.stage),
        move: asString(phase.move),
        output: asString(phase.output),
      }))
      .filter((phase) => phase.stage.length > 0)
      .slice(0, 5),
    wedge: asString(source.wedge),
    first_move: asString(source.first_move),
  }

  if (shaped.modules.length === 0 || shaped.phases.length === 0) {
    throw new DeepSeekError(
      'Concept returned no modules or phases.',
      502,
      'The concept came back incomplete. Try again in a moment.',
    )
  }

  return shaped
}

function clientKey(event: Parameters<typeof getRequestHeader>[0]) {
  const forwarded = getRequestHeader(event, 'x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()

  return getRequestHeader(event, 'x-real-ip')?.trim() || 'anonymous'
}

export default defineEventHandler(async (event) => {
  if (!resolveApiKey()) {
    throw createError({
      statusCode: 503,
      statusMessage: 'The engine is not configured on this server yet.',
    })
  }

  const body = await readBody(event).catch(() => null)
  const brief = normalizeBrief(isRecord(body) ? body.brief : null)
  const missing = requiredBriefFields.filter((field) => brief[field].length === 0)

  if (missing.length > 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Fill the required fields before running the survey.',
    })
  }

  if (!looksLikeEmail(brief.email)) {
    throw createError({ statusCode: 400, statusMessage: 'That email address does not look right.' })
  }

  if (!takeSlot(clientKey(event))) {
    throw createError({
      statusCode: 429,
      statusMessage:
        'That is enough surveys for one hour. Email the studio directly and we will run the next one ourselves.',
    })
  }

  try {
    const surveyReply = await callDeepSeek(
      [
        { role: 'system', content: surveyPrompt },
        { role: 'user', content: briefBlock(brief) },
      ],
      { temperature: 0.4, maxTokens: 2600, json: true, disableThinking: true, timeoutMs: 90_000 },
    )

    const survey = shapeSurvey(parseJsonReply(surveyReply))

    const conceptReply = await callDeepSeek(
      [
        { role: 'system', content: conceptPrompt },
        {
          role: 'user',
          content: [
            'Brief:',
            briefBlock(brief),
            '',
            'Survey:',
            JSON.stringify(survey),
            '',
            `The builder is ${site.name}, ${site.role}, ${site.location}.`,
          ].join('\n'),
        },
      ],
      { temperature: 0.45, maxTokens: 4000, json: true, disableThinking: true, timeoutMs: 90_000 },
    )

    const concept = shapeConcept(parseJsonReply(conceptReply))

    return { report: { survey, concept } }
  } catch (caught) {
    const { error, status } = publicErrorFor(caught)
    console.error('[diagnose] failed:', caught)

    throw createError({ statusCode: status, statusMessage: error })
  }
})
