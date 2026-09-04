<template>
  <section class="pt-20" id="what-we-do">
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
        <article class="panel" :class="`tone-${stage.tone}`">
          <span class="panel-number">{{ stage.number }}</span>
          <h3>{{ stage.title }}</h3>
          <p>{{ stage.body }}</p>

          <div class="console" aria-hidden="true">
            <div class="console-bar">
              <span class="dots"><i></i><i></i><i></i></span>
              <span class="console-name">{{ consoles[i].name }}</span>
              <span class="console-tag">{{ consoles[i].tag }}</span>
            </div>

            <div v-if="i === 0" class="console-body ledger">
              <div class="ledger-head">
                <span>Reference</span><span>Counterparty</span><span>Amount</span><span>State</span>
              </div>
              <div v-for="row in ledger" :key="row.ref" class="ledger-row">
                <span class="font-code">{{ row.ref }}</span>
                <span>{{ row.party }}</span>
                <span class="font-code num">{{ row.amount }}</span>
                <span class="state" :class="row.state">{{ row.state }}</span>
              </div>
            </div>

            <div v-else-if="i === 1" class="console-body board">
              <div v-for="column in board" :key="column.title" class="board-col">
                <span class="board-title">{{ column.title }}</span>
                <span v-for="card in column.cards" :key="card" class="board-card">{{ card }}</span>
              </div>
            </div>

            <div v-else-if="i === 2" class="console-body runlog">
              <div v-for="step in runlog" :key="step.label" class="run-row" :class="step.state">
                <span class="run-tick">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <path d="M4 12l5 5L20 6" />
                  </svg>
                </span>
                <span class="run-label">{{ step.label }}</span>
                <span class="run-time font-code">{{ step.time }}</span>
              </div>
            </div>

            <div v-else class="console-body app">
              <aside class="app-rail">
                <span v-for="item in rail" :key="item" class="rail-item">{{ item }}</span>
              </aside>
              <div class="app-main">
                <span class="app-title">New request</span>
                <span class="app-field"></span>
                <span class="app-field short"></span>
                <span class="app-row">
                  <span class="app-field half"></span>
                  <span class="app-field half"></span>
                </span>
                <span class="app-submit">Submit</span>
              </div>
            </div>
          </div>
        </article>
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

  const step = stack.offsetHeight / stages.length
  const travelled = Math.min(
    Math.max(-stack.getBoundingClientRect().top, 0),
    stack.offsetHeight,
  )
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

const consoles = [
  { name: 'ledger · today', tag: 'Reconciled' },
  { name: 'requests · live', tag: '4 stages' },
  { name: 'run · nightly', tag: 'Automated' },
  { name: 'portal · staff', tag: 'In use' },
]

const ledger = [
  { ref: 'TRX-4821', party: 'Northbank Ltd', amount: '412,900.00', state: 'posted' },
  { ref: 'TRX-4822', party: 'Osun Traders', amount: '96,400.00', state: 'posted' },
  { ref: 'TRX-4823', party: 'Kite Logistics', amount: '18,250.00', state: 'pending' },
  { ref: 'TRX-4824', party: 'Marra Health', amount: '204,780.00', state: 'posted' },
  { ref: 'TRX-4825', party: 'Vale Partners', amount: '7,900.00', state: 'posted' },
]

const board = [
  { title: 'Request', cards: ['Vendor onboarding', 'Card limit change'] },
  { title: 'Review', cards: ['Refund over cap'] },
  { title: 'Approve', cards: ['Payment run', 'New supplier'] },
  { title: 'Posted', cards: ['Payroll batch', 'Q3 accrual', 'Rebate credit'] },
]

const runlog = [
  { label: 'Pull yesterday from the bank', time: '00:04', state: 'done' },
  { label: 'Match against expected items', time: '00:11', state: 'done' },
  { label: 'Raise the three that disagree', time: '00:02', state: 'done' },
  { label: 'Post the rest to the ledger', time: 'running', state: 'now' },
  { label: 'Send the morning summary', time: 'queued', state: 'wait' },
]

const rail = ['Overview', 'Requests', 'People', 'Records', 'Settings']
</script>

<style scoped>
.stack {
  position: relative;
  margin-top: 2.5rem;
}

.stage {
  position: sticky;
  top: 4vh;
  height: 92vh;
  z-index: var(--z);
  padding: 0 clamp(0.75rem, 1.6vw, 1.6rem);
  transform: translateY(calc(var(--recede) * -22px)) scale(calc(1 - var(--recede) * 0.038))
    rotate(calc(var(--recede) * -0.7deg));
  transform-origin: 50% 0;
}

.panel {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 92vh;
  padding: clamp(2.4rem, 6vh, 4.5rem) clamp(1.2rem, 4vw, 3.5rem) 0;
  border-radius: var(--radius-xl);
  overflow: hidden;
  text-align: center;
  box-shadow: var(--shadow-pop);
}

.panel::after {
  position: absolute;
  inset: 0;
  content: '';
  border-radius: var(--radius-xl);
  background: var(--bg);
  opacity: calc(var(--recede) * 0.34);
  pointer-events: none;
  z-index: 5;
}

.tone-invert {
  background: var(--invert-bg);
  color: var(--invert-text);
}

.tone-surface {
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
}

.tone-brand {
  background: var(--brand);
  color: var(--on-brand);
}

.panel-number {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.2em;
  opacity: 0.55;
}

.panel h3 {
  margin: 0.9rem 0 0;
  font-size: clamp(34px, 6.4vw, 92px);
  font-weight: 700;
  letter-spacing: -0.038em;
  line-height: 0.98;
  max-width: 16ch;
}

.panel p {
  margin: 1.1rem 0 0;
  max-width: 62ch;
  font-family: var(--font-mono);
  font-size: clamp(12.5px, 1.25vw, 15px);
  line-height: 1.6;
  opacity: 0.7;
}

.console {
  width: min(100%, 68rem);
  margin-top: clamp(2rem, 5vh, 3.6rem);
  flex: 1;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  border: 1px solid color-mix(in srgb, currentColor 16%, transparent);
  border-bottom: 0;
  background: color-mix(in srgb, currentColor 6%, transparent);
  overflow: hidden;
  text-align: left;
}

.console-bar {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.7rem 1rem;
  border-bottom: 1px solid color-mix(in srgb, currentColor 14%, transparent);
}

.dots {
  display: flex;
  gap: 0.28rem;
}

.dots i {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.28;
}

.console-name,
.console-tag {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.6;
}

.console-tag {
  margin-left: auto;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, currentColor 22%, transparent);
  opacity: 0.75;
}

.console-body {
  padding: 1.1rem 1.2rem;
}

.ledger-head,
.ledger-row {
  display: grid;
  grid-template-columns: 7rem 1fr 8rem 6rem;
  gap: 1rem;
  align-items: center;
  padding: 0.62rem 0;
  font-size: 13px;
}

.ledger-head {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.45;
  border-bottom: 1px solid color-mix(in srgb, currentColor 12%, transparent);
}

.ledger-row + .ledger-row {
  border-top: 1px solid color-mix(in srgb, currentColor 8%, transparent);
}

.num {
  text-align: right;
}

.state {
  justify-self: start;
  padding: 0.12rem 0.6rem;
  border-radius: 999px;
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid color-mix(in srgb, currentColor 22%, transparent);
  opacity: 0.7;
}

.state.pending {
  background: var(--brand);
  color: var(--on-brand);
  border-color: transparent;
  opacity: 1;
}

.board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
}

.board-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.board-title {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.45;
  padding-bottom: 0.3rem;
}

.board-card {
  padding: 0.6rem 0.7rem;
  border-radius: var(--radius-sm);
  border: 1px solid color-mix(in srgb, currentColor 14%, transparent);
  background: color-mix(in srgb, currentColor 5%, transparent);
  font-size: 12px;
  line-height: 1.35;
}

.runlog {
  display: flex;
  flex-direction: column;
}

.run-row {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.72rem 0;
  font-size: 13.5px;
}

.run-row + .run-row {
  border-top: 1px solid color-mix(in srgb, currentColor 9%, transparent);
}

.run-tick {
  display: grid;
  width: 1.3rem;
  height: 1.3rem;
  place-items: center;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, currentColor 25%, transparent);
}

.run-tick svg {
  width: 0.7rem;
  height: 0.7rem;
  opacity: 0;
}

.run-row.done .run-tick {
  background: currentColor;
  border-color: transparent;
}

.run-row.done .run-tick svg {
  opacity: 1;
  color: var(--brand);
}

.tone-brand .run-row.done .run-tick svg {
  color: var(--brand);
}

.run-row.now .run-tick {
  border-color: currentColor;
  box-shadow: 0 0 0 3px color-mix(in srgb, currentColor 12%, transparent);
}

.run-row.wait {
  opacity: 0.45;
}

.run-time {
  margin-left: auto;
  font-size: 11px;
  letter-spacing: 0.06em;
  opacity: 0.55;
}

.app {
  display: grid;
  grid-template-columns: 11rem 1fr;
  gap: 1.4rem;
}

.app-rail {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding-right: 1.2rem;
  border-right: 1px solid color-mix(in srgb, currentColor 12%, transparent);
}

.rail-item {
  padding: 0.42rem 0.6rem;
  border-radius: var(--radius-sm);
  font-size: 12.5px;
  opacity: 0.6;
}

.rail-item:nth-child(2) {
  background: color-mix(in srgb, currentColor 10%, transparent);
  opacity: 1;
}

.app-main {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.app-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.app-field {
  height: 2.1rem;
  border-radius: var(--radius-sm);
  border: 1px solid color-mix(in srgb, currentColor 14%, transparent);
  background: color-mix(in srgb, currentColor 4%, transparent);
}

.app-field.short {
  width: 62%;
}

.app-row {
  display: flex;
  gap: 0.7rem;
}

.app-field.half {
  flex: 1;
}

.app-submit {
  align-self: flex-start;
  margin-top: 0.4rem;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  background: var(--brand);
  color: var(--on-brand);
  font-size: 12.5px;
  font-weight: 600;
}

@media (max-width: 900px) {
  .panel p {
    font-size: 12.5px;
  }

  .ledger-head,
  .ledger-row {
    grid-template-columns: 5.5rem 1fr 5.5rem;
  }

  .ledger-head span:last-child,
  .ledger-row .state {
    display: none;
  }

  .board {
    grid-template-columns: repeat(2, 1fr);
  }

  .app {
    grid-template-columns: 1fr;
  }

  .app-rail {
    display: none;
  }
}

.is-flat .stage {
  position: static;
  height: auto;
  transform: none;
  margin-bottom: 1rem;
}

.is-flat .panel {
  height: auto;
  padding-bottom: 0;
}

.is-flat .panel::after {
  display: none;
}

.is-flat .console {
  height: 22rem;
  flex: none;
}

@media (prefers-reduced-motion: reduce) {
  .stage {
    position: static;
    height: auto;
    transform: none;
    margin-bottom: 1rem;
  }

  .panel {
    height: auto;
  }

  .panel::after {
    display: none;
  }

  .console {
    height: 22rem;
    flex: none;
  }
}
</style>
