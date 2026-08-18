<template>
  <section class="py-20 md:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="section-label">How we work</p>
        <h2 class="section-title mb-5">System &gt; Person</h2>
        <p class="section-subtitle mx-auto text-center">
          Operations should not depend on who is in the room. We encode how your business runs into systems that outlast the people who built them.
        </p>
      </div>

      <!-- 6 reasons title -->
      <div class="relative overflow-hidden bg-[#060809] rounded-3xl p-10 md:p-14">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#15c411] rounded-full opacity-20 blur-3xl -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-[#15c411] rounded-full opacity-10 blur-3xl translate-y-1/2"></div>
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-bold text-white">
            Four principles we do not bend on
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="reason in reasons"
            :key="reason.title"
            class="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
              :class="reason.iconBg"
            >
              <svg class="w-6 h-6" :class="reason.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="reason.icon" />
              </svg>
            </div>
            <h4 class="text-base font-bold text-white mb-2">{{ reason.title }}</h4>
            <p class="text-sm font-semibold text-[#7cf06e] mb-3">{{ reason.subtitle }}</p>
            <p class="text-sm text-white/90 leading-relaxed">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const reasons = [
  {
    title: 'Architecture before code',
    subtitle: 'Decide, then build',
    description:
      'We settle the data model and the failure modes first. Rewrites are expensive. Design is not.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    iconBg: 'bg-[#15c411]/20',
    iconColor: 'text-[#52e147]',
  },
  {
    title: 'Key-man risk, removed',
    subtitle: 'Knowledge lives in the system',
    description:
      'Process encoded in software, not in the head of the one person who understands it.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
  },
  {
    title: 'Built for audit',
    subtitle: 'Regulated from day one',
    description:
      'Immutable trails, explainable decisions, and controls that hold up under examination.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    iconBg: 'bg-yellow-500/20',
    iconColor: 'text-yellow-400',
  },
  {
    title: 'Handover is the goal',
    subtitle: 'We plan to leave',
    description:
      'Documented systems your own team can run. No permanent dependency on us.',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-400',
  },
]
</script>
