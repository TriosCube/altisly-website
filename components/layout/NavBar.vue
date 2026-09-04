<template>
  <div class="sticky top-3.5 z-50 px-4">
    <div class="max-w-[72rem] mx-auto relative" @mouseleave="closeMenus">
      <nav
        class="flex items-center justify-between gap-5 px-4.5 py-1.5 pr-2.5 bg-surface/88 backdrop-saturate-160 backdrop-blur-[14px] rounded-pill border border-base"
      >
        <IcLogo to="/" />

        <div class="hidden lg:flex items-center gap-0.5">
          <template v-for="menu in menus" :key="menu.key">
            <button
              type="button"
              class="nav-link"
              :class="{ 'is-open': openMenu === menu.key }"
              :aria-expanded="openMenu === menu.key"
              @mouseenter="openMenu = menu.key"
              @click="toggleMenu(menu.key)"
            >
              {{ menu.label }}
              <svg
                class="caret"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.4"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </template>

          <NuxtLink to="/blog" class="nav-link" @mouseenter="closeMenus">Insights</NuxtLink>
          <NuxtLink to="/contact" class="nav-link" @mouseenter="closeMenus">Contact</NuxtLink>
        </div>

        <div class="flex items-center gap-2">
          <div class="hidden sm:block relative">
            <button
              type="button"
              class="nav-link"
              :class="{ 'is-open': openMenu === 'global' }"
              :aria-expanded="openMenu === 'global'"
              @mouseenter="openMenu = 'global'"
              @click="toggleMenu('global')"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
              </svg>
              Global
              <svg
                class="caret"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.4"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <Transition name="drop">
              <div v-show="openMenu === 'global'" class="globe-panel">
                <p class="panel-heading">Where we operate</p>
                <div class="flex flex-col">
                  <span v-for="place in presence" :key="place.name" class="globe-row">
                    <span aria-hidden="true">{{ place.flag }}</span>
                    {{ place.name }}
                    <em v-if="place.note">{{ place.note }}</em>
                  </span>
                </div>
                <NuxtLink to="/contact" class="globe-cta" @click="closeMenus">
                  Talk to the studio
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <button
            class="theme-toggle nav-toggle hidden sm:inline-grid"
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

          <AppButton variant="ghost" size="sm" to="/diagnose" class="hidden sm:inline-flex">
            Diagnose
          </AppButton>
          <AppButton variant="lime" size="sm" to="/contact">Talk to us</AppButton>

          <button
            type="button"
            class="theme-toggle nav-toggle lg:hidden"
            :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="mobileOpen"
            @click="mobileOpen = !mobileOpen"
          >
            <svg
              v-if="!mobileOpen"
              class="w-4.5 h-4.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg
              v-else
              class="w-4.5 h-4.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </nav>

      <Transition name="drop">
        <div v-show="activeMenu" class="mega hidden lg:block">
          <div v-if="activeMenu" class="mega-inner">
            <div class="mega-columns">
              <div v-for="column in activeMenu.columns" :key="column.heading" class="mega-column">
                <p class="panel-heading">{{ column.heading }}</p>
                <NuxtLink
                  v-for="item in column.items"
                  :key="item.to"
                  :to="item.to"
                  class="mega-item"
                  @click="closeMenus"
                >
                  <span class="mega-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9">
                      <path :d="icons[item.icon]" />
                    </svg>
                  </span>
                  <span>
                    <strong>{{ item.label }}</strong>
                    <em>{{ item.desc }}</em>
                  </span>
                </NuxtLink>
              </div>
            </div>

            <NuxtLink :to="activeMenu.feature.to" class="mega-feature" @click="closeMenus">
              <span class="feature-eyebrow">{{ activeMenu.feature.eyebrow }}</span>
              <strong>{{ activeMenu.feature.title }}</strong>
              <p>{{ activeMenu.feature.body }}</p>
              <span class="feature-cta">
                {{ activeMenu.feature.cta }}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </NuxtLink>
          </div>
        </div>
      </Transition>

      <Transition name="drop">
        <div v-show="mobileOpen" class="mobile lg:hidden">
          <div v-for="menu in menus" :key="menu.key" class="mobile-group">
            <p class="panel-heading">{{ menu.label }}</p>
            <template v-for="column in menu.columns" :key="column.heading">
              <NuxtLink
                v-for="item in column.items"
                :key="item.to"
                :to="item.to"
                class="mobile-item"
                @click="mobileOpen = false"
              >
                {{ item.label }}
              </NuxtLink>
            </template>
          </div>

          <div class="mobile-group">
            <p class="panel-heading">More</p>
            <NuxtLink to="/blog" class="mobile-item" @click="mobileOpen = false">Insights</NuxtLink>
            <NuxtLink to="/diagnose" class="mobile-item" @click="mobileOpen = false">
              Run a diagnostic
            </NuxtLink>
            <NuxtLink to="/contact" class="mobile-item" @click="mobileOpen = false">
              Contact
            </NuxtLink>
          </div>

          <div class="mobile-group">
            <p class="panel-heading">Where we operate</p>
            <span v-for="place in presence" :key="place.name" class="globe-row">
              <span aria-hidden="true">{{ place.flag }}</span>
              {{ place.name }}
              <em v-if="place.note">{{ place.note }}</em>
            </span>
          </div>

          <button type="button" class="mobile-item" @click="onToggleTheme">
            Theme: {{ themeMode }}
          </button>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import IcLogo from '@/components/ui/IcLogo.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { cycleTheme, getThemeMode, initTheme } from '@/utils/helpers'
import type { ThemeMode } from '@/utils/types'

const icons: Record<string, string> = {
  layers: 'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  spark: 'M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z',
  shield: 'M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6z',
  people: 'M16 19v-1.5a4 4 0 00-4-4H7a4 4 0 00-4 4V19M9.5 9.5a3 3 0 100-6 3 3 0 000 6zM19 19v-1.5a4 4 0 00-3-3.9',
  handshake: 'M8 12l3 3 2-2 3 3M3 10l4-4 5 2 5-2 4 4-5 6-4-3-4 3z',
  compass: 'M12 21a9 9 0 100-18 9 9 0 000 18zM15.5 8.5l-2 5-5 2 2-5z',
  doc: 'M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5M9 13h6M9 17h4',
}

const menus = [
  {
    key: 'work',
    label: 'Work',
    columns: [
      {
        heading: 'Selected builds',
        items: [
          {
            label: 'Isura',
            to: '/work/isura',
            icon: 'layers',
            desc: 'A multi tenant platform built for structural isolation.',
          },
          {
            label: 'aTreasury',
            to: '/work/atreasury',
            icon: 'compass',
            desc: 'Treasury and risk operations, off the spreadsheet.',
          },
          {
            label: 'altisHMS',
            to: '/work/altishms',
            icon: 'shield',
            desc: 'Hospital management, designed from inside the room.',
          },
        ],
      },
      {
        heading: 'More builds',
        items: [
          {
            label: 'perSona',
            to: '/work/persona',
            icon: 'people',
            desc: 'Identity and verification, with a vertical on top.',
          },
          {
            label: 'Treasury AI Assistant',
            to: '/work/treasury-ai-assistant',
            icon: 'spark',
            desc: 'Reconciliation and forecasting, automated.',
          },
          {
            label: 'All work',
            to: '/work',
            icon: 'grid',
            desc: 'Every build, and the decisions behind it.',
          },
        ],
      },
    ],
    feature: {
      eyebrow: 'Diagnostic',
      title: 'Run the survey on your own operation',
      body: 'Eight questions. The engine finds where the work leaks, then designs the system that answers it.',
      cta: 'Start the diagnostic',
      to: '/diagnose',
    },
  },
  {
    key: 'company',
    label: 'Company',
    columns: [
      {
        heading: 'About Altisly',
        items: [
          {
            label: 'Who we are',
            to: '/about',
            icon: 'compass',
            desc: 'A studio that works inside the operation.',
          },
          {
            label: 'Partnerships',
            to: '/partnerships',
            icon: 'handshake',
            desc: 'Three ways we work alongside a team.',
          },
        ],
      },
      {
        heading: 'Join or read',
        items: [
          {
            label: 'Careers',
            to: '/careers',
            icon: 'people',
            desc: 'Small team, consequential problems.',
          },
          {
            label: 'Insights',
            to: '/blog',
            icon: 'doc',
            desc: 'Notes from the build.',
          },
        ],
      },
    ],
    feature: {
      eyebrow: 'Start here',
      title: 'Have a problem worth solving?',
      body: 'Tell us what is not working. An engineer replies within one business day.',
      cta: 'Talk to us',
      to: '/contact',
    },
  },
]

const presence = [
  { flag: '🇳🇬', name: 'Nigeria', note: 'Lagos' },
  { flag: '🇬🇭', name: 'Ghana' },
  { flag: '🇬🇧', name: 'United Kingdom' },
]

const route = useRoute()
const openMenu = ref('')
const mobileOpen = ref(false)
const themeMode = ref<ThemeMode>('system')

const activeMenu = computed(() => menus.find((menu) => menu.key === openMenu.value))

function toggleMenu(key: string) {
  openMenu.value = openMenu.value === key ? '' : key
}

function closeMenus() {
  openMenu.value = ''
}

function onKeydown(event: KeyboardEvent) {
  if (event.key !== 'Escape') return
  closeMenus()
  mobileOpen.value = false
}

function onToggleTheme() {
  themeMode.value = cycleTheme()
}

watch(
  () => route.fullPath,
  () => {
    closeMenus()
    mobileOpen.value = false
  },
)

onMounted(() => {
  initTheme()
  themeMode.value = getThemeMode()
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.38rem 0.72rem;
  border-radius: 9999px;
  font-size: 13.5px;
  color: var(--text);
  opacity: 0.78;
  transition:
    opacity 160ms ease,
    background 160ms ease;
}

.nav-link:hover,
.nav-link.is-open {
  opacity: 1;
  background: var(--surface-2);
}

.caret {
  opacity: 0.5;
  transition: transform 200ms ease;
}

.nav-link.is-open .caret {
  transform: rotate(180deg);
}

.nav-toggle {
  width: 2rem;
  height: 2rem;
}

.panel-heading {
  margin: 0 0 0.9rem;
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}

.mega {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  margin-top: 0.7rem;
  padding: 0.5rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  background: var(--surface);
  box-shadow: var(--shadow-pop);
}

.mega-inner {
  display: grid;
  grid-template-columns: 1fr 20rem;
  gap: 0.5rem;
}

.mega-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  padding: 1.6rem 1.8rem;
}

.mega-item {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 0.6rem;
  margin: 0 -0.6rem;
  border-radius: var(--radius-md);
  transition: background 160ms ease;
}

.mega-item:hover {
  background: var(--surface-2);
}

.mega-icon {
  display: grid;
  width: 2.1rem;
  height: 2.1rem;
  flex-shrink: 0;
  place-items: center;
  border-radius: 0.55rem;
  background: var(--brand);
  color: var(--on-brand);
}

.mega-icon svg {
  width: 1.05rem;
  height: 1.05rem;
}

.mega-item strong {
  display: block;
  font-size: 14.5px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.mega-item em {
  display: block;
  margin-top: 0.15rem;
  font-size: 12.5px;
  font-style: normal;
  line-height: 1.45;
  color: var(--muted);
}

.mega-feature {
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  border-radius: var(--radius-lg);
  background: var(--invert-bg);
  color: var(--invert-text);
}

.feature-eyebrow {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--brand);
}

.mega-feature strong {
  margin-top: 0.7rem;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.mega-feature p {
  margin: 0.6rem 0 0;
  font-size: 13px;
  line-height: 1.55;
  color: var(--invert-muted);
}

.feature-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1.4rem;
  font-size: 13px;
  font-weight: 600;
  color: var(--brand);
}

.globe-panel {
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 10;
  width: 14rem;
  margin-top: 0.85rem;
  padding: 1.1rem 1.2rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  box-shadow: var(--shadow-pop);
}

.globe-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 0;
  font-size: 14px;
}

.globe-row em {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 10.5px;
  font-style: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.globe-cta {
  display: block;
  margin-top: 0.9rem;
  padding-top: 0.9rem;
  border-top: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  transition: color 160ms ease;
}

.globe-cta:hover {
  color: var(--text);
}

.mobile {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  max-height: calc(100svh - 7rem);
  overflow-y: auto;
  margin-top: 0.7rem;
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  background: var(--surface);
  box-shadow: var(--shadow-pop);
}

.mobile-group {
  padding-bottom: 1.2rem;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid var(--border);
}

.mobile-item {
  display: block;
  width: 100%;
  padding: 0.55rem 0;
  font-size: 16px;
  text-align: left;
}

.drop-enter-active,
.drop-leave-active {
  transition:
    opacity 180ms ease,
    transform 180ms cubic-bezier(0.22, 1, 0.36, 1);
}

.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-0.4rem);
}
</style>
