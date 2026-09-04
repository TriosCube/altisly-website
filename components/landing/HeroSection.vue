<template>
  <header ref="heroRef" class="hero" :class="{ 'is-in': entered }">
    <div class="sky" aria-hidden="true">
      <span class="glow"></span>
      <svg class="lattice" viewBox="0 0 120 60" preserveAspectRatio="xMidYMid slice">
        <g class="rules">
          <path d="M0 14 H120" />
          <path d="M0 34 H120" />
          <path d="M0 50 H120" />
          <path d="M26 0 V60" />
          <path d="M58 0 V60" />
          <path d="M88 0 V60" />
        </g>
        <g class="nodes">
          <circle cx="26" cy="14" r="0.55" style="--d: 0s" />
          <circle cx="58" cy="34" r="0.7" style="--d: 1.4s" />
          <circle cx="88" cy="14" r="0.5" style="--d: 2.6s" />
          <circle cx="26" cy="50" r="0.5" style="--d: 3.8s" />
          <circle cx="88" cy="50" r="0.6" style="--d: 5.1s" />
          <circle cx="58" cy="14" r="0.45" style="--d: 6.3s" />
        </g>
        <circle class="signal" r="0.55">
          <animateMotion dur="14s" repeatCount="indefinite" path="M26 14 H88" />
          <animate
            attributeName="opacity"
            dur="14s"
            repeatCount="indefinite"
            values="0;0.9;0.9;0"
            keyTimes="0;0.12;0.8;1"
          />
        </circle>
        <circle class="signal" r="0.45">
          <animateMotion dur="19s" begin="5s" repeatCount="indefinite" path="M58 50 V14" />
          <animate
            attributeName="opacity"
            dur="19s"
            begin="5s"
            repeatCount="indefinite"
            values="0;0.85;0.85;0"
            keyTimes="0;0.12;0.8;1"
          />
        </circle>
      </svg>
    </div>

    <div class="hero-viewport">
    <div class="container-isura hero-inner" :style="{ '--recede': recede }">
      <div class="hero-copy">
        <h1 class="reveal headline" style="--i: 0">
          We build the
          <span class="mark">
            <span class="mark-field"></span>
            <span class="mark-text">systems</span>
            <span class="mark-star">✦</span>
          </span>
          businesses run on.
        </h1>

        <p class="reveal lede" style="--i: 1">
          The software behind the operations a business cannot afford to get wrong.
        </p>

        <div class="reveal flex gap-3 items-center flex-wrap" style="--i: 2">
          <AppButton variant="lime" size="lg" to="/contact">Talk to us →</AppButton>
          <AppButton variant="ghost" size="lg" to="/diagnose">Run a diagnostic</AppButton>
        </div>
      </div>

      <HeroStage />
    </div>
    </div>

    <div class="container-isura">
      <div class="reveal rail" style="--i: 3">
        <div v-for="capability in capabilities" :key="capability.label" class="rail-cell">
          <span class="rail-number">{{ capability.number }}</span>
          <span class="rail-label">{{ capability.label }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import HeroStage from './HeroStage.vue'
import { capabilities } from '@/data/content'

const heroRef = ref<HTMLElement | null>(null)
const entered = ref(false)
const recede = ref(0)

let frame = 0
let reduced = false

function update() {
  const hero = heroRef.value
  if (!hero || reduced) return

  const height = hero.offsetHeight || 1
  const travelled = Math.min(Math.max(-hero.getBoundingClientRect().top, 0), height)
  recede.value = travelled / height
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
.hero {
  position: relative;
  z-index: 0;
  padding: 0 0 4rem;
  overflow: hidden;
  background-color: var(--bg);
  background-image: radial-gradient(circle at center, var(--border) 1px, transparent 1px);
  background-size: 34px 34px;
}

.sky {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

.glow {
  position: absolute;
  right: -6%;
  top: -22%;
  width: 46%;
  aspect-ratio: 1.15;
  border-radius: 50%;
  background: color-mix(in srgb, var(--brand) 26%, transparent);
  filter: blur(90px);
  animation: breathe 26s ease-in-out infinite;
}

.lattice {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.rules path {
  fill: none;
  stroke: var(--border-strong);
  stroke-width: 0.6;
  vector-effect: non-scaling-stroke;
  opacity: 0.55;
}

.nodes circle {
  fill: var(--brand-deep);
  animation: node-pulse 7.4s ease-in-out infinite;
  animation-delay: var(--d);
}

.signal {
  fill: var(--brand-deep);
  opacity: 0;
}

@keyframes breathe {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.85;
  }
  50% {
    transform: translate3d(-4%, 3%, 0) scale(1.08);
    opacity: 1;
  }
}

@keyframes node-pulse {
  0%,
  100% {
    opacity: 0.22;
    r: 0.45;
  }
  50% {
    opacity: 1;
    r: 0.85;
  }
}

@media (prefers-reduced-motion: reduce) {
  .glow,
  .nodes circle {
    animation: none;
  }

  .signal {
    display: none;
  }

  .hero-inner {
    transform: none;
    opacity: 1;
  }

  .reveal,
  .mark-star {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .mark-field {
    transform: scaleX(1);
    transition: none;
  }
}
</style>
