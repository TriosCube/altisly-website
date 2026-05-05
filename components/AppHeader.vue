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
    <div
      v-if="darkHeader"
      class="pointer-events-none absolute inset-0"
    >
      <div class="absolute -top-16 left-1/4 w-72 h-72 bg-[#15c411] rounded-full opacity-15 blur-3xl"></div>
      <div class="absolute -bottom-20 right-1/4 w-64 h-64 bg-[#15c411] rounded-full opacity-10 blur-3xl"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[70]">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center flex-shrink-0">
          <img
            src="~/assets/svg/logo_light.svg"
            alt="Altisry"
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
                <!-- Mega menu (Products) -->
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

                <!-- Simple dropdown -->
                <div
                  v-else-if="item.children"
                  class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                  <div class="grid grid-cols-12 gap-8 items-stretch min-h-[260px]">
                    <div class="col-span-8">
                      <div class="border-b border-gray-100 pt-2 pb-4 mb-4">
                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">{{ item.label }}</p>
                      </div>
                      <NuxtLink
                        v-for="child in item.children"
                        :key="child.label"
                        :to="child.href"
                        class="block w-full px-5 py-3 text-sm font-semibold text-navy-900 hover:text-[#15c411] hover:bg-[#ebfaeb] rounded-xl transition-colors"
                        @click="openMenu = null"
                      >
                        {{ child.label }}
                      </NuxtLink>
                    </div>
                    <div class="col-span-4 flex items-center">
                      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                        <p class="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                          Discover Altisry
                        </p>
                        <h4 class="text-base font-bold text-navy-900 leading-tight mb-2">
                          See how Altisry makes open banking simple
                        </h4>
                        <p class="text-xs text-gray-600 leading-relaxed mb-3">
                          Explore real customer outcomes and how teams launch faster with our platform.
                        </p>
                        <NuxtLink
                          to="/company/success-stories"
                          class="inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-[#15c411] text-white text-xs font-semibold hover:bg-[#13ad0f] transition-colors"
                          @click="openMenu = null"
                        >
                          Read success stories
                        </NuxtLink>
                      </div>
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
            Contact us
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
              <template v-else-if="item.children">
                <NuxtLink v-for="child in item.children" :key="child.label" :to="child.href"
                  class="block px-4 py-2 text-sm text-gray-600 hover:text-[#15c411] hover:bg-[#ebfaeb] rounded-xl transition-colors"
                  @click="mobileOpen = false">
                  {{ child.label }}
                </NuxtLink>
              </template>
            </div>
          </div>
          <div class="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <NuxtLink to="/contact" class="btn-primary w-full text-center text-sm" @click="mobileOpen = false">Contact us</NuxtLink>
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
    label: 'Products',
    megaMenu: [
      {
        category: 'Data',
        items: [
          { label: 'Data Aggregation', desc: 'Connect to over 5,000 banks', href: '/products/data-aggregation', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
          { label: 'Data Enrichment', desc: 'Transform raw data into insights', href: '/products/data-enrichment', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
          { label: 'Merchant Identification', desc: 'Know every merchant', href: '/products/data-enrichment', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1' },
          { label: 'Financial Insights', desc: "Get a 360° view of customers' finances", href: '/products/data-aggregation', icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
        ],
      },
      {
        category: 'Open Finance',
        items: [
          { label: 'Open Banking Compliance', desc: 'Become compliant in 1 month', href: '/products/compliance', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
          { label: 'TPP Verification', desc: 'Check the status of any TPP', href: '/products/compliance', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-6 9l2 2 4-4' },
          { label: 'Mobile SCA', desc: 'Create a stronger level of security', href: '/products/mobile-sca', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
        ],
      },
      {
        category: 'Payments',
        items: [
          { label: 'Pay by Bank', desc: 'Pay with any bank from Europe & UK', href: '/products/pay-by-bank', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
          { label: 'Bulk Payments', desc: 'Pay multiple recipients at once', href: '/products/bulk-payments', badge: 'New', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
          { label: 'AML Monitoring', desc: 'Identify and act on suspicious activity', href: '/products/aml', badge: 'New', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
        ],
      },
    ],
  },
  {
    label: 'Use Cases',
    children: [
      { label: 'Lending', href: '/use-cases/lending' },
      { label: 'Banking', href: '/use-cases/banking' },
      { label: 'E-commerce & Payments', href: '/use-cases/ecommerce' },
      { label: 'Treasury Management', href: '/use-cases/treasury' },
      { label: 'Automotive', href: '/use-cases/automotive' },
    ],
  },
  {
    label: 'Company',
    children: [
      { label: 'About Us', href: '/company/about' },
      { label: 'Success Stories', href: '/company/success-stories' },
      { label: 'Blog', href: '/blog' },
      { label: 'Partnerships', href: '/company/partnerships' },
      { label: 'Careers', href: '/company/careers' },
      { label: 'Security', href: '/company/security' },
      { label: 'Service Status', href: '/status' },
    ],
  },
  {
    label: 'Developers',
    children: [
      { label: 'Documentation', href: '/developers/docs' },
      { label: 'API Reference', href: '/developers/api' },
      { label: 'Sandbox', href: '/developers/sandbox' },
    ],
  },
]
</script>
