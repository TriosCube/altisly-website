<template>
  <footer class="relative overflow-hidden bg-[#060809] text-white">
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#15c411] rounded-full opacity-20 blur-3xl -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-[#15c411] rounded-full opacity-10 blur-3xl translate-y-1/2"></div>
    <!-- Newsletter strip -->
    <div class="relative border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 class="text-lg font-bold mb-1">Be the first to get Altisly updates</h3>
            <p class="text-white/90 text-sm">
              Get expert insights, strategy updates, and industry trends — straight to your inbox.
            </p>
          </div>
          <form @submit.prevent="subscribeNewsletter" class="flex gap-2 w-full sm:w-auto">
            <input
              v-model="email"
              type="email"
              placeholder="your@company.com"
              required
              class="flex-1 sm:w-64 px-4 py-2.5 rounded-xl bg-white/10 border border-white/25 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
            />
            <button type="submit" class="btn-primary whitespace-nowrap text-sm">Subscribe</button>
          </form>
        </div>
      </div>
    </div>

    <!-- Main footer -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
        <!-- Brand column -->
        <div class="col-span-2 md:col-span-3 lg:col-span-1">
          <NuxtLink to="/" class="inline-flex items-center mb-5">
            <img src="~/assets/svg/logo_light.svg" alt="Altisly" class="h-10 w-auto" />
          </NuxtLink>
          <p class="text-white/90 text-sm leading-relaxed mb-6">
            A tech-enabled consulting and investment group powering tomorrow's scalable systems.
          </p>
          <div class="flex items-center gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#15c411] flex items-center justify-center transition-colors"
              :aria-label="social.label"
            >
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Nav columns -->
        <div v-for="col in footerNav" :key="col.title">
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">{{ col.title }}</h4>
          <ul class="space-y-2.5">
            <li v-for="link in col.links" :key="link.label">
              <NuxtLink
                :to="link.href"
                class="text-sm text-white/90 hover:text-white transition-colors leading-relaxed"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/10 pt-8">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p class="text-white/90 text-xs">© 2026, Altisly Inc. All rights reserved.</p>
          <div class="flex items-center flex-wrap gap-4">
            <NuxtLink
              v-for="link in legalLinks"
              :key="link.label"
              :to="link.href"
              class="text-xs text-white/90 hover:text-white transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
        <p class="text-white/80 text-xs mt-4 leading-relaxed max-w-3xl">
          Altisly is a multi-sector consulting and venture building group. All logos, trademarks, and brand
          names used on this website that are not owned by Altisly Inc. are the property of their respective owners and
          are used for identification purposes only.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

function subscribeNewsletter() {
  email.value = ''
}

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 5.842zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
]

const footerNav = [
  {
    title: 'Our Expertise',
    links: [
      { label: 'Information Management', href: '/expertise/information-management' },
      { label: 'Fintech & Embedded Finance', href: '/expertise/fintech-embedded-finance' },
      { label: 'Treasury Systems', href: '/expertise/treasury-systems' },
      { label: 'Identity Systems', href: '/expertise/identity-systems' },
      { label: 'Cross-Sector Advisory', href: '/expertise/cross-sector-advisory' },
      { label: 'Venture Building', href: '/expertise/venture-building' },
      { label: 'Systems Architecture', href: '/expertise/systems-architecture' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Atreasury', href: '/products/atreasury' },
      { label: 'Reconciliation Suite', href: '/products/reconciliation-suite' },
      { label: 'Compliance Suite', href: '/products/compliance-suite' },
      { label: 'Merchant Suite', href: '/products/merchant-suite' },
      { label: 'Liquidity Forecasting Suite', href: '/products/liquidity-forecasting' },
      { label: 'Settlement System Suite', href: '/products/settlement-system' },
      { label: 'Altis AI', href: '/products/altis-ai' },
      { label: 'Altis Health', href: '/products/altis-health' },
      { label: 'Altis Learn', href: '/products/altis-learn' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Financial Services', href: '/industries/financial-services' },
      { label: 'Banking', href: '/industries/banking' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Agriculture', href: '/industries/agriculture' },
      { label: 'E-commerce & Retail', href: '/industries/ecommerce' },
      { label: 'Government Tech', href: '/industries/government-tech' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Insights & Blog', href: '/blog' },
      { label: 'Partnerships', href: '/partnerships' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Book a Consultation', href: '/contact' },
      { label: 'Join the Network', href: '/about' },
    ],
  },
]

const legalLinks = [
  { label: 'Terms of Service', href: '/legal/terms' },
  { label: 'Privacy Policy', href: '/legal/privacy' },
  { label: 'Legal Notice', href: '/legal/notice' },
]
</script>
