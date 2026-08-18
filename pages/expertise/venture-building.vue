<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Venture Building"
        title="We build the first version with you"
        description="Technical co-founding for ventures in regulated and infrastructure-heavy sectors. We own the architecture through launch, then hand it to your team."
        parent-label="Our Expertise"
        parent-href="/about"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Pitch your idea</NuxtLink>
        </template>
      </PageHero>

      <SpecList
        label="What we take on"
        title="More than a build contract"
        intro="An agency ships your spec. A technical co-founder argues with it first."
        :items="capabilities"
      />

      <SpecList
        label="Sectors"
        title="Where we have depth"
        muted
        intro="We work in domains where the regulation and the data model matter more than the interface."
        :items="sectors"
      />

      <EngagementSteps
        title="Concept to handover"
        :steps="steps"
      />

      <CtaBanner
        title="Building something in a regulated market?"
        subtitle="The earlier we see the architecture, the cheaper the decisions are."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Venture Building | Altisly',
  description:
    'Technical co-founding for ventures in fintech, health, agriculture, and public sector. Architecture, build, and handover to your own team.',
})

const capabilities = [
  {
    title: 'Technical co-founding',
    description: 'We shape the technical organisation, not just the first release.',
  },
  {
    title: 'Architecture that survives funding',
    description: 'Built so finding product-market fit does not force a rewrite the same quarter.',
  },
  {
    title: 'Data from day one',
    description: 'Pipelines and instrumentation in the first build, so your metrics mean something at month three.',
  },
  {
    title: 'Security and compliance',
    description: 'Controls designed into the core rather than retrofitted before your first audit.',
  },
  {
    title: 'Rapid prototyping',
    description: 'Working software to validate the assumption or support the raise, quickly.',
  },
  {
    title: 'Handover',
    description: 'Documentation and knowledge transfer so your internal team can run it without us.',
  },
]

const sectors = [
  {
    title: 'Health',
    description: 'Patient records and clinical data sharing under HIPAA and NDPR, with strict access control.',
  },
  {
    title: 'Agriculture',
    description: 'Supply chain ledgers tracking produce from farm to buyer, supporting financing against verified movement.',
  },
  {
    title: 'Public sector',
    description: 'Citizen identity systems, revenue collection pipelines, and secure public-facing portals on legacy estates.',
  },
  {
    title: 'Logistics',
    description: 'Tracking and dispatch systems with routing logic that holds up at fleet scale.',
  },
]

const steps = [
  { title: 'Validation', desc: 'We stress-test the model, map the data architecture, and cut the MVP scope to what proves the thesis.' },
  { title: 'Build', desc: 'Core infrastructure, ledgers, APIs, and interfaces.' },
  { title: 'Launch', desc: 'We deploy, instrument, and iterate against real usage rather than assumptions.' },
  { title: 'Handover', desc: 'We transfer the system and the reasoning behind it to your internal team.' },
]
</script>
