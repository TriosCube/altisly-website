<template>
  <section class="py-20 md:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="section-label">The Altisry Advantage</p>
        <h2 class="section-title mb-5">System &gt; Person</h2>
        <p class="section-subtitle mx-auto text-center">
          We believe in eliminating key-man risks by building intelligent, self-sustaining systems. Our solutions ensure zero operational disruption, empowering your leadership to focus on strategy rather than daily firefighting.
        </p>
      </div>

      <!-- 6 reasons title -->
      <div class="relative overflow-hidden bg-[#060809] rounded-3xl p-10 md:p-14">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#15c411] rounded-full opacity-20 blur-3xl -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-[#15c411] rounded-full opacity-10 blur-3xl translate-y-1/2"></div>
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-bold text-white">
            Six reasons elite businesses choose
            <span class="text-[#52e147]">Altisry</span>
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    title: 'Strategic Execution',
    subtitle: 'From builder to decision-maker',
    description:
      'We don\'t just write code; we decide what should be built and why. We bridge the gap between high-level business strategy and technical execution to build systems that scale.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    iconBg: 'bg-yellow-500/20',
    iconColor: 'text-yellow-400',
  },
  {
    title: 'Global Standard',
    subtitle: 'Premium advisory across borders',
    description:
      'Operating globally, we bring a top-tier consulting mindset to every project, ensuring your systems meet international standards of resilience and efficiency.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    iconBg: 'bg-[#15c411]/20',
    iconColor: 'text-[#52e147]',
  },
  {
    title: 'Multi-Sector Focus',
    subtitle: 'Cross-industry innovation',
    description:
      'From fintech to health and agriculture, we design cross-industry solutions. We take the best optimization strategies from one sector and apply them to yours.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
  },
  {
    title: 'Data-Driven Decisions',
    subtitle: 'Replacing guesswork with hard data',
    description:
      'We implement Information Management Systems that provide real-time insights, enabling your leadership team to make proactive, informed decisions.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-400',
  },
  {
    title: 'Eliminate Key-Man Risk',
    subtitle: 'Institutionalizing your knowledge',
    description:
      'We build institutional knowledge directly into your system, ensuring that operations never walk out the door when an employee transitions or leaves.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    iconBg: 'bg-pink-500/20',
    iconColor: 'text-pink-400',
  },
  {
    title: 'Automated Resilience',
    subtitle: 'Built for zero failure',
    description:
      'Our systems are designed to handle 0% failure rates in critical areas like capital visibility, settlement flows, and Cash Positioning.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    iconBg: 'bg-[#15c411]/20',
    iconColor: 'text-[#52e147]',
  },
]
</script>
