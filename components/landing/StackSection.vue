<template>
  <section class="pt-20" id="what-we-do">
    <div class="container-isura">
      <div>
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">What we do</span>
        <h2
          class="text-[clamp(34px,calc(4.6*var(--vwu)),60px)] font-bold tracking-[-0.032em] leading-[1.02] mt-3 max-w-[16ch]"
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
        <article
          class="panel"
          :class="`tone-${stage.tone}`"
          :data-nav-tone="stage.tone === 'invert' ? 'dark' : null"
        >
          <h3>{{ stage.title }}</h3>
          <p>{{ stage.body }}</p>

          <div class="shot" aria-hidden="true">
            <div class="win">
              <header class="win-bar">
                <span class="win-mark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path :d="icons[apps[i].icon]" />
                  </svg>
                </span>
                <span class="win-app">{{ apps[i].name }}</span>
                <span class="win-crumb">{{ apps[i].crumb }}</span>
                <span class="win-search">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path :d="icons.search" />
                  </svg>
                  Search
                  <em class="font-code">⌘K</em>
                </span>
                <span class="faces">
                  <i v-for="face in apps[i].team" :key="face">{{ face }}</i>
                </span>
              </header>

              <div v-if="i === 0" class="win-body">
                <div class="metrics">
                  <div v-for="metric in metrics" :key="metric.label" class="metric">
                    <span class="metric-label">{{ metric.label }}</span>
                    <strong class="metric-value font-code">{{ metric.value }}</strong>
                    <span class="metric-delta" :class="metric.tone">{{ metric.delta }}</span>
                  </div>
                </div>

                <div v-if="picked.length" class="toolbar selbar">
                  <span class="selcount">{{ picked.length }} selected</span>
                  <span class="btn brand" @click="postPicked">Mark posted</span>
                  <span class="btn ghost" @click="holdPicked">Hold</span>
                  <span class="btn ghost" @click="clearPicked">Clear</span>
                </div>

                <div v-else class="toolbar">
                  <span class="tabs">
                    <b
                      v-for="tab in ledgerTabs"
                      :key="tab.key"
                      :class="{ on: ledgerTab === tab.key }"
                      @click="ledgerTab = tab.key"
                    >
                      {{ tab.label }}
                      <em v-if="tab.key === 'unmatched' && unmatched">{{ unmatched }}</em>
                    </b>
                  </span>
                  <span class="chip">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path :d="icons.calendar" />
                    </svg>
                    Today
                  </span>
                  <span class="btn ghost">Export</span>
                </div>

                <div class="grid-table">
                  <div class="tr th" @click="toggleAll">
                    <span class="check" :class="{ on: allPicked, some: picked.length && !allPicked }">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4">
                        <path d="M4 12l5 5L20 6" />
                      </svg>
                    </span>
                    <span>Reference</span>
                    <span>Counterparty</span>
                    <span class="right">Amount</span>
                    <span>Status</span>
                  </div>
                  <div
                    v-for="row in shownLedger"
                    :key="row.ref"
                    class="tr"
                    :class="{ sel: row.sel }"
                    @click="row.sel = !row.sel"
                  >
                    <span class="check" :class="{ on: row.sel }">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4">
                        <path d="M4 12l5 5L20 6" />
                      </svg>
                    </span>
                    <span class="font-code ref">{{ row.ref }}</span>
                    <span class="party">
                      <i class="ava">{{ row.initials }}</i>
                      {{ row.party }}
                    </span>
                    <span class="right font-code money">{{ row.amount }}</span>
                    <span>
                      <em class="pill" :class="tone(row.state)">
                        <i class="dot"></i>
                        {{ row.state }}
                      </em>
                    </span>
                  </div>
                  <div v-if="!shownLedger.length" class="empty">Nothing left to reconcile here.</div>
                </div>

                <div class="win-foot">
                  <span>Showing {{ shownLedger.length }} of 1,287 movements</span>
                  <span class="pager"><b>1</b><b class="on">2</b><b>3</b><b>…</b><b>258</b></span>
                </div>
              </div>

              <div v-else-if="i === 1" class="win-body">
                <div class="toolbar">
                  <span class="seg">
                    <b class="on">Board</b><b>Table</b><b>Timeline</b>
                  </span>
                  <span class="chip">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path :d="icons.filter" />
                    </svg>
                    Finance
                  </span>
                  <span class="btn brand" @click="raiseRequest">New request</span>
                </div>

                <div class="board">
                  <div
                    v-for="(column, ci) in columns"
                    :key="column.title"
                    :ref="(el) => setCol(el, ci)"
                    class="col"
                    :class="{ over: overCol === ci && drag && drag.ci !== ci }"
                  >
                    <div class="col-head">
                      <i class="rule" :class="column.tone"></i>
                      <span>{{ column.title }}</span>
                      <em>{{ column.cards.length }}</em>
                    </div>
                    <div
                      v-for="(card, idx) in column.cards"
                      :key="card.ref"
                      class="card"
                      :class="{ lifted: dragging(ci, idx) }"
                      :style="dragging(ci, idx) ? liftStyle : undefined"
                      @pointerdown="onCardDown($event, ci, idx)"
                    >
                      <span class="card-top">
                        <em class="font-code">{{ card.ref }}</em>
                        <i class="prio" :class="card.prio"></i>
                      </span>
                      <strong>{{ card.title }}</strong>
                      <span class="card-foot">
                        <i class="ava sm">{{ card.owner }}</i>
                        <em class="font-code money">{{ card.amount }}</em>
                        <em class="age font-code">{{ card.age }}</em>
                      </span>
                    </div>
                    <span v-if="!column.cards.length" class="col-empty">Drop here</span>
                  </div>
                </div>

                <span class="hint">Drag a card between columns, or click it to move it along.</span>
              </div>

              <div v-else-if="i === 2" class="win-body">
                <div class="run-head">
                  <div>
                    <strong>Nightly reconciliation</strong>
                    <span class="font-code sub">run {{ runId }} · {{ clock }} · 1,284 items</span>
                  </div>
                  <em class="pill" :class="runDone ? 'ok' : 'live'">
                    <i class="dot"></i>
                    {{ runDone ? 'complete' : 'running' }}
                  </em>
                  <span class="btn ghost" @click="startRun">{{ runDone ? 'Run again' : 'Restart' }}</span>
                </div>

                <div class="bar"><i :style="{ width: progress + '%' }"></i></div>

                <div class="steps">
                  <div v-for="step in steps" :key="step.label" class="step" :class="step.state">
                    <span class="node">
                      <svg
                        v-if="step.state === 'done'"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3.4"
                      >
                        <path d="M4 12l5 5L20 6" />
                      </svg>
                      <i v-else-if="step.state === 'now'" class="spin"></i>
                    </span>
                    <span class="step-text">
                      <strong>{{ step.label }}</strong>
                      <em>{{ step.detail }}</em>
                    </span>
                    <span class="font-code step-time">{{ step.time }}</span>
                  </div>
                </div>

                <div class="log font-code">
                  <span v-for="line in log" :key="line">{{ line }}</span>
                </div>
              </div>

              <div v-else class="win-body app">
                <aside class="rail">
                  <span class="ws">
                    <i class="ws-mark">AO</i>
                    <b>Altisly Ops</b>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                  <span
                    v-for="item in rail"
                    :key="item.key"
                    class="rail-item"
                    :class="{ on: view === item.key }"
                    @click="view = item.key"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9">
                      <path :d="icons[item.icon]" />
                    </svg>
                    {{ item.label }}
                    <em v-if="item.key === 'requests' && requests.length">{{ requests.length }}</em>
                  </span>
                </aside>

                <div class="pane">
                  <div class="pane-head">
                    <div>
                      <strong>{{ pane.title }}</strong>
                      <span class="sub">{{ pane.sub }}</span>
                    </div>
                    <span v-if="view === 'requests'" class="btn brand" @click="composing = !composing">
                      {{ composing ? 'Cancel' : 'New request' }}
                    </span>
                  </div>

                  <div class="tiles">
                    <div v-for="tile in pane.tiles" :key="tile.label" class="tile">
                      <span>{{ tile.label }}</span>
                      <strong class="font-code">{{ tile.value }}</strong>
                    </div>
                  </div>

                  <div v-if="composing" class="compose">
                    <span class="compose-head">What are you raising?</span>
                    <span class="chips">
                      <b
                        v-for="kind in kinds"
                        :key="kind"
                        :class="{ on: kind === kind_ }"
                        @click="kind_ = kind"
                      >
                        {{ kind }}
                      </b>
                    </span>
                    <span class="compose-foot">
                      <em class="font-code">approver · Adaeze O.</em>
                      <span class="btn brand" @click="submitRequest">Submit</span>
                    </span>
                  </div>

                  <div v-if="view === 'settings'" class="list">
                    <div v-for="option in settings" :key="option.label" class="li" @click="option.on = !option.on">
                      <span class="li-text">
                        <strong>{{ option.label }}</strong>
                        <em>{{ option.detail }}</em>
                      </span>
                      <i class="switch" :class="{ on: option.on }"></i>
                    </div>
                  </div>

                  <div v-else class="list">
                    <div v-for="item in pane.rows" :key="item.title" class="li">
                      <i class="ava">{{ item.initials }}</i>
                      <span class="li-text">
                        <strong>{{ item.title }}</strong>
                        <em>{{ item.meta }}</em>
                      </span>
                      <em class="pill" :class="tone(item.state)">
                        <i class="dot"></i>
                        {{ item.state }}
                      </em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { stages } from '@/data/content'

const stackRef = ref<HTMLElement | null>(null)
const reduced = ref(false)
const recede = ref<number[]>(stages.map(() => 0))

let frame = 0

function update() {
  const stack = stackRef.value
  if (!stack || reduced.value) return

  const box = stack.getBoundingClientRect()
  if (box.bottom < 0 || box.top > window.innerHeight) return

  const step = stack.offsetHeight / stages.length
  const travelled = Math.min(Math.max(-box.top, 0), stack.offsetHeight)
  const head = travelled / step

  recede.value = stages.map((_, i) => Math.min(Math.max(head - i, 0), 1))
}

function schedule() {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(update)
}

const icons: Record<string, string> = {
  search: 'M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3',
  calendar: 'M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z',
  filter: 'M4 5h16l-6 7v6l-4 2v-8z',
  ledger: 'M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h5',
  flow: 'M5 6h6M5 12h14M5 18h9M17 3l3 3-3 3M17 15l3 3-3 3',
  bot: 'M8 7h8a3 3 0 013 3v5a3 3 0 01-3 3H8a3 3 0 01-3-3v-5a3 3 0 013-3zM12 4v3M9 12v1M15 12v1',
  window: 'M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2zM4 9h16',
  home: 'M4 11l8-6 8 6v8a1 1 0 01-1 1h-4v-6H9v6H5a1 1 0 01-1-1z',
  inbox: 'M4 13h4l1.5 3h5L16 13h4M4 13l2-7h12l2 7v5a1 1 0 01-1 1H5a1 1 0 01-1-1z',
  people: 'M16 19v-1.5a4 4 0 00-4-4H7a4 4 0 00-4 4V19M9.5 9.5a3 3 0 100-6 3 3 0 000 6zM19 19v-1.5a4 4 0 00-3-3.9',
  file: 'M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5M9 13h6M9 17h4',
  gear: 'M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-2.7 1.1V21a2 2 0 11-4 0v-.1A1.6 1.6 0 006.5 19.4l-.1.1a2 2 0 11-2.8-2.8l.1-.1A1.6 1.6 0 003 14V13a2 2 0 110-4h.1A1.6 1.6 0 004.6 6.5l-.1-.1a2 2 0 112.8-2.8l.1.1a1.6 1.6 0 002.7-1.1V2a2 2 0 114 0v.1a1.6 1.6 0 002.7 1.1l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 001.1 2.7H21a2 2 0 110 4h-.1a1.6 1.6 0 00-1.5 1.3z',
}

const apps = [
  { name: 'Ledger', crumb: 'Treasury / Reconciliation', icon: 'ledger', team: ['AO', 'NK', 'TB'] },
  { name: 'Requests', crumb: 'Operations / Approvals', icon: 'flow', team: ['IM', 'AO', 'DE'] },
  { name: 'Runbook', crumb: 'Automation / Nightly', icon: 'bot', team: ['SYS', 'AO'] },
  { name: 'Staff portal', crumb: 'Workspace / Requests', icon: 'window', team: ['ZK', 'AO', 'FE'] },
]

const okStates = ['posted', 'complete', 'active', 'signed']
const warnStates = ['pending', 'invited', 'draft']

function tone(state: string) {
  if (okStates.includes(state)) return 'ok'
  if (warnStates.includes(state)) return 'warn'
  return 'bad'
}

const metrics = [
  { label: 'Matched today', value: '1,284', delta: '+38', tone: 'up' },
  { label: 'Exceptions', value: '3', delta: 'needs review', tone: 'warn' },
  { label: 'Value posted', value: '₦740.2m', delta: '+2.4%', tone: 'up' },
]

const ledgerTabs = [
  { key: 'all', label: 'All movements' },
  { key: 'unmatched', label: 'Unmatched' },
  { key: 'flagged', label: 'Flagged' },
]

const ledgerTab = ref('all')

const ledger = reactive([
  { ref: 'TRX-4821', party: 'Northbank Ltd', initials: 'NB', amount: '₦412,900.00', state: 'posted', sel: false },
  { ref: 'TRX-4822', party: 'Osun Traders', initials: 'OT', amount: '₦96,400.00', state: 'posted', sel: false },
  { ref: 'TRX-4823', party: 'Kite Logistics', initials: 'KL', amount: '₦18,250.00', state: 'pending', sel: true },
  { ref: 'TRX-4824', party: 'Marra Health', initials: 'MH', amount: '₦204,780.00', state: 'posted', sel: false },
  { ref: 'TRX-4825', party: 'Vale Partners', initials: 'VP', amount: '₦7,900.00', state: 'held', sel: false },
])

const shownLedger = computed(() => {
  if (ledgerTab.value === 'unmatched') return ledger.filter((row) => row.state === 'pending')
  if (ledgerTab.value === 'flagged') return ledger.filter((row) => row.state === 'held')
  return ledger
})

const unmatched = computed(() => ledger.filter((row) => row.state === 'pending').length)
const picked = computed(() => ledger.filter((row) => row.sel))
const allPicked = computed(() => picked.value.length === ledger.length)

function toggleAll() {
  const next = !allPicked.value
  ledger.forEach((row) => (row.sel = next))
}

function clearPicked() {
  ledger.forEach((row) => (row.sel = false))
}

function postPicked() {
  picked.value.forEach((row) => (row.state = 'posted'))
  clearPicked()
}

function holdPicked() {
  picked.value.forEach((row) => (row.state = 'held'))
  clearPicked()
}

const columns = reactive([
  {
    title: 'Raised',
    tone: 'neutral',
    cards: [
      { ref: 'REQ-208', title: 'Vendor onboarding', owner: 'IM', amount: '₦1.2m', age: '2h', prio: 'mid' },
      { ref: 'REQ-209', title: 'Card limit change', owner: 'AO', amount: '₦450k', age: '4h', prio: 'low' },
    ],
  },
  {
    title: 'In review',
    tone: 'warn',
    cards: [
      { ref: 'REQ-204', title: 'Refund over cap', owner: 'DE', amount: '₦2.8m', age: '1d', prio: 'high' },
    ],
  },
  {
    title: 'Approval',
    tone: 'brand',
    cards: [
      { ref: 'REQ-201', title: 'Payment run 12', owner: 'AO', amount: '₦18.4m', age: '3h', prio: 'high' },
      { ref: 'REQ-198', title: 'New supplier', owner: 'NK', amount: '₦640k', age: '6h', prio: 'mid' },
    ],
  },
  {
    title: 'Posted',
    tone: 'done',
    cards: [
      { ref: 'REQ-192', title: 'Payroll batch', owner: 'TB', amount: '₦31.0m', age: '1d', prio: 'low' },
      { ref: 'REQ-188', title: 'Q3 accrual', owner: 'IM', amount: '₦5.6m', age: '2d', prio: 'low' },
    ],
  },
])

const colEls: HTMLElement[] = []
const drag = ref<{ ci: number; idx: number; x: number; y: number; dx: number; dy: number } | null>(null)
const overCol = ref(-1)
let travelled = false
let nextRef = 210

function setCol(el: unknown, ci: number) {
  colEls[ci] = el as HTMLElement
}

function dragging(ci: number, idx: number) {
  return drag.value?.ci === ci && drag.value?.idx === idx
}

const liftStyle = computed(() => ({
  transform: `translate(${drag.value?.dx ?? 0}px, ${drag.value?.dy ?? 0}px)`,
}))

function columnAt(x: number, y: number) {
  return colEls.findIndex((el) => {
    if (!el) return false
    const box = el.getBoundingClientRect()
    return x >= box.left && x <= box.right && y >= box.top && y <= box.bottom
  })
}

function moveCard(from: number, idx: number, to: number) {
  const [card] = columns[from].cards.splice(idx, 1)
  if (card) columns[to].cards.unshift(card)
}

function advanceCard(ci: number, idx: number) {
  moveCard(ci, idx, (ci + 1) % columns.length)
}

function onCardDown(event: PointerEvent, ci: number, idx: number) {
  if (event.pointerType === 'touch') {
    advanceCard(ci, idx)
    return
  }

  event.preventDefault()
  drag.value = { ci, idx, x: event.clientX, y: event.clientY, dx: 0, dy: 0 }
  overCol.value = ci
  travelled = false
  window.addEventListener('pointermove', onCardMove)
  window.addEventListener('pointerup', onCardUp)
}

function onCardMove(event: PointerEvent) {
  const current = drag.value
  if (!current) return

  current.dx = event.clientX - current.x
  current.dy = event.clientY - current.y
  if (Math.abs(current.dx) > 4 || Math.abs(current.dy) > 4) travelled = true
  overCol.value = columnAt(event.clientX, event.clientY)
}

function onCardUp() {
  const current = drag.value
  window.removeEventListener('pointermove', onCardMove)
  window.removeEventListener('pointerup', onCardUp)

  if (current) {
    const target = overCol.value
    if (travelled && target >= 0 && target !== current.ci) moveCard(current.ci, current.idx, target)
    else if (!travelled) advanceCard(current.ci, current.idx)
  }

  drag.value = null
  overCol.value = -1
}

function raiseRequest() {
  columns[0].cards.unshift({
    ref: `REQ-${nextRef++}`,
    title: 'Expense reimbursement',
    owner: 'ZK',
    amount: '₦180k',
    age: 'now',
    prio: 'low',
  })
}

const runSteps = [
  { label: 'Pull yesterday from the bank', detail: '1,287 statement lines', time: '00:04', line: '04:00:04  fetch  statement.csv  1,287 lines' },
  { label: 'Match against expected items', detail: '1,284 matched', time: '00:11', line: '04:00:15  match  1,284 ok  3 exceptions' },
  { label: 'Raise the three that disagree', detail: 'assigned to finance', time: '00:02', line: '04:00:17  raise  3 exceptions  owner finance' },
  { label: 'Post the rest to the ledger', detail: '1,284 posted', time: '00:15', line: '04:00:32  post   1,284/1,284  no errors' },
  { label: 'Send the morning summary', detail: 'six recipients', time: '00:01', line: '04:00:33  mail   summary sent  6 recipients' },
]

const steps = ref(
  runSteps.map((step, i) => ({
    label: step.label,
    detail: step.detail,
    time: i < 3 ? step.time : i === 3 ? '00:15' : 'queued',
    state: i < 3 ? 'done' : i === 3 ? 'now' : 'wait',
  })),
)

const log = ref(runSteps.slice(0, 3).map((step) => step.line))
const progress = ref(62)
const runId = ref(2481)
const clock = ref('00:32')
const runDone = ref(false)

let timers: ReturnType<typeof setTimeout>[] = []

function clearRun() {
  timers.forEach((timer) => clearTimeout(timer))
  timers = []
}

function startRun() {
  clearRun()
  runId.value += 1
  runDone.value = false
  progress.value = 0
  clock.value = '00:00'
  log.value = []
  steps.value = runSteps.map((step) => ({
    label: step.label,
    detail: step.detail,
    time: 'queued',
    state: 'wait',
  }))

  let elapsed = 0

  runSteps.forEach((step, i) => {
    timers.push(
      setTimeout(() => {
        steps.value[i].state = 'now'
        steps.value[i].time = 'running'
        progress.value = Math.round(((i + 0.4) / runSteps.length) * 100)
      }, i * 820),
    )

    timers.push(
      setTimeout(
        () => {
          steps.value[i].state = 'done'
          steps.value[i].time = step.time
          progress.value = Math.round(((i + 1) / runSteps.length) * 100)
          log.value = [...log.value, step.line]
          elapsed += Number(step.time.slice(3))
          clock.value = `00:${String(elapsed).padStart(2, '0')}`
          if (i === runSteps.length - 1) runDone.value = true
        },
        i * 820 + 640,
      ),
    )
  })
}

const rail = [
  { key: 'overview', label: 'Overview', icon: 'home' },
  { key: 'requests', label: 'Requests', icon: 'inbox' },
  { key: 'people', label: 'People', icon: 'people' },
  { key: 'records', label: 'Records', icon: 'file' },
  { key: 'settings', label: 'Settings', icon: 'gear' },
]

const view = ref('requests')
const composing = ref(false)
const kinds = ['Travel advance', 'Equipment', 'Client refund']
const kind_ = ref(kinds[0])
let nextPortalRef = 212

const requests = reactive([
  { title: 'Travel advance', meta: 'REQ-211 · raised today', initials: 'ZK', state: 'pending' },
  { title: 'Laptop replacement', meta: 'REQ-207 · with IT', initials: 'FE', state: 'posted' },
  { title: 'Client refund', meta: 'REQ-205 · over cap', initials: 'DE', state: 'held' },
])

function submitRequest() {
  requests.unshift({
    title: kind_.value,
    meta: `REQ-${nextPortalRef++} · just now`,
    initials: 'ZK',
    state: 'pending',
  })
  composing.value = false
}

const settings = reactive([
  { label: 'Require approval over ₦1m', detail: 'Two approvers above the cap', on: true },
  { label: 'Post to the ledger nightly', detail: 'Runs at 04:00 West Africa time', on: true },
  { label: 'Notify raisers by email', detail: 'On every state change', on: false },
])

const panes: Record<string, { title: string; sub: string; tiles: { label: string; value: string }[]; rows: { title: string; meta: string; initials: string; state: string }[] }> = {
  overview: {
    title: 'Overview',
    sub: 'What moved across the workspace today',
    tiles: [
      { label: 'Raised today', value: '9' },
      { label: 'Waiting on you', value: '1' },
      { label: 'Closed this week', value: '17' },
    ],
    rows: [
      { title: 'Payment run 12 approved', meta: 'Adaeze O. · 2h ago', initials: 'AO', state: 'posted' },
      { title: 'Refund over cap raised', meta: 'Dele E. · 4h ago', initials: 'DE', state: 'held' },
      { title: 'Vendor onboarding started', meta: 'Ify M. · today', initials: 'IM', state: 'pending' },
    ],
  },
  people: {
    title: 'People',
    sub: 'Who can raise and who can approve',
    tiles: [
      { label: 'Members', value: '34' },
      { label: 'Approvers', value: '6' },
      { label: 'Invited', value: '2' },
    ],
    rows: [
      { title: 'Adaeze Okafor', meta: 'Finance · approver', initials: 'AO', state: 'active' },
      { title: 'Tunde Bello', meta: 'Treasury · approver', initials: 'TB', state: 'active' },
      { title: 'Zainab Kolo', meta: 'Operations · raiser', initials: 'ZK', state: 'invited' },
    ],
  },
  records: {
    title: 'Records',
    sub: 'Everything the workspace has to keep',
    tiles: [
      { label: 'Documents', value: '1,204' },
      { label: 'Retained', value: '7y' },
      { label: 'Pending sign', value: '2' },
    ],
    rows: [
      { title: 'Supplier agreement · Northbank', meta: 'Signed 12 Aug', initials: 'NB', state: 'signed' },
      { title: 'Board resolution Q3', meta: 'Awaiting two signatures', initials: 'BR', state: 'draft' },
      { title: 'Audit pack 2025', meta: 'Locked · read only', initials: 'AP', state: 'signed' },
    ],
  },
  settings: {
    title: 'Settings',
    sub: 'How this workspace behaves',
    tiles: [
      { label: 'Approvers', value: '6' },
      { label: 'Automations', value: '3' },
      { label: 'Integrations', value: '5' },
    ],
    rows: [],
  },
}

const pane = computed(() => {
  if (view.value === 'requests') {
    return {
      title: 'Requests',
      sub: 'Everything your team raised this week',
      tiles: [
        { label: 'Open', value: String(requests.filter((item) => item.state !== 'posted').length) },
        { label: 'Waiting on you', value: '1' },
        { label: 'Closed this week', value: '17' },
      ],
      rows: requests,
    }
  }

  return panes[view.value]
})

onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced.value) return

  update()
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  clearRun()
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
  window.removeEventListener('pointermove', onCardMove)
  window.removeEventListener('pointerup', onCardUp)
})
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
  padding: 0 clamp(0.75rem, calc(1.6*var(--vwu)), 1.6rem);
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
  padding: clamp(2.4rem, 6vh, 4.5rem) clamp(1.2rem, calc(4*var(--vwu)), 3.5rem) 0;
  border-radius: var(--radius-xl);
  overflow: hidden;
  text-align: center;
  /* Solid panels. Frosting them washed the copy out: text sat on whatever had
     slid underneath rather than on its own colour. The grain below gives the
     surface life instead. */
  isolation: isolate;
}

/* Untuned-set static: one turbulence tile, jumped a few pixels per frame so it
   crawls the way analogue noise did, held low enough to read as texture. */
.panel::before {
  position: absolute;
  inset: -120%;
  content: '';
  z-index: 0;
  pointer-events: none;
  opacity: 0.055;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E");
  animation: static-crawl 0.7s steps(8) infinite;
}

/* The copy and the shot sit above the grain, so the noise is behind them and
   never lands on the text. */
.panel > * {
  position: relative;
  z-index: 1;
}

@keyframes static-crawl {
  0% { transform: translate3d(0, 0, 0); }
  12.5% { transform: translate3d(-3%, 2%, 0); }
  25% { transform: translate3d(2%, -4%, 0); }
  37.5% { transform: translate3d(-4%, -2%, 0); }
  50% { transform: translate3d(3%, 3%, 0); }
  62.5% { transform: translate3d(-2%, 4%, 0); }
  75% { transform: translate3d(4%, -3%, 0); }
  87.5% { transform: translate3d(-3%, -4%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .panel::before {
    animation: none;
  }
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
  border: 1px solid rgb(var(--invert-text-rgb) / 0.12);
}

.tone-surface {
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
}

.tone-brand {
  background: var(--brand);
  color: var(--on-brand);
  border: 1px solid color-mix(in srgb, var(--on-brand) 12%, transparent);
}


.panel h3 {
  margin: 0;
  font-size: clamp(30px, calc(5.2*var(--vwu)), 74px);
  font-weight: 700;
  letter-spacing: -0.038em;
  line-height: 0.98;
  max-width: 16ch;
}

.panel p {
  margin: 1rem 0 0;
  max-width: 62ch;
  font-family: var(--font-mono);
  font-size: clamp(12px, calc(1.15*var(--vwu)), 14px);
  line-height: 1.6;
  opacity: 0.7;
}

.shot {
  width: min(100%, 74rem);
  margin-top: clamp(1.6rem, 4vh, 3rem);
  flex: 1;
  min-height: 0;
}

.win {
  display: flex;
  user-select: none;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--border);
  border-bottom: 0;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  background: var(--surface);
  color: var(--text);
  text-align: left;
  font-size: 13px;
  box-shadow: 0 -1px 0 rgb(255 255 255 / 0.04) inset;
}

.tone-surface .win {
  border-color: var(--border-strong);
}

.win-bar {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-shrink: 0;
  padding: 0.6rem 0.85rem;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
}

.win-mark {
  display: grid;
  width: 1.55rem;
  height: 1.55rem;
  place-items: center;
  border-radius: 7px;
  background: var(--brand);
  color: var(--on-brand);
}

.win-mark svg {
  width: 0.92rem;
  height: 0.92rem;
}

.win-app {
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.win-crumb {
  font-size: 11.5px;
  color: var(--muted);
}

.win-search {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  width: 12rem;
  margin-left: auto;
  padding: 0.3rem 0.55rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  color: var(--muted-2);
  font-size: 11.5px;
}

.win-search svg {
  width: 0.82rem;
  height: 0.82rem;
}

.win-search em {
  margin-left: auto;
  font-size: 9.5px;
  font-style: normal;
  opacity: 0.8;
}

.faces {
  display: flex;
  padding-left: 0.4rem;
}

.faces i {
  display: grid;
  width: 1.45rem;
  height: 1.45rem;
  place-items: center;
  margin-left: -0.4rem;
  border: 2px solid var(--bg);
  border-radius: 50%;
  background: var(--surface-2);
  color: var(--muted);
  font-size: 8.5px;
  font-style: normal;
  font-weight: 700;
}

.win-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 0;
  padding: 0.85rem 0.95rem;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.55rem;
}

.metric {
  padding: 0.6rem 0.7rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--bg);
}

.metric-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 9.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.metric-value {
  display: block;
  margin-top: 0.22rem;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
}

.metric-delta {
  font-size: 10.5px;
  font-weight: 600;
}

.metric-delta.up {
  color: var(--positive);
}

.metric-delta.warn {
  color: var(--warn);
}

.toolbar {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.tabs {
  display: flex;
  gap: 0.15rem;
}

.tabs b {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.28rem 0.6rem;
  border-radius: var(--radius-pill);
  font-size: 11.5px;
  font-weight: 500;
  color: var(--muted);
}

.tabs b.on {
  background: var(--surface-2);
  color: var(--text);
  font-weight: 600;
}

.tabs em {
  padding: 0 0.32rem;
  border-radius: var(--radius-pill);
  background: var(--warn);
  color: #fff;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
}

.seg {
  display: flex;
  padding: 0.15rem;
  border: 1px solid var(--border);
  border-radius: 9px;
  background: var(--bg);
}

.seg b {
  padding: 0.24rem 0.6rem;
  border-radius: 7px;
  font-size: 11.5px;
  font-weight: 500;
  color: var(--muted);
}

.seg b.on {
  background: var(--surface);
  color: var(--text);
  font-weight: 600;
  box-shadow: var(--shadow-1);
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-left: auto;
  padding: 0.26rem 0.6rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
  color: var(--muted);
  font-size: 11px;
}

.chip svg {
  width: 0.8rem;
  height: 0.8rem;
}

.btn {
  padding: 0.32rem 0.72rem;
  border-radius: 8px;
  font-size: 11.5px;
  font-weight: 600;
  white-space: nowrap;
}

.btn.ghost {
  border: 1px solid var(--border-strong);
  color: var(--text-2);
}

.btn.brand {
  background: var(--brand);
  color: var(--on-brand);
}

.grid-table {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.tr {
  display: grid;
  grid-template-columns: 1.1rem 6.2rem 1fr 7.4rem 6.2rem;
  gap: 0.75rem;
  align-items: center;
  padding: 0.5rem 0.7rem;
  border-top: 1px solid var(--border);
  font-size: 12.5px;
}

.tr.th {
  padding: 0.42rem 0.7rem;
  border-top: 0;
  background: var(--bg);
  font-family: var(--font-mono);
  font-size: 9.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.tr.sel {
  background: color-mix(in srgb, var(--brand) 16%, transparent);
}

.check {
  display: grid;
  width: 0.92rem;
  height: 0.92rem;
  place-items: center;
  border: 1px solid var(--border-strong);
  border-radius: 4px;
}

.th .check {
  border-color: var(--border);
}

.check svg {
  width: 0.6rem;
  height: 0.6rem;
  opacity: 0;
}

.check.on {
  border-color: transparent;
  background: var(--brand);
  color: var(--on-brand);
}

.check.on svg {
  opacity: 1;
}

.ref {
  font-size: 11.5px;
  color: var(--muted);
}

.party {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ava {
  display: grid;
  width: 1.4rem;
  height: 1.4rem;
  flex-shrink: 0;
  place-items: center;
  border-radius: 50%;
  background: var(--surface-2);
  color: var(--muted);
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
}

.ava.sm {
  width: 1.1rem;
  height: 1.1rem;
  font-size: 8px;
}

.right {
  text-align: right;
}

.money {
  font-variant-numeric: tabular-nums;
  font-size: 12px;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 0.32rem;
  padding: 0.16rem 0.5rem;
  border-radius: var(--radius-pill);
  font-size: 10.5px;
  font-style: normal;
  font-weight: 600;
}

.pill .dot {
  width: 0.34rem;
  height: 0.34rem;
  border-radius: 50%;
  background: currentColor;
}

.pill.ok {
  color: var(--positive);
  background: color-mix(in srgb, var(--positive) 15%, transparent);
}

.pill.warn {
  color: var(--warn);
  background: color-mix(in srgb, var(--warn) 18%, transparent);
}

.pill.bad {
  color: var(--negative);
  background: color-mix(in srgb, var(--negative) 15%, transparent);
}

.pill.live {
  color: var(--brand-deep);
  background: color-mix(in srgb, var(--brand) 26%, transparent);
}

.win-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 0.6rem;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: 11px;
}

.pager {
  display: flex;
  gap: 0.1rem;
}

.pager b {
  padding: 0.1rem 0.4rem;
  border-radius: 5px;
  font-weight: 500;
}

.pager b.on {
  background: var(--surface-2);
  color: var(--text);
  font-weight: 600;
}

.board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.55rem;
  flex: 1;
  min-height: 0;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding: 0.5rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--bg);
}

.col-head {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
}

.rule {
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 50%;
}

.rule.neutral {
  background: var(--muted-2);
}

.rule.warn {
  background: var(--warn);
}

.rule.brand {
  background: var(--brand-deep);
}

.rule.done {
  background: var(--positive);
}

.col-head em {
  margin-left: auto;
  padding: 0 0.35rem;
  border-radius: var(--radius-pill);
  background: var(--surface-2);
  font-size: 9.5px;
  font-style: normal;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 0.55rem 0.6rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--surface);
  box-shadow: var(--shadow-1);
}

.card-top {
  display: flex;
  align-items: center;
}

.card-top em {
  font-size: 9.5px;
  font-style: normal;
  letter-spacing: 0.04em;
  color: var(--muted-2);
}

.prio {
  width: 0.36rem;
  height: 0.36rem;
  margin-left: auto;
  border-radius: 50%;
}

.prio.high {
  background: var(--negative);
}

.prio.mid {
  background: var(--warn);
}

.prio.low {
  background: var(--border-strong);
}

.card strong {
  font-size: 12.5px;
  font-weight: 600;
  line-height: 1.3;
}

.card-foot {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.card-foot .money {
  font-size: 10.5px;
  color: var(--muted);
}

.age {
  margin-left: auto;
  font-size: 9.5px;
  font-style: normal;
  color: var(--muted-2);
}

.run-head {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.run-head > div {
  margin-right: auto;
}

.run-head strong {
  font-size: 14.5px;
  font-weight: 700;
  letter-spacing: -0.015em;
}

.sub {
  display: block;
  margin-top: 0.18rem;
  font-size: 11px;
  color: var(--muted);
}

.bar {
  height: 0.4rem;
  border-radius: var(--radius-pill);
  background: var(--surface-2);
  overflow: hidden;
}

.bar i {
  display: block;
  height: 100%;
  border-radius: var(--radius-pill);
  background: var(--brand);
}

.steps {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.step {
  display: grid;
  grid-template-columns: 1.35rem 1fr auto;
  gap: 0.7rem;
  align-items: center;
  padding: 0.52rem 0.7rem;
  border-top: 1px solid var(--border);
}

.step:first-child {
  border-top: 0;
}

.node {
  display: grid;
  width: 1.25rem;
  height: 1.25rem;
  place-items: center;
  border: 1px solid var(--border-strong);
  border-radius: 50%;
}

.node svg {
  width: 0.62rem;
  height: 0.62rem;
}

.step.done .node {
  border-color: transparent;
  background: var(--positive);
  color: #fff;
}

.step.now .node {
  border-color: var(--brand);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand) 22%, transparent);
}

.spin {
  width: 0.6rem;
  height: 0.6rem;
  border: 2px solid color-mix(in srgb, var(--brand) 40%, transparent);
  border-top-color: var(--brand-deep);
  border-radius: 50%;
  animation: spin 900ms linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.step.wait {
  opacity: 0.5;
}

.step-text strong {
  display: block;
  font-size: 12.5px;
  font-weight: 600;
}

.step-text em {
  display: block;
  margin-top: 0.1rem;
  font-size: 10.5px;
  font-style: normal;
  color: var(--muted);
}

.step-time {
  font-size: 11px;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
}

.log {
  display: flex;
  flex-direction: column;
  gap: 0.22rem;
  padding: 0.6rem 0.7rem;
  border-radius: var(--radius-sm);
  background: var(--invert-bg);
  color: var(--invert-muted);
  font-size: 10px;
  white-space: pre;
  overflow: hidden;
}

.win-body.app {
  display: grid;
  grid-template-columns: 12rem 1fr;
  gap: 0;
  padding: 0;
}

.rail {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.7rem 0.55rem;
  border-right: 1px solid var(--border);
  background: var(--bg);
}

.ws {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.55rem;
  padding: 0.35rem 0.4rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  font-size: 11.5px;
}

.ws b {
  font-weight: 600;
}

.ws svg {
  width: 0.8rem;
  height: 0.8rem;
  margin-left: auto;
  color: var(--muted-2);
}

.ws-mark {
  display: grid;
  width: 1.25rem;
  height: 1.25rem;
  place-items: center;
  border-radius: 5px;
  background: var(--brand);
  color: var(--on-brand);
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
}

.rail-item {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.42rem 0.5rem;
  border-radius: 8px;
  font-size: 12px;
  color: var(--muted);
}

.rail-item svg {
  width: 0.95rem;
  height: 0.95rem;
}

.rail-item.on {
  background: var(--surface);
  color: var(--text);
  font-weight: 600;
  box-shadow: var(--shadow-1);
}

.rail-item em {
  margin-left: auto;
  padding: 0 0.32rem;
  border-radius: var(--radius-pill);
  background: var(--brand);
  color: var(--on-brand);
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
}

.pane {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 0;
  padding: 0.85rem 0.95rem;
}

.pane-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.pane-head strong {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.015em;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.55rem;
}

.tile {
  padding: 0.6rem 0.7rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--bg);
  font-size: 10.5px;
  color: var(--muted);
}

.tile strong {
  display: block;
  margin-top: 0.15rem;
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  font-variant-numeric: tabular-nums;
}

.list {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 0.7rem;
  border-top: 1px solid var(--border);
}

.li:first-child {
  border-top: 0;
}

.li-text {
  min-width: 0;
}

.li-text strong {
  display: block;
  font-size: 12.5px;
  font-weight: 600;
}

.li-text em {
  display: block;
  font-size: 10.5px;
  font-style: normal;
  color: var(--muted);
}

.li .pill {
  margin-left: auto;
}

.tabs b,
.seg b,
.btn,
.rail-item,
.pager b,
.chips b {
  cursor: pointer;
}

.tabs b:hover,
.seg b:hover {
  color: var(--text);
}

.btn {
  transition: filter 140ms ease, background 140ms ease;
}

.btn:hover {
  filter: brightness(0.97);
}

.btn.ghost:hover {
  background: var(--surface-2);
}

.tr:not(.th) {
  cursor: pointer;
  transition: background 120ms ease;
}

.tr.th {
  cursor: pointer;
}

.tr:not(.th):hover {
  background: var(--surface-2);
}

.tr.sel:hover {
  background: color-mix(in srgb, var(--brand) 22%, transparent);
}

.check.some {
  border-color: transparent;
  background: var(--brand);
}

.check.some::after {
  content: '';
  width: 0.44rem;
  height: 2px;
  border-radius: 2px;
  background: var(--on-brand);
}

.check.some svg {
  display: none;
}

.selbar {
  padding: 0.24rem 0.35rem;
  border-radius: var(--radius-pill);
  background: color-mix(in srgb, var(--brand) 20%, transparent);
}

.selcount {
  margin-right: auto;
  padding-left: 0.55rem;
  font-size: 11.5px;
  font-weight: 600;
}

.empty {
  padding: 1.1rem 0.7rem;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: 11.5px;
  text-align: center;
}

.card {
  cursor: grab;
  touch-action: manipulation;
  transition: box-shadow 140ms ease, border-color 140ms ease;
}

.card:hover {
  border-color: var(--border-strong);
  box-shadow: var(--shadow-2);
}

.card.lifted {
  position: relative;
  z-index: 30;
  cursor: grabbing;
  border-color: var(--brand-deep);
  box-shadow: var(--shadow-lift-hover);
  rotate: -1.6deg;
}

.col {
  transition: background 140ms ease, border-color 140ms ease;
}

.col.over {
  border-color: var(--brand-deep);
  background: color-mix(in srgb, var(--brand) 14%, var(--bg));
}

.col-empty {
  padding: 0.9rem 0;
  border: 1px dashed var(--border-strong);
  border-radius: var(--radius-sm);
  color: var(--muted-2);
  font-size: 10.5px;
  text-align: center;
}

.hint {
  margin-top: auto;
  color: var(--muted-2);
  font-size: 10.5px;
}

.bar i {
  transition: width 420ms cubic-bezier(0.22, 1, 0.36, 1);
}

.run-head .btn {
  align-self: flex-start;
}

.rail-item {
  transition: background 140ms ease, color 140ms ease;
}

.rail-item:hover {
  color: var(--text);
}

.compose {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding: 0.7rem 0.75rem;
  border: 1px solid var(--brand-deep);
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--brand) 10%, var(--surface));
}

.compose-head {
  font-size: 11.5px;
  font-weight: 600;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.chips b {
  padding: 0.24rem 0.6rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  font-size: 11px;
  font-weight: 500;
}

.chips b.on {
  border-color: transparent;
  background: var(--brand);
  color: var(--on-brand);
  font-weight: 600;
}

.compose-foot {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.compose-foot em {
  font-size: 10.5px;
  font-style: normal;
  color: var(--muted);
}

.compose-foot .btn {
  margin-left: auto;
}

.li {
  transition: background 120ms ease;
}

.switch {
  position: relative;
  width: 1.85rem;
  height: 1.05rem;
  flex-shrink: 0;
  margin-left: auto;
  border-radius: var(--radius-pill);
  background: var(--surface-3);
  cursor: pointer;
  transition: background 160ms ease;
}

.switch::after {
  position: absolute;
  top: 0.15rem;
  left: 0.15rem;
  width: 0.75rem;
  height: 0.75rem;
  content: '';
  border-radius: 50%;
  background: var(--surface);
  box-shadow: var(--shadow-1);
  transition: transform 160ms cubic-bezier(0.22, 1, 0.36, 1);
}

.switch.on {
  background: var(--brand-deep);
}

.switch.on::after {
  transform: translateX(0.8rem);
}

.list .li:has(.switch) {
  cursor: pointer;
}

.list .li:has(.switch):hover {
  background: var(--surface-2);
}

@media (max-width: 1024px) {
  .win-crumb {
    display: none;
  }

  .win-search {
    width: 8.5rem;
  }
}

@media (max-width: 820px) {
  .win-search,
  .faces {
    display: none;
  }

  .win-app {
    margin-right: auto;
  }

  .metrics {
    grid-template-columns: repeat(2, 1fr);
  }

  .metrics .metric:last-child {
    display: none;
  }

  .tr {
    grid-template-columns: 1.1rem 1fr 6.4rem 5.6rem;
    gap: 0.5rem;
  }

  .tr > .ref,
  .tr.th > span:nth-child(2) {
    display: none;
  }

  .board {
    grid-template-columns: repeat(2, 1fr);
  }

  .win-body.app {
    grid-template-columns: 1fr;
  }

  .rail {
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

.is-flat .shot {
  height: 26rem;
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

  .shot {
    height: 26rem;
    flex: none;
  }

  .spin {
    animation: none;
  }
}
</style>
