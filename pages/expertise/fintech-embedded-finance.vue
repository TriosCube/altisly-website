<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Fintech & Embedded Finance"
        title="Scalable loan & wallet systems"
        description="We build high-throughput ledgers, credit-scoring engines, and embedded wallets. Partner with us to launch resilient fintech products from 0 to 1."
        parent-label="Our Expertise"
        parent-href="/about"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Book a consultation</NuxtLink>
        </template>
      </PageHero>

      <section class="py-12 bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="stat in stats" :key="stat.value" class="text-center">
              <p class="text-3xl md:text-4xl font-bold text-[#15c411] mb-1">{{ stat.value }}</p>
              <p class="text-sm text-gray-500 font-medium">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Infrastructure</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Built for high-volume financial operations</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              We do not build wrappers; we architect the core infrastructure. From immutable double-entry ledgers to complex loan origination systems.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="feature in features" :key="feature.title" class="card p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl bg-[#ebfaeb] flex items-center justify-center mb-4">
                <svg class="w-5 h-5 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                </svg>
              </div>
              <h3 class="text-base font-bold text-navy-900 mb-2">{{ feature.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-[#ebfaeb] border-y border-[#52e147]/20">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Execution</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">How we build fintech systems</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div v-for="step in steps" :key="step.title" class="bg-white rounded-2xl border border-[#15c411]/20 p-6 shadow-sm hover:shadow-md transition-all">
              <p class="text-[10px] font-bold uppercase tracking-wider text-[#15c411] mb-2">{{ step.phase }}</p>
              <h3 class="text-lg font-bold text-navy-900 mb-2">{{ step.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to launch your embedded finance product?"
        subtitle="Partner with systems architects who understand the complexities of financial infrastructure."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app'

useSeoMeta({
  title: 'Fintech & Embedded Finance | Altisry',
  description: 'Scalable loan and wallet systems. We build high-throughput ledgers, credit-scoring engines, and embedded wallets.',
})

const stats = [
  { value: 'Scalable', label: 'Core Ledgers' },
  { value: 'Zero', label: 'Data Loss Tolerance' },
  { value: '100%', label: 'Transaction Immutability' },
  { value: 'Global', label: 'Compliance Standards' },
]

const features = [
  {
    title: 'Double-Entry Core Ledgers',
    description: 'We build immutable, high-throughput ledgers that form the single source of truth for all transactions and balances.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    title: 'Loan Origination Systems',
    description: 'Automate the entire lending lifecycle: from real-time credit scoring to underwriting, disbursement, and collections.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Embedded Wallets',
    description: 'Deploy compliant multi-currency wallets within your existing application to retain user liquidity and monetize transactions.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  },
  {
    title: 'Payment Switch Integration',
    description: 'Connect directly to tier-1 payment gateways and rails (SEPA, ACH, NIP) with intelligent routing for minimum failure rates.',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
  },
  {
    title: 'Treasury & Recon',
    description: 'Automated reconciliation pipelines that match system ledgers against bank statements in real-time, eliminating manual ops.',
    icon: 'M9 17v-6m3 6V7m3 10v-4m-7 8h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Identity & Compliance',
    description: 'Automated KYC and AML monitoring built directly into the onboarding and transaction flows to satisfy regulatory demands.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
]

const steps = [
  {
    phase: 'Phase 01',
    title: 'Architecture & Modeling',
    description: 'We map data flows, define ledger schemas, and architect the system to handle scale from day one.',
  },
  {
    phase: 'Phase 02',
    title: 'Core Development',
    description: 'We build the immutable ledger, integrate banking APIs, and automate the compliance and identity pipelines.',
  },
  {
    phase: 'Phase 03',
    title: 'Go-Live & Scaling',
    description: 'We run shadow tests, finalize reconciliation loops, deploy to production, and monitor for zero-tolerance failure.',
  },
]
</script>
