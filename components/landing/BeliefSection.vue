<template>
  <section
    ref="sectionRef"
    class="belief text-invert relative"
    data-nav-tone="dark"
    :style="{ minHeight: '180vh' }"
    id="belief"
  >
    <div class="sticky top-0 h-screen flex items-center overflow-hidden">
      <div class="stars" aria-hidden="true">
        <span
          v-for="star in stars"
          :key="star.id"
          :style="{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }"
        ></span>
      </div>

      <div class="container-isura statement-box relative z-10">
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
              >{{ `${word.text} ` }}</span
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

const stars = Array.from({ length: 110 }, (_, index) => ({
  id: index,
  left: `${(index * 37.7 + 11) % 100}%`,
  top: `${(index * 61.3 + 17) % 100}%`,
  size: index % 9 === 0 ? '2px' : index % 3 === 0 ? '1.5px' : '1px',
  delay: `${((index % 13) * 0.47).toFixed(2)}s`,
}))

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

</script>

<style scoped>
.belief {
  background-color: var(--invert-bg);
}

.stars {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.stars span {
  position: absolute;
  border-radius: 50%;
  background: color-mix(in srgb, var(--invert-text) 70%, transparent);
  animation: twinkle 5.2s ease-in-out infinite;
}

.belief > div::after {
  position: absolute;
  inset: 0;
  content: '';
  pointer-events: none;
  background: linear-gradient(
    180deg,
    var(--invert-bg),
    transparent 18%,
    transparent 82%,
    var(--invert-bg)
  );
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.08;
    transform: scale(0.7);
  }
  50% {
    opacity: 0.62;
    transform: scale(1);
  }
}

/* The lines are split by hand, so the type is sized against the column that holds them rather than
   the window. Narrow the page, with the panel docked or otherwise, and the statement scales to fit
   instead of wrapping into orphans or running past the edge. */
.statement-box {
  container-type: inline-size;
}

.statement {
  margin: 1.6rem 0 0;
  font-size: clamp(28px, 5.4cqi, 82px);
  font-weight: 700;
  letter-spacing: -0.038em;
  line-height: 1.02;
}

/* The lines are split by hand for a full width window. When the page narrows, under the docked
   panel, they have to be free to wrap rather than run past the edge. */
.line {
  display: block;
  overflow-wrap: break-word;
}

.word {
  display: inline;
  /* The trailing space is part of the interpolated text, so it survives the compiler. Preserving it
     is what gives the line somewhere to break; a non-breaking space gave it none. */
  white-space: pre-wrap;
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
  font-size: clamp(9.5px, calc(1.1*var(--vwu)), 11px);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--invert-muted);
}

@media (prefers-reduced-motion: reduce) {
  .stars span {
    animation: none;
    opacity: 0.32;
  }

  .belief {
    min-height: 0 !important;
  }

  .belief > div {
    position: static;
    height: auto;
    padding: 6rem 0;
  }
}

/* Deeper ground for this section alone in light theme: the tokens are redefined on the root here
   rather than globally, so nothing else that paints from them moves. */
:root:not([data-theme='dark']) .belief {
  --invert-bg: #0a1812;
  --invert-bg-2: #0f2318;
  --invert-bg-3: #163020;
}
</style>
