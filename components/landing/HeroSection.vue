<template>
  <header
    ref="heroRef"
    class="hero"
    :class="{ 'is-in': entered }"
    :style="{ '--nx': `${net.x}%`, '--ny': `${net.y}%` }"
  >
    <span class="hero-net" aria-hidden="true"></span>

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

        <HeroStage :capability="railIndex" />
      </div>
    </div>

    <div class="container-isura rail-wrap">
      <div class="reveal rail" style="--i: 3">
        <div
          v-for="(capability, index) in capabilities"
          :key="capability.label"
          class="rail-cell"
          :class="{ 'is-active': index === railIndex, 'is-visited': index <= railIndex }"
        >
          <span class="rail-number">{{ capability.number }}</span>
          <span class="rail-label">{{ capability.label }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import HeroStage from './HeroStage.vue'
import { capabilities } from '@/data/content'

const heroRef = ref<HTMLElement | null>(null)
const entered = ref(false)
const recede = ref(0)
const net = reactive({ x: 50, y: 42 })
const railIndex = ref(0)

let frame = 0
let ease = 0
let rail: ReturnType<typeof setInterval> | undefined
let reduced = false
let drifting = false
let inView = true
let watcher: IntersectionObserver | null = null
const netTarget = { x: 50, y: 42 }

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

function onPointerMove(event: PointerEvent) {
  const hero = heroRef.value
  if (!hero || !inView) return

  const rect = hero.getBoundingClientRect()
  netTarget.x = ((event.clientX - rect.left) / rect.width) * 100
  netTarget.y = ((event.clientY - rect.top) / rect.height) * 100
  wake()
}

/* The mask this drives is a full width repaint, so the loop only runs while the light is still
   travelling and only while the hero is on screen. Once it lands, it parks until the pointer moves. */
function drift() {
  const dx = netTarget.x - net.x
  const dy = netTarget.y - net.y

  net.x += dx * 0.07
  net.y += dy * 0.07

  if (!inView || (Math.abs(dx) < 0.04 && Math.abs(dy) < 0.04)) {
    drifting = false
    return
  }

  ease = requestAnimationFrame(drift)
}

function wake() {
  if (drifting || reduced || !inView) return
  drifting = true
  ease = requestAnimationFrame(drift)
}

onMounted(() => {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  entered.value = true
  if (reduced) {
    railIndex.value = capabilities.length - 1
    return
  }

  update()
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
  window.addEventListener('pointermove', onPointerMove, { passive: true })

  if (heroRef.value && 'IntersectionObserver' in window) {
    watcher = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting
        if (inView) wake()
      },
      { threshold: 0 },
    )
    watcher.observe(heroRef.value)
  }

  wake()

  rail = setInterval(() => {
    if (document.hidden) return
    railIndex.value = (railIndex.value + 1) % capabilities.length
  }, 4200)
})

onBeforeUnmount(() => {
  clearInterval(rail)
  watcher?.disconnect()
  cancelAnimationFrame(frame)
  cancelAnimationFrame(ease)
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
})
</script>

<style scoped>
.hero {
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 0;
  padding: 0 0 clamp(0.75rem, 1.8svh, 1.5rem);
  overflow: hidden;
  background-color: var(--bg);
}

/* The net. Same 46px lattice the tenant-console auth layout uses, but drawn as its own layer so the
   pointer glow can mask it: barely present across the page, resolved where the light falls. */
.hero-net {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image:
    linear-gradient(color-mix(in srgb, var(--text) 7%, transparent) 1px, transparent 1px),
    linear-gradient(90deg, color-mix(in srgb, var(--text) 7%, transparent) 1px, transparent 1px);
  background-size: 46px 46px;
  mask-image: radial-gradient(
    38rem 38rem at var(--nx, 50%) var(--ny, 42%),
    #000 0%,
    rgba(0, 0, 0, 0.72) 26%,
    rgba(0, 0, 0, 0.22) 54%,
    rgba(0, 0, 0, 0.11) 100%
  );
  opacity: 0;
  transition: opacity 900ms ease 200ms;
}

.is-in .hero-net {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .hero-net {
    mask-image: none;
    opacity: 0.34;
  }
}

.rail-wrap {
  position: relative;
  z-index: 1;
}

.hero-viewport {
  position: relative;
  z-index: 1;
  flex: none;
  display: grid;
  align-items: center;
  padding: clamp(1.25rem, 3.6svh, 3.5rem) 0 clamp(0.5rem, 1.2svh, 1rem);
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
    grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr);
    gap: 3rem;
  }
}

.hero-copy {
  position: relative;
  z-index: 2;
}

.container-isura {
  position: relative;
  z-index: 1;
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
  max-width: 13ch;
  font-size: clamp(38px, 6.1vw, 87px);
  font-weight: 800;
  letter-spacing: -0.038em;
  line-height: 0.98;
  color: var(--text);
}

.mark {
  position: relative;
  display: inline-block;
  isolation: isolate;
  white-space: nowrap;
  padding: 0 0.16em;
}

.mark-field {
  position: absolute;
  left: -0.04em;
  right: -0.04em;
  top: 0.13em;
  bottom: 0.08em;
  z-index: -1;
  background: var(--brand);
  border-radius: 3px 14px 4px 16px;
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
  right: -0.12em;
  top: 0.02em;
  font-size: 0.3em;
  color: var(--brand-deep);
  opacity: 0;
  transition: opacity 400ms ease 1000ms;
}

.is-in .mark-star {
  opacity: 1;
}

.lede {
  max-width: 36ch;
  margin: 1.6rem 0 2.1rem;
  font-size: clamp(15px, 1.3vw, 16px);
  line-height: 1.6;
  color: var(--muted);
}

.rail {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.4rem 0;
  margin-top: clamp(2rem, 12svh, 9rem);
}

@media (min-width: 900px) {
  .rail {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Lifted from the diagnose scanner's step trail: each cell owns its rule, the rule goes lime on the
   active one, and the index walks the row so the strip reads as a sequence rather than four labels. */
.rail-cell {
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 0.7rem;
  padding: 0 1.6rem 0.85rem 0;
}

.rail-cell::before {
  position: absolute;
  left: 0;
  right: 1.6rem;
  bottom: 0;
  height: 1px;
  background: var(--border);
  content: '';
  transition:
    background 260ms ease,
    opacity 260ms ease;
}

.rail-cell.is-visited::before {
  background: var(--border-strong);
}

.rail-cell.is-active::before {
  background: var(--brand);
}

.rail-number {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.16em;
  color: var(--muted-2);
  transition: color 200ms ease;
}

.is-visited .rail-number {
  color: var(--brand-deep);
}

.rail-label {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.012em;
  color: var(--muted);
  transition: color 200ms ease;
}

.is-visited .rail-label {
  color: var(--text-2);
}

.is-active .rail-label {
  color: var(--text);
}

/* Short screens: laptops with toolbars, split windows. The type answers to viewport height as well
   as width so the hero and the strip still share one screen. The 62px cap keeps the line break
   intact, verified down to 1024x560. */
@media (max-height: 760px) {
  .headline {
    font-size: clamp(34px, 5vw, 62px);
  }

  .lede {
    margin: 1.1rem 0 1.4rem;
  }

  .rail {
    margin-top: clamp(1rem, 7svh, 4rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .drift {
    animation: none;
  }

  .hero-inner {
    transform: none;
    opacity: 1;
  }

  .rail-cell::before,
  .rail-number,
  .rail-label {
    transition: none;
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
