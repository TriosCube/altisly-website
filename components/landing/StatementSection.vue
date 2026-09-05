<template>
  <section ref="trackRef" class="statement-track" id="statement">
    <div class="statement-stage">
      <div class="container-isura">
        <div class="max-w-[54rem]">
          <span
            class="reveal font-code text-[11px] tracking-[0.14em] uppercase text-muted"
            :style="{ '--shown': shown[0] }"
          >
            A note before the method
          </span>
          <p
            class="reveal text-[clamp(30px,calc(4.4*var(--vwu)),58px)] font-bold tracking-[-0.032em] leading-[1.06] mt-5"
            :style="{ '--shown': shown[1] }"
          >
            Sometimes the software is the easy part.
          </p>
          <p
            class="reveal text-muted text-[17px] leading-relaxed max-w-[46ch] mt-6"
            :style="{ '--shown': shown[2] }"
          >
            The harder problem is understanding how the work, the decisions and the information need
            to move before anything gets built.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const LINES = 3

const trackRef = ref<HTMLElement | null>(null)
const shown = ref<number[]>(Array.from({ length: LINES }, () => 0))
let frame = 0

// Same mechanic as the sections above it: the track is taller than the
// viewport, the panel inside sticks, and how far the track has travelled
// decides how much has arrived. The lines land over the first half of the
// scroll, so the section is whole and holds for a beat before it releases.
function update() {
  const track = trackRef.value
  if (!track) return

  const box = track.getBoundingClientRect()
  if (box.bottom < 0 || box.top > window.innerHeight) return

  const travel = track.offsetHeight - window.innerHeight
  const progress = travel > 0 ? Math.min(Math.max(-box.top / travel, 0), 1) : 1

  shown.value = shown.value.map((_, i) => {
    const start = i * 0.15
    return Math.min(Math.max((progress - start) / 0.2, 0), 1)
  })
}

function schedule() {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(update)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shown.value = shown.value.map(() => 1)
    return
  }

  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
  update()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
})
</script>

<style scoped>
.statement-track {
  position: relative;
  height: 200vh;
}

.statement-stage {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
}

.reveal {
  display: block;
  opacity: var(--shown, 0);
  translate: 0 calc((1 - var(--shown, 0)) * 1.1rem);
}

@media (max-width: 1023px) {
  .statement-track {
    height: auto;
  }

  .statement-stage {
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
