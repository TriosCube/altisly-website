<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Treasury Systems"
        title="Treasury that runs without the spreadsheet"
        description="Group cash position across every bank, currency, and entity. Reconciliation by rule instead of by analyst. Bank connectivity that survives a format change."
        parent-label="Our Expertise"
        parent-href="/about"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Talk to an engineer</NuxtLink>
          <NuxtLink to="/products/atreasury" class="btn-outline text-base px-8 py-4">See Atreasury</NuxtLink>
        </template>
      </PageHero>

      <SpecList
        label="What we build"
        title="The treasury stack, end to end"
        intro="Most treasury teams are not short of data. They are short of one place where the data agrees with itself."
        :items="capabilities"
      />

      <SpecList
        label="The problem"
        title="What this replaces"
        muted
        :items="replaces"
      />

      <EngagementSteps
        title="From fragmented banking data to a live position"
        :steps="steps"
      />

      <CtaBanner
        title="Still closing the position in a spreadsheet?"
        subtitle="Tell us how many banks and entities you run. We will scope the build."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Treasury Systems | Altisly',
  description:
    'Custom treasury systems: unified cash positioning, automated reconciliation, bank connectivity over ISO 20022 and MT940, and liquidity management.',
})

const capabilities = [
  {
    title: 'Unified cash positioning',
    description: 'One consolidated position across banks, currencies, and legal entities, updated as statements land.',
  },
  {
    title: 'Bank connectivity',
    description: 'Direct APIs, ISO 20022, MT940, and SWIFT. Normalised into one internal format so a bank changing its export does not break you.',
  },
  {
    title: 'Automated reconciliation',
    description: 'Ledger matched against bank statements on configurable tolerance bands. Breaks routed, not buried.',
  },
  {
    title: 'Liquidity and sweeps',
    description: 'Cash pooling and sweep rules across entities, with the funding path and its cost shown before execution.',
  },
  {
    title: 'Approval workflows',
    description: 'Maker-checker on every movement, with limits and delegation that mirror your actual mandate.',
  },
  {
    title: 'Audit trail',
    description: 'Immutable record of every position change, approval, and override. Built for examination.',
  },
]

const replaces = [
  {
    title: 'Two-day position close',
    description: 'End-of-day statements in four formats, reconciled by hand in a workbook only one person understands.',
  },
  {
    title: 'Key-man dependency',
    description: 'The treasury process living in someone\'s head and leaving the building when they do.',
  },
  {
    title: 'Idle cash',
    description: 'Balances stranded in the wrong entity or currency because nobody could see them in time to move them.',
  },
  {
    title: 'Audit scramble',
    description: 'Reconstructing decisions from email threads because the system never recorded why.',
  },
]

const steps = [
  { title: 'Bank mapping', desc: 'We inventory every account, format, and feed, then define the normalised internal model.' },
  { title: 'Ledger and rules', desc: 'We build the position engine and translate your reconciliation policy into deterministic rules.' },
  { title: 'Shadow run', desc: 'The system runs beside your current process until the numbers agree, every day, without exception.' },
  { title: 'Cutover', desc: 'You close the position in the system. We document it and hand it to your team.' },
]
</script>
