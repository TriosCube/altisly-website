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
        <!-- The first line is what the server renders and what a crawler reads.
             The cycle is decoration on top of it, hidden from assistive tech so
             the heading a screen reader announces never changes under it. -->
        <h1 class="reveal headline" style="--i: 0">
          <span class="sr-only">We build the things a business cannot run without.</span>
          <transition name="line">
            <span :key="index" class="headline-line" aria-hidden="true">
              <span v-for="(row, r) in line" :key="r" class="hl">
                <template v-if="row.text">{{ row.text }} </template>
                <span v-if="row.mark" class="mark">
                  <span class="mark-field"></span>
                  <span class="mark-text">{{ row.mark }}</span>
                  <span class="mark-star">✦</span>
                </span>
                <template v-if="row.after"> {{ row.after }}</template>
              </span>
            </span>
          </transition>
        </h1>

        <p class="reveal lede" style="--i: 1">
          The software behind the operations a business cannot afford to get wrong.
        </p>

        <div class="reveal hero-actions flex gap-3 items-center flex-wrap" style="--i: 2">
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

import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import HeroStage from './HeroStage.vue'
import { capabilities } from '@/data/content'

// Three readings of the same promise, drawn from language already on the site.
// The first is the canonical one: it is server rendered and it is what the
// heading reads as to assistive tech.
const lines = [
  // Measured against Onest ExtraBold at the headline's own weight, tracking and
  // highlight padding, because guessing by character count does not survive a
  // proportional face. Each headline drops by an even step, so the right edges
  // of the three lines sit on one straight line rather than a ragged one:
  //   1005 -> 802 -> 610   (step 203, 192)
  //   1005 -> 774 -> 557   (step 231, 217)
  //    952 -> 668 -> 398   (step 284, 270)
  [
    { text: 'We build the things a' },
    { mark: 'business', after: 'cannot' },
    { text: 'run without.' },
  ],
  [
    { text: 'We work in the places' },
    { text: 'a', mark: 'mistake', after: 'costs' },
    { text: 'real money.' },
  ],
  [
    { text: 'We take the work on,' },
    { text: 'and', mark: 'we finish' },
    { text: 'the job.' },
  ],
]

const index = ref(0)
const line = computed(() => lines[index.value])

let cycle: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  // Movement on the first thing a reader sees is exactly what reduced-motion
  // is asking us not to do.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  cycle = setInterval(() => {
    index.value = (index.value + 1) % lines.length
  }, 4200)
})

onBeforeUnmount(() => clearInterval(cycle))


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
  min-width: 0;
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

/* Not defined globally in this project, and without it the stable heading
   text would render on top of the cycling one. */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* The visible line swaps; the heading itself does not. A fixed block keeps the
   copy below from jumping as lines of different length cycle through. */
.headline-line {
  display: block;
}

.hl {
  display: block;
  /* Three lines is the rule. A line may never break itself into two. */
  white-space: nowrap;
}

/* Both lines share the same box so one dissolves into the other. Nothing
   moves: motion is what makes a swap announce itself. */
.line-leave-active {
  position: absolute;
  inset: 0;
}

.line-enter-active,
.line-leave-active {
  transition: opacity 900ms ease-in-out;
}

.line-enter-from,
.line-leave-to {
  opacity: 0;
}

/* The highlight is drawn once on entrance. During a swap it should already be
   at full width and simply fade with its text, not redraw itself. */
.line-enter-active .mark-field,
.line-leave-active .mark-field {
  transform: scaleX(1);
  transition: none;
}

@media (prefers-reduced-motion: reduce) {
  .line-enter-active,
  .line-leave-active {
    transition: none;
  }
}

.headline {
  position: relative;
  margin: 0;
  max-width: 100%;
  min-height: 3.05em;
  /* The cap keeps the three lines unbroken. The copy column is a known
     fraction of the container, so its width is arithmetic rather than
     something that has to be measured: the widest line renders at 10.05x the
     font size, and the coefficient carries 7% headroom for the fallback face
     while Onest is still swapping in. Stacked, the column is the container
     less its padding; beside the stage it is 1.7 of 2.7 tracks less the gap. */
  --cap: calc((min(1280px, 100vw) - 64px) * 0.0925);
  font-size: min(clamp(38px, calc(6.1 * var(--vwu)), 87px), var(--cap));
  font-weight: 800;
  letter-spacing: -0.038em;
  line-height: 0.98;
  color: var(--text);
}

/* Beside the stage the column is 1.7 of 2.7 tracks less the gap, not the whole
   container. This has to come after the rule above rather than with the other
   desktop rules: both selectors are .headline, so the later one wins, and set
   earlier it was silently overwritten by the stacked cap and the headline ran
   at its 87px ceiling straight through the stage. */
@media (min-width: 1024px) {
  .headline {
    --cap: calc((min(1280px, 100vw) - 112px) * 0.0583);
  }
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
  font-size: clamp(15px, calc(1.3*var(--vwu)), 16px);
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
    font-size: min(clamp(34px, calc(5 * var(--vwu)), 62px), var(--cap));
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

/* Phones. The two buttons come out, which buys the headline the room it needs
   to be read rather than scanned; both destinations are still one tap away in
   the nav. */
@media (max-width: 640px) {
  .hero-actions {
    display: none;
  }
}

/* Three unbroken lines is a desktop rule. At this width there is no room for
   it and holding to it kept the headline at about 30px, which is a caption.
   The lines wrap here and the type is sized as a fraction of the column
   instead: 0.112 is above the point where every first line wraps and below the
   point where any second line does, so all three headlines land on four lines
   at every width from 320 to 480 and none of them jumps as they cycle. */
@media (max-width: 480px) {
  .hl {
    white-space: normal;
    /* Filling greedily leaves the last word or two stranded on a line of their
       own: "We work in the / places", "We take the work / on,". Balancing
       shortens the longest line instead, which keeps those fragments whole:
       "We work in / the places", "We take the / work on,". */
    text-wrap: balance;
  }

  .headline {
    font-size: calc((100vw - 64px) * 0.112);
    min-height: 4.1em;
  }
}
</style>