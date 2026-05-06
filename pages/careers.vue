<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Careers"
        title="Build high-performance systems with us"
        description="We are a team of systems architects, data strategists, and venture builders. We build the infrastructure that powers tomorrow's enterprises."
        parent-label="Company"
        parent-href="/about"
      />

      <!-- Why work here -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Life at Altisly</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">The Consulting & Venture Advantage</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="perk in perks" :key="perk.title" class="card p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="text-3xl mb-3">{{ perk.emoji }}</div>
              <h3 class="font-bold text-navy-900 mb-2">{{ perk.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ perk.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Open roles -->
      <section class="py-20 bg-[#ebfaeb] border-y border-[#52e147]/20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Open roles</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Join the network</h2>
          </div>
          <div class="space-y-4">
            <div
              v-for="role in openRoles"
              :key="role.title"
              class="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#15c411] hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
            >
              <div>
                <div class="flex items-center gap-3 mb-1">
                  <h3 class="font-bold text-navy-900">{{ role.title }}</h3>
                  <span class="text-[10px] bg-[#ebfaeb] text-[#15c411] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">{{ role.department }}</span>
                </div>
                <div class="flex items-center gap-4 text-sm text-gray-500">
                  <span>{{ role.location }}</span>
                  <span>·</span>
                  <span>{{ role.type }}</span>
                </div>
              </div>
              <svg
                class="w-5 h-5 text-gray-400 group-hover:text-[#15c411] group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <div class="text-center mt-10">
            <p class="text-gray-600 mb-4">Don't see a role that fits? We are always looking for elite systems thinkers.</p>
            <NuxtLink to="/contact" class="btn-primary">Send us your portfolio</NuxtLink>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Careers | Altisly',
  description: 'Join Altisly. We are hiring systems architects, data strategists, and venture builders.',
})

const perks = [
  { emoji: '🌍', title: 'Global Execution', description: 'Work on cross-sector projects that span Africa and the globe.' },
  { emoji: '🧠', title: 'Elite Network', description: 'Surround yourself with top-tier founders, consultants, and engineers.' },
  { emoji: '📈', title: 'Venture Upside', description: 'We build ventures. You get to share in the upside of the products we launch.' },
  { emoji: '🏛️', title: 'Strategic Autonomy', description: 'We hire systems thinkers and give them the autonomy to architect solutions.' },
  { emoji: '🚀', title: 'High Impact', description: 'Directly shape the infrastructure that powers finance, health, and enterprise systems.' },
  { emoji: '📚', title: 'Continuous Learning', description: 'Deep technical and strategic mentorship from industry leaders.' },
]

const openRoles = [
  { title: 'Systems Architect', department: 'Engineering', location: 'Remote / Hybrid', type: 'Full-time' },
  { title: 'Data Strategy Consultant', department: 'Advisory', location: 'Remote', type: 'Full-time' },
  { title: 'Technical Product Manager', department: 'Product', location: 'Remote', type: 'Full-time' },
  { title: 'Venture Analyst', department: 'Strategy', location: 'Hybrid', type: 'Full-time' },
  { title: 'Treasury Systems Engineer', department: 'Fintech', location: 'Remote', type: 'Full-time' },
]
</script>
