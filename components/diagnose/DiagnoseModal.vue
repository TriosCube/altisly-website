<template>
  <Teleport to="body">
    <Transition name="sheet">
      <div v-if="open" class="sheet-backdrop" @click.self="requestClose">
        <div
          class="sheet"
          role="dialog"
          aria-modal="true"
          aria-label="Altisly diagnostic"
          :class="{ 'is-report': phase === 'report' }"
        >
          <header class="sheet-bar">
            <span class="sheet-label">
              <i aria-hidden="true"></i>
              {{ phase === 'report' ? brief.business : 'The brief' }}
            </span>
            <button type="button" class="sheet-close" aria-label="Close" @click="requestClose">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </header>

          <div v-if="phase === 'form'" class="sheet-body is-centred">
            <span class="sheet-eyebrow">
              {{ String(step + 1).padStart(2, '0') }} /
              {{ String(questions.length).padStart(2, '0') }}
              <em v-if="isRequired(current.name)">required</em>
            </span>

            <h2 :key="current.name" class="sheet-ask">{{ current.ask }}</h2>
            <p class="sheet-hint">{{ current.hint }}</p>

            <div class="sheet-field">
              <textarea
                v-if="current.multiline"
                :key="`${current.name}-area`"
                ref="fieldRef"
                v-model="brief[current.name]"
                rows="2"
                :maxlength="briefFieldLimit"
                :placeholder="current.placeholder"
                @keydown.meta.enter="next"
                @keydown.ctrl.enter="next"
              ></textarea>
              <input
                v-else
                :key="current.name"
                ref="fieldRef"
                v-model="brief[current.name]"
                :type="current.type ?? 'text'"
                :maxlength="briefFieldLimit"
                :placeholder="current.placeholder"
                @keydown.enter.prevent="next"
              />
            </div>

            <p v-if="stepError || runError" class="sheet-error">{{ stepError || runError }}</p>

            <div class="sheet-actions">
              <button type="button" :disabled="step === 0" @click="back">← Back</button>
              <button type="button" class="is-primary" @click="next">
                {{ step === questions.length - 1 ? 'Run the survey →' : 'Next →' }}
              </button>
            </div>

            <div class="sheet-rail" aria-hidden="true">
              <span
                v-for="(question, i) in questions"
                :key="question.name"
                :class="{ 'is-done': i < step, 'is-now': i === step }"
              ></span>
            </div>
          </div>

          <div v-else-if="phase === 'running'" class="sheet-body is-centred">
            <span class="sheet-hub" aria-hidden="true"></span>
            <h2 class="sheet-ask">Surveying {{ brief.business || 'the operation' }}.</h2>
            <p class="sheet-hint">
              Two passes back to back. The survey first, with no knowledge of what might get built,
              then the concept that answers it.
            </p>
            <div class="sheet-stages">
              <span
                v-for="(stage, i) in stageOrder"
                :key="stage"
                :class="{ 'is-done': i < stageIndex, 'is-now': i === stageIndex }"
                >{{ stage }}</span
              >
            </div>
          </div>

          <div v-else-if="report" class="sheet-body">
            <DiagnoseReport :report="report" :brief="brief" @restart="restart" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, reactive, ref, watch } from 'vue'
import DiagnoseReport from './DiagnoseReport.vue'
import {
  briefFieldLimit,
  emptyBrief,
  looksLikeEmail,
  requiredBriefFields,
  stageOrder,
  type BriefField,
  type DiagnoseReport as DiagnoseReportType,
} from '@/utils/diagnose'

const props = defineProps<{
  open: boolean
  industry?: string
}>()

const emit = defineEmits<{ close: [] }>()

interface Question {
  name: BriefField
  ask: string
  hint: string
  placeholder: string
  type?: 'email'
  multiline?: boolean
}

const questions: Question[] = [
  {
    name: 'business',
    ask: 'What is the business called?',
    hint: 'The name on the door, the invoice, or the shopfront.',
    placeholder: 'Name',
  },
  {
    name: 'industry',
    ask: 'What line of work is it in?',
    hint: 'Close enough is fine. The survey adjusts.',
    placeholder: 'Treasury, payments, logistics, clinic, studio',
  },
  {
    name: 'offering',
    ask: 'What do customers actually pay you for?',
    hint: 'Not the mission. The thing money changes hands over.',
    placeholder: 'The thing money changes hands over',
    multiline: true,
  },
  {
    name: 'teamSize',
    ask: 'How many people run it?',
    hint: 'Counting you. Rough is fine.',
    placeholder: '1, 12, 80',
  },
  {
    name: 'tools',
    ask: 'What are you running the work on today?',
    hint: 'Including the spreadsheet nobody admits to.',
    placeholder: 'Sheets, WhatsApp, Shopify, paper',
  },
  {
    name: 'friction',
    ask: 'What breaks most often?',
    hint: 'The thing that costs you a day every week. Be blunt.',
    placeholder: 'The thing that costs you a day every week',
    multiline: true,
  },
  {
    name: 'name',
    ask: 'And your name?',
    hint: 'So the write up is addressed to someone.',
    placeholder: 'Your name',
  },
  {
    name: 'email',
    ask: 'Where should this land?',
    hint: 'The write up stays here. The email is how the studio reaches back.',
    placeholder: 'you@business.com',
    type: 'email',
  },
]

const brief = reactive({ ...emptyBrief })
const step = ref(0)
const phase = ref<'form' | 'running' | 'report'>('form')
const stageIndex = ref(0)
const report = ref<DiagnoseReportType | null>(null)
const stepError = ref('')
const runError = ref('')
const fieldRef = ref<HTMLInputElement | HTMLTextAreaElement | null>(null)

const current = computed(() => questions[step.value])

let stageTimer: ReturnType<typeof setInterval> | undefined

function isRequired(field: BriefField) {
  return requiredBriefFields.includes(field)
}

async function focusField() {
  await nextTick()
  fieldRef.value?.focus()
}

function back() {
  if (step.value === 0) return
  stepError.value = ''
  step.value -= 1
  focusField()
}

function next() {
  const field = current.value.name
  const value = brief[field].trim()

  if (isRequired(field) && !value) {
    stepError.value = 'This one the survey cannot work without.'
    return
  }

  if (field === 'email' && !looksLikeEmail(value)) {
    stepError.value = 'That email address does not look right.'
    return
  }

  stepError.value = ''
  runError.value = ''

  if (step.value < questions.length - 1) {
    step.value += 1
    focusField()
    return
  }

  run()
}

async function run() {
  phase.value = 'running'
  stageIndex.value = 0
  runError.value = ''

  stageTimer = setInterval(() => {
    if (stageIndex.value < stageOrder.length - 1) stageIndex.value += 1
  }, 3600)

  try {
    const response = await $fetch<{ report: DiagnoseReportType }>('/api/diagnose', {
      method: 'POST',
      body: { brief: { ...brief } },
    })

    report.value = response.report
    stageIndex.value = stageOrder.length
    phase.value = 'report'
  } catch (error: unknown) {
    const statusMessage = (error as { data?: { statusMessage?: string } })?.data?.statusMessage
    runError.value =
      typeof statusMessage === 'string' && statusMessage.trim()
        ? statusMessage
        : 'The engine could not answer right now. Try again in a moment.'
    phase.value = 'form'
    focusField()
  } finally {
    clearInterval(stageTimer)
  }
}

function restart() {
  Object.assign(brief, emptyBrief)
  if (props.industry) brief.industry = props.industry
  step.value = 0
  phase.value = 'form'
  report.value = null
  runError.value = ''
  stepError.value = ''
  focusField()
}

function requestClose() {
  if (phase.value === 'running') return
  emit('close')
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') requestClose()
}

watch(
  () => props.open,
  (isOpen) => {
    if (typeof document === 'undefined') return

    if (isOpen) {
      if (props.industry && !brief.industry) brief.industry = props.industry
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', onKeydown)
      focusField()
      return
    }

    document.body.style.overflow = ''
    document.removeEventListener('keydown', onKeydown)
  },
)

onBeforeUnmount(() => {
  clearInterval(stageTimer)
  if (typeof document === 'undefined') return
  document.body.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.sheet-backdrop {
  position: fixed;
  inset: 0;
  z-index: 300;
  display: grid;
  place-items: center;
  padding: clamp(1rem, calc(4*var(--vwu)), 2.6rem);
  background: var(--scrim);
  backdrop-filter: blur(10px) saturate(1.1);
}

.sheet {
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(100%, 46rem);
  max-height: min(100%, 44rem);
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  background: var(--surface);
  color: var(--text);
  box-shadow: var(--shadow-pop);
}

.sheet.is-report {
  width: min(100%, 62rem);
  max-height: min(100%, 52rem);
}

.sheet-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 1.1rem 0 1.4rem;
  min-height: 3.2rem;
  border-bottom: 1px solid var(--border);
  background: var(--surface-2);
}

.sheet-label {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.14rem;
  text-transform: uppercase;
}

.sheet-label i {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: var(--brand-deep);
}

.sheet-close {
  display: grid;
  width: 2rem;
  height: 2rem;
  place-items: center;
  border-radius: 9999px;
  color: var(--muted);
  transition:
    background 160ms ease,
    color 160ms ease;
}

.sheet-close:hover {
  background: var(--surface-3);
  color: var(--text);
}

.sheet-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}

.sheet-body.is-centred {
  display: grid;
  align-content: center;
  justify-items: center;
  padding: clamp(2.2rem, calc(5*var(--vwu)), 3.6rem);
  text-align: center;
}

.sheet-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--brand-deep);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16rem;
  text-transform: uppercase;
}

.sheet-eyebrow em {
  color: var(--muted-2);
  font-style: normal;
}

.sheet-ask {
  margin: 1.1rem 0 0;
  font-size: clamp(1.5rem, calc(3.2*var(--vwu)), 2.3rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.08;
  animation: sheet-in 400ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.sheet-hint {
  max-width: 42ch;
  margin: 0.8rem 0 0;
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.55;
}

.sheet-field {
  width: min(100%, 28rem);
  margin-top: 2rem;
}

.sheet-field input,
.sheet-field textarea {
  width: 100%;
  padding: 0.6rem 0 0.8rem;
  border: 0;
  border-bottom: 1px solid var(--border-strong);
  background: transparent;
  color: var(--text);
  font: inherit;
  font-size: clamp(1rem, calc(1.8*var(--vwu)), 1.25rem);
  letter-spacing: -0.012em;
  text-align: center;
  resize: none;
  transition: border-color 200ms ease;
}

.sheet-field input::placeholder,
.sheet-field textarea::placeholder {
  color: var(--muted-2);
}

.sheet-field input:focus,
.sheet-field textarea:focus {
  outline: none;
  border-bottom-color: var(--brand-deep);
}

.sheet-error {
  margin: 1rem 0 0;
  color: var(--negative);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12rem;
  text-transform: uppercase;
}

.sheet-actions {
  display: flex;
  align-items: center;
  gap: clamp(1.2rem, calc(3*var(--vwu)), 2rem);
  margin-top: 2.2rem;
}

.sheet-actions button {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16rem;
  text-transform: uppercase;
  transition:
    color 180ms ease,
    opacity 180ms ease;
}

.sheet-actions button:disabled {
  opacity: 0.35;
  cursor: default;
}

.sheet-actions button:not(:disabled):hover {
  color: var(--text);
}

.sheet-actions button.is-primary {
  padding: 0.7rem 1.5rem;
  border-radius: 9999px;
  background: var(--brand);
  color: var(--on-brand);
  font-weight: 600;
}

.sheet-actions button.is-primary:hover {
  background: var(--brand-soft);
  color: var(--on-brand);
}

.sheet-rail {
  display: flex;
  gap: 0.35rem;
  width: min(100%, 28rem);
  margin-top: 2.4rem;
}

.sheet-rail span {
  flex: 1;
  height: 2px;
  border-radius: 2px;
  background: var(--surface-3);
  transition: background 240ms ease;
}

.sheet-rail span.is-done {
  background: var(--brand-deep);
}

.sheet-rail span.is-now {
  background: var(--brand);
}

.sheet-hub {
  position: relative;
  width: 0.7rem;
  aspect-ratio: 1;
  margin-bottom: 1.8rem;
  border-radius: 50%;
  background: var(--brand-deep);
  animation: sheet-pulse 2.6s ease-in-out infinite;
}

.sheet-stages {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.9rem, calc(2.4*var(--vwu)), 1.9rem);
  justify-content: center;
  margin-top: 2.4rem;
}

.sheet-stages span {
  position: relative;
  padding-top: 0.5rem;
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16rem;
  text-transform: uppercase;
  transition: color 240ms ease;
}

.sheet-stages span::before {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 1px;
  background: var(--border-strong);
  content: '';
  opacity: 0;
  transition:
    opacity 240ms ease,
    background 240ms ease;
}

.sheet-stages span.is-done {
  color: var(--muted);
}

.sheet-stages span.is-done::before,
.sheet-stages span.is-now::before {
  opacity: 1;
}

.sheet-stages span.is-now {
  color: var(--text);
}

.sheet-stages span.is-now::before {
  background: var(--brand-deep);
}

.sheet-enter-active,
.sheet-leave-active {
  transition: opacity 240ms ease;
}

.sheet-enter-from,
.sheet-leave-to {
  opacity: 0;
}

.sheet-enter-active .sheet,
.sheet-leave-active .sheet {
  transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
}

.sheet-enter-from .sheet,
.sheet-leave-to .sheet {
  transform: translateY(1.2rem) scale(0.985);
}

@keyframes sheet-in {
  from {
    opacity: 0;
    transform: translateY(0.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes sheet-pulse {
  0%,
  100% {
    box-shadow: 0 0 1.4rem color-mix(in srgb, var(--brand) 55%, transparent);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 2.4rem color-mix(in srgb, var(--brand) 80%, transparent);
    transform: scale(1.14);
  }
}

@media (prefers-reduced-motion: reduce) {
  .sheet-ask,
  .sheet-hub {
    animation: none;
  }
}
</style>
