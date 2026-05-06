<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Treasury Systems"
        title="Architecting Modern Treasury Infrastructure"
        description="We design and build custom treasury systems that automate Cash Positioning, unify fragmented banking data, and eliminate manual reconciliation."
        parent-label="Our Expertise"
        parent-href="/about"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Book a consultation</NuxtLink>
        </template>
      </PageHero>

      <!-- Stats -->
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

      <!-- Features -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-16 items-start">
            <div class="lg:w-2/5">
              <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Strategic Treasury Engineering</p>
              <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">From Spreadsheets to Automated Systems</h2>
              <p class="text-gray-600 leading-relaxed mb-8">
                We help CFOs and Treasury teams transition from manual Excel-based tracking to fully automated, data-driven treasury systems. By integrating directly with your banking partners, we build the infrastructure you need to manage liquidity and capital at scale.
              </p>
              <NuxtLink to="/contact" class="btn-primary">Partner with us</NuxtLink>
            </div>
            <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div v-for="feature in features" :key="feature.title" class="card p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-[#ebfaeb]">
                  <svg class="w-5 h-5 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                  </svg>
                </div>
                <h3 class="font-bold text-navy-900 mb-1.5 text-sm">{{ feature.title }}</h3>
                <p class="text-xs text-gray-600 leading-relaxed">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Multi-entity section -->
      <section class="py-20 bg-white border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Institutionalized Knowledge</p>
          <h2 class="text-3xl md:text-4xl font-bold text-navy-900 mb-5">System > Person</h2>
          <p class="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            We institutionalize your treasury operations into scalable code. Protect your organization from key-person dependencies and manual human error.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="point in multiEntity" :key="point.title" class="bg-[#ebfaeb] border border-[#52e147]/20 rounded-2xl p-6 text-left">
              <p class="text-3xl font-bold text-[#15c411] mb-2">{{ point.stat }}</p>
              <h3 class="font-bold text-navy-900 mb-2">{{ point.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ point.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to modernize your treasury?"
        subtitle="Let's build a resilient, automated Treasury System for your organization."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app'

useSeoMeta({
  title: 'Treasury Systems | Altisly',
  description: 'We architect custom Treasury Systems to automate Cash Positioning and eliminate manual reconciliation.',
})

const stats = [
  { value: '0%', label: 'Manual Reconciliation' },
  { value: 'Real-Time', label: 'Cash Visibility' },
  { value: 'Automated', label: 'Liquidity Workflows' },
  { value: '1 Truth', label: 'Single Book of Records' },
]

const features = [
  {
    title: 'Unified Cash Positioning',
    description: 'Aggregate balances across all accounts and entities via API for a single, real-time view of your liquidity.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10',
  },
  {
    title: 'Automated Reconciliation',
    description: 'Replace manual matching with deterministic, code-driven reconciliation flows that integrate directly with your ERP.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  },
  {
    title: 'Bank API Integrations',
    description: 'Build secure, direct connections to global and regional banking partners for real-time transaction data.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Enterprise Data Warehousing',
    description: 'Pipe structured financial data directly into your data warehouse (e.g., BigQuery, Snowflake) for advanced analytics.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-6 9l2 2 4-4',
  },
]

const multiEntity = [
  { stat: 'Zero', title: 'Key-Man Risk', desc: 'Standard Operating Procedures (SOPs) and financial logic are baked directly into the system architecture.' },
  { stat: 'Daily', title: 'Real-Time Reporting', desc: 'Automate the manual administrative burden of daily treasury reporting and month-end close.' },
  { stat: '100%', title: 'Strategy Focus', desc: 'Free your finance leaders from spreadsheets so they can focus on high-leverage capital allocation.' },
]
</script>