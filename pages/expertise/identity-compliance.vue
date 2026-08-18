<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Identity &amp; Compliance"
        title="Compliance as code, not headcount"
        description="Verification, monitoring, and screening encoded as deterministic rules. Your compliance officers stop reviewing every case and start handling the exceptions."
        parent-label="Our Expertise"
        parent-href="/about"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Talk to an engineer</NuxtLink>
          <NuxtLink to="/products/compliance-suite" class="btn-outline text-base px-8 py-4">See Compliance Suite</NuxtLink>
        </template>
      </PageHero>

      <SpecList
        label="Compliance"
        title="Monitoring, screening, and reporting"
        intro="Compliance headcount scales linearly with volume. Rules do not."
        :items="compliance"
      />

      <SpecList
        label="Identity"
        title="The verification layer underneath"
        muted
        intro="Every compliance control depends on knowing who is on the other side of the transaction."
        :items="identity"
      />

      <EngagementSteps
        title="From compliance manual to running engine"
        :steps="steps"
      />

      <CtaBanner
        title="Compliance team growing faster than revenue?"
        subtitle="Send us your SOPs. We will tell you which parts are already deterministic."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Identity & Compliance | Altisly',
  description:
    'Automated AML monitoring, KYC onboarding, sanctions and PEP screening, regulatory reporting, and the identity infrastructure underneath.',
})

const compliance = [
  {
    title: 'AML transaction monitoring',
    description: 'Rule-based and model-driven engines scoring transactions in real time, with the triggered rule shown.',
  },
  {
    title: 'Sanctions and PEP screening',
    description: 'Continuous screening against global watchlists, with alerts routed by risk rather than queued flat.',
  },
  {
    title: 'Regulatory reporting',
    description: 'Pipelines that compile and format statutory returns, including SAR drafting for human review.',
  },
  {
    title: 'Immutable audit trails',
    description: 'Every decision, automated or manual, written to an append-only record with its reasoning attached.',
  },
]

const identity = [
  {
    title: 'Automated KYC onboarding',
    description: 'Verification APIs wired directly into your onboarding flow, with fallbacks when a provider fails.',
  },
  {
    title: 'Biometric device binding',
    description: 'Authentication bound to a specific device using hardware-backed key storage.',
  },
  {
    title: 'Dynamic linking and SCA',
    description: 'Each authorisation cryptographically tied to its exact amount and payee, per regulatory requirement.',
  },
  {
    title: 'Role-based access control',
    description: 'Permission models for enterprise platforms, scoped so users reach only what their role requires.',
  },
]

const steps = [
  { title: 'Map and define', desc: 'We translate your compliance manuals and SOPs into machine-readable rules against your real data model.' },
  { title: 'Build the engine', desc: 'The rules engine is wired into your ledgers, payment rails, and onboarding flows.' },
  { title: 'Shadow and tune', desc: 'It runs alongside your manual team while we tune out false positives against known outcomes.' },
  { title: 'Go live', desc: 'Automated review becomes the default path. Your officers handle exceptions and policy.' },
]
</script>
