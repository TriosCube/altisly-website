<template>
  <section ref="trackRef" class="statement-track" id="statement">
    <div class="statement-stage">
      <!-- The mask carves the ring and never moves; only the lit part of it
           turns. Splitting them keeps the mask off the animated element. -->
      <span class="statement-arc" aria-hidden="true" :style="{ '--shown': shown[0] }">
        <span class="statement-arc-spin"></span>
      </span>

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
// Cached: offsetHeight forces layout, and the track is sized in vh so it only
// changes when the viewport does.
let trackHeight = 0

function measure() {
  trackHeight = trackRef.value?.offsetHeight ?? 0
}

// Same mechanic as the sections above it: the track is taller than the
// viewport, the panel inside sticks, and how far the track has travelled
// decides how much has arrived. The lines land over the first half of the
// scroll, so the section is whole and holds for a beat before it releases.
function update() {
  const track = trackRef.value
  if (!track) return

  const box = track.getBoundingClientRect()
  if (box.bottom < 0 || box.top > window.innerHeight) return

  const travel = trackHeight - window.innerHeight
  const progress = travel > 0 ? Math.min(Math.max(-box.top / travel, 0), 1) : 1

  // The lines are done by a fifth of the way through, which on a 300vh track
  // is 42vh of scroll. Nothing covers this section until 100vh, so it gets
  // most of a screen of being finished and alone before anything arrives.
  shown.value = shown.value.map((_, i) => {
    const start = i * 0.06
    return Math.min(Math.max((progress - start) / 0.09, 0), 1)
  })
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
.statement-track {
  position: relative;
  z-index: 1;
  /* 300, not 200. At 200 the section covering this one began climbing at the
     very first pixel of scroll, so the paragraph was still fading up while it
     was already being pushed off. The extra screen is the room to finish. */
  height: 300vh;
}

.statement-stage {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  /* The arc runs past the right edge; clip so the page gains no sideways scroll. */
  overflow: clip;
}

/* A ring of light with most of itself missing, turning. The conic gradient
   decides which part of the ring is lit, the radial mask carves the ring out of
   the disc, and the two together leave a crescent that sweeps as it rotates.
   The softness lives in the mask's fade zones rather than in a filter: a blur
   on a moving element is repainted every frame, which is what stalled the
   pointer when the beam had one. */
.statement-arc {
  position: absolute;
  top: 50%;
  right: -14%;
  width: min(78vh, 820px);
  aspect-ratio: 1;
  translate: 0 -50%;
  pointer-events: none;
  opacity: calc(var(--shown, 0) * 0.62);
  /* The mask lives here, on the element that never moves. A mask on a rotating
     element is re-rasterised every frame and takes the main thread with it;
     this one is radially symmetric, so turning it would look identical anyway.
     Softness is in the fade zones rather than a filter, for the same reason. */
  -webkit-mask: radial-gradient(
    closest-side,
    transparent 40%,
    rgb(0 0 0 / 0.4) 58%,
    #000 69%,
    #000 76%,
    rgb(0 0 0 / 0.35) 88%,
    transparent 100%
  );
  mask: radial-gradient(
    closest-side,
    transparent 40%,
    rgb(0 0 0 / 0.4) 58%,
    #000 69%,
    #000 76%,
    rgb(0 0 0 / 0.35) 88%,
    transparent 100%
  );
}

/* Only this turns, and it is a plain gradient with nothing on it, so the
   compositor paints it once and then just rotates the layer. */
.statement-arc-spin {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(
    from 205deg,
    transparent 0deg,
    rgb(69 119 44 / 0.34) 42deg,
    rgb(141 205 78 / 0.7) 104deg,
    rgb(200 247 93 / 0.85) 148deg,
    rgb(141 205 78 / 0.44) 202deg,
    transparent 262deg
  );
  will-change: rotate;
  animation: arc-sweep 19s linear infinite;
}

@keyframes arc-sweep {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
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

  .statement-arc {
    right: -42%;
    width: min(96vw, 640px);
    opacity: calc(var(--shown, 0) * 0.4);
  }

  /* Nothing to look at behind stacked text, and every frame of it is spent. */
  .statement-arc-spin {
    animation: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    translate: none;
  }

  .statement-arc-spin {
    animation: none;
  }
}
</style>
