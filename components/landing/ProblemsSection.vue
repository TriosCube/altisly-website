<template>
  <section
    ref="sectionRef"
    class="problems"
    id="problems"
    :class="{ 'is-pinned': pinned, 'is-shown': shown }"
  >
    <div class="pin">
      <div class="container-isura layout">
        <div class="copy">
          <span class="eyebrow">Problems we solve</span>
          <h2 class="headline">
            When the tools stop<br />
            fitting the operation.
          </h2>
          <p class="closing">
            Spreadsheets. Messages. Manual handoffs. Records that disagree.
            <strong>The operation starts working around its tools.</strong>
          </p>
        </div>

        <div ref="stageRef" class="stage" :style="{ '--order': order }">
          <article class="artefact is-medium at-left" style="--i: 1; --rot: -3.2deg">
            <span class="artefact-label">Sheet · final_v7.xlsx</span>
            <div class="bars">
              <span class="bar" style="width: 82%"></span>
              <span class="bar" style="width: 64%"></span>
              <span class="bar" style="width: 71%"></span>
            </div>
            <span class="artefact-note">One person knows what column K means.</span>
          </article>

          <article class="artefact is-medium at-top" style="--i: 0; --rot: 2.4deg">
            <span class="artefact-label">Patient record · incomplete</span>
            <div class="fields">
              <span><em>Blood group</em> O positive</span>
              <span><em>Last review</em> 4 Mar</span>
              <span class="flagged"><em>Allergy status</em> —</span>
            </div>
            <span class="artefact-note">Allergy status missing.</span>
            <strong class="artefact-ask">Which record is current?</strong>
          </article>

          <article class="artefact is-focal at-focal" style="--i: 2; --rot: -1.2deg">
            <span class="artefact-label">Verification · needs review</span>
            <div class="fields">
              <span><em>On document</em> A. O. Balogun</span>
              <span class="flagged"><em>As submitted</em> Ade Balogun</span>
            </div>
            <span class="artefact-note">Document name does not match the submitted identity.</span>
            <strong class="artefact-ask">Who makes the call?</strong>
          </article>

          <article class="artefact is-small at-low" style="--i: 3; --rot: 3.6deg">
            <span class="artefact-label">Application · pending</span>
            <div class="stalled">
              <b>11</b>
              <em>days</em>
            </div>
            <strong class="artefact-ask">Waiting on an internal approval.</strong>
          </article>

          <article class="artefact is-small at-base" style="--i: 4; --rot: -2.2deg">
            <span class="artefact-label">Payment · exception</span>
            <div class="fields">
              <span class="flagged"><em>Reference</em> —</span>
            </div>
            <span class="artefact-note">Reference missing.</span>
            <strong class="artefact-ask">Waiting for someone to investigate.</strong>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const stageRef = ref<HTMLElement | null>(null)
const shown = ref(false)
const pinned = ref(false)
const order = ref(0)

const LEAD_IN = 0.06
const SETTLE = 0.86

type Card = { el: HTMLElement; seat: number; t: number; x: number; y: number; tx: number; ty: number }

let cards: Card[] = []
let observer: IntersectionObserver | undefined
let raf = 0
let bound = false
let wideQuery: MediaQueryList | null = null
let running = false
let reduced = false
let wide = false
let pointerInside = false

function smoothstep(edge0: number, edge1: number, value: number) {
  const t = Math.min(Math.max((value - edge0) / (edge1 - edge0), 0), 1)
  return t * t * (3 - 2 * t)
}

function measureOrder() {
  const section = sectionRef.value
  if (!section) return

  const rect = section.getBoundingClientRect()
  const view = window.innerHeight || 1

  if (!pinned.value) {
    order.value = smoothstep(view * 0.9, view * 0.34, rect.bottom)
    return
  }

  const travel = rect.height - view
  const progress = travel > 0 ? Math.min(Math.max(-rect.top / travel, 0), 1) : 0
  order.value = progress

  const step = (1 - LEAD_IN) / Math.max(cards.length, 1)

  for (const card of cards) {
    const from = LEAD_IN + card.seat * step
    card.t = smoothstep(from, from + step * SETTLE, progress)
    card.el.style.setProperty('--t', card.t.toFixed(3))
  }
}

function onScroll() {
  measureOrder()
}

function onPointerMove(event: PointerEvent) {
  const stage = stageRef.value
  if (!stage || !cards.length) return

  const rect = stage.getBoundingClientRect()
  const inside =
    event.clientX > rect.left - 80 &&
    event.clientX < rect.right + 80 &&
    event.clientY > rect.top - 80 &&
    event.clientY < rect.bottom + 80

  pointerInside = inside

  if (!inside) {
    for (const card of cards) {
      card.tx = 0
      card.ty = 0
    }
    wake()
    return
  }

  const reach = Math.min(rect.width, rect.height) * 0.42

  for (const card of cards) {
    const box = card.el.getBoundingClientRect()
    const dx = box.left + box.width / 2 - event.clientX
    const dy = box.top + box.height / 2 - event.clientY
    const distance = Math.sqrt(dx * dx + dy * dy) || 1
    const push = (1 - smoothstep(0, 1, distance / reach)) * 11

    card.tx = (dx / distance) * push
    card.ty = (dy / distance) * push
  }

  wake()
}

function frame() {
  let motion = 0

  for (const card of cards) {
    const settle = pinned.value ? card.t : 1 - order.value
    const tx = card.tx * settle
    const ty = card.ty * settle

    card.x += (tx - card.x) * 0.11
    card.y += (ty - card.y) * 0.11

    card.el.style.setProperty('--ox', `${card.x.toFixed(2)}px`)
    card.el.style.setProperty('--oy', `${card.y.toFixed(2)}px`)

    motion = Math.max(motion, Math.abs(tx - card.x), Math.abs(ty - card.y))
  }

  if (motion < 0.05 && !pointerInside) {
    running = false
    return
  }

  raf = requestAnimationFrame(frame)
}

function wake() {
  if (running || reduced || !wide) return
  running = true
  raf = requestAnimationFrame(frame)
}

onMounted(() => {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  wide = window.matchMedia('(min-width: 1024px)').matches
  pinned.value = wide && !reduced

  const elements = Array.from(stageRef.value?.querySelectorAll<HTMLElement>('.artefact') ?? [])

  cards = elements
    .map((el) => ({
      el,
      seat: Number(getComputedStyle(el).getPropertyValue('--i')) || 0,
      t: 0,
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
    }))
    .sort((a, b) => a.seat - b.seat)

  cards.forEach((card, index) => {
    card.seat = index
  })

  if (reduced) {
    shown.value = true
  } else {
    /* Always watched, whatever the width: the pinned rules override opacity on their own, and the
       stacked layout has nothing else to reveal it if the viewport narrows after load. */
    observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        shown.value = true
        observer?.disconnect()
      },
      { rootMargin: '-12% 0px -12% 0px' },
    )

    if (sectionRef.value) observer.observe(sectionRef.value)
  }

  if (reduced) return

  wideQuery = window.matchMedia('(min-width: 1024px)')
  wideQuery.addEventListener('change', onWidthChange)
  if (wide) bindPinned()
})

function bindPinned() {
  if (bound) return
  bound = true
  measureOrder()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  window.addEventListener('pointermove', onPointerMove, { passive: true })
}

function unbindPinned() {
  if (!bound) return
  bound = false
  cancelAnimationFrame(raf)
  running = false
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  window.removeEventListener('pointermove', onPointerMove)
}

/* The stack swaps between a pinned scroll composition and a plain stacked list at 1024px, so the
   mode has to follow the viewport rather than whatever it happened to be on mount. */
function onWidthChange(event: MediaQueryListEvent) {
  wide = event.matches
  pinned.value = wide && !reduced

  if (wide) {
    bindPinned()
    return
  }

  unbindPinned()
  shown.value = true

  for (const card of cards) {
    card.tx = card.ty = card.x = card.y = 0
    card.el.style.removeProperty('--ox')
    card.el.style.removeProperty('--oy')
    card.el.style.removeProperty('--t')
  }
}

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  observer?.disconnect()
  wideQuery?.removeEventListener('change', onWidthChange)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  window.removeEventListener('pointermove', onPointerMove)
})
</script>

<style scoped>
.problems {
  padding: 5.5rem 0;
  overflow: clip;
}

.pin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--bg);
  background-repeat: no-repeat;
  background-position:
    8% 6%,
    96% 12%,
    22% 96%,
    88% 92%,
    54% 48%;
  background-size: 200% 200%;
  animation: mesh-drift 52s ease-in-out infinite alternate;
}

@keyframes mesh-drift {
  to {
    background-position:
      26% 24%,
      74% 2%,
      6% 78%,
      100% 70%,
      38% 62%;
  }
}

:root[data-theme='dark'] .pin {
  background:
    radial-gradient(120vmax 96vmax at 8% 6%, color-mix(in srgb, var(--invert-bg-3) 34%, transparent), transparent 58%),
    radial-gradient(110vmax 92vmax at 96% 12%, color-mix(in srgb, var(--brand-deep) 16%, transparent), transparent 56%),
    radial-gradient(104vmax 88vmax at 22% 96%, color-mix(in srgb, var(--positive) 12%, transparent), transparent 58%),
    radial-gradient(118vmax 94vmax at 88% 92%, color-mix(in srgb, var(--brand) 7%, transparent), transparent 60%),
    radial-gradient(96vmax 80vmax at 54% 48%, color-mix(in srgb, var(--invert-bg-2) 30%, transparent), transparent 62%),
    var(--bg);
}

/* The drift only has pools to move in dark. Light sits on a flat ground, where the same animation
   would repaint the field every frame for no visible change. */
:root:not([data-theme='dark']) .pin {
  animation: none;
}

@media (prefers-reduced-motion: reduce) {
  .pin {
    animation: none;
  }
}

.pin > * {
  width: 100%;
  flex: none;
}

.layout {
  display: grid;
  gap: 3rem;
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.headline {
  margin: 0.85rem 0 0;
  font-size: clamp(34px, 4.6vw, 60px);
  font-weight: 700;
  letter-spacing: -0.032em;
  line-height: 1.03;
}

.headline br {
  display: none;
}

.closing {
  margin: 1.6rem 0 0;
  max-width: 34ch;
  font-size: 17px;
  line-height: 1.6;
  color: var(--muted);
}

.closing strong {
  display: block;
  margin-top: 0.5rem;
  color: var(--text);
  font-weight: 600;
}

.stage {
  position: relative;
}

.artefact {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.05rem 1.15rem;
  /* On a mesh the ground sits in the same luminance band as --surface, so contrast alone cannot
     separate the card. It reads as glass instead: translucent fill, blurred backdrop and a real
     drop shadow, which is what lets it sit on the gradient rather than compete with it. */
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-lg);
  background: color-mix(in srgb, var(--surface) 76%, transparent);
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  box-shadow: var(--shadow-pop);
  opacity: 0;
  translate: 0 1.4rem;
  transform: translate(var(--ox, 0px), var(--oy, 0px))
    rotate(calc(var(--rot, 0deg) * (1 - var(--order, 0))));
  transition:
    opacity 700ms ease,
    translate 700ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i) * 110ms);
}

.is-shown .artefact {
  opacity: 1;
  translate: none;
}

.artefact-label {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.artefact-note {
  margin-top: auto;
  padding-top: 0.85rem;
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--muted);
}

.bars {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-top: 0.75rem;
}

.bar {
  height: 7px;
  border-radius: 3px;
  background: var(--surface-3);
}

.bubble {
  margin: 0.8rem 0 0;
  padding: 0.6rem 0.85rem;
  border-radius: 12px 12px 12px 3px;
  background: var(--surface-2);
  font-size: 13px;
  line-height: 1.4;
}

.fields {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-top: 0.75rem;
  font-family: var(--font-mono);
  font-size: 12.5px;
}

.fields span {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.flagged {
  color: var(--warn);
  font-weight: 600;
}

.artefact-ask {
  margin-top: 0.4rem;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--text);
}

.stalled {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  margin-top: 0.7rem;
}

.stalled b {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1;
}

.stalled em {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  font-style: normal;
}

.artefact em {
  font-style: normal;
  color: var(--muted);
}

@media (max-width: 1023px) {
  .stage {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .artefact {
    width: 100%;
    max-width: 17rem;
  }
}

@media (min-width: 1024px) {
  .problems.is-pinned {
    --steps: 5;
    padding: 0;
    height: calc(100svh + var(--steps) * 46svh);
  }

  .is-pinned .pin {
    position: sticky;
    top: 0;
    height: 100svh;
  }

  .is-pinned .artefact {
    transition: none;
    opacity: var(--t, 0);
    translate: 0 calc((1 - var(--t, 0)) * 1.5rem);
    transform: translate(var(--ox, 0px), var(--oy, 0px))
      rotate(calc(var(--rot, 0deg) * (1 - var(--t, 0))))
      scale(calc(0.97 + var(--t, 0) * 0.03));
  }

  .layout {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 3.5rem;
    align-items: center;
  }

  .headline br {
    display: inline;
  }

  .stage {
    min-height: 34rem;
  }

  .stage::before {
    content: '';
    position: absolute;
    inset: -14% -8%;
    background-image:
      linear-gradient(color-mix(in srgb, var(--text) 6%, transparent) 1px, transparent 1px),
      linear-gradient(90deg, color-mix(in srgb, var(--text) 6%, transparent) 1px, transparent 1px);
    background-size: 92px 34px;
    mask-image: radial-gradient(ellipse at 52% 48%, #000 26%, transparent 74%);
    pointer-events: none;
  }

  .artefact {
    position: absolute;
  }

  .at-top {
    left: 30%;
    top: 0;
    width: 58%;
    z-index: 3;
  }

  .at-left {
    left: 0;
    top: 26%;
    width: 50%;
    z-index: 2;
  }

  .at-focal {
    left: 43%;
    top: 36%;
    width: 57%;
    z-index: 5;
  }

  .at-low {
    left: 6%;
    top: 58%;
    width: 40%;
    z-index: 4;
  }

  .at-base {
    left: 46%;
    bottom: 0;
    width: 52%;
    z-index: 3;
  }

  .is-focal {
    padding: 1.25rem 1.4rem;
    box-shadow: var(--shadow-pop);
  }

  .is-focal .artefact-label {
    font-size: 11px;
  }

  .is-focal .fields {
    font-size: 13.5px;
    gap: 0.5rem;
  }

  .is-focal .artefact-ask {
    font-size: 14px;
  }

  .is-small {
    box-shadow: var(--shadow-1);
  }

  .is-small .artefact-label {
    font-size: 10px;
  }
}
</style>
