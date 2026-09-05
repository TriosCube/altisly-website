import { commitments, engagementStages, moves, openRoles, principles, whoWeAre } from '~/data/content'
import { projects } from '~/data/projects'
import { presence, site } from '~/data/site'

/* The answers are grounded in the same content the pages render, so the assistant cannot drift into
   describing an Altisly that does not exist. Built once per process, not per request. */
let cached = ''

export function altislyContext() {
  if (cached) return cached

  const builds = projects
    .map(
      (project) =>
        `- ${project.name}: ${project.tagline} Role: ${project.role}. ${project.period}, ${project.status}. ${project.summary}`,
    )
    .join('\n')

  const roles = openRoles
    .map((role) => `- ${role.title} (${role.team}) · ${role.location} · ${role.type}`)
    .join('\n')

  const engagement = engagementStages
    .map((stage) => `- ${stage.title} (${stage.duration}): ${stage.body}`)
    .join('\n')

  cached = [
    `Altisly is ${site.role.toLowerCase()}, based in ${site.location}.`,
    `Contact: ${site.email}. Phone: ${site.phone}. Site: ${site.url}.`,
    `Operating in: ${presence.map((place) => place.name).join(', ')}.`,
    '',
    'How we describe ourselves:',
    whoWeAre.map((item) => `- ${item.title} ${item.body}`).join('\n'),
    '',
    'What we hold to:',
    commitments.map((line) => `- ${line}`).join('\n'),
    '',
    'How a build runs:',
    moves.map((move) => `- ${move.title}: ${move.body}`).join('\n'),
    '',
    'Engagement stages:',
    engagement,
    '',
    'Principles every build answers to:',
    principles.map((item) => `- ${item.title}: ${item.body}`).join('\n'),
    '',
    'The platforms we have built:',
    builds,
    '',
    'Open roles:',
    roles,
    '',
    'These are every page on the site. Never point anyone at a path that is not',
    'on this list, and never invent one: / (home), /about, /partnerships, /careers,',
    '/blog for insights and /blog/<slug> for one of them, /contact,',
    '/diagnose to run a diagnostic, /legal/privacy, /legal/terms, /legal/notice.',
    'There are no case study pages. Describe the builds above in your own words',
    'and send anyone who wants more to /contact.',
  ].join('\n')

  return cached
}
