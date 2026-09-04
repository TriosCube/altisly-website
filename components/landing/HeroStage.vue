<template>
  <div
    ref="stageRef"
    class="stage"
    :class="{ 'is-in': entered }"
    aria-hidden="true"
    :style="{ '--px': `${parallax.x}px`, '--py': `${parallax.y}px` }"
  >
    <span class="halo"></span>

    <div class="deck">
      <article
        v-for="(card, i) in cards"
        :key="card.label"
        class="card"
        :class="[`slot-${slotOf(i)}`, { 'is-front': slotOf(i) === 0 }]"
      >
        <header>
          <span class="label">{{ card.label }}</span>
          <span class="meta">{{ card.meta }}</span>
        </header>

        <p class="headline">{{ i === 2 && beat > 1 ? 'Reconciled' : card.headline }}</p>

        <div v-if="card.rows" class="rows">
          <span v-for="(row, r) in card.rows" :key="row" class="row">
            <i class="tick" :class="{ on: slotOf(i) === 0 && beat > r }"></i>
            {{ row }}
          </span>
        </div>

        <div v-else-if="card.count !== undefined" class="count">
          <b>{{ slotOf(i) === 0 && beat > 1 ? card.count - 1 : card.count }}</b>
          <em>open</em>
        </div>

        <svg v-else class="spark" viewBox="0 0 120 34" preserveAspectRatio="none">
          <path
            d="M2 26 L20 20 L38 23 L56 11 L74 15 L92 5 L118 8"
            stroke="currentColor"
            stroke-width="1.6"
            fill="none"
            stroke-linecap="round"
          />
        </svg>

        <footer>{{ card.foot }}</footer>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'

const cards = [
  {
    label: 'Approval · payment run',
    meta: '148 items',
    headline: '₦412,900,000',
    rows: ['Prepared by ops', 'Approved by finance', 'Released to the bank'],
    foot: 'Two people signed. Both are on the record.',
  },
  {
    label: 'Exceptions',
    meta: 'this morning',
    headline: 'Waiting on nobody',
    count: 3,
    foot: 'One clears itself the moment the file lands.',
  },
  {
    label: 'Record · today',
    meta: 'ledger',
    headline: 'Posting',
    foot: 'Closed 16:40. Nothing outstanding.',
  },
]

const stageRef = ref<HTMLElement | null>(null)
const entered = ref(false)
const active = ref(0)
const beat = ref(0)
const parallax = reactive({ x: 0, y: 0 })

let cycle: ReturnType<typeof setInterval> | undefined
let beats: ReturnType<typeof setInterval> | undefined
let raf = 0
const target = { x: 0, y: 0 }

function slotOf(index: number) {
  return (index - active.value + cards.length) % cards.length
}

function onPointerMove(event: PointerEvent) {
  const stage = stageRef.value
  if (!stage) return

  const rect = stage.getBoundingClientRect()
  const dx = (event.clientX - (rect.left + rect.width / 2)) / rect.width
  const dy = (event.clientY - (rect.top + rect.height / 2)) / rect.height

  target.x = Math.max(-1, Math.min(1, dx)) * 8
  target.y = Math.max(-1, Math.min(1, dy)) * 6
}

function ease() {
  parallax.x += (target.x - parallax.x) * 0.07
  parallax.y += (target.y - parallax.y) * 0.07
  raf = requestAnimationFrame(ease)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    entered.value = true
    beat.value = 3
    return
  }

  requestAnimationFrame(() => (entered.value = true))

  beats = setInterval(() => {
    beat.value = beat.value >= 3 ? 0 : beat.value + 1
  }, 1500)

  cycle = setInterval(() => {
    active.value = (active.value + 1) % cards.length
    beat.value = 0
  }, 6000)

  window.addEventListener('pointermove', onPointerMove, { passive: true })
  raf = requestAnimationFrame(ease)
})

onBeforeUnmount(() => {
  clearInterval(cycle)
  clearInterval(beats)
  cancelAnimationFrame(raf)
  window.removeEventListener('pointermove', onPointerMove)
})
</script>

<style scoped>
.stage {
  position: relative;
  display: none;
  min-height: 30rem;
  transform: translate3d(var(--px), var(--py), 0);
}

@media (min-width: 1024px) {
  .stage {
    display: block;
  }
}

.halo {
  position: absolute;
  left: 12%;
  top: 8%;
  width: 78%;
  aspect-ratio: 1.15;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    color-mix(in srgb, var(--brand) 16%, transparent),
    transparent 68%
  );
  filter: blur(60px);
  opacity: 0;
  transition: opacity 1200ms ease 400ms;
}

.is-in .halo {
  opacity: 1;
}

.deck {
  position: relative;
  height: 30rem;
  perspective: 1400px;
}

.card {
  position: absolute;
  left: 0;
  top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 23rem;
  padding: 1.5rem 1.7rem;
  border-radius: var(--radius-xl);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-pop);
  transition:
    transform 900ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 700ms ease,
    box-shadow 700ms ease;
}

.slot-0 {
  z-index: 4;
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

.slot-1 {
  z-index: 3;
  opacity: 0.55;
  transform: translate3d(3.2rem, -2.4rem, 0) scale(0.93);
  box-shadow: var(--shadow-2);
}

.slot-2 {
  z-index: 2;
  opacity: 0.22;
  transform: translate3d(6.2rem, -4.6rem, 0) scale(0.87);
  box-shadow: var(--shadow-2);
}

.card:not(.is-in) {
  opacity: 0;
}

.is-in .card {
  animation: none;
}

.stage:not(.is-in) .card {
  opacity: 0;
  transform: translate3d(0, 2rem, 0) scale(0.96);
}

.card header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.label,
.meta {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.headline {
  margin: 0.2rem 0 0;
  font-size: 27px;
  font-weight: 700;
  letter-spacing: -0.028em;
  line-height: 1.05;
}

.rows {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin-top: 0.35rem;
}

.row {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 13.5px;
  color: var(--text-2);
}

.tick {
  width: 0.95rem;
  height: 0.95rem;
  border-radius: 50%;
  border: 1px solid var(--border-strong);
  transition:
    background 420ms ease,
    border-color 420ms ease;
}

.tick.on {
  background: var(--brand);
  border-color: var(--brand);
}

.count {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  margin-top: 0.3rem;
}

.count b {
  font-size: 3.2rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.count em {
  font-family: var(--font-mono);
  font-size: 10.5px;
  font-style: normal;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}

.spark {
  width: 100%;
  height: 2.4rem;
  margin-top: 0.4rem;
  color: var(--brand-deep);
}

.card footer {
  margin-top: auto;
  padding-top: 0.9rem;
  border-top: 1px solid var(--border);
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--muted);
}

@media (prefers-reduced-motion: reduce) {
  .stage {
    transform: none;
  }

  .card,
  .halo {
    transition: none;
  }
}
</style>
