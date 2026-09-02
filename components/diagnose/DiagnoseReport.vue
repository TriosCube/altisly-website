<template>
  <div>
    <section class="py-14 border-b border-base">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">The read</span>
        <h2
          class="text-[clamp(30px,3.6vw,48px)] font-bold tracking-[-0.03em] leading-[1.08] mt-3 max-w-[22ch]"
        >
          {{ report.survey.read }}
        </h2>
      </div>
    </section>

    <section class="py-14">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted"
          >What is leaking</span
        >
        <h3
          class="text-[clamp(28px,3.2vw,42px)] font-bold tracking-[-0.028em] leading-[1.08] mt-3 mb-8"
        >
          Where the work breaks.
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article
            v-for="(friction, i) in report.survey.frictions"
            :key="friction.name"
            class="bento-card"
          >
            <div class="flex items-center gap-3 mb-4">
              <span
                class="w-9 h-9 rounded-full bg-brand text-on-brand grid place-items-center font-code text-[13px] font-bold"
                >{{ String(i + 1).padStart(2, '0') }}</span
              >
              <h4 class="text-[19px] font-bold tracking-[-0.018em] leading-tight">
                {{ friction.name }}
              </h4>
            </div>
            <p class="text-[14.5px] leading-relaxed mb-4">{{ friction.symptom }}</p>
            <dl class="flex flex-col gap-3 mt-auto pt-4 border-t border-base">
              <div>
                <dt class="font-code text-[10.5px] tracking-[0.1em] uppercase text-brand-deep">
                  Evidence
                </dt>
                <dd class="text-muted text-[13.5px] leading-relaxed mt-1 m-0">
                  {{ friction.evidence }}
                </dd>
              </div>
              <div>
                <dt class="font-code text-[10.5px] tracking-[0.1em] uppercase text-muted">Cost</dt>
                <dd class="text-muted text-[13.5px] leading-relaxed mt-1 m-0">
                  {{ friction.cost }}
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-invert text-invert py-14">
      <div class="container-isura grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12">
        <div>
          <span class="font-code text-[11px] tracking-[0.1em] uppercase text-invert-muted"
            >The blind spot</span
          >
          <p
            class="text-[clamp(22px,2.4vw,32px)] font-semibold tracking-[-0.022em] leading-[1.25] mt-4"
          >
            {{ report.survey.blind_spot }}
          </p>
        </div>
        <div v-if="report.survey.questions.length">
          <span class="font-code text-[11px] tracking-[0.1em] uppercase text-invert-muted"
            >What we would ask next</span
          >
          <div class="flex flex-col mt-4">
            <p
              v-for="(question, i) in report.survey.questions"
              :key="question"
              class="text-invert-muted text-[14.5px] leading-relaxed py-3.5 border-t border-invert"
              :class="{ 'border-b': i === report.survey.questions.length - 1 }"
            >
              {{ question }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">The concept</span>
        <h3
          class="text-[clamp(30px,3.6vw,48px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-3"
        >
          {{ report.concept.system_name }}
        </h3>
        <p class="text-muted text-[17px] leading-relaxed max-w-[52ch] mb-10">
          {{ report.concept.premise }}
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="bg-surface border border-base rounded-isura-xl p-7">
            <span class="font-code text-[10.5px] tracking-[0.1em] uppercase text-muted"
              >Modules</span
            >
            <div class="flex flex-col mt-3">
              <div
                v-for="(module, i) in report.concept.modules"
                :key="module.name"
                class="py-4 border-t border-base"
                :class="{ 'border-t-0 pt-0': i === 0 }"
              >
                <h5 class="text-[15.5px] font-semibold mb-1">{{ module.name }}</h5>
                <p class="text-muted text-[13.5px] leading-relaxed">{{ module.does }}</p>
              </div>
            </div>
          </div>

          <div class="bg-surface border border-base rounded-isura-xl p-7">
            <span class="font-code text-[10.5px] tracking-[0.1em] uppercase text-muted"
              >Agents on duty</span
            >
            <div class="flex flex-col mt-3">
              <div
                v-for="(agent, i) in report.concept.agents"
                :key="agent.name"
                class="py-4 border-t border-base flex items-start gap-3.5"
                :class="{ 'border-t-0 pt-0': i === 0 }"
              >
                <span
                  class="w-8 h-8 rounded-full bg-brand text-on-brand grid place-items-center flex-shrink-0"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect x="4" y="7" width="16" height="12" rx="2" />
                    <path d="M12 3v4M9 13h.01M15 13h.01" />
                  </svg>
                </span>
                <div>
                  <h5 class="text-[15.5px] font-semibold mb-1">{{ agent.name }}</h5>
                  <p class="text-muted text-[13.5px] leading-relaxed">{{ agent.owns }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 bg-surface border border-base rounded-isura-xl p-7">
          <span class="font-code text-[10.5px] tracking-[0.1em] uppercase text-muted"
            >How it ships</span
          >
          <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
            <div v-for="(phase, i) in report.concept.phases" :key="phase.stage">
              <div class="flex items-center gap-2 mb-2.5">
                <span
                  class="w-6 h-6 rounded-full bg-brand text-on-brand grid place-items-center font-code text-[11px] font-bold"
                  >{{ i + 1 }}</span
                >
                <span class="font-semibold text-[14px]">{{ phase.stage }}</span>
              </div>
              <p class="text-muted text-[13px] leading-relaxed mb-2">{{ phase.move }}</p>
              <p class="font-code text-[11px] text-brand-deep leading-relaxed">
                {{ phase.output }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-20">
      <div class="container-isura">
        <div
          class="bg-invert text-invert rounded-isura-xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center relative overflow-hidden"
        >
          <div
            class="absolute -right-50 -bottom-50 w-125 h-125 rounded-full"
            style="
              background: radial-gradient(
                closest-side,
                color-mix(in srgb, #c8f75d 50%, transparent),
                transparent 75%
              );
              pointer-events: none;
            "
          ></div>

          <div class="relative z-10">
            <span class="font-code text-[11px] tracking-[0.1em] uppercase text-invert-muted"
              >Why us</span
            >
            <p
              class="text-[clamp(20px,2.2vw,28px)] font-semibold tracking-[-0.02em] leading-[1.3] mt-3"
            >
              {{ report.concept.wedge }}
            </p>
          </div>

          <div class="relative z-10">
            <div class="py-4 border-t border-b border-invert">
              <span class="font-code text-[10.5px] tracking-[0.1em] uppercase text-invert-muted"
                >First move, week one</span
              >
              <p class="text-[15px] leading-relaxed mt-2">{{ report.concept.first_move }}</p>
            </div>
            <div class="flex gap-3 flex-wrap mt-7">
              <AppButton variant="lime" size="lg" :href="mailtoHref">Talk about building it →</AppButton>
              <AppButton variant="on-dark-ghost" size="lg" @click="$emit('restart')">
                Run it again
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import { site } from '@/data/site'
import type { DiagnoseBrief, DiagnoseReport } from '@/utils/diagnose'

const props = defineProps<{
  report: DiagnoseReport
  brief: DiagnoseBrief
}>()

defineEmits<{ restart: [] }>()

const mailtoHref = computed(() => {
  const body = [
    `Altisly, run this on ${props.brief.business}.`,
    '',
    `Industry: ${props.brief.industry}`,
    `What we sell: ${props.brief.offering}`,
    `What breaks: ${props.brief.friction}`,
    '',
    `Your engine read us as: ${props.report.survey.read}`,
    '',
    'It found:',
    ...props.report.survey.frictions.map((f) => `- ${f.name}: ${f.symptom}`),
    '',
    `And proposed: ${props.report.concept.system_name}. ${props.report.concept.premise}`,
    `First move: ${props.report.concept.first_move}`,
    '',
    'I want to talk about building it.',
  ].join('\n')

  return `mailto:${site.email}?subject=${encodeURIComponent(
    `Diagnostic: ${props.brief.business}`,
  )}&body=${encodeURIComponent(body)}`
})
</script>
