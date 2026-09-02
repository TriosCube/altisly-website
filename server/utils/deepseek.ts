export type DeepSeekRole = 'system' | 'user' | 'assistant'

export interface DeepSeekMessage {
  role: DeepSeekRole
  content: string
}

interface DeepSeekPayload {
  choices?: Array<{ message?: { content?: string }; finish_reason?: string }>
  error?: { message?: string }
}

interface CallOptions {
  temperature?: number
  maxTokens?: number
  json?: boolean
  timeoutMs?: number
  disableThinking?: boolean
}

export class DeepSeekError extends Error {
  readonly status: number

  readonly publicMessage: string

  constructor(message: string, status: number, publicMessage?: string) {
    super(message)
    this.name = 'DeepSeekError'
    this.status = status
    this.publicMessage = publicMessage ?? defaultPublicMessage(status)
  }
}

function defaultPublicMessage(status: number) {
  if (status === 503) return 'The engine is not configured on this server yet.'
  if (status === 429) return 'The engine is busy. Try again in a moment.'
  if (status >= 500) return 'The engine could not answer right now. Try again in a moment.'

  return 'The engine could not process that request.'
}

export function publicErrorFor(caught: unknown) {
  if (caught instanceof DeepSeekError) {
    return { error: caught.publicMessage, status: caught.status }
  }

  return { error: 'The engine could not answer right now. Try again in a moment.', status: 502 }
}

export function resolveModel() {
  const model = process.env.DEEPSEEK_MODEL?.trim()

  if (!model) return 'deepseek-chat'
  if (model === 'deepseek-v3') return 'deepseek-chat'
  if (model === 'deepseek-r1') return 'deepseek-reasoner'

  return model
}

export function normalizeBaseUrl() {
  const baseUrl = process.env.DEEPSEEK_BASE_URL?.trim() || 'https://api.deepseek.com/v1'

  return baseUrl.replace(/\/$/, '')
}

export function resolveApiKey() {
  return process.env.DEEPSEEK_API_KEY?.trim() ?? ''
}

export async function callDeepSeek(
  messages: DeepSeekMessage[],
  options: CallOptions = {},
): Promise<string> {
  const apiKey = resolveApiKey()

  if (!apiKey) {
    throw new DeepSeekError('DEEPSEEK_API_KEY is not set on the website server.', 503)
  }

  let response: Response

  try {
    response = await fetch(`${normalizeBaseUrl()}/chat/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(options.timeoutMs ?? 60_000),
      body: JSON.stringify({
        model: resolveModel(),
        messages,
        temperature: options.temperature ?? 0.35,
        max_tokens: options.maxTokens ?? 700,
        stream: false,
        ...(options.json ? { response_format: { type: 'json_object' } } : {}),
        ...(options.disableThinking ? { thinking: { type: 'disabled' } } : {}),
      }),
    })
  } catch {
    throw new DeepSeekError('DeepSeek is unreachable from the website server.', 502)
  }

  let payload: DeepSeekPayload

  try {
    payload = (await response.json()) as DeepSeekPayload
  } catch {
    throw new DeepSeekError('DeepSeek returned a response the server could not read.', 502)
  }

  if (!response.ok) {
    throw new DeepSeekError(
      payload.error?.message ?? 'DeepSeek rejected the request.',
      response.status,
    )
  }

  const choice = payload.choices?.[0]
  const reply = choice?.message?.content?.trim()

  if (choice?.finish_reason === 'length') {
    console.warn('[diagnose] reply truncated by max_tokens')
  }

  if (!reply) {
    throw new DeepSeekError('Provider returned an empty response.', 502)
  }

  return reply
}

export function parseJsonReply<T>(reply: string): T {
  const fenced = reply.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '')

  try {
    return JSON.parse(fenced) as T
  } catch {
    const start = fenced.indexOf('{')
    const end = fenced.lastIndexOf('}')

    if (start === -1 || end <= start) {
      throw new DeepSeekError('DeepSeek returned a report the server could not read.', 502)
    }

    try {
      return JSON.parse(fenced.slice(start, end + 1)) as T
    } catch {
      throw new DeepSeekError('DeepSeek returned a report the server could not read.', 502)
    }
  }
}
