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
          <!-- Report pill -->
          <div class="inline-flex items-center gap-2 mb-8">
            <a
              href="#"
              class="flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors group"
            >
              <span class="px-2 py-0.5 bg-white/15 border border-white/20 rounded text-xs font-bold text-white tracking-wide">
                Insights
              </span>
              The Future of Information Management Systems
              <svg class="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Tech-Enabled Consulting &<br />
            Venture Building
          </h1>

          <p class="text-lg md:text-xl text-white mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            We build scalable systems for finance, health, and enterprise. Strategy, engineering, and data unified.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-7 py-4 bg-[#15c411] hover:bg-[#13ad0f] text-white font-semibold rounded-xl transition-colors text-base shadow-lg shadow-[#15c411]/30"
            >
              Partner with us
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="inline-flex items-center justify-center px-7 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-xl transition-colors text-base backdrop-blur-sm"
            >
              Explore our work
            </NuxtLink>
          </div>

          <div class="flex items-center gap-4 justify-center lg:justify-start">
            <div class="flex items-center gap-1.5">
              <span
                v-for="country in countries.slice(0, 4)"
                :key="country.code"
                :title="country.name"
                class="text-[28px] leading-none cursor-default hover:scale-110 transition-transform"
              >{{ country.flag }}</span>
            </div>
            <span class="text-white text-sm font-medium">From Africa to the World</span>
          </div>
        </div>

        <!-- Hero Visual -->
        <div class="flex-1 w-full max-w-lg lg:max-w-none">
          <div class="relative">
            <!-- Dashboard mockup card -->
            <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-2xl">
              <div class="flex items-center justify-between mb-5">
                <div>
                  <p class="text-gray-500 text-xs font-medium uppercase tracking-wider">Capital Managed</p>
                  <p class="text-navy-900 text-3xl font-bold mt-1">$ 12.4M</p>
                </div>
                <div class="w-10 h-10 rounded-xl bg-[#ebfaeb] border border-[#c9efc4] flex items-center justify-center">
                  <svg class="w-5 h-5 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>

              <!-- Mini chart bars -->
              <div class="flex items-end gap-1.5 h-20 mb-5">
                <div
                  v-for="(bar, i) in chartBars"
                  :key="i"
                  :style="{ height: bar + '%' }"
                  class="flex-1 rounded-sm transition-all"
                  :class="i === chartBars.length - 1 ? 'bg-[#15c411]' : 'bg-gray-200'"
                ></div>
              </div>

              <!-- Connected systems -->
              <div class="space-y-3">
                <p class="text-gray-500 text-xs font-medium uppercase tracking-wider">Active Systems</p>
                <div v-for="sys in connectedSystems" :key="sys.name" class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                      :class="sys.color"
                    >{{ sys.abbr }}</div>
                    <div>
                      <p class="text-navy-900 text-sm font-medium">{{ sys.name }}</p>
                      <p class="text-gray-500 text-xs">{{ sys.type }}</p>
                    </div>
                  </div>
                  <p class="text-navy-900 text-sm font-semibold">{{ sys.status }}</p>
                </div>
              </div>
            </div>

            <!-- Floating badges -->
            <div class="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="text-navy-900 text-xs font-bold">System Deployed</p>
                <p class="text-gray-500 text-xs">Zero downtime</p>
              </div>
            </div>

            <div class="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-4 py-3">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-[#ebfaeb] flex items-center justify-center">
                  <svg class="w-4 h-4 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <p class="text-navy-900 text-xs font-bold">Multi-Sector</p>
                  <p class="text-gray-500 text-xs">Global Reach</p>
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

const chartBars = [40, 55, 45, 70, 60, 80, 65, 90, 75, 95, 85, 100]

const connectedSystems = [
  { name: 'Fintech Core', abbr: 'FC', type: 'Embedded Finance', status: 'Operational', color: 'bg-[#15c411] text-white' },
  { name: 'HealthTech Sync', abbr: 'HT', type: 'Data Architecture', status: 'Optimized', color: 'bg-[#34d42f] text-white' },
  { name: 'AgriChain Flow', abbr: 'AC', type: 'Supply Chain', status: 'Scaling', color: 'bg-green-600 text-white' },
]
</script>
