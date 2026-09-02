<template>
  <div>
    <PageIntro
      v-if="phase === 'form'"
      eyebrow="Diagnose"
      title="Tell us how the work actually runs."
      lede="Eight questions. The engine surveys where your operation leaks, then designs the one system that answers what it found. It takes about a minute."
    />

    <section v-if="phase === 'form'" class="py-14">
      <div class="container-isura max-w-[820px]">
        <div class="bg-surface border border-base rounded-isura-xl p-8 lg:p-12">
          <div class="flex items-center justify-between gap-4 mb-8">
            <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">
              {{ String(step + 1).padStart(2, '0') }} / {{ String(questions.length).padStart(2, '0') }}
            </span>
            <div class="prog-track flex-1 max-w-[240px]">
              <div class="prog-fill" :style="{ width: `${((step + 1) / questions.length) * 100}%` }"></div>
            </div>
          </div>

          <h2
            class="text-[clamp(26px,3vw,40px)] font-bold tracking-[-0.028em] leading-[1.1] mb-2.5"
          >
            {{ current.ask }}
            <span v-if="isRequired(current.name)" class="text-brand-deep">*</span>
          </h2>
          <p class="text-muted text-[14.5px] leading-relaxed mb-7">{{ current.hint }}</p>

          <textarea
            v-if="current.multiline"
            :key="current.name"
            ref="fieldRef"
            v-model="brief[current.name]"
            rows="4"
            :maxlength="briefFieldLimit"
            :placeholder="current.placeholder"
            class="field-input resize-none text-[16px]"
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
            class="field-input text-[16px]"
            @keydown.enter.prevent="next"
          />

          <p v-if="stepError" class="text-[13.5px] text-negative font-medium mt-3">
            {{ stepError }}
          </p>

          <div class="flex items-center justify-between gap-3 mt-9 pt-7 border-t border-base">
            <AppButton variant="ghost" :disabled="step === 0" @click="back">← Back</AppButton>
            <AppButton variant="lime" size="lg" @click="next">
              {{ step === questions.length - 1 ? 'Run the survey →' : 'Next →' }}
            </AppButton>
          </div>
        </div>

        <p class="field-note mt-5">
          The write up stays on this page. Your email is only how the studio reaches back.
        </p>
      </div>
    </section>

    <section v-else-if="phase === 'running'" class="py-24">
      <div class="container-isura max-w-[720px]">
        <span class="eyebrow-pill">
          <span
            class="w-6 h-6 rounded-full bg-brand text-on-brand grid place-items-center text-sm font-bold"
            >✦</span
          >
          Running
        </span>
        <h2
          class="text-[clamp(32px,4vw,56px)] font-bold tracking-[-0.032em] leading-[1.02] mt-5 mb-10 max-w-[16ch]"
        >
          Surveying {{ brief.business || 'the operation' }}.
        </h2>

        <div class="bg-surface border border-base rounded-isura-xl p-7 lg:p-9">
          <div
            v-for="(stage, i) in stageOrder"
            :key="stage"
            class="flex items-center gap-4 py-4 border-t border-base"
            :class="{ 'border-t-0 pt-0': i === 0 }"
          >
            <span
              class="w-8 h-8 rounded-full grid place-items-center flex-shrink-0"
              :class="stageClass(i)"
            >
              <svg
                v-if="i < stageIndex"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
              >
                <path d="M4 12l5 5L20 6" />
              </svg>
              <span
                v-else-if="i === stageIndex"
                class="w-2 h-2 rounded-full bg-current animate-pulse"
              ></span>
              <span v-else class="w-1.5 h-1.5 rounded-full bg-current"></span>
            </span>
            <span
              class="text-[15.5px] font-semibold"
              :class="{ 'text-muted': i > stageIndex }"
              >{{ stage }}</span
            >
            <span class="ml-auto font-code text-[11px] text-muted">
              {{ i < stageIndex ? 'done' : i === stageIndex ? 'working' : 'queued' }}
            </span>
          </div>
        </div>

        <p class="field-note mt-6">
          Two passes run back to back: the survey first, with no knowledge of what might get built,
          then the concept that answers it.
        </p>
      </div>
    </section>

    <template v-else-if="phase === 'report' && report">
      <PageIntro
        eyebrow="The diagnostic"
        :title="brief.business"
        :lede="`Surveyed for ${brief.name || 'you'}. Two passes, one system.`"
      />
      <DiagnoseReport :report="report" :brief="brief" @restart="restart" />
    </template>

    <section v-if="runError" class="pb-20">
      <div class="container-isura max-w-[720px]">
        <div class="bg-surface border border-base rounded-isura-xl p-7">
          <p class="text-[15px] font-semibold mb-2">The run did not finish.</p>
          <p class="text-muted text-[14px] leading-relaxed mb-5">{{ runError }}</p>
          <AppButton variant="lime" @click="restart">Start over</AppButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, reactive, ref } from 'vue'
import PageIntro from '@/components/ui/PageIntro.vue'
import AppButton from '@/components/ui/AppButton.vue'
import DiagnoseReport from '@/components/diagnose/DiagnoseReport.vue'
import { metaDescriptions } from '@/data/site'
import {
  briefFieldLimit,
  emptyBrief,
  looksLikeEmail,
  requiredBriefFields,
  stageOrder,
  type BriefField,
  type DiagnoseReport as DiagnoseReportType,
} from '@/utils/diagnose'

useSeoMeta({
  title: 'Diagnose | Altisly',
  description: metaDescriptions.diagnose,
})

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
    placeholder: 'Retail, hospitality, logistics, clinic, studio',
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
    hint: 'The write up stays on this page. The email is how the studio reaches back.',
    placeholder: 'you@business.com',
    type: 'email',
  },
]

const route = useRoute()
const brief = reactive({ ...emptyBrief })

const industryFromQuery = route.query.industry
if (typeof industryFromQuery === 'string' && industryFromQuery.trim()) {
  brief.industry = industryFromQuery.trim().slice(0, briefFieldLimit)
}
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
  } finally {
    clearInterval(stageTimer)
  }
}

function restart() {
  Object.assign(brief, emptyBrief)
  step.value = 0
  phase.value = 'form'
  report.value = null
  runError.value = ''
  stepError.value = ''
}

function stageClass(i: number) {
  if (i < stageIndex.value) return 'bg-brand text-on-brand'
  if (i === stageIndex.value)
    return 'bg-invert text-brand shadow-[0_0_0_4px_color-mix(in_srgb,#C8F75D_25%,transparent)]'
  return 'bg-surface-2 text-muted'
}

onBeforeUnmount(() => clearInterval(stageTimer))
</script>
