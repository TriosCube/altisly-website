<template>
  <header class="diagnose-header">
    <NuxtLink to="/" class="diagnose-brand" aria-label="Back to site">
      <i aria-hidden="true"></i>
      <b>Back to site</b>
    </NuxtLink>

    <div class="diagnose-right">
      <nav v-if="!trail" aria-label="Diagnose context">
        <NuxtLink to="/about">The studio</NuxtLink>
        <NuxtLink to="/work">The systems</NuxtLink>
      </nav>
      <span v-else class="diagnose-trail">{{ trail }}</span>

      <button
        type="button"
        class="diagnose-theme"
        :aria-label="`Theme: ${themeMode}, click to change`"
        :title="`Theme: ${themeMode}`"
        @click="onToggleTheme"
      >
        <svg
          v-if="themeMode === 'light'"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
          />
        </svg>
        <svg
          v-else-if="themeMode === 'dark'"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
        <svg
          v-else
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { cycleTheme, getThemeMode, initTheme } from '@/utils/helpers'
import type { ThemeMode } from '@/utils/types'

defineProps<{ trail?: string }>()

const themeMode = ref<ThemeMode>('system')

onMounted(() => {
  initTheme()
  themeMode.value = getThemeMode()
})

function onToggleTheme() {
  themeMode.value = cycleTheme()
}
</script>

<style scoped>
.diagnose-header {
  --scan-ink: var(--text);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 20;
  display: flex;
  min-height: 4.5rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(1.2rem, 4vw, 3.2rem);
}

.diagnose-brand,
.diagnose-header nav,
.diagnose-trail {
  font-family: var(--font-mono);
  font-size: clamp(0.52rem, 0.7vw, 0.66rem);
  letter-spacing: 0.18rem;
  text-transform: uppercase;
}

.diagnose-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  color: color-mix(in srgb, var(--scan-ink) 44%, transparent);
  transition: color 200ms ease;
}

.diagnose-brand i {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: var(--brand);
}

.diagnose-header nav {
  display: inline-flex;
  gap: clamp(1rem, 2.4vw, 2.2rem);
}

.diagnose-header nav a {
  color: color-mix(in srgb, var(--scan-ink) 32%, transparent);
  transition: color 200ms ease;
}

.diagnose-trail {
  color: color-mix(in srgb, var(--scan-ink) 32%, transparent);
}

.diagnose-right {
  display: inline-flex;
  align-items: center;
  gap: clamp(1rem, 2.4vw, 2rem);
}

.diagnose-theme {
  display: grid;
  width: 2rem;
  height: 2rem;
  place-items: center;
  border-radius: 9999px;
  color: color-mix(in srgb, var(--scan-ink) 44%, transparent);
  transition:
    background 180ms ease,
    color 180ms ease;
}

.diagnose-theme svg {
  width: 0.95rem;
  height: 0.95rem;
}

.diagnose-theme:hover {
  background: color-mix(in srgb, var(--scan-ink) 8%, transparent);
  color: color-mix(in srgb, var(--scan-ink) 86%, transparent);
}

.diagnose-brand:hover,
.diagnose-header nav a:hover {
  color: color-mix(in srgb, var(--scan-ink) 86%, transparent);
}
</style>
