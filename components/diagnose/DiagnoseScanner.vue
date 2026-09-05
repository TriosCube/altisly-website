<template>
  <section
    class="diagnose-page"
    :class="[`diagnose-step-${stepIndex}`, { 'is-awake': hasStarted }]"
  >
    <div class="diagnose-starfield" aria-hidden="true">
      <span
        v-for="star in stars"
        :key="star.id"
        :style="{
          left: star.left,
          top: star.top,
          animationDelay: star.delay,
          width: star.size,
          height: star.size,
        }"
      ></span>
    </div>

    <DiagnoseHeader />

    <div class="diagnose-stage">
      <div class="diagnose-intro">
        <div class="diagnose-copy">
          <h1>Every business has an intelligence waiting to be built.</h1>
          <p>{{ scanSteps.join(' · ') }}</p>
        </div>

        <button
          type="button"
          class="diagnose-point"
          :aria-label="hasStarted ? 'Diagnosis signal opened' : 'Begin diagnosis'"
          @click="onPointClick"
        >
          <span></span>
        </button>

        <p class="diagnose-hint">
          {{ hasStarted ? 'signal opened' : 'click the point to begin' }}
        </p>
      </div>

      <div class="diagnose-map" :aria-hidden="!hasStarted">
        <div class="diagnose-system-list">
          <p>( Industry )</p>
          <button
            v-for="(industry, index) in industries"
            :key="industry.label"
            type="button"
            :class="{ 'is-active': index === industryIndex }"
            @click="selectIndustry(index)"
          >
            <span>{{ industry.label }}</span>
            <small v-if="index === industryIndex">{{ industry.descriptor }}</small>
          </button>
        </div>

        <p class="diagnose-platform-caption">Any team · any tool · one platform</p>

        <div class="diagnose-departments" aria-hidden="true">
          <span
            v-for="department in departments"
            :key="department.label"
            :style="{ left: `${department.x}%`, top: `${department.y}%` }"
            >{{ department.label }}</span
          >
        </div>

        <div :key="roll.department" class="diagnose-roll" aria-hidden="true">
          <span v-for="tool in roll.tools" :key="tool">{{ tool }}</span>
          <strong>{{ roll.department }}</strong>
        </div>

        <div class="diagnose-forge" aria-hidden="true">
          <p>The forge</p>
          <span v-for="row in forgeRows.slice(0, forgeCount)" :key="row.product">
            <i>{{ row.department }}</i>
            <b>{{ row.product }}</b>
            <em>shipped</em>
          </span>
        </div>

        <div ref="networkRef" class="diagnose-network">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <ellipse class="diagnose-orbit" cx="50" cy="50" rx="45" ry="46" />
            <path
              v-for="(spoke, index) in ring"
              :key="`spoke-${index}`"
              class="diagnose-spoke"
              :d="spoke.path"
            />
            <ellipse
              v-for="(spoke, index) in ring"
              :key="`packet-${index}`"
              class="diagnose-packet"
              rx="0.14"
              ry="0.3"
            >
              <animateMotion
                dur="6.4s"
                :begin="`${spoke.delay}s`"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="spline"
                keySplines="0.4 0 0.6 1"
                :path="spoke.inbound"
              />
              <animate
                attributeName="opacity"
                dur="6.4s"
                :begin="`${spoke.delay}s`"
                repeatCount="indefinite"
                values="0;0.75;0.75;0"
                keyTimes="0;0.15;0.8;1"
              />
            </ellipse>
          </svg>

          <div v-if="stepIndex === 0" class="diagnose-scan-fan" aria-hidden="true">
            <i v-for="index in 26" :key="index" :style="{ '--fan-index': index - 1 }"></i>
          </div>

          <span class="diagnose-hub" aria-hidden="true"></span>

          <span v-if="stepIndex >= 2" class="diagnose-window" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>

          <span v-if="stepIndex === 4" class="diagnose-pulse" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>

          <template v-if="stepIndex >= 3">
            <span
              v-for="(agent, index) in activeIndustry.agents"
              :key="`${activeIndustry.label}-${agent}`"
              class="diagnose-node is-agent is-below"
              :style="{
                '--node-x': `${agentSlots[index].x}%`,
                '--node-y': `${agentSlots[index].y}%`,
                '--node-delay': `${index * 2.2}s`,
              }"
            >
              {{ agent }}
              <i aria-hidden="true"></i>
            </span>
          </template>

          <span
            v-for="(node, index) in activeIndustry.nodes"
            :key="`${activeIndustry.label}-${node}`"
            class="diagnose-node"
            :class="{
              'is-active': activeStage.activeIndexes.includes(index),
              'is-below': ring[index].y > 50,
            }"
            :style="{
              '--node-x': `${ring[index].x}%`,
              '--node-y': `${ring[index].y}%`,
              '--node-delay': `${index * 0.12}s`,
            }"
          >
            {{ node }}
            <i aria-hidden="true"></i>
          </span>
        </div>

        <div class="diagnose-bottom-copy">
          <span :key="activeStage.label">{{ activeStage.label }}</span>
          <strong v-if="activeStage.title" :key="activeStage.title">{{ activeStage.title }}</strong>
          <div>
            <button
              v-for="(step, index) in scanSteps"
              :key="step"
              type="button"
              :class="{ 'is-active': index === stepIndex, 'is-visited': index <= stepIndex }"
              @click="selectStep(index)"
            >
              {{ step }}
            </button>
          </div>
        </div>

        <button type="button" class="diagnose-cta" @click="briefOpen = true">
          Run this on my business
        </button>
      </div>
    </div>

    <DiagnoseModal
      :open="briefOpen"
      :industry="activeIndustry.descriptor"
      @close="briefOpen = false"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import DiagnoseHeader from './DiagnoseHeader.vue'
import DiagnoseModal from './DiagnoseModal.vue'

const scanSteps = ['Scan', 'Diagnose', 'Concept', 'Agents', 'Ship']

const stars = Array.from({ length: 130 }, (_, index) => ({
  id: index,
  left: `${(index * 37.7 + 11) % 100}%`,
  top: `${(index * 61.3 + 17) % 100}%`,
  delay: `${(index % 11) * 0.55}s`,
  size: index % 7 === 0 ? '1.8px' : '1px',
}))

const RING_COUNT = 10
const RING_RX = 40
const RING_RY = 45

const ring = Array.from({ length: RING_COUNT }, (_, index) => {
  const angle = ((-90 + index * (360 / RING_COUNT)) * Math.PI) / 180
  const x = 50 + RING_RX * Math.cos(angle)
  const y = 50 + RING_RY * Math.sin(angle)

  const mx = (50 + x) / 2
  const my = (50 + y) / 2
  const cx = mx - (y - 50) * 0.05
  const cy = my + (x - 50) * 0.05

  return {
    x,
    y,
    path: `M 50 50 Q ${cx.toFixed(2)} ${cy.toFixed(2)} ${x.toFixed(2)} ${y.toFixed(2)}`,
    inbound: `M ${x.toFixed(2)} ${y.toFixed(2)} Q ${cx.toFixed(2)} ${cy.toFixed(2)} 50 50`,
    delay: index * 0.42,
  }
})

const agentSlots = [
  { x: 46.1, y: 25.4 },
  { x: 60.9, y: 55.6 },
  { x: 42.6, y: 68.8 },
]

const industries = [
  {
    label: 'treasury',
    descriptor: 'Desk · Corporate',
    nodes: ['positions', 'rates', 'counterparties', 'limits', 'breaks', 'exposure', 'settlement', 'banks', 'forecasts', 'approvals'],
    agents: ['dealing agent', 'recon agent', 'exposure agent'],
  },
  {
    label: 'payments',
    descriptor: 'Rails · Processing',
    nodes: ['payouts', 'pricing', 'merchants', 'disputes', 'failures', 'volume', 'onboarding', 'providers', 'refunds', 'margins'],
    agents: ['routing agent', 'dispute agent', 'ledger agent'],
  },
  {
    label: 'identity',
    descriptor: 'KYC · Verification',
    nodes: ['cases', 'documents', 'customers', 'reviews', 'rejects', 'throughput', 'intake', 'registries', 'watchlists', 'audit'],
    agents: ['intake agent', 'screening agent', 'audit agent'],
  },
  {
    label: 'health',
    descriptor: 'Clinic · Provider',
    nodes: ['encounters', 'tariffs', 'patients', 'notes', 'no-shows', 'occupancy', 'intake', 'payers', 'claims', 'stock'],
    agents: ['intake agent', 'claims agent', 'notes agent'],
  },
  {
    label: 'logistics',
    descriptor: 'Movement · Fulfilment',
    nodes: ['loads', 'rates', 'clients', 'proof', 'delays', 'dispatch', 'orders', 'carriers', 'contracts', 'fuel'],
    agents: ['route agent', 'proof agent', 'billing agent'],
  },
  {
    label: 'operations',
    descriptor: 'Workflow · Scheduling',
    nodes: ['handoffs', 'capacity', 'requests', 'status', 'exceptions', 'queues', 'intake', 'vendors', 'approvals', 'routing'],
    agents: ['triage agent', 'routing agent', 'review agent'],
  },
]

const stageCopy = [
  { label: '01 · Scan', title: '', activeIndexes: [] as number[] },
  {
    label: '02 · Diagnose',
    title: 'The problems surface themselves. Evidence, not opinion.',
    activeIndexes: [0, 6, 8],
  },
  {
    label: '03 · Concept',
    title: 'A bespoke system takes shape around exactly what is broken.',
    activeIndexes: [0, 6, 8],
  },
  {
    label: '04 · Agents',
    title: 'Agents come online. Each one owns a piece of the operation.',
    activeIndexes: [0, 6, 8],
  },
  {
    label: '05 · Ship',
    title: 'Live, learning, improving every day it runs. Never finished.',
    activeIndexes: [0, 6, 8],
  },
]

const departments = [
  { label: 'HR & people', x: 50, y: 8.5 },
  { label: 'legal', x: 23, y: 20 },
  { label: 'operations', x: 77, y: 20 },
  { label: 'IT', x: 9, y: 40 },
  { label: 'finance', x: 91, y: 40 },
  { label: 'success', x: 14, y: 62 },
  { label: 'sales', x: 86, y: 62 },
  { label: 'marketing', x: 64, y: 76 },
]

const toolRolls = [
  { department: 'data', tools: ['bi builder', 'experiment archive', 'product analytics', 'reporting engine'] },
  { department: 'legal', tools: ['contract vault', 'clause checker', 'matter tracker', 'renewal watch'] },
  { department: 'HR & people', tools: ['onboarding flow', 'leave ledger', 'review cycle', 'headcount plan'] },
  { department: 'finance', tools: ['spend control', 'recon engine', 'invoice inbox', 'budget board'] },
]

const forgeRows = [
  { department: 'IT', product: 'security dashboard' },
  { department: 'legal', product: 'legal crm' },
  { department: 'operations', product: 'inspection tracker' },
]

const REPEL_RADIUS = 340
const REPEL_DISTANCE = 36
const REPEL_EASING = 0.08

const networkRef = ref<HTMLElement | null>(null)
const hasStarted = ref(false)
const industryIndex = ref(0)
const stepIndex = ref(0)
const isAuto = ref(true)
const rollIndex = ref(0)
const forgeCount = ref(1)
const briefOpen = ref(false)

const activeIndustry = computed(() => industries[industryIndex.value])
const activeStage = computed(() => stageCopy[stepIndex.value])
const roll = computed(() => toolRolls[rollIndex.value % toolRolls.length])

let stepTimer: ReturnType<typeof setTimeout> | undefined
let rollTimer: ReturnType<typeof setInterval> | undefined
let forgeTimer: ReturnType<typeof setInterval> | undefined
let frame = 0
let pointer: { x: number; y: number } | null = null

function scheduleStep() {
  clearTimeout(stepTimer)
  if (!hasStarted.value || !isAuto.value || stepIndex.value >= stageCopy.length - 1) return
  stepTimer = setTimeout(() => {
    stepIndex.value += 1
  }, 6200)
}

watch([hasStarted, isAuto, stepIndex], scheduleStep)

watch(stepIndex, (value) => {
  clearInterval(rollTimer)
  clearInterval(forgeTimer)

  if (value === 2) {
    rollTimer = setInterval(() => {
      rollIndex.value += 1
    }, 2100)
  }

  if (value === 4) {
    forgeCount.value = 1
    forgeTimer = setInterval(() => {
      forgeCount.value = Math.min(forgeCount.value + 1, forgeRows.length)
    }, 1500)
  } else {
    forgeCount.value = 1
  }
})

function selectStep(index: number) {
  hasStarted.value = true
  isAuto.value = false
  stepIndex.value = index
}

function selectIndustry(index: number) {
  hasStarted.value = true
  isAuto.value = false
  industryIndex.value = index
  stepIndex.value = 0
}

function onPointClick() {
  if (!hasStarted.value) {
    hasStarted.value = true
    return
  }

  isAuto.value = false
  stepIndex.value = (stepIndex.value + 1) % stageCopy.length
}

function onPointerMove(event: PointerEvent) {
  pointer = { x: event.clientX, y: event.clientY }
}

function onPointerLeave() {
  pointer = null
}

onMounted(() => {
  const network = networkRef.value
  if (!network) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    network.style.transform = 'translate(-50%, -50%)'
    return
  }

  let x = 0
  let y = 0
  let scale = 1

  const tick = () => {
    const targetScale = stepIndex.value === 4 ? 0.78 : 1
    const box = network.getBoundingClientRect()
    const centreX = box.left + box.width / 2
    const centreY = box.top + box.height / 2

    let toX = 0
    let toY = 0
    let shrink = 0

    if (pointer) {
      const dx = pointer.x - centreX
      const dy = pointer.y - centreY
      const distance = Math.hypot(dx, dy)

      if (distance < REPEL_RADIUS && distance > 1) {
        const strength = 1 - distance / REPEL_RADIUS
        toX = (-dx / distance) * strength * REPEL_DISTANCE
        toY = (-dy / distance) * strength * REPEL_DISTANCE
        shrink = strength * 0.05
      }
    }

    x += (toX - x) * REPEL_EASING
    y += (toY - y) * REPEL_EASING
    scale += (targetScale * (1 - shrink) - scale) * REPEL_EASING

    network.style.transform = `translate(calc(-50% + ${x.toFixed(2)}px), calc(-50% + ${y.toFixed(2)}px)) scale(${scale.toFixed(4)})`
    frame = requestAnimationFrame(tick)
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true })
  document.addEventListener('pointerleave', onPointerLeave)
  frame = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  clearTimeout(stepTimer)
  clearInterval(rollTimer)
  clearInterval(forgeTimer)
  window.removeEventListener('pointermove', onPointerMove)
  document.removeEventListener('pointerleave', onPointerLeave)
})
</script>

<style scoped>
.diagnose-page {
  --scan-ink: var(--text);
  --scan-accent: var(--brand-deep);
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  background: var(--bg);
  color: var(--scan-ink);
  isolation: isolate;
  font-family: var(--font-sans);
}

.diagnose-starfield {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.diagnose-starfield span {
  position: absolute;
  border-radius: 50%;
  background: color-mix(in srgb, var(--scan-ink) 55%, transparent);
  animation: diagnose-star-pulse 4.8s ease-in-out infinite;
}

.diagnose-stage {
  position: relative;
  z-index: 1;
  min-height: 100svh;
}

.diagnose-intro {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 6;
  display: grid;
  justify-items: center;
  gap: 1.6rem;
  width: min(100% - 3rem, 44rem);
  text-align: center;
  transform: translate(-50%, -50%);
  transition:
    opacity 700ms ease,
    transform 700ms ease;
}

.diagnose-page.is-awake .diagnose-intro {
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -62%);
}

.diagnose-copy h1 {
  margin: 0;
  font-size: clamp(1.9rem, calc(4.2*var(--vwu)), 3.4rem);
  font-weight: 700;
  letter-spacing: -0.032em;
  line-height: 1.05;
}

.diagnose-copy p,
.diagnose-hint {
  margin: 1rem 0 0;
  color: color-mix(in srgb, var(--scan-ink) 40%, transparent);
  font-family: var(--font-mono);
  font-size: clamp(0.55rem, calc(0.8*var(--vwu)), 0.7rem);
  letter-spacing: 0.28rem;
  line-height: 1.6;
  text-transform: uppercase;
}

.diagnose-point {
  position: relative;
  display: grid;
  width: 4.2rem;
  aspect-ratio: 1;
  border: 1px solid color-mix(in srgb, var(--brand) 34%, transparent);
  border-radius: 50%;
  background: color-mix(in srgb, var(--brand) 4%, transparent);
  box-shadow: 0 0 5.5rem color-mix(in srgb, var(--brand) 34%, transparent);
  padding: 0;
  place-items: center;
  transition:
    border-color 180ms ease,
    transform 220ms ease;
}

.diagnose-point::before,
.diagnose-point::after {
  position: absolute;
  inset: -0.2rem;
  border: 1px solid color-mix(in srgb, var(--brand) 28%, transparent);
  border-radius: inherit;
  content: '';
  animation: diagnose-breathe 2.8s ease-out infinite;
}

.diagnose-point::after {
  animation-delay: 1.4s;
}

.diagnose-point span {
  width: 0.95rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--brand);
  box-shadow: 0 0 2rem color-mix(in srgb, var(--scan-accent) 75%, transparent);
}

.diagnose-point:hover {
  border-color: color-mix(in srgb, var(--scan-accent) 68%, transparent);
  transform: scale(1.05);
}

.diagnose-map {
  position: absolute;
  inset: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity 900ms ease;
}

.diagnose-page.is-awake .diagnose-map {
  opacity: 1;
  pointer-events: auto;
}

.diagnose-system-list {
  position: absolute;
  left: clamp(1.2rem, calc(3*var(--vwu)), 3.4rem);
  top: 50%;
  z-index: 5;
  display: grid;
  gap: 0.3rem;
  justify-items: start;
  transform: translateY(-50%);
}

.diagnose-system-list p {
  margin: 0 0 0.6rem;
  color: color-mix(in srgb, var(--scan-ink) 24%, transparent);
  font-family: var(--font-mono);
  font-size: clamp(0.5rem, calc(0.66*var(--vwu)), 0.62rem);
  letter-spacing: 0.18rem;
  text-transform: uppercase;
}

.diagnose-system-list button {
  position: relative;
  display: grid;
  gap: 0.15rem;
  justify-items: start;
  padding: 0.3rem 0 0.3rem 0.9rem;
  border: 0;
  background: transparent;
  color: color-mix(in srgb, var(--scan-ink) 34%, transparent);
  font-family: var(--font-mono);
  font-size: clamp(0.55rem, calc(0.75*var(--vwu)), 0.68rem);
  letter-spacing: 0.14rem;
  text-align: left;
  text-transform: uppercase;
  transition: color 200ms ease;
}

.diagnose-system-list button::before {
  position: absolute;
  left: 0;
  top: 50%;
  width: 0.28rem;
  height: 0.28rem;
  border-radius: 50%;
  background: color-mix(in srgb, var(--scan-ink) 24%, transparent);
  content: '';
  transform: translateY(-50%);
  transition: background 200ms ease;
}

.diagnose-system-list button:hover {
  color: color-mix(in srgb, var(--scan-ink) 70%, transparent);
}

.diagnose-system-list button.is-active {
  color: var(--scan-ink);
}

.diagnose-system-list button.is-active::before {
  background: var(--brand);
  box-shadow: 0 0 0.7rem color-mix(in srgb, var(--scan-accent) 80%, transparent);
}

.diagnose-system-list button small {
  color: color-mix(in srgb, var(--scan-accent) 66%, transparent);
  font-size: 0.5rem;
  letter-spacing: 0.14rem;
}

.diagnose-platform-caption,
.diagnose-departments,
.diagnose-roll {
  opacity: 0;
  pointer-events: none;
  transition: opacity 620ms ease;
}

.diagnose-step-2 .diagnose-platform-caption,
.diagnose-step-2 .diagnose-departments,
.diagnose-step-2 .diagnose-roll {
  opacity: 1;
}

.diagnose-platform-caption {
  position: absolute;
  left: 50%;
  top: clamp(5.5rem, 12svh, 8rem);
  z-index: 3;
  margin: 0;
  color: color-mix(in srgb, var(--scan-ink) 30%, transparent);
  font-family: var(--font-mono);
  font-size: clamp(0.5rem, calc(0.66*var(--vwu)), 0.62rem);
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  transform: translateX(-50%);
}

.diagnose-departments {
  position: absolute;
  inset: 0;
  z-index: 2;
}

.diagnose-departments span {
  position: absolute;
  color: color-mix(in srgb, var(--scan-ink) 22%, transparent);
  font-family: var(--font-mono);
  font-size: clamp(0.5rem, calc(0.66*var(--vwu)), 0.62rem);
  letter-spacing: 0.14rem;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}

.diagnose-roll {
  position: absolute;
  left: clamp(1.2rem, calc(3*var(--vwu)), 3.4rem);
  bottom: clamp(5rem, 12svh, 8rem);
  z-index: 3;
  display: grid;
  gap: 0.35rem;
  font-family: var(--font-mono);
  font-size: clamp(0.5rem, calc(0.66*var(--vwu)), 0.62rem);
  letter-spacing: 0.14rem;
  text-transform: uppercase;
}

.diagnose-roll span {
  color: color-mix(in srgb, var(--scan-ink) 42%, transparent);
  animation: diagnose-roll-up 2.1s ease-out both;
}

.diagnose-roll span:nth-child(1) {
  animation-delay: 0s;
}
.diagnose-roll span:nth-child(2) {
  animation-delay: 0.16s;
}
.diagnose-roll span:nth-child(3) {
  animation-delay: 0.32s;
}
.diagnose-roll span:nth-child(4) {
  animation-delay: 0.48s;
}

.diagnose-roll strong {
  color: color-mix(in srgb, var(--scan-ink) 60%, transparent);
  font: inherit;
  letter-spacing: 0.18rem;
}

.diagnose-roll strong::before {
  margin-right: 0.5rem;
  color: var(--brand);
  content: '•';
}

.diagnose-forge {
  position: absolute;
  right: clamp(1.2rem, calc(3*var(--vwu)), 3.4rem);
  top: 45%;
  z-index: 3;
  display: grid;
  gap: 0.55rem;
  justify-items: end;
  opacity: 0;
  pointer-events: none;
  text-align: right;
  transform: translateY(-50%);
  transition: opacity 620ms ease;
}

.diagnose-step-4 .diagnose-forge {
  opacity: 1;
}

.diagnose-forge p {
  margin: 0 0 0.35rem;
  color: color-mix(in srgb, var(--scan-ink) 24%, transparent);
  font-family: var(--font-mono);
  font-size: clamp(0.5rem, calc(0.66*var(--vwu)), 0.62rem);
  letter-spacing: 0.18rem;
  text-transform: uppercase;
}

.diagnose-forge span {
  display: flex;
  align-items: baseline;
  gap: 0.7rem;
  animation: diagnose-forge-in 520ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.diagnose-forge i {
  color: color-mix(in srgb, var(--scan-ink) 28%, transparent);
  font-family: var(--font-mono);
  font-size: 0.52rem;
  font-style: normal;
  letter-spacing: 0.16rem;
  text-transform: uppercase;
}

.diagnose-forge b {
  color: color-mix(in srgb, var(--scan-ink) 78%, transparent);
  font-size: 0.82rem;
  font-weight: 400;
}

.diagnose-forge em {
  color: color-mix(in srgb, var(--scan-accent) 70%, transparent);
  font-family: var(--font-mono);
  font-size: 0.52rem;
  font-style: normal;
  letter-spacing: 0.16rem;
  text-transform: uppercase;
}

.diagnose-forge em::before {
  margin-right: 0.4rem;
  content: '•';
}

.diagnose-cta {
  position: absolute;
  border: 0;
  background: transparent;
  right: clamp(1.2rem, calc(4*var(--vwu)), 3.4rem);
  bottom: clamp(1.6rem, 3.2svh, 2.6rem);
  z-index: 4;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid color-mix(in srgb, var(--scan-ink) 16%, transparent);
  color: color-mix(in srgb, var(--scan-ink) 44%, transparent);
  font-family: var(--font-mono);
  font-size: clamp(0.52rem, calc(0.7*var(--vwu)), 0.66rem);
  letter-spacing: 0.18rem;
  text-transform: uppercase;
  transition:
    color 200ms ease,
    border-color 200ms ease;
}

.diagnose-cta::before {
  margin-right: 0.7rem;
  color: var(--brand);
  content: '•';
}

.diagnose-cta:hover {
  border-color: color-mix(in srgb, var(--brand) 50%, transparent);
  color: color-mix(in srgb, var(--scan-ink) 86%, transparent);
}

.diagnose-network {
  position: absolute;
  left: 50%;
  top: 44%;
  width: min(92vw, 96rem);
  height: min(66svh, 42rem);
  transform: translate(-50%, -50%);
}

.diagnose-network svg {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.diagnose-orbit {
  fill: none;
  stroke: color-mix(in srgb, var(--scan-ink) 6%, transparent);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}

.diagnose-spoke {
  fill: none;
  stroke: color-mix(in srgb, var(--scan-ink) 13%, transparent);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}

.diagnose-packet {
  fill: color-mix(in srgb, var(--scan-ink) 55%, transparent);
  opacity: 0;
}

.diagnose-hub {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 3;
  width: 0.72rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--brand);
  transform: translate(-50%, -50%);
  animation: diagnose-hub-pulse 5.2s ease-in-out infinite;
}

.diagnose-hub::after {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 34rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    color-mix(in srgb, var(--brand) 16%, transparent),
    color-mix(in srgb, var(--brand) 5%, transparent) 32%,
    transparent 68%
  );
  content: '';
  pointer-events: none;
  transform: translate(-50%, -50%);
}

.diagnose-scan-fan {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  width: 0;
  height: 0;
  transform-origin: 50% 50%;
  animation: diagnose-sweep 16s linear infinite;
}

.diagnose-scan-fan i {
  position: absolute;
  left: 0;
  top: 0;
  width: min(22vw, 21rem);
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0 44%,
    color-mix(in srgb, var(--scan-ink) 9%, transparent) 58%,
    color-mix(in srgb, var(--scan-ink) 26%, transparent) 88%,
    transparent
  );
  transform: rotate(calc((var(--fan-index) - 12.5) * 1.9deg));
  transform-origin: 0 50%;
}

.diagnose-orbit,
.diagnose-scan-fan {
  opacity: 0;
  transition: opacity 620ms ease;
}

.diagnose-step-0 .diagnose-orbit,
.diagnose-step-0 .diagnose-scan-fan {
  opacity: 1;
}

.diagnose-node {
  position: absolute;
  left: var(--node-x);
  top: var(--node-y);
  z-index: 4;
  display: grid;
  gap: 0.55rem;
  justify-items: center;
  color: color-mix(in srgb, var(--scan-ink) 46%, transparent);
  font-size: clamp(0.72rem, calc(0.95*var(--vwu)), 0.92rem);
  line-height: 1;
  text-transform: lowercase;
  transform: translate(-50%, -50%);
  animation: diagnose-node-float 4.5s ease-in-out infinite;
  animation-delay: var(--node-delay);
  transition: color 260ms ease;
  white-space: nowrap;
}

.diagnose-node i {
  position: relative;
  width: 0.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: color-mix(in srgb, var(--scan-ink) 50%, transparent);
  transition:
    width 260ms ease,
    background 260ms ease,
    box-shadow 260ms ease;
}

.diagnose-node.is-below i {
  order: -1;
}

.diagnose-node.is-active {
  color: var(--scan-ink);
}

.diagnose-node.is-active i {
  background: var(--brand);
  box-shadow: 0 0 0.9rem color-mix(in srgb, var(--scan-accent) 80%, transparent);
}

.diagnose-node.is-active i::after {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    color-mix(in srgb, var(--brand) 30%, transparent),
    color-mix(in srgb, var(--brand) 8%, transparent) 38%,
    transparent 70%
  );
  content: '';
  pointer-events: none;
  transform: translate(-50%, -50%);
}

.diagnose-step-3 .diagnose-node.is-active i,
.diagnose-step-4 .diagnose-node.is-active i {
  box-shadow:
    0 0 0 0.28rem var(--bg),
    0 0 0 0.34rem color-mix(in srgb, var(--brand) 50%, transparent),
    0 0 1rem color-mix(in srgb, var(--brand) 50%, transparent);
}

.diagnose-node.is-agent {
  z-index: 5;
  color: color-mix(in srgb, var(--scan-accent) 86%, transparent);
  animation: diagnose-agent-cycle 6.6s ease-in-out infinite both;
  animation-delay: var(--node-delay);
}

.diagnose-node.is-agent i {
  background: var(--brand);
  box-shadow: 0 0 0.9rem color-mix(in srgb, var(--scan-accent) 80%, transparent);
}

.diagnose-node.is-agent i::after {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    color-mix(in srgb, var(--brand) 26%, transparent),
    color-mix(in srgb, var(--brand) 7%, transparent) 38%,
    transparent 70%
  );
  content: '';
  pointer-events: none;
  transform: translate(-50%, -50%);
}

.diagnose-window {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 4;
  display: grid;
  width: 5.6rem;
  height: 4rem;
  align-content: center;
  gap: 0.34rem;
  padding-left: 0.85rem;
  border: 1px solid color-mix(in srgb, var(--brand) 40%, transparent);
  border-radius: 0.7rem;
  background: color-mix(in srgb, var(--bg) 62%, transparent);
  transform: translate(-50%, -50%);
  animation: diagnose-window-in 720ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.diagnose-window i {
  height: 1px;
  background: color-mix(in srgb, var(--brand) 50%, transparent);
}

.diagnose-window i:first-child {
  width: 2.2rem;
}
.diagnose-window i:nth-child(2) {
  width: 1.5rem;
}
.diagnose-window i:last-child {
  width: 1.9rem;
}

.diagnose-pulse {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
}

.diagnose-pulse i {
  position: absolute;
  left: 0;
  top: 0;
  width: 22rem;
  aspect-ratio: 1;
  border: 1px solid color-mix(in srgb, var(--brand) 34%, transparent);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: diagnose-pulse-out 4.6s ease-out infinite;
}

.diagnose-pulse i:nth-child(2) {
  animation-delay: 1.5s;
}
.diagnose-pulse i:last-child {
  animation-delay: 3s;
}

.diagnose-bottom-copy {
  position: absolute;
  left: 50%;
  bottom: clamp(1.6rem, 3.2svh, 2.6rem);
  z-index: 4;
  display: grid;
  width: min(100% - 2rem, 38rem);
  justify-items: center;
  text-align: center;
  transform: translateX(-50%);
  animation: diagnose-copy-in 620ms ease both;
}

.diagnose-bottom-copy span {
  color: color-mix(in srgb, var(--scan-accent) 76%, transparent);
  font-family: var(--font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.18rem;
  text-transform: uppercase;
}

.diagnose-bottom-copy strong {
  max-width: 40ch;
  margin-top: 0.7rem;
  color: var(--scan-ink);
  font-size: clamp(0.85rem, calc(1.05*var(--vwu)), 1rem);
  font-weight: 400;
  line-height: 1.38;
}

.diagnose-bottom-copy div {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(1rem, calc(2.4*var(--vwu)), 2.2rem);
  justify-content: center;
  margin-top: 1.25rem;
}

.diagnose-bottom-copy button {
  position: relative;
  border: 0;
  background: transparent;
  color: color-mix(in srgb, var(--scan-ink) 30%, transparent);
  font-family: var(--font-mono);
  font-size: clamp(0.52rem, calc(0.7*var(--vwu)), 0.66rem);
  letter-spacing: 0.18rem;
  padding: 0.55rem 0 0;
  text-transform: uppercase;
  transition: color 200ms ease;
}

.diagnose-bottom-copy button::before {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 1px;
  background: color-mix(in srgb, var(--scan-ink) 30%, transparent);
  content: '';
  opacity: 0;
  transition:
    opacity 260ms ease,
    background 260ms ease;
}

.diagnose-bottom-copy button.is-visited::before {
  opacity: 1;
}

.diagnose-bottom-copy button.is-active::before {
  background: var(--brand);
}

.diagnose-bottom-copy button.is-visited {
  color: color-mix(in srgb, var(--scan-ink) 50%, transparent);
}

.diagnose-bottom-copy button.is-active,
.diagnose-bottom-copy button:hover {
  color: var(--scan-ink);
}

.diagnose-bottom-copy button::after {
  position: absolute;
  left: -0.6rem;
  right: -0.6rem;
  top: 0.15rem;
  bottom: -0.35rem;
  border: 1px solid color-mix(in srgb, var(--brand) 55%, transparent);
  border-radius: 0.35rem;
  content: '';
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease;
}

.diagnose-bottom-copy button:hover::after {
  opacity: 1;
}

@media (max-width: 900px) {
  .diagnose-system-list,
  .diagnose-departments,
  .diagnose-roll,
  .diagnose-forge,
  .diagnose-platform-caption {
    display: none;
  }

  .diagnose-network {
    width: 96vw;
    height: 54svh;
  }
}

@keyframes diagnose-breathe {
  0% {
    opacity: 0.72;
    transform: scale(0.78);
  }
  70%,
  100% {
    opacity: 0;
    transform: scale(1.85);
  }
}

@keyframes diagnose-star-pulse {
  0%,
  100% {
    opacity: 0.08;
    transform: scale(0.7);
  }
  50% {
    opacity: 0.55;
    transform: scale(1);
  }
}

@keyframes diagnose-sweep {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes diagnose-agent-cycle {
  0%,
  6% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.72);
  }
  16%,
  33% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  46%,
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.94);
  }
}

@keyframes diagnose-window-in {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.72);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes diagnose-pulse-out {
  from {
    opacity: 0.55;
    transform: translate(-50%, -50%) scale(0.16);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes diagnose-roll-up {
  from {
    opacity: 0;
    transform: translateY(0.9rem);
  }
  30%,
  70% {
    opacity: 0.85;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-0.5rem);
  }
}

@keyframes diagnose-forge-in {
  from {
    opacity: 0;
    transform: translateY(0.6rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes diagnose-hub-pulse {
  0%,
  100% {
    box-shadow: 0 0 1.6rem color-mix(in srgb, var(--brand) 55%, transparent);
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    box-shadow: 0 0 2.6rem color-mix(in srgb, var(--scan-accent) 80%, transparent);
    transform: translate(-50%, -50%) scale(1.12);
  }
}

@keyframes diagnose-node-float {
  0%,
  100% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, calc(-50% - 0.28rem));
  }
}

@keyframes diagnose-copy-in {
  from {
    opacity: 0;
    transform: translate(-50%, 0.8rem);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .diagnose-starfield span,
  .diagnose-point::before,
  .diagnose-point::after,
  .diagnose-scan-fan,
  .diagnose-hub,
  .diagnose-node,
  .diagnose-pulse i {
    animation: none;
  }
}
</style>
