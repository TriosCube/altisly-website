export const isuraHero = {
  eyebrow: 'Isura',
  title: 'The platform we built to be impossible to leak.',
  lede: 'Isura is a multi tenant SaaS platform for operations heavy businesses. Every tenant sits in its own database schema, so isolation is a structural fact rather than a rule somebody has to remember.',
}

export const isuraPillars = [
  {
    title: 'Schema per tenant',
    body: 'Each tenant gets its own Postgres schema. There is no shared table for a query to forget to filter, because the shared table does not exist.',
  },
  {
    title: 'Two planes, two products',
    body: 'Becoming a customer and running your workspace are different jobs with different risks, so they are different applications rather than an admin tab.',
  },
  {
    title: 'Provisioning as one transaction',
    body: 'Approval, schema creation, seeding, branding and first login run as a durable saga. A stalled onboarding resumes instead of stranding a customer half created.',
  },
  {
    title: 'Contracts generated, not typed',
    body: 'Wire types come out of the Rust schema through OpenAPI. The frontend cannot drift from the backend, because nobody is hand writing the contract twice.',
  },
]

export const isuraSurfaces = [
  {
    name: 'Platform console',
    audience: 'Operators',
    body: 'Onboarding review, provisioning, tenant lifecycle and the record of what was approved by whom.',
  },
  {
    name: 'Tenant console',
    audience: 'Customer admins',
    body: 'Users, roles, subscription, entitlements and integrations for a single workspace.',
  },
  {
    name: 'Employee self service',
    audience: 'Staff',
    body: 'The day to day surface, carrying the tenant logo and branding rather than ours.',
  },
  {
    name: 'Mobile client',
    audience: 'Staff on the move',
    body: 'A companion application against the same tenant runtime contract.',
  },
]

export const isuraCapabilities = [
  {
    title: 'Identity and access',
    body: 'Sessions, factors, recovery and a role catalogue resolved on the server. Roles never travel inside a token.',
  },
  {
    title: 'Subscription and entitlements',
    body: 'Pricing answers what you could buy. Subscription answers what you own. The runtime reads a snapshot and never evaluates a pricing rule.',
  },
  {
    title: 'Activation journey',
    body: 'New tenants get a guided lifecycle projection that disappears from navigation once they graduate.',
  },
  {
    title: 'AI, seat gated',
    body: 'A free conversational lane and a paid lane metered by a token ledger, with seats assigned by role and a kill switch per tenant.',
  },
  {
    title: 'Integrations',
    body: 'One home for external connections, with connect, verify and disconnect as the only verbs a tenant needs.',
  },
  {
    title: 'Audit and events',
    body: 'A command bus and an event stream underneath, so what happened is recoverable rather than reconstructed.',
  },
]

export const isuraProof = [
  { value: '1', label: 'Postgres schema per tenant' },
  { value: '2', label: 'Rust services, control and runtime' },
  { value: '5', label: 'Frontend applications' },
  { value: '245+', label: 'Commits and counting' },
]

export const isuraFaqs = [
  {
    q: 'Is Isura a product I can buy today?',
    a: 'It is in active build, with the platform and tenant surfaces running. If your operation looks like a fit, talk to us and we will tell you honestly where it stands.',
  },
  {
    q: 'Why write a framework for it?',
    a: 'Because isolation, authorisation and provisioning needed to be structural rather than conventional, in every service, on the first day. That was the right call under these constraints and would be the wrong call for most projects.',
  },
  {
    q: 'Can it sit behind our brand?',
    a: 'Yes. Tenant surfaces carry the tenant logo and palette, and the platform surface stays ours. That split is part of the architecture, not a theme setting.',
  },
  {
    q: 'How do you prove isolation to a regulator?',
    a: 'You show the schema boundary. Tenant data lives in its own schema, reached through a tenant identity taken from a signed claim, and the platform never holds tenant user records.',
  },
]
