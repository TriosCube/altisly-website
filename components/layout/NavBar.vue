<template>
  <div
    ref="shellRef"
    class="sticky top-3.5 z-50 px-4 nav-shell"
    :class="{ 'is-tucked': tucked, 'is-on-dark': onDark, 'is-scrolled': scrolled }"
  >
    <div
      class="max-w-[72rem] mx-auto relative"
      @mouseenter="onShellEnter"
      @mouseleave="onShellLeave"
    >
      <nav
        ref="barRef"
        class="nav-bar flex items-center justify-between gap-5 px-4.5 py-1.5 pr-2.5 backdrop-saturate-160 backdrop-blur-[14px] rounded-pill border"
      >
        <IcLogo to="/" :tone="onDark ? 'on-dark' : 'auto'" />

        <div class="hidden lg:flex items-center gap-0.5">
          <template v-for="menu in menus" :key="menu.key">
            <button
              type="button"
              class="nav-link"
              :class="{ 'is-open': openMenu === menu.key }"
              :aria-expanded="openMenu === menu.key"
              @mouseenter="openNow(menu.key)"
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
          <a href="https://isura.altisly.com" class="nav-link" @mouseenter="closeMenus"> Treasury </a>
          <span class="nav-link opacity-40 cursor-not-allowed select-none" aria-disabled="true" title="Coming soon">
            Healthly
          </span>
        </div>

        <div class="flex items-center gap-2">
          <div class="hidden sm:block relative">
            <button
              type="button"
              class="nav-link"
              :class="{ 'is-open': openMenu === 'global' }"
              :aria-expanded="openMenu === 'global'"
              @mouseenter="openNow('global')"
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
                  <strong>{{ item.label }}</strong>
                  <em>{{ item.desc }}</em>
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
            <a href="https://isura.altisly.com" class="mobile-item" @click="mobileOpen = false"> Treasury </a>
            <span class="mobile-item opacity-40 cursor-not-allowed select-none" aria-disabled="true" title="Coming soon">
              Healthly
            </span>
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
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import IcLogo from '@/components/ui/IcLogo.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { presence } from '@/data/site'
import { cycleTheme, getThemeMode, initTheme } from '@/utils/helpers'
import type { ThemeMode } from '@/utils/types'

const menus = [
  {
    key: 'company',
    label: 'Company',
    columns: [
      {
        heading: 'About',
        items: [
          {
            label: 'Who we are',
            to: '/about',
            desc: 'A studio that works inside the operation.',
          },
          {
            label: 'Partnerships',
            to: '/partnerships',
            desc: 'Three ways we work alongside a team.',
          },
        ],
      },
      {
        heading: 'More',
        items: [
          {
            label: 'Careers',
            to: '/careers',
            desc: 'Small team, consequential problems.',
          },
          {
            label: 'Insights',
            to: '/blog',
            desc: 'Notes from the build.',
          },
        ],
      },
    ],
    feature: {
      eyebrow: 'Diagnostic',
      title: 'Run the survey on your operation',
      body: 'Eight questions. The engine finds where the work leaks.',
      cta: 'Start the diagnostic',
      to: '/diagnose',
    },
  },
]

const route = useRoute()
const openMenu = ref('')
let closeTimer: ReturnType<typeof setTimeout> | null = null
const mobileOpen = ref(false)
const themeMode = ref<ThemeMode>('system')
const tucked = ref(false)
const onDark = ref(false)
const scrolled = ref(false)
const barRef = ref<HTMLElement | null>(null)
const shellRef = ref<HTMLElement | null>(null)

/* The nav is sticky, so it still takes its height in normal flow. Publish that height so a section
   below can subtract it and genuinely fill the first screen. */
let navResize: ResizeObserver | undefined

function publishNavHeight() {
  const shell = shellRef.value
  if (!shell) return
  document.documentElement.style.setProperty('--nav-h', `${Math.round(shell.offsetHeight)}px`)
}

const TOP_ZONE = 90
const SCROLL_STEP = 6
const REVEAL_HOLD = 2000
const HIDE_ON_DOWNWARD_SCROLL = true

let lastY = 0
let ticking = false
let hovering = false
let revealTimer: ReturnType<typeof setTimeout> | null = null
let darkZones: HTMLElement[] = []

const activeMenu = computed(() => menus.find((menu) => menu.key === openMenu.value))

function cancelClose() {
  if (closeTimer === null) return
  clearTimeout(closeTimer)
  closeTimer = null
}

function openNow(key: string) {
  cancelClose()
  openMenu.value = key
}

function scheduleClose() {
  cancelClose()
  closeTimer = setTimeout(() => {
    openMenu.value = ''
    closeTimer = null
  }, 220)
}

function toggleMenu(key: string) {
  cancelClose()
  openMenu.value = openMenu.value === key ? '' : key
}

function closeMenus() {
  cancelClose()
  openMenu.value = ''
}

function collectZones() {
  darkZones = Array.from(
    document.querySelectorAll<HTMLElement>('[data-nav-tone="dark"], .bg-invert'),
  )
}

function measureTone() {
  const bar = barRef.value
  if (!bar) return

  const box = bar.getBoundingClientRect()
  const line = box.top + box.height / 2
  const wide = window.innerWidth * 0.55

  onDark.value = darkZones.some((zone) => {
    const rect = zone.getBoundingClientRect()
    return rect.width >= wide && rect.top <= line && rect.bottom >= line
  })
}

function cancelReveal() {
  if (revealTimer === null) return
  clearTimeout(revealTimer)
  revealTimer = null
}

function holdOpen() {
  return hovering || openMenu.value !== '' || mobileOpen.value
}

function scheduleTuck() {
  cancelReveal()
  revealTimer = setTimeout(() => {
    revealTimer = null
    if (holdOpen() || window.scrollY <= TOP_ZONE) return
    tucked.value = true
  }, REVEAL_HOLD)
}

function reveal(hold: boolean) {
  tucked.value = false
  if (hold) scheduleTuck()
  else cancelReveal()
}

function onShellEnter() {
  hovering = true
  cancelClose()
  cancelReveal()
}

function onShellLeave() {
  hovering = false
  scheduleClose()
  if (window.scrollY > TOP_ZONE) scheduleTuck()
}

function readScroll() {
  ticking = false
  measureTone()

  const y = window.scrollY
  scrolled.value = y > TOP_ZONE
  const delta = y - lastY

  if (y <= TOP_ZONE) {
    lastY = y
    reveal(false)
    return
  }

  if (Math.abs(delta) < SCROLL_STEP) return
  const goingDown = delta > 0
  lastY = y

  if (holdOpen()) return

  if (goingDown === HIDE_ON_DOWNWARD_SCROLL) {
    tucked.value = true
    cancelReveal()
    closeMenus()
    return
  }

  reveal(true)
}

function onResize() {
  collectZones()
  measureTone()
}

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(readScroll)
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
    lastY = 0
    scrolled.value = false
    reveal(false)
    nextTick(() => {
      collectZones()
      measureTone()
    })
  },
)

onMounted(() => {
  publishNavHeight()
  if (shellRef.value) {
    navResize = new ResizeObserver(publishNavHeight)
    navResize.observe(shellRef.value)
  }

  initTheme()
  themeMode.value = getThemeMode()
  lastY = window.scrollY
  scrolled.value = lastY > TOP_ZONE
  collectZones()
  measureTone()
  document.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', onResize)
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  navResize?.disconnect()

  cancelClose()
  cancelReveal()
  document.removeEventListener('keydown', onKeydown)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
.nav-bar {
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  border-color: var(--border);
  transition:
    background 260ms ease,
    border-color 260ms ease,
    color 260ms ease;
}

.is-scrolled .nav-bar {
  background: var(--surface);
  box-shadow: var(--shadow-2);
}

.is-on-dark .nav-bar {
  background: color-mix(in srgb, var(--invert-bg) 82%, transparent);
  border-color: var(--invert-border);
  color: var(--invert-text);
}

.is-scrolled.is-on-dark .nav-bar {
  background: var(--invert-bg);
}

.is-on-dark .nav-link {
  color: var(--invert-text);
}

.is-on-dark .nav-link:hover,
.is-on-dark .nav-link.is-open {
  background: var(--invert-wash);
}

.is-on-dark .theme-toggle {
  background: var(--invert-wash);
  border-color: var(--invert-hairline);
  color: var(--invert-text);
}

.is-on-dark .theme-toggle:hover {
  background: var(--invert-wash-2);
}

.nav-shell {
  transition:
    transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 200ms ease;
  will-change: transform;
}

.nav-shell.is-tucked {
  transform: translateY(calc(-100% - 1.5rem));
  opacity: 0;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .nav-shell {
    transition: none;
  }
}

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
  margin: 0 0 0.75rem;
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

.mega::before,
.globe-panel::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 100%;
  height: 1rem;
}

.mega-inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 21rem;
  gap: 0.55rem;
}

.mega-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  padding: 1.5rem 1.9rem 1.6rem;
}

.mega-column {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mega-item {
  display: block;
  padding: 0.55rem 0.7rem;
  margin: 0 -0.7rem;
  border-radius: var(--radius-md);
  transition: background 160ms ease;
}

.mega-item strong {
  display: block;
  font-size: 15.5px;
  font-weight: 600;
  letter-spacing: -0.012em;
}

.mega-item em {
  display: block;
  margin-top: 0.2rem;
  max-width: 30ch;
  font-size: 12.5px;
  font-style: normal;
  line-height: 1.45;
  color: var(--muted);
}

.mega-item:hover {
  background: var(--surface-2);
}




.mega-feature {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1.4rem 1.5rem;
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
  margin-top: 0.55rem;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
}


.mega-feature p {
  margin: 0.45rem 0 0;
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--invert-muted);
}

.feature-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1rem;
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
