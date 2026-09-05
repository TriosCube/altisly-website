<template>
  <section id="ways-in" ref="trackRef" class="ways-track">
    <div class="ways-stage">
      <div class="container-isura ways-inner">
        <div class="ways-head">
          <span class="font-code text-[11px] tracking-[0.14em] uppercase text-muted">
            How this works
          </span>
          <h2 class="ways-title">Three ways in.</h2>
          <p class="text-muted text-[16.5px] leading-relaxed max-w-[46ch] mt-5 text-pretty">
            All in the same operations: money moving, records kept, regulators asking. What changes
            is how far in we come.
          </p>
        </div>

        <div class="ways-grid">
          <article
            v-for="(way, i) in ways"
            :key="way.name"
            class="way"
            :style="{ '--shown': shown[i] }"
          >
            <div class="flex items-baseline justify-between gap-3">
              <h3 class="text-[19px] font-bold tracking-[-0.02em]">{{ way.name }}</h3>
              <span class="font-code text-[11px] text-muted">{{ way.horizon }}</span>
            </div>
            <p class="text-muted text-[14.5px] leading-relaxed mt-3 flex-1">{{ way.body }}</p>
            <p class="font-code text-[11.5px] text-muted mt-6 pt-5 border-t border-base">
              {{ way.fit }}
            </p>
          </article>
        </div>

        <p class="ways-foot" :style="{ '--shown': shown[2] }">
          We do not take work outside operations where mistakes are expensive. If that is not you,
          we will say so on the first call rather than the third.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const ways = [
  {
    name: 'Review',
    horizon: 'Weeks',
    body: 'You have a system, or a plan for one, and need to know where it breaks before it does. We go through the architecture, the data model and the failure paths, and tell you plainly.',
    fit: 'When the decision is bigger than the budget to unmake it.',
  },
  {
    name: 'Embed',
    horizon: 'Months',
    body: 'Your team is building it and needs people who have done this before. Ours join yours, under your process, and leave the knowledge behind rather than taking it with them.',
    fit: 'When you have the team but not the shape of the thing yet.',
  },
  {
    name: 'Build',
    horizon: 'One team, end to end',
    body: 'We take the operation, design the system around how it actually works, build it, and put it into service with your people able to run it.',
    fit: 'What most people come to us for.',
  },
]

const trackRef = ref<HTMLElement | null>(null)
const shown = ref<number[]>(ways.map(() => 0))
const reduced = ref(false)
let frame = 0

// Same mechanic as the stack above: the section is taller than the viewport,
// the inner panel sticks, and how far the track has travelled decides how many
// cards have arrived.
function update() {
  const track = trackRef.value
  if (!track) return

  const box = track.getBoundingClientRect()
  if (box.bottom < 0 || box.top > window.innerHeight) return

  const travel = track.offsetHeight - window.innerHeight
  const progress = travel > 0 ? Math.min(Math.max(-box.top / travel, 0), 1) : 1

  // The first card is already there when the section arrives; the rest follow
  // across the scroll, each taking a third of it.
  shown.value = ways.map((_, i) => {
    const start = i * 0.26
    return Math.min(Math.max((progress - start) / 0.24, 0), 1)
  })
}

function schedule() {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(update)
}

onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced.value) {
    shown.value = ways.map(() => 1)
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
/* Taller than the viewport so there is scroll to spend; the panel inside holds
   still while the cards arrive. */
.ways-track {
  position: relative;
  height: 260vh;
}

.ways-stage {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.ways-inner {
  width: 100%;
}

.ways-title {
  font-size: clamp(34px, calc(4.6 * var(--vwu)), 60px);
  font-weight: 800;
  letter-spacing: -0.032em;
  line-height: 1.02;
  margin-top: 0.7rem;
}

.ways-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 3rem;
}

.way {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  background: var(--surface);
  opacity: calc(0.06 + var(--shown, 0) * 0.94);
  transform: translateY(calc((1 - var(--shown, 0)) * 26px));
  transition:
    opacity 120ms linear,
    transform 120ms linear;
}

/* The same grain the stack panels carry, so a solid card is never flat. */
.way::before {
  position: absolute;
  inset: 0;
  content: '';
  z-index: 0;
  pointer-events: none;
  border-radius: inherit;
  opacity: 0.2;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='w'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.45' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23w)'/%3E%3C/svg%3E");
  background-size: 260px 260px;
  animation: ways-grain 6s steps(10) infinite;
}

.way > * {
  position: relative;
  z-index: 1;
}

@keyframes ways-grain {
  0%,
  100% {
    background-position: 0 0;
  }
  20% {
    background-position: 14px 20px;
  }
  40% {
    background-position: 20px -16px;
  }
  60% {
    background-position: 16px 8px;
  }
  80% {
    background-position: 8px -18px;
  }
}

.ways-foot {
  font-size: 15px;
  line-height: 1.6;
  max-width: 52ch;
  margin-top: 2.5rem;
  opacity: calc(0.06 + var(--shown, 0) * 0.94);
  transition: opacity 120ms linear;
}

@media (max-width: 1023px) {
  .ways-track {
    height: auto;
  }

  .ways-stage {
    position: static;
    height: auto;
    padding: 6rem 0;
  }

  .ways-grid {
    grid-template-columns: 1fr;
  }

  /* No sticky track on a phone, so nothing drives the reveal: show them. */
  .way,
  .ways-foot {
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .way,
  .ways-foot {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .way::before {
    animation: none;
  }
}
</style>
