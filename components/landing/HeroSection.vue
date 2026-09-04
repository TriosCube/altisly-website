<template>
  <header ref="heroRef" class="hero" :class="{ 'is-in': entered }">
    <div class="container-isura hero-inner" :style="{ '--recede': recede }">
      <div class="hero-copy">
        <h1 class="reveal headline" style="--i: 0">
          We build the systems
          <span class="mark">
            <span class="mark-field"></span>
            <span class="mark-text">businesses run on.</span>
            <span class="mark-star">✦</span>
          </span>
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
  padding: 3.5rem 0 5rem;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  align-items: center;
  transform: translateY(calc(var(--recede) * -26px)) scale(calc(1 - var(--recede) * 0.04));
  transform-origin: 50% 0;
  opacity: calc(1 - var(--recede) * 0.35);
}

@media (min-width: 1024px) {
  .hero-inner {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.02fr);
    gap: 3rem;
  }
}

.hero-copy {
  position: relative;
  z-index: 2;
}

.reveal {
  opacity: 0;
  transform: translateY(0.9rem);
  transition:
    opacity 700ms ease,
    transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i) * 110ms);
}

.is-in .reveal {
  opacity: 1;
  transform: none;
}

.headline {
  margin: 0;
  max-width: 12ch;
  font-size: clamp(46px, 6vw, 88px);
  font-weight: 800;
  letter-spacing: -0.038em;
  line-height: 0.98;
  color: var(--text);
}

.mark {
  position: relative;
  display: inline-block;
  isolation: isolate;
  padding: 0 0.32em 0 0.2em;
}

.mark-field {
  position: absolute;
  left: 0;
  right: 0;
  top: 0.11em;
  bottom: 0.04em;
  z-index: -1;
  background: var(--brand);
  border-radius: 4px 20px 6px 22px;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: 420ms;
}

.is-in .mark-field {
  transform: scaleX(1);
}

.mark-text {
  color: var(--on-brand);
}

.mark-star {
  position: absolute;
  right: -0.16em;
  top: -0.1em;
  font-size: 0.34em;
  color: var(--brand-deep);
  opacity: 0;
  transition: opacity 400ms ease 1000ms;
}

.is-in .mark-star {
  opacity: 1;
}

.lede {
  max-width: 34ch;
  margin: 1.7rem 0 2.2rem;
  font-size: clamp(15.5px, 1.5vw, 17px);
  line-height: 1.6;
  color: var(--muted);
}

.rail {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid var(--border);
  margin-top: 3.5rem;
}

@media (min-width: 900px) {
  .rail {
    grid-template-columns: repeat(4, 1fr);
  }
}

.rail-cell {
  display: flex;
  align-items: baseline;
  gap: 0.7rem;
  padding: 1.15rem 1.6rem 0 0;
}

.rail-number {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.16em;
  color: var(--brand-deep);
}

.rail-label {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.012em;
}

@media (prefers-reduced-motion: reduce) {
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
