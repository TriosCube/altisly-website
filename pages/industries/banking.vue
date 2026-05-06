<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Banking & Financial Services"
        title="Scalable systems for modern banking"
        description="We architect, build, and scale the core infrastructure that powers next-generation financial institutions."
        parent-label="Industries"
        parent-href="/about"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Partner with us</NuxtLink>
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
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Capabilities</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Built for resilience and scale</h2>
            <p class="section-subtitle mx-auto text-center max-w-2xl text-gray-600">
              From core ledger design to compliance automation, Altisly acts as your technical co-founder, building systems that don't fail.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="feature in features" :key="feature.title" class="flex gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#ebfaeb]">
                <svg class="w-5 h-5 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-navy-900 mb-2">{{ feature.title }}</h3>
                <p class="text-sm text-gray-600 leading-relaxed">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Transform your banking infrastructure"
        subtitle="Partner with elite systems architects to build your next financial product."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app'

useSeoMeta({
  title: 'Banking | Altisly',
  description: 'Scalable systems for modern banking. We build core infrastructure, ledgers, and compliance automation.',
})

const stats = [
  { value: 'Zero', label: 'Operational Disruption' },
  { value: 'Automated', label: 'Compliance & AML' },
  { value: 'Scalable', label: 'Core Ledgers' },
  { value: '99.99%', label: 'System Uptime' },
]

const features = [
  {
    title: 'Core Ledger Architecture',
    description: 'We design and build immutable, high-throughput core banking ledgers capable of handling millions of transactions with zero data loss.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    title: 'Compliance & Identity Automation',
    description: 'Automate KYC, AML monitoring, and regulatory reporting. We institutionalize compliance into the code so your team can focus on strategy.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Information Management',
    description: 'Break down data silos. We build the single source of truth for your organization, enabling predictive analytics and real-time business intelligence.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
  },
  {
    title: 'Treasury & Liquidity',
    description: 'Automate Asset Liability Management (ALM) and achieve Cash Positioning across all your entities and banking partners.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  },
]
</script>
