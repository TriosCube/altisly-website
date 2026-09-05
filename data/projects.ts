import type { Project } from '~/utils/types';

export const projects: Project[] = [
  {
    slug: 'isura',
    name: 'Isura',
    tagline: 'Multi tenant SaaS platform, on a web framework written in house',
    role: 'Studio venture',
    period: 'Dec 2025 to Present',
    status: 'Active',
    scale: '245+ commits',
    featured: true,
    summary:
      'A multi tenant SaaS platform with five frontend applications, two Rust services and a purpose built framework beneath the stack. The central decision was structural isolation: make tenant leakage impossible by design.',
    problem: [
      'Multi tenant platforms leak. Not usually through some dramatic breach, but through a developer, late on a Thursday, forgetting a single filter on a single query. Every data access point is another opportunity to make that mistake, and the mistake is catastrophic when it lands.',
      'The second problem is quieter and just as expensive. Onboarding a new customer traditionally means an operator doing manual work: reviewing an application, approving it, provisioning an environment, sending invitations. It does not scale, and every handoff is somewhere the process can stall.',
    ],
    decisions: [
      {
        title: 'Isolate tenants by schema, not by a WHERE clause.',
        body: 'Each tenant gets its own Postgres schema. There is no shared table for a developer to forget to filter, because the filter does not exist as a concept. Isolation stops being a discipline problem and becomes a structural fact.',
        rejected:
          'Row level filtering with a tenant_id column, which is simpler to build and depends forever on nobody making a mistake.',
      },
      {
        title: 'Separate the control plane from the runtime plane.',
        body: 'Becoming a customer and using your workspace are different products, with different users, different vocabularies and different risks. So they became different applications rather than an admin section bolted onto the tenant app.',
        rejected:
          'One application with role gated admin screens, which is faster to ship and blurs the two audiences permanently.',
      },
      {
        title: 'Pricing and subscription answer different questions.',
        body: '"What could I buy" and "what do I own" come from different mindsets, so they get different surfaces. Merging them into one billing page is the common mistake, and it makes both jobs harder.',
        rejected: 'A single billing page covering plans, entitlements and invoices together.',
      },
      {
        title: 'Onboarding is a lifecycle projection, not a permanent section.',
        body: 'New tenants see a guided activation journey. Once they graduate, the navigation item disappears entirely. The onboarding surface is temporary by design, because a product that keeps showing you the tutorial has misunderstood something.',
        rejected: 'A permanent "Getting started" item that every mature tenant learns to ignore.',
      },
      {
        title: 'AI is a seat based entitlement with two lanes.',
        body: 'A free conversational tier and a paid, seat gated tier, metered by a token ledger. Pricing owns what things mean. The runtime never evaluates a pricing rule, it only reads a snapshot.',
        rejected:
          'Letting the runtime evaluate pricing rules directly, which couples billing logic to every request path.',
      },
    ],
    diagram: {
      caption:
        'Five applications, two services, one framework. Isolation is structural, at the schema layer.',
      layers: [
        {
          label: 'Applications',
          nodes: [
            { label: 'Platform console', note: 'operator surface' },
            { label: 'Tenant console', note: 'customer admin' },
            { label: 'Employee self service', note: 'per tenant branding' },
            { label: 'Mobile client' },
            { label: 'Marketing site', note: 'Nuxt' },
          ],
        },
        {
          label: 'Shared packages',
          nodes: [
            { label: 'UI library' },
            { label: 'Platform client', note: 'typed, from OpenAPI' },
            { label: 'Tenant client', note: 'typed, from OpenAPI' },
          ],
        },
        {
          label: 'Services',
          nodes: [
            { label: 'platform-api', note: 'Rust, control plane' },
            { label: 'tenant-api', note: 'Rust, runtime plane' },
          ],
        },
        {
          label: 'Framework',
          nodes: [
            {
              label: 'lagbaja',
              note: 'routing, auth, authz, repositories, command bus',
              accent: true,
            },
          ],
        },
        {
          label: 'Data',
          nodes: [{ label: 'Postgres', note: 'one schema per tenant', accent: true }],
        },
      ],
    },
    build: [
      { component: 'Platform console', detail: 'Operator surface: onboarding review, provisioning, tenant lifecycle' },
      { component: 'Tenant console', detail: 'Customer admin: users, roles, subscription, integrations' },
      { component: 'Employee self service', detail: 'Staff surface, with per tenant branding' },
      { component: 'Mobile client', detail: 'Companion application' },
      { component: 'Marketing site', detail: 'Nuxt, self managed' },
      { component: 'Shared packages', detail: 'UI library, build engine, two typed API clients' },
      { component: 'platform-api', detail: 'Rust service owning the control plane' },
      { component: 'tenant-api', detail: 'Rust service owning the runtime plane' },
      {
        component: 'lagbaja',
        detail:
          'The web framework beneath both: routing, auth, authz, repositories, command bus, event stream, CLI scaffolding',
      },
    ],
    outcome: [
      'Tenant isolation cannot be bypassed by a forgotten filter, because the shared table it would filter does not exist.',
      'Onboarding runs as one transaction, from approval through provisioning to first login.',
      'Wire types are generated from the Rust schema, so the frontend cannot drift from the backend contract.',
      'Writing the framework was the right call for this system and would be the wrong call for most. We would not repeat it without the same constraints.',
    ],
    stack: ['Rust', 'Vue 3', 'TypeScript', 'Nuxt', 'PostgreSQL', 'Bun', 'Podman', 'OpenAPI', 'SSE'],
  },
  {
    slug: 'atreasury',
    name: 'aTreasury',
    tagline: 'Treasury and risk operations, off the spreadsheet',
    role: 'Studio venture',
    period: '2025 to 2026',
    status: 'Shipped',
    scale: '460+ commits',
    featured: true,
    summary:
      'A treasury and risk operations platform built around the working day, not around database tables. Main app, admin console, operator CLI, risk API and telemetry work together to move treasury work off fragile spreadsheets.',
    problem: [
      'Treasury desks run on spreadsheets and tribal knowledge. Positions, limits and exposure live in files that one person truly understands, and when that person is on leave the desk slows to a crawl.',
      'Errors in that world are expensive and, worse, discovered late. A reconciliation break found three days after the fact is a very different problem from one caught the same morning.',
    ],
    decisions: [
      {
        title: 'Model the working day, not the data.',
        body: 'The system is built around what an operator actually does between market open and close, in the order they do it. Software that mirrors the database instead of the day forces people to translate, and translation is where mistakes breed.',
        rejected:
          'A generic CRUD admin over the underlying entities, faster to build and slower to use every single day.',
      },
      {
        title: 'Risk gets its own service.',
        body: 'Risk calculation has a different change rate and a different failure mode from the rest of the application, so it was given its own API rather than a module inside the monolith.',
        rejected:
          'Risk as a module in the main application, simpler to deploy and impossible to scale or reason about independently.',
      },
      {
        title: 'Observability from the first commit, not after the first incident.',
        body: 'OpenTelemetry instrumentation went in early. In financial operations, being able to prove what the system did, and when, is not a nice to have.',
        rejected:
          'Adding tracing later, once something goes wrong, which is always more expensive and always too late.',
      },
    ],
    diagram: {
      caption:
        'A separate risk service, an operator CLI, and telemetry across the whole surface.',
      layers: [
        {
          label: 'Surfaces',
          nodes: [
            { label: 'Main application', note: 'operator workflows' },
            { label: 'Platform admin', note: 'configuration' },
            { label: 'Operator CLI', note: 'maintenance and data ops' },
            { label: 'Marketing site' },
          ],
        },
        {
          label: 'Services',
          nodes: [
            { label: 'Core API' },
            { label: 'Risk API', note: 'independent change rate', accent: true },
          ],
        },
        { label: 'Data', nodes: [{ label: 'PostgreSQL' }] },
        {
          label: 'Operations',
          nodes: [
            { label: 'OpenTelemetry', note: 'traces across every surface', accent: true },
            { label: 'UAT stack' },
            { label: 'Production stack' },
          ],
        },
      ],
    },
    build: [
      { component: 'Main application', detail: 'Day to day treasury operations workflows' },
      { component: 'Platform admin', detail: 'Operator and configuration surface' },
      { component: 'Risk API', detail: 'Dedicated risk calculation service' },
      { component: 'Operator CLI', detail: 'Maintenance, data operations and support tooling' },
      { component: 'Marketing site', detail: 'Product site' },
      {
        component: 'Deployment',
        detail: 'Separate UAT and production stacks, with automated deploy and backup tooling',
      },
    ],
    outcome: [
      'Operations that ran on spreadsheets now run on a system that records what happened and when.',
      'Risk calculation can change without redeploying the main application.',
      'Telemetry means incidents are diagnosed from traces rather than from memory.',
      'The CLI became more central than expected. Operators reached for it constantly, which says something about how much of this work is still command shaped.',
    ],
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'OpenTelemetry'],
  },
  {
    slug: 'treasury-ai-assistant',
    name: 'Treasury AI Assistant',
    tagline: 'Blotter reconciliation and liquidity forecasting, automated',
    role: 'Client build',
    period: '2026',
    status: 'Shipped',
    featured: true,
    summary:
      'AI driven automation for blotter reconciliation and liquidity forecasting. The product value sits in encoded judgement: exclusions, mappings and reporting rules that used to live in memory.',
    problem: [
      'Trade blotter reconciliation is daily, manual, high stakes and mind numbing. Someone opens files from several desks, each formatted differently, and matches them line by line while knowing that a missed break costs real money.',
      'Liquidity forecasting sits next to it, equally repetitive and equally dependent on rules nobody has ever written down. It is exactly the shape of work that should be absorbed, and exactly the shape that resists naive automation.',
    ],
    decisions: [
      {
        title: 'Encode the judgement, do not build a chatbot.',
        body: 'The value sits in the exclusion rules and column mappings, not in a conversational surface. So the work went into capturing what an experienced reconciler knows and applies without thinking.',
        rejected:
          'A chat interface over the data, which demos beautifully and moves none of the actual daily work.',
      },
      {
        title: 'Treat inconsistent formats as the normal case.',
        body: 'Desks will never standardise their exports, so the column mapping layer assumes chaos and resolves it, rather than demanding a clean input that will never arrive.',
        rejected:
          'A required import template, which pushes the problem onto the very people the tool is meant to help.',
      },
      {
        title: 'Deliver output where the work already happens.',
        body: 'Formatted reporting goes straight into team channels. A report nobody opens is not a report.',
        rejected: 'A dashboard requiring a separate login, competing for attention it will not win.',
      },
    ],
    build: [
      { component: 'Column mapping', detail: 'Knowledge base resolving inconsistent broker and desk formats' },
      {
        component: 'Exclusion and allowlist logic',
        detail: 'The rules a human reconciler applies from memory, written down',
      },
      { component: 'Blotter sync', detail: 'Automated ingestion and matching' },
      { component: 'Liquidity forecast', detail: 'Forward projection from current positions' },
      {
        component: 'Channel reporting',
        detail: 'Formatted operational output delivered where the team already works',
      },
    ],
    outcome: [
      'A daily manual process became a scheduled one, with humans reviewing exceptions rather than every line.',
      "The exclusion rules now exist as an artefact, which matters more than the automation. They used to live in one person's head.",
      'Deliberately narrow. It solves two jobs thoroughly rather than ten superficially.',
    ],
    stack: ['AI tooling', 'Google Apps Script', 'Spreadsheet automation', 'Channel integrations'],
  },
  {
    slug: 'altishms',
    name: 'altisHMS',
    tagline: 'Hospital management, designed from inside the consultation room',
    role: 'Studio venture',
    period: '2026',
    status: 'Active',
    scale: '7 components',
    summary:
      'A seven component hospital management suite shaped by clinical reality. Staff workflows, patient surfaces, mobile, shared UI and documentation support are separated so each audience gets the right surface.',
    problem: [
      'Hospital software makes clinicians work the way the software wants. Our founding team trained clinically, so we have been on the receiving end of that, filling in a form while a patient waits and wondering who the system was really built for.',
      'Documentation competes with attention. Every extra field is a few more seconds looking at a screen instead of at a person, and those seconds accumulate into something that changes the quality of care.',
    ],
    decisions: [
      {
        title: 'Separate the patient surface from the staff surface entirely.',
        body: 'Patients and clinicians want opposite things from the same data. One portal trying to serve both serves neither, so they became separate applications sharing a backend.',
        rejected:
          'A single application with role based views, cheaper to build and permanently compromised for both audiences.',
      },
      {
        title: 'Build the UI library first.',
        body: 'Six applications sharing one component library means a fix lands everywhere at once. Starting with the library felt slow for about three weeks and then paid for itself repeatedly.',
        rejected:
          'Building each application independently and reconciling the design later, which in practice means never.',
      },
      {
        title: 'The AI module assists documentation, it does not touch clinical decisions.',
        body: 'A firm line, drawn deliberately. Summarising and structuring notes is genuinely useful and carries acceptable risk. Suggesting diagnoses does not.',
        rejected:
          'Clinical decision support, which is a different product with a different regulatory burden and a much higher cost of being wrong.',
      },
    ],
    diagram: {
      caption: 'Two audiences, two surfaces, one shared component library beneath both.',
      layers: [
        {
          label: 'Patient facing',
          nodes: [
            { label: 'Public portal', note: 'appointments, records' },
            { label: 'Marketing site' },
          ],
        },
        {
          label: 'Staff facing',
          nodes: [
            { label: 'Web application', note: 'clinical workflows', accent: true },
            { label: 'Mobile application' },
          ],
        },
        {
          label: 'Shared',
          nodes: [
            {
              label: 'UI library',
              note: 'one component set across six applications',
              accent: true,
            },
            { label: 'AI assistant', note: 'documentation only' },
          ],
        },
        { label: 'Services', nodes: [{ label: 'Backend services' }] },
      ],
    },
    build: [
      { component: 'Backend services', detail: 'Core clinical and administrative data' },
      { component: 'Web application', detail: 'Staff and clinical workflows' },
      { component: 'Public portal', detail: 'Patient facing appointments and records' },
      { component: 'Mobile application', detail: 'Staff companion' },
      { component: 'Marketing site', detail: 'Public site' },
      { component: 'UI library', detail: 'Shared component set across every surface' },
      {
        component: 'AI assistant',
        detail: 'Documentation support, deliberately scoped away from clinical decisions',
      },
    ],
    outcome: [
      'Clinical workflows shaped around the consultation rather than the database schema.',
      'One component library serving six applications, so design fixes propagate rather than fragment.',
      'The clinical background is the real differentiator here, and it is not transferable. It is why the forms are shorter.',
    ],
    stack: ['TypeScript', 'Vue', 'Node.js', 'PostgreSQL', 'Shared UI library'],
  },
  {
    slug: 'persona',
    name: 'perSona',
    tagline: 'Identity and verification, with a vertical built on top',
    role: 'Studio venture',
    period: '2026',
    status: 'Active',
    summary:
      'A containerised identity and verification platform with a mobile client and a vertical product on top. Verification is staged against user intent rather than forced at the door.',
    problem: [
      'Identity verification is infrastructure wearing a consumer face. The engineering is unglamorous and the product question is sharp: how much friction will someone accept before they abandon the process entirely?',
      'Put verification too early and you lose people who were never going to be a risk. Put it too late and you have onboarded someone you should not have.',
    ],
    decisions: [
      {
        title: 'Stage verification against the value of the action.',
        body: 'Identity is proven progressively, in step with what the user is trying to do, rather than demanded in full at the door.',
        rejected:
          'Full verification at signup, which is simpler to implement and loses people who would have converted.',
      },
      {
        title: 'Prove the platform by building a vertical on it.',
        body: 'BuildSafe NG exists partly as a real product and partly as evidence that the identity foundation generalises. A platform with one consumer is not yet a platform.',
        rejected:
          'Marketing the platform as reusable without a second consumer to demonstrate it, which is a claim rather than a proof.',
      },
    ],
    build: [
      { component: 'Backend', detail: 'Containerised service with a Prisma data layer' },
      { component: 'Mobile application', detail: 'Consumer verification client' },
      {
        component: 'BuildSafe NG',
        detail: 'Vertical product built on the same identity foundation',
      },
    ],
    outcome: [
      'Verification friction is staged rather than front loaded.',
      'The second consumer proved the foundation generalises, which no amount of internal argument could have.',
      'Still early. The abandonment numbers will decide whether the staging thresholds are right.',
    ],
    stack: ['Node.js', 'Prisma', 'PostgreSQL', 'React Native', 'Docker'],
  },
  {
    slug: 'altisly',
    name: 'Altisly',
    tagline: 'The first front door, small by design',
    role: 'Internal build',
    period: '2026',
    status: 'Maintained',
    summary:
      'The first Altisly product site, a focused Nuxt build with server side enquiry capture, content authoring and SEO. Small by design, owned end to end, and built around the one action that matters.',
    problem: [
      'The studio needed a front door. Not a landing page template, but something that explains what the work actually is and captures the people who want to talk about it.',
    ],
    decisions: [
      {
        title: 'Own the enquiry data.',
        body: 'Enquiries are captured and persisted server side rather than handed to a third party form service. It is a small amount of extra work for complete control over the one thing the site exists to produce.',
        rejected:
          "An embedded third party form, quicker to add and dependent on someone else's uptime and pricing.",
      },
    ],
    build: [
      { component: 'Product pages', detail: 'Per product explanation and positioning' },
      { component: 'Enquiry capture', detail: 'Server routes with persistence' },
      { component: 'Content authoring', detail: 'Writing surface for site content' },
      { component: 'SEO', detail: 'Sitemap generation and metadata' },
    ],
    outcome: [
      'Shipped, maintained, and the enquiry data belongs to the business.',
      'Deliberately small. Not every project needs to be a platform.',
      'Small, finished, and doing its job.',
    ],
    stack: ['Nuxt 3', 'Tailwind CSS', 'TypeScript', 'SQLite'],
  },
];

export const getProject = (slug: string) => projects.find(project => project.slug === slug);

export const getAdjacent = (slug: string) => {
  const index = projects.findIndex(project => project.slug === slug);
  const normalizedIndex = index < 0 ? 0 : index;
  const prev = projects[(normalizedIndex - 1 + projects.length) % projects.length];
  const next = projects[(normalizedIndex + 1) % projects.length];

  return { prev, next };
};
