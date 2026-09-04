<template>
  <section ref="sectionRef" class="problems" id="problems">
    <div class="container-isura layout" :class="{ 'is-shown': shown }">
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
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const stageRef = ref<HTMLElement | null>(null)
const shown = ref(false)
const order = ref(0)

type Drift = { el: HTMLElement; x: number; y: number; tx: number; ty: number }

let drifts: Drift[] = []
let observer: IntersectionObserver | undefined
let raf = 0
let running = false
let reduced = false
let enabled = false
let pointerInside = false

function smoothstep(edge0: number, edge1: number, value: number) {
  const t = Math.min(Math.max((value - edge0) / (edge1 - edge0), 0), 1)
  return t * t * (3 - 2 * t)
}

function measureOrder() {
  const section = sectionRef.value
  if (!section) return

  const bottom = section.getBoundingClientRect().bottom
  const view = window.innerHeight || 1

  order.value = smoothstep(view * 0.9, view * 0.34, bottom)
}

function onScroll() {
  measureOrder()
}

function onPointerMove(event: PointerEvent) {
  const stage = stageRef.value
  if (!stage || !drifts.length) return

  const rect = stage.getBoundingClientRect()
  const inside =
    event.clientX > rect.left - 80 &&
    event.clientX < rect.right + 80 &&
    event.clientY > rect.top - 80 &&
    event.clientY < rect.bottom + 80

  pointerInside = inside

  if (!inside) {
    for (const drift of drifts) {
      drift.tx = 0
      drift.ty = 0
    }
    wake()
    return
  }

  const reach = Math.min(rect.width, rect.height) * 0.42

  for (const drift of drifts) {
    const box = drift.el.getBoundingClientRect()
    const dx = box.left + box.width / 2 - event.clientX
    const dy = box.top + box.height / 2 - event.clientY
    const distance = Math.sqrt(dx * dx + dy * dy) || 1
    const push = (1 - smoothstep(0, 1, distance / reach)) * 11

    drift.tx = (dx / distance) * push
    drift.ty = (dy / distance) * push
  }

  wake()
}

function frame() {
  let motion = 0

  for (const drift of drifts) {
    const settle = 1 - order.value
    const tx = drift.tx * settle
    const ty = drift.ty * settle

    drift.x += (tx - drift.x) * 0.11
    drift.y += (ty - drift.y) * 0.11

    drift.el.style.setProperty('--ox', `${drift.x.toFixed(2)}px`)
    drift.el.style.setProperty('--oy', `${drift.y.toFixed(2)}px`)

    motion = Math.max(motion, Math.abs(tx - drift.x), Math.abs(ty - drift.y))
  }

  if (motion < 0.05 && !pointerInside) {
    running = false
    return
  }

  raf = requestAnimationFrame(frame)
}

function wake() {
  if (running || reduced || !enabled) return
  running = true
  raf = requestAnimationFrame(frame)
}

onMounted(() => {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  enabled = window.matchMedia('(min-width: 1024px)').matches

  if (reduced) {
    shown.value = true
  } else {
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

  if (reduced || !enabled) return

  drifts = Array.from(stageRef.value?.querySelectorAll<HTMLElement>('.artefact') ?? []).map(
    (el) => ({ el, x: 0, y: 0, tx: 0, ty: 0 }),
  )

  measureOrder()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  window.addEventListener('pointermove', onPointerMove, { passive: true })
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  observer?.disconnect()
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  window.removeEventListener('pointermove', onPointerMove)
})
</script>

<style scoped>
.problems {
  padding: 5.5rem 0;
  overflow: hidden;
}

.layout {
  display: grid;
  gap: 3rem;
}

.copy {
  container-type: inline-size;
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
  font-size: clamp(30px, 10.4cqw, 50px);
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
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  box-shadow: var(--shadow-2);
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
  .layout {
    grid-template-columns: minmax(0, 0.68fr) minmax(0, 1fr);
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
