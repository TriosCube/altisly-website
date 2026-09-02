<template>
  <section
    id="work"
    ref="titleRef"
    class="relative"
    :style="{ minHeight: '150vh' }"
    aria-label="The work"
  >
    <div class="sticky top-0 h-screen grid place-items-center">
      <div class="container-isura text-center">
        <span class="eyebrow-pill">
          <span
            class="w-6 h-6 rounded-full bg-brand text-on-brand grid place-items-center text-sm font-bold"
            >✦</span
          >
          The work
        </span>
        <h2
          class="text-[clamp(44px,6vw,84px)] font-bold tracking-[-0.035em] leading-[0.98] mt-5 transition-all duration-500 ease-out"
          :style="titleStyle"
        >
          Four builds.<br />One studio.
        </h2>
        <p class="text-muted text-base max-w-[46ch] mx-auto mt-6">
          Each one shaped around the pressure it must survive, and each one still doing its job.
        </p>
      </div>
    </div>
  </section>

  <section
    ref="cardsRef"
    class="relative"
    :style="{ minHeight: '180vh' }"
    aria-label="Featured Altisly builds"
  >
    <div class="sticky top-0 min-h-screen flex items-center py-20 overflow-hidden">
      <div class="container-isura w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 build-grid">
          <NuxtLink
            v-for="(project, i) in featured"
            :key="project.slug"
            :to="`/work/${project.slug}`"
            class="build-card bento-card p-0 overflow-hidden hover:border-strong transition-colors"
          >
            <div class="p-7 pb-6 flex-1 flex flex-col">
              <div class="flex items-center gap-2 font-code text-[11px] tracking-[0.1em] uppercase text-muted">
                <span>alt</span>
                <span class="text-brand-deep">×</span>
                <strong class="text-body font-semibold">{{ project.name }}</strong>
              </div>

              <h3 class="text-[30px] font-bold tracking-[-0.025em] leading-none mt-4 mb-2">
                {{ project.name }}
              </h3>
              <p class="text-muted text-[14px] max-w-[34ch]">{{ notes[i].label }}</p>

              <div class="flex flex-wrap gap-2 mt-5">
                <span
                  v-for="point in notes[i].points"
                  :key="point"
                  class="chip bg-surface-2 border-base text-[11.5px] text-muted"
                  >{{ point }}</span
                >
              </div>
            </div>

            <div
              class="flex items-center justify-between gap-4 px-7 py-5 bg-surface-2 border-t border-base"
            >
              <div>
                <span class="font-code text-[10.5px] tracking-[0.1em] uppercase text-muted">{{
                  project.role
                }}</span>
                <p class="text-[13.5px] mt-1 leading-snug">{{ project.tagline }}</p>
              </div>
              <span
                class="w-10 h-10 rounded-full bg-brand text-on-brand grid place-items-center flex-shrink-0"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.2"
                >
                  <path d="M7 17L17 7" />
                  <path d="M9 7h8v8" />
                </svg>
              </span>
            </div>
          </NuxtLink>
        </div>

        <div class="flex justify-center mt-10">
          <AppButton variant="ghost" size="lg" to="/work">All six builds →</AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import { projects } from '@/data/projects'
import { useSectionProgress } from '@/composables/useSectionProgress'

const { sectionRef: titleRef, progress: titleProgress } = useSectionProgress()
const cardsRef = ref<HTMLElement | null>(null)

const featured = projects.slice(0, 4)

const notes = [
  { label: 'SaaS infrastructure', points: ['Tenant isolation', 'Rust framework', 'AI entitlements'] },
  { label: 'Treasury operations', points: ['Risk API', 'Operator CLI', 'Telemetry'] },
  { label: 'AI workflow', points: ['Reconciliation', 'Forecasting', 'Channel reports'] },
  { label: 'Healthcare systems', points: ['Clinical workflows', 'Patient portal', 'AI documentation'] },
]

const titleStyle = computed(() => {
  const p = Math.min(Math.max(titleProgress.value, 0), 1)
  return {
    transform: `scale(${(0.9 + p * 0.1).toFixed(3)})`,
    opacity: String(Math.min(0.35 + p * 1.6, 1)),
  }
})

let frame = 0

function updateCards() {
  const section = cardsRef.value
  if (!section) return

  const cards = Array.from(section.querySelectorAll<HTMLElement>('.build-card'))
  const grid = section.querySelector<HTMLElement>('.build-grid')
  if (!grid) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cards.forEach((card) => {
      card.style.transform = 'none'
      card.style.pointerEvents = 'auto'
    })
    return
  }

  const rect = section.getBoundingClientRect()
  const maxScroll = Math.max(section.offsetHeight - window.innerHeight, 1)
  const current = Math.min(Math.max(-rect.top, 0), maxScroll)
  const rawProgress = current / maxScroll
  const entryProgress = Math.min(Math.max((window.innerHeight - rect.top) / window.innerHeight, 0), 1)
  const raw = Math.min(Math.max(entryProgress * 0.48 + rawProgress * 0.52, 0), 1)
  const cardProgress = raw * raw * (3 - 2 * raw)

  const gridRect = grid.getBoundingClientRect()
  const exitMargin = Math.max(28, window.innerWidth * 0.025)

  cards.forEach((card, index) => {
    const targetLeft = gridRect.left + card.offsetLeft
    const targetTop = gridRect.top + card.offsetTop
    const direction = index % 4
    const start =
      direction === 0
        ? { x: -(targetLeft + card.offsetWidth + exitMargin), y: 0, rotation: -7 }
        : direction === 1
          ? { x: 0, y: window.innerHeight - targetTop + exitMargin, rotation: 4 }
          : direction === 2
            ? { x: window.innerWidth - targetLeft + exitMargin, y: 0, rotation: 7 }
            : { x: 0, y: -(targetTop + card.offsetHeight + exitMargin), rotation: -4 }

    const inverse = 1 - cardProgress
    const scale = 0.52 + cardProgress * 0.48

    card.style.pointerEvents = cardProgress > 0.9 ? 'auto' : 'none'
    card.style.transform = `translate3d(${(start.x * inverse).toFixed(2)}px, ${(start.y * inverse).toFixed(2)}px, 0) scale(${scale.toFixed(3)}) rotate(${(start.rotation * inverse).toFixed(2)}deg)`
  })
}

function schedule() {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(updateCards)
}

onMounted(() => {
  updateCards()
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
})
</script>

<style scoped>
.build-card {
  will-change: transform;
}
</style>
