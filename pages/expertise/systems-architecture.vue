<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Systems Architecture"
        title="Design the system once"
        description="Most platforms get rewritten because the data model was decided in a hurry. We settle the schema, the boundaries, and the failure modes before anyone writes production code."
        parent-label="Our Expertise"
        parent-href="/about"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Talk to an architect</NuxtLink>
        </template>
      </PageHero>

      <SpecList
        label="What we build"
        title="Platform and data, designed together"
        intro="Architecture and the information layer are the same problem. Splitting them across two teams is how you end up with dashboards nobody trusts."
        :items="capabilities"
      />

      <EngagementSteps
        title="Four stages, no surprises"
        :steps="steps"
      />

      <CtaBanner
        title="Planning a rebuild?"
        subtitle="Bring us the constraints. We will tell you what the architecture has to look like."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Systems Architecture | Altisly',
  description:
    'We architect platforms and the data layer underneath: event-driven services, cloud-native infrastructure, warehousing, and observability.',
})

const capabilities = [
  {
    title: 'Event-driven services',
    description: 'Decomposed services over a durable event bus, deployable independently.',
  },
  {
    title: 'Cloud-native infrastructure',
    description: 'Kubernetes, Docker, and Terraform on AWS, GCP, or Azure. Infrastructure as code throughout.',
  },
  {
    title: 'Data model and state',
    description: 'Schema design, caching layers, and distributed state that does not become the bottleneck.',
  },
  {
    title: 'API gateway and routing',
    description: 'Central authentication, rate limiting, and routing across distributed services.',
  },
  {
    title: 'Warehousing',
    description: 'BigQuery or Snowflake as the single source of truth, modelled for the questions you actually ask.',
  },
  {
    title: 'Pipelines and ingestion',
    description: 'Automated ETL from legacy APIs, core banking, and CRMs. Conflicting records resolved by rule, not by hand.',
  },
  {
    title: 'Observability',
    description: 'Tracing, metrics, and structured logs designed in from the start rather than bolted on after an incident.',
  },
  {
    title: 'Fault tolerance',
    description: 'Zero-trust perimeters, automated failover, and a recovery path that has been rehearsed.',
  },
]

const steps = [
  {
    title: 'Discovery',
    desc: 'We map the domain and pin down throughput, latency, and security constraints as numbers.',
  },
  {
    title: 'Blueprint',
    desc: 'Data flow models, API contracts, and diagrams. You own the output whether or not we build it.',
  },
  {
    title: 'Proof of concept',
    desc: 'We prototype the riskiest assumption first, so it fails in a week rather than in month eight.',
  },
  {
    title: 'Execution',
    desc: 'We build alongside your engineers, establishing CI/CD, standards, and test coverage as we go.',
  },
]
</script>
