<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Fintech &amp; Embedded Finance"
        title="Ledgers that hold at volume"
        description="Double-entry cores, embedded wallets, and lending flows. The unglamorous parts that decide whether a fintech survives its first scale event."
        parent-label="Our Expertise"
        parent-href="/about"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Talk to an engineer</NuxtLink>
        </template>
      </PageHero>

      <SpecList
        label="What we build"
        title="Core financial infrastructure"
        intro="A ledger that drifts is not recoverable by reporting. It has to be right at the write path."
        :items="capabilities"
      />

      <EngagementSteps
        title="Zero to production"
        :steps="steps"
      />

      <CtaBanner
        title="Building a financial product?"
        subtitle="Bring us the flow of funds. We will show you the ledger it needs."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Fintech & Embedded Finance | Altisly',
  description:
    'Double-entry core ledgers, embedded multi-currency wallets, loan origination, and payment switch integration over SEPA, ACH, and NIP.',
})

const capabilities = [
  {
    title: 'Double-entry core ledger',
    description: 'Immutable, high-throughput, and the single source of truth for every balance in the system.',
  },
  {
    title: 'Embedded wallets',
    description: 'Multi-currency wallets inside your existing product, with the compliance surface handled.',
  },
  {
    title: 'Loan origination',
    description: 'Scoring, underwriting, disbursement, and collections as one automated lifecycle.',
  },
  {
    title: 'Payment switch integration',
    description: 'Direct connection to SEPA, ACH, and NIP with routing rules that retry intelligently on failure.',
  },
  {
    title: 'Reconciliation',
    description: 'Ledger matched against settlement files continuously, so breaks surface in hours rather than at month end.',
  },
  {
    title: 'Identity and AML hooks',
    description: 'KYC at onboarding and transaction monitoring on the money path, not stapled on afterwards.',
  },
]

const steps = [
  { title: 'Model the flow', desc: 'We map how money actually moves through your product and define the ledger schema against it.' },
  { title: 'Build the core', desc: 'Ledger, bank and scheme integrations, and the compliance pipeline.' },
  { title: 'Shadow and settle', desc: 'We run reconciliation against live volume until the books tie out cleanly.' },
  { title: 'Scale and hand over', desc: 'Load testing, runbooks, and documentation your engineers can operate from.' },
]
</script>
