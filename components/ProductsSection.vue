<template>
  <section class="py-20 md:py-28 bg-[#f2fdf1]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        <!-- Left sticky header -->
        <div class="lg:w-2/5 lg:sticky lg:top-24">
          <p class="section-label">Our Expertise</p>
          <h2 class="section-title mb-5">
            Scalable systems across industries
          </h2>
          <p class="section-subtitle mb-8">
            At Altisly, we combine engineering excellence with high-level strategic decision-making. We build information management systems, optimize business processes, and design data architectures for modern enterprises.
          </p>
          <NuxtLink to="/about" class="btn-primary">
            Discover our approach
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Products grid -->
        <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            v-for="product in products"
            :key="product.title"
            class="card group hover:border-[#52e147] hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
              :class="product.iconBg"
            >
              <svg class="w-5 h-5" :class="product.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="product.icon" />
              </svg>
            </div>
            <h3 class="text-base font-bold text-navy-900 mb-2">{{ product.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const products = [
  {
    title: 'Information Management Systems',
    description: 'Transform raw data into actionable strategy. We design architectures, business intelligence dashboards, and optimize processes.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
    iconBg: 'bg-[#ebfaeb]',
    iconColor: 'text-[#15c411]',
  },
  {
    title: 'Fintech & Embedded Finance',
    description: 'Custom financial infrastructure, scalable loan applications, and digital wallets designed for rapid market deployment.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    title: 'Treasury Operating Systems',
    description: 'Automate Cash Positioning, daily liquidity, and cross-bank reconciliation to eliminate key-person dependency.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Cross-Sector Advisory',
    description: 'Strategic consulting spanning health, agriculture, and govtech to ensure your operational frameworks are future-proof.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    iconBg: 'bg-[#ebfaeb]',
    iconColor: 'text-[#15c411]',
  },
  {
    title: 'Venture Building',
    description: 'Partnering to build and scale tech-enabled startups from the ground up, moving from concept to scalable enterprise.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Systems Architecture',
    description: 'Designing robust, scalable data flows that power enterprise decision-making and ensure zero operational disruption.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
]
</script>
