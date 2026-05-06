<template>
  <section class="bg-white">
    <!-- Section header -->
    <div class="py-16 md:py-20 text-center">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="section-label">Our Focus Areas</p>
        <h2 class="section-title mb-5">Transforming industries through data</h2>
        <p class="section-subtitle mx-auto text-center">
          See how Altisry's strategic engineering reshapes operations across finance, healthcare, and beyond.
        </p>
      </div>
    </div>

    <!-- Stacking cards -->
    <div class="relative pt-4 md:pt-6" :style="{ paddingBottom: `${useCases.length * 18 + 72}px` }">
      <div
        v-for="(useCase, index) in useCases"
        :key="useCase.id"
        class="sticky pb-4 md:pb-6"
        :style="{
          top: `${72 + index * 18}px`,
          zIndex: index + 1,
        }"
      >
        <!-- Card -->
        <div
          class="relative mx-3 md:mx-6 lg:mx-10 rounded-3xl overflow-hidden shadow-xl"
          :class="useCase.cardClass"
        >
          <div
            v-if="useCase.hasFlare"
            class="absolute top-0 left-1/4 w-96 h-96 bg-[#15c411] rounded-full opacity-20 blur-3xl -translate-y-1/2"
          />
          <div
            v-if="useCase.hasFlare"
            class="absolute bottom-0 right-1/4 w-80 h-80 bg-[#15c411] rounded-full opacity-10 blur-3xl translate-y-1/2"
          />
          <div class="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-8 md:py-10 min-h-[72vh] flex items-center">
            <div
              class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full"
              :class="index % 2 === 1 ? 'lg:flex-row-reverse' : ''"
            >
              <!-- Text side -->
              <div class="flex-1 min-w-0">
                <!-- Tag -->
                <div
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 border"
                  :class="useCase.tagClass"
                >
                  {{ useCase.tag }}
                </div>

                <h3
                  class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                  :class="useCase.titleClass"
                >
                  {{ useCase.title }}
                </h3>

                <p
                  class="font-semibold text-lg mb-4"
                  :class="useCase.subtitleClass"
                >
                  {{ useCase.subtitle }}
                </p>

                <p
                  class="mb-8 leading-relaxed max-w-lg"
                  :class="useCase.descClass"
                >
                  {{ useCase.description }}
                </p>

                <ul class="space-y-3 mb-10">
                  <li
                    v-for="feature in useCase.features"
                    :key="feature"
                    class="flex items-start gap-3 text-sm"
                    :class="useCase.featureClass"
                  >
                    <svg
                      class="w-5 h-5 flex-shrink-0 mt-0.5"
                      :class="useCase.checkClass"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ feature }}
                  </li>
                </ul>

                <NuxtLink
                  :to="useCase.href"
                  class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  :class="useCase.btnClass"
                >
                  Explore solutions
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </NuxtLink>
              </div>

              <!-- Visual side -->
              <div class="flex-1 w-full flex justify-center lg:justify-end">
                <div class="w-full max-w-md">
                  <component :is="useCase.visual" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import InformationMgmtVisual from './visuals/InformationMgmtVisual.vue'
import BankingVisual from './visuals/BankingVisual.vue'
import LendingVisual from './visuals/LendingVisual.vue'
import HealthAgriVisual from './visuals/HealthAgriVisual.vue'
import TreasuryVisual from './visuals/TreasuryVisual.vue'

const useCases = [
  {
    id: 'ims',
    tag: 'Information Management',
    title: 'Information Management',
    subtitle: 'Reinvent how your organization processes data and makes decisions',
    description:
      'We architect systems that capture, manage, and deliver critical information securely. Stop relying on fragmented tools and step into unified data strategy.',
    features: [
      'Big data architecture and analytics',
      'Business Intelligence dashboards',
      'Cross-department data flow optimization',
      'Operational scaling and system integration',
    ],
    href: '/about',
    cardClass: 'bg-[#060809]',
    tagClass: 'bg-white/10 text-white/80 border-white/20',
    titleClass: 'text-white',
    subtitleClass: 'text-[#52e147]',
    descClass: 'text-white',
    featureClass: 'text-white/80',
    checkClass: 'text-[#52e147]',
    btnClass: 'bg-white text-navy-900 hover:bg-[#ebfaeb]',
    hasFlare: true,
    visual: InformationMgmtVisual,
  },
  {
    id: 'fintech',
    tag: 'Fintech & Embedded Finance',
    title: 'Fintech & Embedded Finance',
    subtitle: 'Move beyond traditional banking constraints',
    description:
      'Unlock new revenue streams and reduce costs by embedding powerful financial features directly into your core product offering.',
    features: [
      'Custom loan application systems',
      'Real-time payment reconciliation',
      'Digital wallet architecture',
      'Automated compliance and KYC flows',
    ],
    href: '/about',
    cardClass: 'bg-gradient-to-r from-[#eafbe8] to-[#f8fff7]',
    tagClass: 'bg-[#e4f9e2] text-[#246b24] border-[#c9efc4]',
    titleClass: 'text-[#132013]',
    subtitleClass: 'text-[#132013]',
    descClass: 'text-[#2f3f2f]',
    featureClass: 'text-[#213121]',
    checkClass: 'text-[#15c411]',
    btnClass: 'bg-[#15c411] text-white hover:bg-[#13ad0f]',
    hasFlare: false,
    visual: BankingVisual,
  },
  {
    id: 'treasury',
    tag: 'Treasury Automation',
    title: 'Treasury Automation (Cash Positioning)',
    subtitle: 'A 360-degree view of financials to eliminate operational risk',
    description:
      'Transform your treasury strategy with Cash Positioning and systemic controls that outlive any single employee.',
    features: [
      'Cash Position coverage',
      'Daily liquidity automation and publishing',
      'Cross-bank cash reconciliation',
      'System-driven succession planning',
    ],
    href: '/about',
    cardClass: 'bg-[#060809]',
    tagClass: 'bg-white/10 text-white/80 border-white/20',
    titleClass: 'text-white',
    subtitleClass: 'text-[#52e147]',
    descClass: 'text-white',
    featureClass: 'text-white/80',
    checkClass: 'text-[#52e147]',
    btnClass: 'bg-white text-navy-900 hover:bg-[#ebfaeb]',
    hasFlare: true,
    visual: TreasuryVisual,
  },
  {
    id: 'health-agri',
    tag: 'Health & Agriculture',
    title: 'Health & Agriculture',
    subtitle: 'Scalable systems for essential sectors',
    description:
      'We bring the efficiency and resilience of fintech systems into healthcare and agriculture, optimizing supply chains and record management.',
    features: [
      'Supply chain data optimization',
      'Secure health records management',
      'Predictive analytics for crop and patient data',
      'Operational scaling for rural and urban networks',
    ],
    href: '/about',
    cardClass: 'bg-gradient-to-r from-[#eafbe8] to-[#f8fff7]',
    tagClass: 'bg-[#e4f9e2] text-[#246b24] border-[#c9efc4]',
    titleClass: 'text-[#132013]',
    subtitleClass: 'text-[#132013]',
    descClass: 'text-[#2f3f2f]',
    featureClass: 'text-[#213121]',
    checkClass: 'text-[#15c411]',
    btnClass: 'bg-[#15c411] text-white hover:bg-[#13ad0f]',
    hasFlare: false,
    visual: HealthAgriVisual,
  },
  {
    id: 'venture',
    tag: 'Venture Building',
    title: 'Venture Building',
    subtitle: 'From concept to scalable enterprise',
    description:
      'We partner with ambitious founders to build and scale tech-enabled startups. We provide the technical backbone so you can focus on growth.',
    features: [
      'Technical co-founding and architecture',
      'Product strategy and roadmap execution',
      'Financial modeling and systemic planning',
      'Go-to-market engineering',
    ],
    href: '/about',
    cardClass: 'bg-[#060809]',
    tagClass: 'bg-green-400/20 text-green-300 border-green-400/30',
    titleClass: 'text-white',
    subtitleClass: 'text-green-400',
    descClass: 'text-white',
    featureClass: 'text-white/80',
    checkClass: 'text-green-400',
    btnClass: 'bg-green-500 text-white hover:bg-green-400',
    hasFlare: true,
    visual: LendingVisual,
  },
]
</script>
