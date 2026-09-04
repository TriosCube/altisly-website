<template>
  <div
    ref="stageRef"
    class="stage"
    :class="{ 'is-in': entered }"
    aria-hidden="true"
    :style="{
      '--px': `${parallax.x}px`,
      '--py': `${parallax.y}px`,
      '--gx': `${glow.x}%`,
      '--gy': `${glow.y}%`,
    }"
  >
    <span class="halo"></span>

    <svg class="wires" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path class="wire" d="M 44 26 C 46 42, 80 36, 80 50" />
      <path class="wire" d="M 80 58 C 80 74, 40 70, 40 82" />
      <circle class="pip" cx="44" cy="26" r="0.8" />
      <circle class="pip" cx="80" cy="50" r="0.8" />
      <circle class="pip" cx="40" cy="82" r="0.8" />
    </svg>

    <span class="signal" :class="{ 'is-firing': firing }"></span>

    <article class="card card-approval" style="--i: 0">
      <span class="card-label">Approval · payment run</span>
      <span class="card-amount">148 items</span>
      <div class="row-set">
        <span class="row">
          <i class="tick" :class="{ on: step >= 1 }"></i>
          Prepared by ops
        </span>
        <span class="row">
          <i class="tick" :class="{ on: step >= 2 }"></i>
          {{ step >= 2 ? 'Approved by finance' : 'Waiting on finance' }}
        </span>
      </div>
    </article>

    <article class="card card-exceptions" style="--i: 1">
      <span class="card-label">Exceptions</span>
      <div class="count">
        <b>{{ exceptions }}</b>
        <em>open</em>
      </div>
      <span class="card-foot">{{ exceptions === 0 ? 'Nothing waiting' : 'One clears itself' }}</span>
    </article>

    <article class="card card-record" style="--i: 2">
      <span class="card-label">Record · today</span>
      <div class="record-state" :class="{ 'is-lit': step >= 4 }">
        <span class="dot"></span>
        {{ step >= 4 ? 'Reconciled' : 'Posting' }}
      </div>
      <svg class="spark" width="86" height="24" viewBox="0 0 86 24">
        <path
          d="M2 18 L14 14 L26 16 L38 8 L50 10 L62 4 L84 6"
          stroke="currentColor"
          stroke-width="1.4"
          fill="none"
          stroke-linecap="round"
        />
      </svg>
    </article>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'

const stageRef = ref<HTMLElement | null>(null)
const entered = ref(false)
const step = ref(0)
const exceptions = ref(3)
const firing = ref(false)
const parallax = reactive({ x: 0, y: 0 })
const glow = reactive({ x: 56, y: 44 })

let cycle: ReturnType<typeof setInterval> | undefined
let raf = 0
const target = { x: 0, y: 0 }
const glowTarget = { x: 56, y: 44 }

function onPointerMove(event: PointerEvent) {
  const stage = stageRef.value
  if (!stage) return

  const rect = stage.getBoundingClientRect()
  const dx = (event.clientX - (rect.left + rect.width / 2)) / rect.width
  const dy = (event.clientY - (rect.top + rect.height / 2)) / rect.height

  target.x = Math.max(-1, Math.min(1, dx)) * 6
  target.y = Math.max(-1, Math.min(1, dy)) * 5

  glowTarget.x = Math.max(-25, Math.min(125, ((event.clientX - rect.left) / rect.width) * 100))
  glowTarget.y = Math.max(-25, Math.min(125, ((event.clientY - rect.top) / rect.height) * 100))
}

function ease() {
  parallax.x += (target.x - parallax.x) * 0.08
  parallax.y += (target.y - parallax.y) * 0.08
  glow.x += (glowTarget.x - glow.x) * 0.05
  glow.y += (glowTarget.y - glow.y) * 0.05
  raf = requestAnimationFrame(ease)
}

function advance() {
  step.value = (step.value + 1) % 6

  if (step.value === 3) {
    exceptions.value = Math.max(exceptions.value - 1, 0)
    firing.value = true
    setTimeout(() => (firing.value = false), 1100)
  }

  if (step.value === 0) exceptions.value = 3
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    entered.value = true
    step.value = 4
    exceptions.value = 2
    return
  }

  requestAnimationFrame(() => (entered.value = true))
  cycle = setInterval(advance, 2600)
  window.addEventListener('pointermove', onPointerMove, { passive: true })
  raf = requestAnimationFrame(ease)
})

onBeforeUnmount(() => {
  clearInterval(cycle)
  cancelAnimationFrame(raf)
  window.removeEventListener('pointermove', onPointerMove)
})
</script>

<style scoped>
.stage {
  position: relative;
  min-height: 31rem;
  display: none;
  transform: translate3d(var(--px), var(--py), 0);
}

@media (min-width: 1024px) {
  .stage {
    display: block;
  }
}

.halo {
  position: absolute;
  left: var(--gx, 56%);
  top: var(--gy, 44%);
  z-index: 0;
  width: 32rem;
  aspect-ratio: 1;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(
    circle,
    color-mix(in srgb, var(--brand) 24%, transparent),
    color-mix(in srgb, var(--brand) 7%, transparent) 44%,
    transparent 70%
  );
  filter: blur(72px);
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: opacity 1200ms ease 300ms;
  animation: halo-breathe 9s ease-in-out infinite;
}

.is-in .halo {
  opacity: 1;
}

@keyframes halo-breathe {
  0%,
  100% {
    scale: 1;
  }
  50% {
    scale: 1.14;
  }
}

.wires {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.wire {
  fill: none;
  stroke: var(--border-strong);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
  stroke-dasharray: 120;
  stroke-dashoffset: 120;
  transition: stroke-dashoffset 1100ms cubic-bezier(0.22, 1, 0.36, 1) 700ms;
}

.is-in .wire {
  stroke-dashoffset: 0;
}

.pip {
  fill: var(--brand-deep);
  opacity: 0;
  transition: opacity 500ms ease 1400ms;
}

.is-in .pip {
  opacity: 0.9;
}

.signal {
  position: absolute;
  left: 80%;
  top: 50%;
  z-index: 6;
  width: 0.5rem;
  height: 0.5rem;
  margin: -0.25rem 0 0 -0.25rem;
  border-radius: 50%;
  background: var(--brand);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--brand) 28%, transparent);
  opacity: 0;
  transition:
    left 1000ms cubic-bezier(0.4, 0, 0.4, 1),
    top 1000ms cubic-bezier(0.4, 0, 0.4, 1),
    opacity 220ms ease;
}

.signal.is-firing {
  left: 40%;
  top: 82%;
  opacity: 1;
}

.card {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding: 1.1rem 1.25rem;
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-2);
  opacity: 0;
  transform: translateY(1.4rem) scale(0.97);
  transition:
    opacity 700ms ease,
    transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(500ms + var(--i) * 150ms);
}

.is-in .card {
  opacity: 1;
  transform: none;
}

.card-approval {
  left: 3%;
  top: 1%;
  width: 16rem;
  z-index: 4;
  background: var(--invert-bg);
  border-color: var(--invert-bg);
  color: var(--invert-text);
  box-shadow: var(--shadow-pop);
}

.card-exceptions {
  right: -1%;
  top: 35%;
  width: 12.5rem;
  z-index: 3;
}

.card-record {
  left: 10%;
  bottom: 7%;
  width: 15rem;
  z-index: 5;
}

.card-label {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.6;
}

.card-amount {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.row-set {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-top: 0.2rem;
}

.row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 12.5px;
  opacity: 0.85;
}

.tick {
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  border: 1px solid currentColor;
  opacity: 0.4;
  transition:
    background 400ms ease,
    opacity 400ms ease;
}

.tick.on {
  background: var(--brand);
  border-color: var(--brand);
  opacity: 1;
}

.count {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.count b {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.count em {
  font-family: var(--font-mono);
  font-size: 10.5px;
  font-style: normal;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.card-foot {
  font-size: 12px;
  color: var(--muted);
}

.record-state {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.015em;
  transition: color 400ms ease;
}

.record-state .dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: var(--muted-2);
  transition:
    background 400ms ease,
    box-shadow 400ms ease;
}

.record-state.is-lit .dot {
  background: var(--brand-deep);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--brand) 26%, transparent);
}

.spark {
  color: var(--brand-deep);
  opacity: 0.75;
}

@media (prefers-reduced-motion: reduce) {
  .stage {
    transform: none;
  }

  .halo {
    animation: none;
  }

  .card,
  .wire,
  .pip {
    opacity: 1;
    transform: none;
    stroke-dashoffset: 0;
    transition: none;
  }

  .signal {
    display: none;
  }
}
</style>
