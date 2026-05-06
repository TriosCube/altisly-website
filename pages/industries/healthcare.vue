<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Healthcare"
        title="Systems for Modern Healthcare"
        description="We build secure, compliant data architectures and operational systems for healthcare providers, ensuring zero data loss and strict regulatory adherence."
        parent-label="Industries"
        parent-href="/industries"
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

      <!-- Benefits -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Capabilities</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Beyond the storefront</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              We don't build simple Shopify themes. We architect the complex backend systems that power global retail operations, from multi-warehouse inventory ledgers to high-frequency payment switches.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="benefit in benefits" :key="benefit.title" class="card p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-[#ebfaeb]">
                <svg class="w-5 h-5 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="benefit.icon" />
                </svg>
              </div>
              <h3 class="text-base font-bold text-navy-900 mb-2">{{ benefit.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to scale your retail operations?"
        subtitle="Partner with systems architects to build infrastructure that won't break on Black Friday."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Healthcare | Altisly',
  description: 'We build secure, compliant data architectures and operational systems for healthcare providers, ensuring zero data loss and strict regulatory adherence.',
})

const stats = [
  { value: 'HIPAA', label: 'Compliant Systems' },
  { value: 'Real-time', label: 'Patient Data Sync' },
  { value: 'Secure', label: 'Identity Access' },
  { value: 'Automated', label: 'Claims Processing' },
]

const benefits = [
  {
    title: 'Unified Health Records',
    description: 'Architecting distributed ledgers that securely track patient data across multiple providers in real time.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Claims Automation',
    description: 'Stop processing claims manually. We build pipelines that automatically match claims to settlements.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Identity & Access',
    description: 'Secure sensitive health data with enterprise-grade identity systems and privacy-compliant architecture.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
]
</script>
