<template>
  <section class="relative overflow-hidden bg-[#060809] pt-36 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center">
    <!-- Background grid pattern -->
    <div class="absolute inset-0 opacity-10">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <!-- Gradient orbs -->
    <div
      class="absolute top-0 left-1/4 w-96 h-96 bg-[#15c411] rounded-full opacity-20 blur-3xl -translate-y-1/2"
    ></div>
    <div
      class="absolute bottom-0 right-1/4 w-80 h-80 bg-[#15c411] rounded-full opacity-10 blur-3xl translate-y-1/2"
    ></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <!-- Text Content -->
        <div class="flex-1 text-center lg:text-left">
          <!-- Insights pill -->
          <div class="inline-flex items-center gap-2 mb-8">
            <NuxtLink
              to="/blog"
              class="flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors group"
            >
              <span class="px-2 py-0.5 bg-white/15 border border-white/20 rounded text-xs font-bold text-white tracking-wide">
                Insights
              </span>
              How we think about system design
              <svg class="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
            We build core systems<br />
            for regulated industries
          </h1>

          <p class="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Treasury, payments, identity, and health infrastructure. Architected to survive the scale you are building for.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-7 py-4 bg-[#15c411] hover:bg-[#13ad0f] text-white font-semibold rounded-xl transition-colors text-base shadow-lg shadow-[#15c411]/30"
            >
              Talk to an engineer
            </NuxtLink>
            <NuxtLink
              to="/products/atreasury"
              class="inline-flex items-center justify-center px-7 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-xl transition-colors text-base backdrop-blur-sm"
            >
              See what we build
            </NuxtLink>
          </div>

          <div class="flex items-center gap-4 justify-center lg:justify-start">
            <div class="flex items-center gap-1.5">
              <span
                v-for="country in countries"
                :key="country.code"
                :title="country.name"
                class="text-[28px] leading-none cursor-default hover:scale-110 transition-transform"
              >{{ country.flag }}</span>
            </div>
            <span class="text-white text-sm font-medium">From Africa to the World</span>
          </div>
        </div>

        <!-- Hero Visual: architecture diagram -->
        <div class="flex-1 w-full max-w-lg lg:max-w-none">
          <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-2xl">
            <div class="flex items-center justify-between mb-6">
              <p class="text-gray-500 text-xs font-semibold uppercase tracking-wider">Reference architecture</p>
              <div class="w-8 h-8 rounded-lg bg-[#ebfaeb] border border-[#c9efc4] flex items-center justify-center">
                <svg class="w-4 h-4 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>

            <div class="space-y-2">
              <div
                v-for="(layer, i) in layers"
                :key="layer.name"
                class="relative"
              >
                <div
                  class="rounded-xl border px-4 py-3"
                  :class="layer.accent
                    ? 'border-[#c9efc4] bg-[#ebfaeb]'
                    : 'border-gray-200 bg-gray-50'"
                >
                  <p
                    class="text-[11px] font-semibold uppercase tracking-wider mb-2"
                    :class="layer.accent ? 'text-[#15c411]' : 'text-gray-500'"
                  >{{ layer.name }}</p>
                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="node in layer.nodes"
                      :key="node"
                      class="px-2 py-1 rounded-md text-xs font-medium bg-white border"
                      :class="layer.accent
                        ? 'border-[#c9efc4] text-[#0f360e]'
                        : 'border-gray-200 text-gray-700'"
                    >{{ node }}</span>
                  </div>
                </div>

                <!-- Connector between layers -->
                <div
                  v-if="i < layers.length - 1"
                  class="flex justify-center py-0.5"
                  aria-hidden="true"
                >
                  <svg class="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7" />
                  </svg>
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
const countries = [
  { code: 'ng', name: 'Nigeria', flag: '🇳🇬' },
  { code: 'gb', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'us', name: 'United States', flag: '🇺🇸' },
  { code: 'ke', name: 'Kenya', flag: '🇰🇪' },
]

const layers = [
  { name: 'Interfaces', nodes: ['Dashboard', 'REST API', 'Webhooks'], accent: false },
  { name: 'Core services', nodes: ['Ledger', 'Cash positioning', 'Settlement', 'Reconciliation'], accent: true },
  { name: 'Connectivity', nodes: ['Bank APIs', 'ISO 20022', 'MT940', 'Card schemes'], accent: false },
  { name: 'Data', nodes: ['Event store', 'Warehouse', 'Audit trail'], accent: false },
]
</script>
