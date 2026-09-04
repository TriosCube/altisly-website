<template>
  <div
    ref="conveyorRef"
    class="conveyor"
    :class="{ 'is-in': entered }"
    aria-hidden="true"
    :style="{ '--shift': `${shift}px` }"
  >
    <div class="track">
      <span
        v-for="(panel, i) in loop"
        :key="`${panel.label}-${i}`"
        class="panel"
        :class="[`lift-${i % 5}`, { 'is-active': panel.active }]"
      >
        <span class="panel-label">{{ panel.label }}</span>
        <span class="panel-value">{{ panel.value }}</span>
        <span class="panel-note">{{ panel.note }}</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const panels = [
  { label: 'Approval', value: '148 items', note: 'Waiting on finance', active: false },
  { label: 'Exception', value: '3 open', note: 'One clears itself', active: false },
  { label: 'Record', value: 'Posting', note: 'Ledger, today', active: false },
  { label: 'Reconciled', value: '0 breaks', note: 'Closed 16:40', active: true },
  { label: 'Onboarding', value: '2 of 3', note: 'Checks cleared', active: false },
]

const loop = [...panels, ...panels]

const conveyorRef = ref<HTMLElement | null>(null)
const entered = ref(false)
const shift = ref(0)

let frame = 0
let reduced = false

function update() {
  const el = conveyorRef.value
  if (!el || reduced) return

  const rect = el.getBoundingClientRect()
  const seen = Math.min(Math.max((window.innerHeight - rect.top) / window.innerHeight, 0), 2)
  shift.value = (1 - seen) * 90
}

function schedule() {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(update)
}

onMounted(() => {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  entered.value = true
  if (reduced) return

  update()
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
.conveyor {
  position: relative;
  display: none;
  align-items: center;
  min-height: 26rem;
  transform: translateX(var(--shift));
  transition: transform 120ms linear;
  opacity: 0;
}

.conveyor.is-in {
  opacity: 1;
  transition:
    transform 120ms linear,
    opacity 900ms ease 300ms;
}

@media (min-width: 1024px) {
  .conveyor {
    display: flex;
  }
}

.track {
  display: flex;
  align-items: center;
  width: max-content;
  animation: conveyor 68s linear infinite;
}

.conveyor:hover .track {
  animation-play-state: paused;
}

.panel {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 13.5rem;
  flex-shrink: 0;
  margin-right: -1.6rem;
  padding: 1.05rem 1.2rem;
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-2);
  transform: translateY(var(--y, 0));
}

.lift-0 {
  --y: -2.6rem;
}
.lift-1 {
  --y: 1.9rem;
}
.lift-2 {
  --y: -0.8rem;
}
.lift-3 {
  --y: 2.9rem;
}
.lift-4 {
  --y: -1.7rem;
}

.panel.is-active {
  background: var(--invert-bg);
  border-color: var(--invert-bg);
  color: var(--invert-text);
  box-shadow: var(--shadow-pop);
  z-index: 2;
}

.panel-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.55;
}

.panel.is-active .panel-label {
  color: var(--brand);
  opacity: 1;
}

.panel-value {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.panel-note {
  font-size: 12px;
  opacity: 0.6;
}

@keyframes conveyor {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .conveyor {
    opacity: 1;
    transform: none;
  }

  .track {
    animation: none;
  }
}
</style>
