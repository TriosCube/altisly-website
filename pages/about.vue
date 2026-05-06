<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="About Altisly"
        title="Building scalable systems for tomorrow's enterprises"
        description="We are a tech-enabled consulting and venture building firm operating across Africa and globally. We unify strategy, engineering, and data."
        parent-label="Company"
        parent-href="/company"
      />

      <!-- Mission -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Our mission</p>
              <h2 class="section-title mb-5 text-3xl font-bold text-navy-900">System &gt; Person</h2>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                We believe that organizations scale when they institutionalize knowledge. Too many companies rely on "key-person dependencies"—when an expert leaves, the operational intelligence walks out the door with them.
              </p>
              <p class="text-gray-600 leading-relaxed mb-6">
                Altisly was founded to build infrastructure that eliminates this risk. We provide the systems architecture, data intelligence, and automated resilience that businesses need to operate with 0% failure—even in transition.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div v-for="value in values" :key="value.title" class="card p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#15c411] hover:shadow-lg transition-all duration-300">
                <div class="text-2xl mb-3">{{ value.emoji }}</div>
                <h3 class="font-bold text-navy-900 mb-1.5 text-sm">{{ value.title }}</h3>
                <p class="text-xs text-gray-600 leading-relaxed">{{ value.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats -->
      <section class="py-16 bg-[#ebfaeb] border-y border-[#52e147]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div v-for="stat in stats" :key="stat.value">
              <p class="text-4xl md:text-5xl font-bold text-navy-900 mb-2">{{ stat.value }}</p>
              <p class="text-gray-600 text-sm font-medium">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Strategy & Approach -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">The Altisly Approach</p>
            <h2 class="text-3xl font-bold text-navy-900 mb-4">Execution meets Strategic Advisory</h2>
            <p class="text-gray-600 leading-relaxed">
              We don't just write code. We diagnose business bottlenecks, map out data flows, and architect solutions that align with executive strategy. We operate as technical co-founders and systems builders.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div class="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
               <div class="w-12 h-12 rounded-xl bg-[#ebfaeb] text-[#15c411] flex items-center justify-center mb-6">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
               </div>
               <h3 class="text-xl font-bold text-navy-900 mb-3">Information Management</h3>
               <p class="text-sm text-gray-600 leading-relaxed">Transforming raw data into actionable intelligence. We build the single source of truth for your organization.</p>
             </div>
             <div class="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
               <div class="w-12 h-12 rounded-xl bg-[#ebfaeb] text-[#15c411] flex items-center justify-center mb-6">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
               </div>
               <h3 class="text-xl font-bold text-navy-900 mb-3">Venture Building</h3>
               <p class="text-sm text-gray-600 leading-relaxed">Partnering with visionary founders to architect, build, and scale products from 0 to 1 and beyond.</p>
             </div>
             <div class="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
               <div class="w-12 h-12 rounded-xl bg-[#ebfaeb] text-[#15c411] flex items-center justify-center mb-6">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               </div>
               <h3 class="text-xl font-bold text-navy-900 mb-3">Cross-Sector Innovation</h3>
               <p class="text-sm text-gray-600 leading-relaxed">Applying high-performance systems engineering across Fintech, Health, Agriculture, and GovTech.</p>
             </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Partner with Altisly"
        subtitle="Let's build scalable systems and resilient infrastructure for your organization."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About Us | Altisly',
  description: 'Learn about Altisly — a tech-enabled consulting and venture building firm building scalable systems across finance, health, and enterprise.',
})

const values = [
  { emoji: '🏛️', title: 'System Resilience', description: 'We build processes that outlive individuals. Zero operational disruption.' },
  { emoji: '🌍', title: 'Global Standard', description: 'Operating across Africa to the world with elite, world-class execution.' },
  { emoji: '📊', title: 'Data-Driven', description: 'If it cannot be measured, mapped, or tracked, it cannot be optimized.' },
  { emoji: '🤝', title: 'Strategic Partnership', description: 'We act as technical co-founders, not just outsourced developers.' },
]

const stats = [
  { value: '10+', label: 'Years of deep tech execution' },
  { value: '$12M+', label: 'Capital managed via our systems' },
  { value: '0%', label: 'Tolerance for system failure' },
  { value: '5+', label: 'Industries transformed' },
]
</script>
