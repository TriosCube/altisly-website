<template>
  <section
    ref="sectionRef"
    class="belief bg-invert text-invert relative"
    :style="{ minHeight: '180vh' }"
    id="belief"
  >
    <div class="sticky top-0 h-screen flex items-center overflow-hidden">
      <div class="field" aria-hidden="true" :style="{ opacity: fieldOpacity }">
        <svg viewBox="0 0 120 80" preserveAspectRatio="xMidYMid slice">
          <g class="lines">
            <path v-for="line in lines" :key="line" :d="line" />
          </g>
          <circle v-for="(dot, i) in dots" :key="i" :cx="dot.x" :cy="dot.y" :r="dot.r" />
        </svg>
      </div>

      <div class="container-isura relative z-10">
        <span class="font-code text-[11px] tracking-[0.14em] uppercase text-invert-muted">
          What we believe
        </span>

        <p class="statement" aria-label="Technology is only worth it when the business underneath works better.">
          <span v-for="(line, l) in phrases" :key="l" class="line">
            <span
              v-for="word in line.words"
              :key="word.index"
              class="word"
              :class="{ 'is-lime': line.lime && wordAmount(word.index) > 0.55 }"
              :style="{ opacity: 0.2 + wordAmount(word.index) * 0.8 }"
              >{{ word.text }}&nbsp;</span
            >
          </span>
        </p>

        <div class="principles" :style="{ opacity: tailOpacity }">
          <span v-for="commitment in commitments" :key="commitment">{{ commitment }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { commitments } from '@/data/content'
import { useSectionProgress } from '@/composables/useSectionProgress'

const { sectionRef, progress } = useSectionProgress()
const reduced = ref(false)

onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

const groups = [
  { text: 'Technology is only worth it', lime: false },
  { text: 'when the business underneath', lime: false },
  { text: 'works better.', lime: true },
]

let cursor = 0
const phrases = groups.map((group) => ({
  lime: group.lime,
  words: group.text.split(' ').map((text) => ({ text, index: cursor++ })),
}))

const wordCount = cursor
const spread = 2.6

const scrubbed = computed(() => Math.min(Math.max(progress.value, 0), 1))

function wordAmount(index: number) {
  if (reduced.value) return 1
  const head = scrubbed.value * (wordCount + spread * 1.6)
  return Math.min(Math.max((head - index) / spread, 0), 1)
}

const tailOpacity = computed(() => {
  if (reduced.value) return 1
  return Math.min(Math.max((scrubbed.value - 0.78) / 0.14, 0), 1)
})

const fieldOpacity = computed(() => {
  if (reduced.value) return 1
  return 0.35 + Math.min(scrubbed.value, 1) * 0.65
})

const lines = [
  'M0 26 H120',
  'M0 54 H120',
  'M30 0 V80',
  'M76 0 V80',
  'M0 12 L120 68',
]

const dots = [
  { x: 30, y: 26, r: 0.55 },
  { x: 76, y: 26, r: 0.4 },
  { x: 30, y: 54, r: 0.4 },
  { x: 76, y: 54, r: 0.55 },
  { x: 14, y: 40, r: 0.3 },
  { x: 100, y: 18, r: 0.3 },
  { x: 58, y: 70, r: 0.35 },
]
</script>

<style scoped>
.field {
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: opacity 400ms ease;
}

.field svg {
  width: 100%;
  height: 100%;
}

.lines path {
  fill: none;
  stroke: var(--invert-border);
  stroke-width: 0.25;
}

.field circle {
  fill: var(--brand);
  opacity: 0.5;
}

.statement {
  margin: 1.6rem 0 0;
  max-width: 20ch;
  font-size: clamp(38px, 7vw, 104px);
  font-weight: 700;
  letter-spacing: -0.038em;
  line-height: 1.02;
}

.line {
  display: block;
}

.word {
  display: inline;
  color: var(--invert-text);
  transition: color 260ms ease;
  will-change: opacity;
}

.word.is-lime {
  color: var(--brand);
}

.principles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 2.2rem;
  margin-top: clamp(2rem, 5vh, 3.4rem);
  transition: opacity 320ms ease;
}

.principles span {
  font-family: var(--font-mono);
  font-size: clamp(9.5px, 1.1vw, 11px);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--invert-muted);
}

@media (prefers-reduced-motion: reduce) {
  .belief {
    min-height: 0 !important;
  }

  .belief > div {
    position: static;
    height: auto;
    padding: 6rem 0;
  }
}
</style>
