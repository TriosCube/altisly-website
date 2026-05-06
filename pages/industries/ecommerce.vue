<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="E-commerce & Retail"
        title="Infrastructure for high-volume retail"
        description="We build scalable inventory, checkout, and supply chain systems for modern e-commerce platforms. Process millions of transactions with zero downtime."
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
  title: 'E-commerce & Retail | Altisly',
  description: 'Infrastructure for high-volume retail. We build scalable inventory, checkout, and supply chain systems.',
})

const stats = [
  { value: 'Zero', label: 'Downtime Tolerance' },
  { value: 'Real-time', label: 'Inventory Syncing' },
  { value: 'Scalable', label: 'Payment Switches' },
  { value: 'Automated', label: 'Reconciliation' },
]

const benefits = [
  {
    title: 'High-Frequency Checkout',
    description: 'We build headless checkout systems capable of handling massive traffic spikes without dropping a single cart.',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Multi-Warehouse Inventory',
    description: 'Architect distributed ledger systems that track inventory across dozens of warehouses and retail nodes in real time.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  },
  {
    title: 'Payment Orchestration',
    description: 'Connect directly to multiple payment gateways, routing transactions intelligently to maximize authorization rates and lower fees.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  },
  {
    title: 'Supply Chain Data Pipelines',
    description: 'Integrate your disparate suppliers, logistics providers, and ERP systems into a single unified data warehouse.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Automated Reconciliation',
    description: 'Stop reconciling manually. We build pipelines that automatically match order IDs to payment settlements across all ledgers.',
    icon: 'M9 17v-6m3 6V7m3 10v-4m-7 8h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Customer Identity & Access',
    description: 'Secure user data with enterprise-grade identity systems, single sign-on (SSO), and privacy-compliant architecture.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
]
</script>
