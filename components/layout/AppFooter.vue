<template>
  <footer class="pt-14 pb-9 border-t border-base">
    <div class="container-isura">
      <div class="grid grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8">
        <div class="col-span-2 lg:col-span-1">
          <IcLogo to="/" />
          <p class="text-muted text-sm max-w-70 mt-4">
            We build the systems businesses run on. Operations software, built from Lagos.
          </p>
          <div class="flex flex-wrap gap-x-4 gap-y-1.5 mt-5">
            <span
              v-for="place in presence"
              :key="place.name"
              class="text-muted text-[13px] inline-flex items-center gap-1.5"
            >
              <span aria-hidden="true">{{ place.flag }}</span>
              {{ place.name }}
            </span>
          </div>
        </div>

        <div v-for="col in footerLinks" :key="col.heading">
          <h4 class="text-[11px] tracking-widest uppercase text-muted font-semibold mb-3.5">
            {{ col.heading }}
          </h4>
          <NuxtLink
            v-for="link in col.links"
            :key="link.label"
            :to="link.to"
            class="block py-1 text-sm text-body opacity-[0.78] hover:opacity-100 transition-opacity"
            >{{ link.label }}</NuxtLink
          >
        </div>
      </div>

      <div
        class="flex flex-wrap justify-between items-center gap-3 mt-12 pt-6 border-t border-base text-muted text-[13px]"
      >
        <span>© {{ year }} Altisly</span>
        <span>{{ site.email }} · {{ site.location }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IcLogo from '@/components/ui/IcLogo.vue'
import { presence, site } from '@/data/site'

const year = new Date().getFullYear()

const footerLinks = [
  {
    heading: 'Company',
    links: [
      { label: 'Who we are', to: '/about' },
      { label: 'Partnerships', to: '/partnerships' },
      { label: 'Careers', to: '/careers' },
      { label: 'Insights', to: '/blog' },
    ],
  },
  {
    heading: 'Explore',
    links: [
      { label: 'Isura', to: '/isura' },
      { label: 'The work', to: '/work' },
      { label: 'Run a diagnostic', to: '/diagnose' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', to: '/legal/privacy' },
      { label: 'Terms', to: '/legal/terms' },
      { label: 'Legal notice', to: '/legal/notice' },
    ],
  },
]
</script>
