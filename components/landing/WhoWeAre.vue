<template>
  <section ref="trackRef" class="who-track" id="who-we-are">
    <div class="who-stage">
      <div class="container-isura">
        <h2
          class="reveal text-[clamp(34px,calc(4.6*var(--vwu)),60px)] font-bold tracking-[-0.036em] leading-[1] max-w-[16ch]"
          :style="{ '--shown': shown[0] }"
        >
          Some problems do not fit a software brief.
        </h2>

        <p
          class="reveal text-muted text-[17px] leading-relaxed max-w-[46ch] mt-8"
          :style="{ '--shown': shown[1] }"
        >
          Altisly works inside the operation, not beside it. We take on problems where the process,
          the data and the software all have to change together, and we build until the new way of
          working can stand on its own.
        </p>

        <div class="mt-16 flex flex-col">
          <div
            v-for="(item, i) in whoWeAre"
            :key="item.title"
            class="reveal trait"
            :style="{ '--shown': shown[i + 2] }"
          >
            <span class="font-code text-[12px] text-brand-deep w-9 flex-shrink-0">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { whoWeAre } from '@/data/content'

const STOPS = 5

const trackRef = ref<HTMLElement | null>(null)
const shown = ref<number[]>(Array.from({ length: STOPS }, () => 0))
let frame = 0
// offsetHeight forces layout, and the track is sized in vh, so it only changes
// when the viewport does.
let trackHeight = 0

function measure() {
  trackHeight = trackRef.value?.offsetHeight ?? 0
}

function clamp(value: number) {
  return Math.min(Math.max(value, 0), 1)
}

// Pinned, the scroll through the track is the reveal. Stacked, there is no
// track to scroll through, so the section's own pass up the screen drives it
// instead and the lines still arrive one at a time rather than all at once.
function update() {
  const track = trackRef.value
  if (!track) return

  const box = track.getBoundingClientRect()
  if (box.bottom < 0 || box.top > window.innerHeight) return

  const travel = trackHeight - window.innerHeight
  const progress =
    travel > 0
      ? clamp(-box.top / travel)
      : clamp((window.innerHeight * 0.85 - box.top) / (window.innerHeight * 0.6))

  // Everything has landed by a little under halfway, which leaves the back of
  // the track as a beat where the section is whole and still on screen.
  shown.value = shown.value.map((_, i) => clamp((progress - i * 0.075) / 0.11))
}

function schedule() {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(update)
}

function remeasure() {
  measure()
  schedule()
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shown.value = shown.value.map(() => 1)
    return
  }

  measure()
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', remeasure)
  update()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', remeasure)
})
</script>

<style scoped>
/* The track is taller than the screen and the panel inside it sticks, so the
   section holds while it assembles rather than passing at scroll speed. */
.who-track {
  position: relative;
  height: 260vh;
}

.who-stage {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: clip;
}

/* Driven by a value per line rather than a transition on an observer, so it
   tracks the scroll both ways instead of firing once. */
.reveal {
  opacity: var(--shown, 0);
  translate: 0 calc((1 - var(--shown, 0)) * 1rem);
}

.trait {
  display: grid;
  grid-template-columns: 2.4rem 1fr;
  gap: 0.4rem 0;
  padding: 1.4rem 0;
  border-top: 1px solid var(--border);
}

.trait:last-child {
  border-bottom: 1px solid var(--border);
}

.trait h3 {
  margin: 0;
  font-size: clamp(19px, calc(2.2*var(--vwu)), 26px);
  font-weight: 600;
  letter-spacing: -0.022em;
  line-height: 1.15;
}

.trait p {
  grid-column: 2;
  margin: 0;
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--muted);
}

@media (min-width: 900px) {
  .trait {
    grid-template-columns: 3rem minmax(0, 26ch) 1fr;
    align-items: baseline;
    gap: 2rem;
  }

  .trait p {
    grid-column: 3;
  }
}

/* Seven blocks do not fit a pinned screen on a phone, so it returns to normal
   flow there and the reveal runs off the section's own pass up the screen. */
@media (max-width: 1023px) {
  .who-track {
    height: auto;
  }

  .who-stage {
    position: static;
    height: auto;
    padding: 6rem 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    translate: none;
  }
}
</style>
