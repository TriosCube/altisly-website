<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      headerOnWhite
        ? 'bg-white border-b border-gray-100 shadow-sm'
        : darkHeader
        ? 'bg-[#060809] border-b border-white/10 shadow-sm'
        : 'bg-transparent',
      hidden && !desktopMenuOpen ? '-translate-y-full' : 'translate-y-0',
    ]"
  >

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[70]">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center flex-shrink-0">
          <img
            src="~/assets/svg/logo_light.svg"
            alt="Altisly"
            class="h-9 md:h-10 w-auto"
          />
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-1" @mouseleave="scheduleClose">
          <div
            v-for="item in navItems"
            :key="item.label"
            class="relative"
            @mouseenter="setOpenMenu(item.label)"
            @mouseleave="scheduleClose"
          >
            <button
              class="flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
              :class="headerOnWhite
                ? 'text-navy-900 hover:text-black hover:bg-gray-100'
                : 'text-white hover:text-white hover:bg-white/10'"
            >
              {{ item.label }}
              <svg
                class="w-3.5 h-3.5 opacity-60 transition-transform duration-200"
                :class="openMenu === item.label ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Active underline -->
            <div
              v-if="openMenu === item.label"
              class="absolute bottom-0 left-4 right-4 h-0.5 bg-[#15c411] rounded-full"
            />

            <!-- Dropdown -->
            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-if="openMenu === item.label"
                class="fixed inset-x-0 top-16 md:top-20 z-[60] bg-white border-b border-gray-100 shadow-2xl pb-5"
                @mouseenter="clearCloseTimer"
                @mouseleave="scheduleClose"
              >
                <div
                  v-if="item.megaMenu"
                  class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                  <div class="border-b border-gray-100 pt-2 pb-4 mb-5">
                    <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">Explore {{ item.label }}</p>
                  </div>
                  <div class="grid grid-cols-3 gap-x-6">
                    <div v-for="col in item.megaMenu" :key="col.category">
                      <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-2">
                        {{ col.category }}
                      </p>
                      <NuxtLink
                        v-for="product in col.items"
                        :key="product.label"
                        :to="product.href"
                        class="flex items-start gap-3 px-2 py-2.5 rounded-xl hover:bg-[#ebfaeb] transition-colors group/item"
                        @click="openMenu = null"
                      >
                        <div class="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center flex-shrink-0 group-hover/item:border-[#52e147] group-hover/item:bg-[#ebfaeb] transition-colors mt-0.5">
                          <svg class="w-[15px] h-[15px] text-gray-500 group-hover/item:text-[#15c411] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="product.icon" />
                          </svg>
                        </div>
                        <div class="min-w-0">
                          <div class="flex items-center gap-1.5 flex-wrap">
                            <p class="text-sm font-semibold text-navy-900 group-hover/item:text-[#15c411] transition-colors leading-tight">
                              {{ product.label }}
                            </p>
                            <span v-if="product.badge" class="text-[9px] font-bold bg-[#ebfaeb] text-[#15c411] px-1.5 py-0.5 rounded-full leading-none uppercase tracking-wide">
                              {{ product.badge }}
                            </span>
                          </div>
                          <p class="text-xs text-gray-400 mt-0.5 leading-tight">{{ product.desc }}</p>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </nav>

        <!-- Right CTAs -->
        <div class="hidden lg:flex items-center gap-3">
          <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 bg-[#15c411] text-white font-semibold rounded-lg hover:bg-[#13ad0f] transition-colors duration-200 text-sm shadow-lg shadow-[#15c411]/25">
            Partner with us
          </NuxtLink>
        </div>

        <!-- Mobile toggle -->
        <button
          class="lg:hidden p-2 rounded-lg transition-colors"
          :class="headerOnWhite ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'"
          @click="mobileOpen = !mobileOpen"
        >
          <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile drawer -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div v-if="mobileOpen" class="lg:hidden bg-white border-t border-gray-100 shadow-xl">
        <div class="max-w-7xl mx-auto px-4 py-4 space-y-1">
          <div v-for="item in navItems" :key="item.label">
            <button
              class="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#15c411] hover:bg-[#ebfaeb] rounded-xl transition-colors"
              @click="toggleMobileSection(item.label)"
            >
              {{ item.label }}
              <svg class="w-4 h-4 text-gray-400 transition-transform" :class="mobileSectionOpen === item.label ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="mobileSectionOpen === item.label" class="ml-4 mb-2 space-y-0.5">
              <template v-if="item.megaMenu">
                <template v-for="col in item.megaMenu" :key="col.category">
                  <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-4 pt-3 pb-1">{{ col.category }}</p>
                  <NuxtLink v-for="p in col.items" :key="p.label" :to="p.href"
                    class="block px-4 py-2 text-sm text-gray-600 hover:text-[#15c411] hover:bg-[#ebfaeb] rounded-xl transition-colors"
                    @click="mobileOpen = false">
                    {{ p.label }}
                  </NuxtLink>
                </template>
              </template>
            </div>
          </div>
          <div class="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <NuxtLink to="/contact" class="btn-primary w-full text-center text-sm" @click="mobileOpen = false">Partner with us</NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'nuxt/app'

const scrolled = ref(false)
const hidden = ref(false)
const openMenu = ref<string | null>(null)
const mobileOpen = ref(false)
const mobileSectionOpen = ref<string | null>(null)
let closeTimer: ReturnType<typeof setTimeout> | null = null

let lastY = 0
const desktopMenuOpen = computed(() => openMenu.value !== null)
const route = useRoute()
const isHomePage = computed(() => route.path === '/')
const forceLightHeader = computed(() => route.path === '/blog' || route.path.startsWith('/blog/'))
const headerOnWhite = computed(() => desktopMenuOpen.value || forceLightHeader.value)
const darkHeader = computed(
  () => !desktopMenuOpen.value && !forceLightHeader.value && (!isHomePage.value || scrolled.value)
)

function clearCloseTimer() {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
}

function scheduleClose() {
  clearCloseTimer()
  closeTimer = setTimeout(() => {
    openMenu.value = null
  }, 160)
}

function setOpenMenu(label: string) {
  clearCloseTimer()
  hidden.value = false
  openMenu.value = label
}

function toggleMobileSection(label: string) {
  mobileSectionOpen.value = mobileSectionOpen.value === label ? null : label
}

onMounted(() => {
  const onScroll = () => {
    const y = window.scrollY
    scrolled.value = y > 20

    // Hide on scroll down, reveal on scroll up
    if (y > lastY && y > 80) {
      hidden.value = true
      openMenu.value = null
    } else {
      hidden.value = false
    }
    lastY = y
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

onUnmounted(() => {
  clearCloseTimer()
})

const navItems = [
  {
    label: 'Our Expertise',
    megaMenu: [
      {
        category: 'Systems & Data',
        items: [
          { label: 'Information Management', desc: 'Transform data into strategy', href: '/expertise/information-management', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
          { label: 'Systems Architecture', desc: 'Design scalable frameworks', href: '/expertise/systems-architecture', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
          { label: 'Identity Systems', desc: 'Secure verification & access flows', href: '/expertise/identity-systems', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
        ],
      },
      {
        category: 'Finance & Embedded',
        items: [
          { label: 'Fintech Infrastructure', desc: 'Scalable loan & wallet systems', href: '/expertise/fintech-embedded-finance', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
          { label: 'Treasury Systems', desc: 'Automate daily liquidity & Cash Positioning', href: '/expertise/treasury-systems', icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
          { label: 'Compliance Automation', desc: 'Automated AML & KYC flows', href: '/expertise/compliance-automation', badge: 'New', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
        ],
      },
      {
        category: 'Strategic Advisory',
        items: [
          { label: 'Venture Building', desc: 'Technical co-founding', href: '/expertise/venture-building', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
          { label: 'Cross-Sector Strategy', desc: 'Health, Agri, and Govtech', href: '/expertise/cross-sector-advisory', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1' },
        ],
      },
    ],
  },
  {
    label: 'Products',
    megaMenu: [
      {
        category: 'Finance & Treasury',
        items: [
          { label: 'Atreasury', desc: 'Centralized treasury management', href: '/products/atreasury', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
          { label: 'Liquidity Forecasting Suite', desc: 'Predict cash flows accurately', href: '/products/liquidity-forecasting', icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z' },
          { label: 'Settlement System Suite', desc: 'Real-time fund settlement', href: '/products/settlement-system', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
        ],
      },
      {
        category: 'Operations & Compliance',
        items: [
          { label: 'Reconciliation Suite', desc: 'Automate financial matching', href: '/products/reconciliation-suite', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
          { label: 'Compliance Suite', desc: 'Automated AML & KYC flows', href: '/products/compliance-suite', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
          { label: 'Merchant Suite', desc: 'Comprehensive payment processing', href: '/products/merchant-suite', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
        ],
      },
      {
        category: 'Intelligence & Sectors',
        items: [
          { label: 'Altis AI', desc: 'Intelligent automation models', href: '/products/altis-ai', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
          { label: 'Altis Health', desc: 'Digital health ecosystems', href: '/products/altis-health', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
          { label: 'Altis Learn', desc: 'Educational systems & tools', href: '/products/altis-learn', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222' },
        ],
      },
    ],
  },
  {
    label: 'Industries',
    megaMenu: [
      {
        category: 'Finance & Commerce',
        items: [
          { label: 'Financial Services', desc: 'Tech for modern finance', href: '/industries/financial-services', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
          { label: 'Banking', desc: 'Core banking solutions', href: '/industries/banking', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
          { label: 'E-commerce & Retail', desc: 'Digital retail ecosystems', href: '/industries/ecommerce', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
        ],
      },
      {
        category: 'Public & Primary',
        items: [
          { label: 'Healthcare', desc: 'Healthtech infrastructure', href: '/industries/healthcare', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
          { label: 'Agriculture', desc: 'Agritech & supply chain', href: '/industries/agriculture', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
          { label: 'Government Tech', desc: 'Public sector digitization', href: '/industries/government-tech', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1' },
        ],
      },
    ],
  },
  {
    label: 'Company',
    megaMenu: [
      {
        category: 'About Altisly',
        items: [
          { label: 'About Us', desc: 'Our mission and vision', href: '/about', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
          { label: 'Insights & Blog', desc: 'Latest news and thinking', href: '/blog', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
        ],
      },
      {
        category: 'Work With Us',
        items: [
          { label: 'Partnerships', desc: 'Collaborate and grow', href: '/partnerships', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
          { label: 'Careers', desc: 'Join our global team', href: '/careers', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        ],
      },
    ],
  },
]
</script>
