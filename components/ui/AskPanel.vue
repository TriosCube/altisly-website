<template>
  <button
    type="button"
    class="ask-fab"
    :class="{ 'is-hidden': open }"
    aria-label="Ask Altisly"
    @click="open = true"
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
      <path :d="spark" />
    </svg>
    <span>Ask Altisly</span>
  </button>

  <aside class="ask" :class="[`is-${mode}`, { 'is-open': open }]" aria-label="Ask Altisly">
    <header class="ask-bar">
      <span class="ask-mark">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
          <path :d="spark" />
        </svg>
      </span>
      <span class="ask-name">Ask Altisly <sup>beta</sup></span>

      <button type="button" class="ask-icon" aria-label="Clear this conversation" @click="reset">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13M10 11v6M14 11v6" />
        </svg>
      </button>

      <button
        v-if="mode !== 'pinned'"
        type="button"
        class="ask-icon"
        :aria-label="mode === 'wide' ? 'Shrink the window' : 'Expand the window'"
        :title="mode === 'wide' ? 'Shrink' : 'Expand'"
        @click="mode = mode === 'wide' ? 'float' : 'wide'"
      >
        <svg v-if="mode === 'wide'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M9 4v5H4M15 20v-5h5M15 4v5h5M9 20v-5H4" />
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M4 9V4h5M20 15v5h-5M20 9V4h-5M4 15v5h5" />
        </svg>
      </button>

      <button
        type="button"
        class="ask-icon"
        :class="{ 'is-on': mode === 'pinned' }"
        :aria-label="mode === 'pinned' ? 'Unpin and float' : 'Pin to the side'"
        :aria-pressed="mode === 'pinned'"
        :title="mode === 'pinned' ? 'Unpin (float)' : 'Pin to the side'"
        @click="mode = mode === 'pinned' ? 'float' : 'pinned'"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M15 3l6 6-3 1-4 4-1 5-3-3-5 5 5-5-3-3 5-1 4-4z" />
          <path v-if="mode === 'pinned'" d="M4 20L20 4" stroke-width="1.6" />
        </svg>
      </button>

      <button type="button" class="ask-icon" aria-label="Close" @click="open = false">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </header>

    <div ref="threadEl" class="ask-thread">
      <div v-if="!turns.length" class="ask-empty">
        <span class="ask-hero">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path :d="spark" />
          </svg>
        </span>
        <p class="ask-empty-title">What do you want to know?</p>
        <p class="ask-empty-sub">
          The studio, the platforms we have built, how a build runs, and how to start one.
        </p>
        <span class="ask-examples-label">Try one of these</span>
        <div class="ask-examples">
          <button v-for="q in examples" :key="q.short" type="button" @click="send(q.full)">
            {{ q.short }}
          </button>
        </div>
      </div>

      <div v-for="turn in turns" :key="turn.id" class="ask-row" :class="`is-${turn.role}`">
        <span v-if="turn.role === 'user'" class="ask-avatar is-you">You</span>
        <span v-else class="ask-avatar is-bot">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
            <path :d="spark" />
          </svg>
        </span>
        <div class="ask-bubble">
          <span v-if="turn.text">{{ turn.text }}</span>
          <span v-else class="ask-typing"><i></i><i></i><i></i></span>
        </div>
      </div>

      <p v-if="failure" class="ask-failure">{{ failure }}</p>
    </div>

    <form class="ask-compose" @submit.prevent="send(draft)">
      <textarea
        ref="inputEl"
        v-model="draft"
        rows="1"
        :maxlength="800"
        placeholder="Ask about Altisly"
        :disabled="sending"
        @keydown.enter.exact.prevent="send(draft)"
        @input="grow"
      ></textarea>
      <button type="submit" :disabled="sending || !draft.trim()" aria-label="Send">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </form>
    <p class="ask-foot">Answers cover Altisly only. For anything live, write to {{ site.email }}.</p>
  </aside>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { site } from '@/data/site'

const spark = 'M12 3l1.9 5.3L19 10l-5.1 1.7L12 17l-1.9-5.3L5 10l5.1-1.7zM18.5 15l.7 1.9 1.8.6-1.8.6-.7 1.9-.7-1.9-1.8-.6 1.8-.6z'

const examples = [
  { short: 'What do you build?', full: 'What kind of systems does Altisly build?' },
  { short: 'What is Isura?', full: 'What is Isura and who is it for?' },
  { short: 'How do you work?', full: 'How does an engagement with Altisly actually run?' },
  { short: 'Are you hiring?', full: 'What roles are open at Altisly right now?' },
]

interface Turn {
  id: number
  role: 'user' | 'assistant'
  text: string
}

type Mode = 'float' | 'wide' | 'pinned'

const open = ref(false)
const mode = ref<Mode>('float')
const draft = ref('')
const sending = ref(false)
const failure = ref('')
const turns = ref<Turn[]>([])
const threadEl = ref<HTMLElement | null>(null)
const inputEl = ref<HTMLTextAreaElement | null>(null)

let seq = 0

/* Three states, as in the console: a floating card, the same card expanded, and pinned to the side.
   Only pinned narrows the page, and it is the only one the layout needs to know about. */
watch([open, mode], ([isOpen, current]) => {
  document.documentElement.classList.toggle('ask-open', isOpen && current === 'pinned')
  if (isOpen) nextTick(() => inputEl.value?.focus())
})

function grow() {
  const field = inputEl.value
  if (!field) return

  field.style.height = 'auto'
  field.style.height = `${Math.min(field.scrollHeight, 140)}px`
}

async function toBottom() {
  await nextTick()
  const thread = threadEl.value
  if (thread) thread.scrollTop = thread.scrollHeight
}

function reset() {
  turns.value = []
  failure.value = ''
  draft.value = ''
}

async function send(text: string) {
  const prompt = text.trim()
  if (!prompt || sending.value) return

  failure.value = ''
  draft.value = ''
  grow()

  turns.value.push({ id: (seq += 1), role: 'user', text: prompt })

  const pending: Turn = { id: (seq += 1), role: 'assistant', text: '' }
  turns.value.push(pending)
  sending.value = true
  await toBottom()

  try {
    const answer = await $fetch<{ reply: string }>('/api/ask', {
      method: 'POST',
      body: {
        prompt,
        history: turns.value.slice(0, -2).map((turn) => ({ role: turn.role, text: turn.text })),
      },
    })

    await reveal(pending, answer.reply)
  } catch (caught) {
    turns.value = turns.value.filter((turn) => turn.id !== pending.id)
    failure.value =
      (caught as { statusMessage?: string })?.statusMessage ??
      'That did not go through. Try again in a moment.'
  } finally {
    sending.value = false
    await toBottom()
  }
}

/* Written out rather than dropped in, so a reply reads as an answer being given. */
async function reveal(turn: Turn, reply: string) {
  const words = reply.split(' ')

  for (let i = 0; i < words.length; i += 2) {
    turn.text = words.slice(0, i + 2).join(' ')
    if (i % 8 === 0) await toBottom()
    await new Promise((resolve) => setTimeout(resolve, 24))
  }

  turn.text = reply
}
</script>

<style scoped>
.ask-fab {
  position: fixed;
  right: 1.4rem;
  bottom: 1.4rem;
  z-index: 60;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.05rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition:
    opacity 200ms ease,
    transform 200ms cubic-bezier(0.22, 1, 0.36, 1),
    background 160ms ease;
}

.ask-fab svg {
  width: 1.05rem;
  height: 1.05rem;
  color: var(--brand-deep);
}

.ask-fab:hover {
  background: var(--surface-2);
}

.ask-fab.is-hidden {
  opacity: 0;
  transform: translateY(0.6rem) scale(0.96);
  pointer-events: none;
}

.ask {
  position: fixed;
  z-index: 70;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--border);
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  backdrop-filter: blur(18px) saturate(1.3);
  -webkit-backdrop-filter: blur(18px) saturate(1.3);
  opacity: 0;
  pointer-events: none;
  transition:
    top 300ms cubic-bezier(0.22, 1, 0.36, 1),
    right 300ms cubic-bezier(0.22, 1, 0.36, 1),
    bottom 300ms cubic-bezier(0.22, 1, 0.36, 1),
    width 300ms cubic-bezier(0.22, 1, 0.36, 1),
    border-radius 300ms ease,
    transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 200ms ease;
}

.ask.is-open {
  opacity: 1;
  pointer-events: auto;
}

/* Floating: a card in the corner, clear of the nav. */
.ask.is-float {
  top: 5.5rem;
  right: 1.4rem;
  bottom: 1.4rem;
  width: min(25rem, calc(100vw - 2.8rem));
  border-radius: var(--radius-lg);
  transform: translateY(0.8rem);
}

/* Expanded: the same card, centred and wide. */
.ask.is-wide {
  top: 5.5rem;
  right: max(1.4rem, calc((100vw - min(56rem, calc(100vw - 2.8rem))) / 2));
  bottom: 1.4rem;
  width: min(56rem, calc(100vw - 2.8rem));
  border-radius: var(--radius-lg);
  transform: translateY(0.8rem);
}

/* Pinned: docked to the right, but sitting under the header and inside the page margin rather than
   flush to the glass, and the page makes room for it. */
.ask.is-pinned {
  top: 5.5rem;
  right: 1rem;
  bottom: 1rem;
  width: var(--ask-w, 24rem);
  border-radius: var(--radius-lg);
  transform: translateX(calc(100% + 1rem));
}

.ask.is-open.is-float,
.ask.is-open.is-wide {
  transform: none;
}

.ask.is-open.is-pinned {
  transform: none;
}

.ask-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  height: 3.5rem;
  padding: 0 0.7rem 0 1rem;
  border-bottom: 1px solid var(--border);
}

.ask-mark {
  display: grid;
  width: 1.6rem;
  height: 1.6rem;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--brand) 30%, var(--border));
  border-radius: var(--radius-sm);
  background: color-mix(in srgb, var(--brand) 14%, var(--surface));
  color: var(--brand-deep);
}

.ask-mark svg {
  width: 0.95rem;
  height: 0.95rem;
}

.ask-name {
  margin-right: auto;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.02em;
}

.ask-name sup {
  margin-left: 0.15rem;
  font-size: 8.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted-2);
}

.ask-icon {
  display: grid;
  width: 1.75rem;
  height: 1.75rem;
  place-items: center;
  border: 0;
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--muted);
  cursor: pointer;
}

.ask-icon svg {
  width: 0.92rem;
  height: 0.92rem;
}

.ask-icon:hover {
  background: var(--surface-2);
  color: var(--text);
}

.ask-icon.is-on {
  color: var(--brand-deep);
}

.ask-thread {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
  min-height: 0;
  padding: 1.1rem 1rem;
  overflow-y: auto;
}

.ask-empty {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  text-align: center;
}

.ask-hero {
  display: grid;
  width: 4.6rem;
  height: 4.6rem;
  place-items: center;
  border-radius: 50%;
  background: radial-gradient(
    circle at 32% 30%,
    color-mix(in srgb, var(--brand) 40%, transparent) 0%,
    color-mix(in srgb, var(--brand-soft) 70%, transparent) 55%,
    var(--surface-2) 100%
  );
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--brand) 24%, transparent) inset;
  color: var(--brand-deep);
}

.ask-hero svg {
  width: 1.9rem;
  height: 1.9rem;
}

.ask-empty-title {
  margin: 0.4rem 0 0;
  font-size: 15px;
  font-weight: 600;
}

.ask-empty-sub {
  margin: 0;
  max-width: 24ch;
  font-size: 12.5px;
  line-height: 1.55;
  color: var(--muted);
}

.ask-examples-label {
  margin-top: 0.6rem;
  font-family: var(--font-mono);
  font-size: 9.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted-2);
}

.ask-examples {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
}

.ask-examples button {
  padding: 0.34rem 0.72rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
  background: var(--surface-2);
  color: var(--text);
  font-size: 12px;
  cursor: pointer;
  transition:
    background 140ms ease,
    border-color 140ms ease;
}

.ask-examples button:hover {
  border-color: var(--border-strong);
  background: var(--surface-3);
}

.ask-row {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
}

.ask-row.is-user {
  flex-direction: row-reverse;
}

.ask-avatar {
  display: grid;
  width: 1.65rem;
  height: 1.65rem;
  flex-shrink: 0;
  place-items: center;
  font-size: 9px;
  font-weight: 700;
}

.ask-avatar.is-you {
  border-radius: 50%;
  background: var(--invert-bg);
  color: var(--invert-text);
}

.ask-avatar.is-bot {
  border: 1px solid color-mix(in srgb, var(--brand) 22%, var(--border));
  border-radius: var(--radius-sm);
  background: color-mix(in srgb, var(--brand) 12%, var(--surface));
  color: var(--brand-deep);
}

.ask-avatar.is-bot svg {
  width: 0.85rem;
  height: 0.85rem;
}

.ask-bubble {
  max-width: 82%;
  padding: 0.6rem 0.8rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-2);
  font-size: 13px;
  line-height: 1.55;
  white-space: pre-line;
}

.is-user .ask-bubble {
  border-color: transparent;
  background: var(--invert-bg);
  color: var(--invert-text);
}

.ask-typing {
  display: flex;
  align-items: center;
  gap: 0.24rem;
  height: 1.1rem;
}

.ask-typing i {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background: var(--muted);
  animation: ask-pulse 1.1s infinite ease-in-out;
}

.ask-typing i:nth-child(2) {
  animation-delay: 140ms;
}

.ask-typing i:nth-child(3) {
  animation-delay: 280ms;
}

@keyframes ask-pulse {
  0%,
  60%,
  100% {
    opacity: 0.35;
  }
  30% {
    opacity: 1;
  }
}

.ask-failure {
  margin: 0;
  padding: 0.55rem 0.7rem;
  border: 1px solid color-mix(in srgb, var(--negative) 30%, transparent);
  border-radius: var(--radius-sm);
  background: color-mix(in srgb, var(--negative) 10%, transparent);
  color: var(--negative);
  font-size: 12px;
}

.ask-compose {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  flex-shrink: 0;
  padding: 0.7rem 0.8rem 0.5rem;
  border-top: 1px solid var(--border);
}

.ask-compose textarea {
  flex: 1;
  max-height: 8.75rem;
  padding: 0.55rem 0.7rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: 13px;
  line-height: 1.5;
  resize: none;
}

.ask-compose textarea:focus {
  outline: none;
  border-color: var(--brand-deep);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand) 28%, transparent);
}

.ask-compose button {
  display: grid;
  width: 2.2rem;
  height: 2.2rem;
  flex-shrink: 0;
  place-items: center;
  border: 0;
  border-radius: var(--radius-md);
  background: var(--brand);
  color: var(--on-brand);
  cursor: pointer;
}

.ask-compose button svg {
  width: 1rem;
  height: 1rem;
}

.ask-compose button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.ask-foot {
  flex-shrink: 0;
  margin: 0;
  padding: 0 0.85rem 0.75rem;
  font-size: 10.5px;
  line-height: 1.5;
  color: var(--muted-2);
}

@media (max-width: 640px) {
  .ask,
  .ask.is-float,
  .ask.is-wide,
  .ask.is-pinned {
    top: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    border-width: 0;
    border-radius: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ask,
  .ask-fab {
    transition: none;
  }
}
</style>
