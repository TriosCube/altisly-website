<template>
  <div class="sticky top-3.5 z-50 px-4">
    <nav
      class="max-w-7xl mx-auto bg-[#ffffff6c] flex items-center justify-between gap-6 px-5.5 py-2.5 pr-3.5 bg-surface/92 backdrop-saturate-160 backdrop-blur-[14px] rounded-pill shadow-nav"
    >
      
      <IcLogo to="/" />

      <div class="hidden md:flex items-center gap-0.5">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="px-3.5 py-2 rounded-pill text-sm text-body opacity-[0.78] hover:opacity-100 hover:bg-surface-2 transition-all"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <div class="flex items-center gap-2">
        <button
          class="theme-toggle hover:bg-surface-2"
          :aria-label="`Theme: ${themeMode}, click to change`"
          :title="`Theme: ${themeMode}`"
          @click="onToggleTheme"
        >
          
          <svg
            v-if="themeMode === 'light'"
            class="w-4.25 h-4.25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            />
          </svg>
          
          <svg
            v-else-if="themeMode === 'dark'"
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
          
          <svg
            v-else
            class="w-4.25 h-4.25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        </button>
        <AppButton variant="ghost" size="sm" to="/diagnose">Diagnose</AppButton>
        <AppButton variant="lime" size="sm" to="/contact">Talk to us</AppButton>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import IcLogo from '@/components/ui/IcLogo.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { cycleTheme, getThemeMode, initTheme } from '@/utils/helpers'
import type { ThemeMode } from '@/utils/types'

const themeMode = ref<ThemeMode>('system')

onMounted(() => {
  initTheme()
  themeMode.value = getThemeMode()
})

function onToggleTheme() {
  themeMode.value = cycleTheme()
}

const navLinks = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Partnerships', to: '/partnerships' },
  { label: 'Careers', to: '/careers' },
  { label: 'Insights', to: '/blog' },
]
</script>
