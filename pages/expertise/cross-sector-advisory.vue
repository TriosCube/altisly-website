<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Cross-Sector Advisory"
        title="Strategic architecture for complex industries"
        description="We bring elite systems engineering to Health, Agriculture, and Government Tech. Optimize your data flows, streamline operations, and modernize legacy infrastructure."
        parent-label="Our Expertise"
        parent-href="/about"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Talk to an advisor</NuxtLink>
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

      <!-- Use cases grid -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Industries</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Systemic transformation across sectors</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Our core competency is mapping complex domains into robust technical architectures. We don't just consult; we build the systems that drive operational efficiency.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="item in useCases" :key="item.title" class="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="text-3xl flex-shrink-0 bg-[#ebfaeb] w-12 h-12 flex items-center justify-center rounded-xl">{{ item.emoji }}</div>
              <div>
                <h3 class="font-bold text-navy-900 mb-2">{{ item.title }}</h3>
                <p class="text-sm text-gray-600 leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Modernize your industry operations"
        subtitle="Partner with systems thinkers to architect the future of your sector."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Cross-Sector Advisory | Altisly',
  description: 'Strategic architecture for complex industries including Health, Agriculture, and GovTech. Optimize data flows and modernize legacy infrastructure.',
})

const stats = [
  { value: 'Health', label: 'Patient Data Systems' },
  { value: 'Agri', label: 'Supply Chain Ledgers' },
  { value: 'Gov', label: 'Public Sector Identity' },
  { value: 'Logistics', label: 'Fleet & Operations' },
]

const useCases = [
  {
    emoji: '🏥',
    title: 'Healthcare & Patient Records',
    description: 'We design secure, HIPAA/NDPR-compliant patient management systems, enabling real-time data sharing across clinics while maintaining strict access controls.',
  },
  {
    emoji: '🌾',
    title: 'Agricultural Supply Chains',
    description: 'Architect transparent supply chain ledgers that track produce from farm to table, enabling automated financing and yield predictions for agribusinesses.',
  },
  {
    emoji: '🏛️',
    title: 'Government & Public Sector',
    description: 'Modernize legacy public sector infrastructure. We build scalable citizen identity systems, automated tax collection pipelines, and secure public portals.',
  },
  {
    emoji: '🚚',
    title: 'Logistics & Fleet Management',
    description: 'Design real-time tracking systems and automated dispatch algorithms that optimize routing and reduce operational overhead for large fleets.',
  },
]
</script>
