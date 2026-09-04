<template>
  <section class="py-20" id="what-we-do">
    <div class="container-isura">
      <div class="max-w-[20ch]">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">What we do</span>
        <h2
          class="text-[clamp(34px,4.6vw,60px)] font-bold tracking-[-0.032em] leading-[1.02] mt-3"
        >
          We work on more than the software.
        </h2>
      </div>
    </div>

    <div ref="stackRef" class="stack" :class="{ 'is-flat': reduced }">
      <div
        v-for="(stage, i) in stages"
        :key="stage.number"
        class="stage"
        :style="{ '--z': i + 1, '--recede': recede[i] }"
      >
        <div class="container-isura">
          <article class="panel" :class="`tone-${stage.tone}`">
            <div class="panel-copy">
              <span class="panel-number">{{ stage.number }}</span>
              <h3>{{ stage.title }}</h3>
              <p>{{ stage.body }}</p>
            </div>

            <div class="panel-art" aria-hidden="true">
              <div v-if="i === 0" class="art-records">
                <span v-for="row in records" :key="row.label" class="record">
                  <em>{{ row.label }}</em>
                  <b>{{ row.value }}</b>
                  <i :class="row.state"></i>
                </span>
                <span class="record record-total">
                  <em>Balanced</em>
                  <b>0 breaks</b>
                </span>
              </div>

              <div v-else-if="i === 1" class="art-flow">
                <span v-for="(node, n) in flow" :key="node" class="flow-node">
                  {{ node }}
                  <i v-if="n < flow.length - 1" class="flow-link"></i>
                </span>
              </div>

              <div v-else-if="i === 2" class="art-count">
                <span class="count-before">14 steps</span>
                <span class="count-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
                <span class="count-after">3</span>
                <span class="count-note">The rest happens without asking.</span>
              </div>

              <div v-else class="art-product">
                <span class="product-bar">
                  <i></i><i></i><i></i>
                </span>
                <span class="product-line" style="width: 72%"></span>
                <span class="product-line" style="width: 54%"></span>
                <span class="product-cta">Submit</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { stages } from '@/data/content'

const stackRef = ref<HTMLElement | null>(null)
const reduced = ref(false)
const recede = ref<number[]>(stages.map(() => 0))

let frame = 0

function update() {
  const stack = stackRef.value
  if (!stack || reduced.value) return

  const rect = stack.getBoundingClientRect()
  const step = stack.offsetHeight / stages.length
  const travelled = Math.min(Math.max(-rect.top, 0), stack.offsetHeight)
  const head = travelled / step

  recede.value = stages.map((_, i) => Math.min(Math.max(head - i, 0), 1))
}

function schedule() {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(update)
}

onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced.value) return

  update()
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
})

const records = [
  { label: 'Invoice 4821', value: '412,900', state: 'ok' },
  { label: 'Invoice 4822', value: '96,400', state: 'ok' },
  { label: 'Invoice 4823', value: '18,250', state: 'now' },
]

const flow = ['Request', 'Review', 'Approve', 'Post']
</script>

<style scoped>
.stack {
  position: relative;
  margin-top: 3rem;
}

.stage {
  position: sticky;
  top: 9vh;
  height: 78vh;
  z-index: var(--z);
  transform: translateY(calc(var(--recede) * -20px)) scale(calc(1 - var(--recede) * 0.035))
    rotate(calc(var(--recede) * -0.8deg));
  transform-origin: 50% 0;
}

.panel {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  height: 78vh;
  max-height: 40rem;
  padding: clamp(1.8rem, 4vw, 3.4rem);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-pop);
}

.panel::after {
  position: absolute;
  inset: 0;
  content: '';
  border-radius: var(--radius-xl);
  background: var(--bg);
  opacity: calc(var(--recede) * 0.32);
  pointer-events: none;
}

.tone-invert {
  background: var(--invert-bg);
  color: var(--invert-text);
  border: 1px solid var(--invert-bg);
}

.tone-surface {
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
}

.tone-brand {
  background: var(--brand);
  color: var(--on-brand);
  border: 1px solid var(--brand);
}

.panel-number {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  opacity: 0.6;
}

.panel-copy h3 {
  margin: 1rem 0 0;
  font-size: clamp(28px, 4vw, 52px);
  font-weight: 700;
  letter-spacing: -0.032em;
  line-height: 1.03;
  max-width: 14ch;
}

.panel-copy p {
  margin: 1.1rem 0 0;
  max-width: 40ch;
  font-size: clamp(14.5px, 1.5vw, 17px);
  line-height: 1.6;
  opacity: 0.72;
}

.panel-art {
  display: none;
}

.art-records,
.art-flow,
.art-count,
.art-product {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  width: 100%;
  max-width: 22rem;
  padding: 1.3rem;
  border-radius: var(--radius-lg);
  background: color-mix(in srgb, currentColor 7%, transparent);
  border: 1px solid color-mix(in srgb, currentColor 14%, transparent);
}

.record {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 13px;
}

.record em {
  font-style: normal;
  opacity: 0.7;
}

.record b {
  margin-left: auto;
  font-family: var(--font-mono);
  font-weight: 600;
}

.record i {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.35;
}

.record i.now {
  background: var(--brand);
  opacity: 1;
}

.record-total {
  margin-top: 0.3rem;
  padding-top: 0.75rem;
  border-top: 1px solid color-mix(in srgb, currentColor 16%, transparent);
  font-weight: 600;
}

.flow-node {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.flow-link {
  flex: 1;
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    currentColor 0 4px,
    transparent 4px 9px
  );
  opacity: 0.4;
}

.art-count {
  align-items: flex-start;
}

.count-before {
  font-family: var(--font-mono);
  font-size: 13px;
  text-decoration: line-through;
  opacity: 0.55;
}

.count-arrow svg {
  width: 1.1rem;
  height: 1.1rem;
  opacity: 0.6;
}

.count-after {
  font-size: 3.4rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
}

.count-note {
  font-size: 12.5px;
  opacity: 0.7;
}

.product-bar {
  display: flex;
  gap: 0.3rem;
}

.product-bar i {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.3;
}

.product-line {
  height: 0.55rem;
  border-radius: 3px;
  background: color-mix(in srgb, currentColor 18%, transparent);
}

.product-cta {
  margin-top: 0.4rem;
  padding: 0.45rem 1rem;
  width: fit-content;
  border-radius: 999px;
  background: var(--brand);
  color: var(--on-brand);
  font-size: 12.5px;
  font-weight: 600;
}

@media (min-width: 900px) {
  .panel {
    grid-template-columns: 1.15fr 0.85fr;
    align-items: center;
    gap: 3rem;
  }

  .panel-art {
    display: flex;
    justify-content: flex-end;
  }
}

.is-flat .stage {
  position: static;
  height: auto;
  transform: none;
  margin-bottom: 1rem;
}

.is-flat .panel::after {
  display: none;
}

.is-flat .panel {
  height: auto;
  max-height: none;
}

@media (prefers-reduced-motion: reduce) {
  .stage {
    position: static;
    height: auto;
    transform: none;
    margin-bottom: 1rem;
  }

  .panel::after {
    display: none;
  }

  .panel {
    height: auto;
    max-height: none;
  }
}
</style>
