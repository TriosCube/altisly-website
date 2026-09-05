<template>
  <div class="report">
    <section class="report-read">
      <span class="report-eyebrow">The read</span>
      <p class="report-lede">{{ report.survey.read }}</p>
    </section>

    <section>
      <span class="report-eyebrow">Where the work breaks</span>
      <div class="report-frictions">
        <article v-for="(friction, i) in report.survey.frictions" :key="friction.name">
          <span class="report-index">{{ String(i + 1).padStart(2, '0') }}</span>
          <div>
            <h4>{{ friction.name }}</h4>
            <p>{{ friction.symptom }}</p>
            <dl>
              <div>
                <dt>Evidence</dt>
                <dd>{{ friction.evidence }}</dd>
              </div>
              <div>
                <dt>Cost</dt>
                <dd>{{ friction.cost }}</dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
    </section>

    <section class="report-blind">
      <span class="report-eyebrow">The blind spot</span>
      <p>{{ report.survey.blind_spot }}</p>
      <template v-if="report.survey.questions.length">
        <span class="report-eyebrow report-eyebrow-inset">What we would ask next</span>
        <ul>
          <li v-for="question in report.survey.questions" :key="question">{{ question }}</li>
        </ul>
      </template>
    </section>

    <section>
      <span class="report-eyebrow">The concept</span>
      <h3 class="report-title">{{ report.concept.system_name }}</h3>
      <p class="report-premise">{{ report.concept.premise }}</p>

      <div class="report-columns">
        <div>
          <span class="report-sub">Modules</span>
          <div class="report-rows">
            <div v-for="module in report.concept.modules" :key="module.name">
              <h5>{{ module.name }}</h5>
              <p>{{ module.does }}</p>
            </div>
          </div>
        </div>
        <div>
          <span class="report-sub">Agents on duty</span>
          <div class="report-rows">
            <div v-for="agent in report.concept.agents" :key="agent.name">
              <h5>{{ agent.name }}</h5>
              <p>{{ agent.owns }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="report-phases">
        <div v-for="(phase, i) in report.concept.phases" :key="phase.stage">
          <span class="report-step">{{ i + 1 }} · {{ phase.stage }}</span>
          <p>{{ phase.move }}</p>
          <em>{{ phase.output }}</em>
        </div>
      </div>
    </section>

    <section class="report-close">
      <div>
        <span class="report-eyebrow">Why us</span>
        <p class="report-wedge">{{ report.concept.wedge }}</p>
      </div>
      <div class="report-first">
        <span class="report-sub">First move, week one</span>
        <p>{{ report.concept.first_move }}</p>
      </div>
      <div class="report-actions">
        <a class="is-primary" :href="mailtoHref">Talk about building it →</a>
        <button type="button" @click="$emit('restart')">Run it again</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
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

<style scoped>
.report {
  display: flex;
  flex-direction: column;
  padding: clamp(1.6rem, 3.4vw, 2.6rem);
  gap: 2.4rem;
}

.report-eyebrow {
  display: block;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16rem;
  text-transform: uppercase;
}

.report-eyebrow-inset {
  margin-top: 1.4rem;
}

.report-lede {
  margin: 0.8rem 0 0;
  font-size: clamp(1.25rem, 2.4vw, 1.7rem);
  font-weight: 700;
  letter-spacing: -0.026em;
  line-height: 1.18;
}

.report-frictions {
  display: grid;
  gap: 0.9rem;
  margin-top: 1rem;
}

.report-frictions article {
  display: flex;
  gap: 1rem;
  padding: 1.1rem 1.2rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface-2);
}

.report-index {
  color: var(--brand-deep);
  font-family: var(--font-mono);
  font-size: 12px;
  padding-top: 0.15rem;
}

.report-frictions h4 {
  margin: 0 0 0.35rem;
  font-size: 15.5px;
  font-weight: 600;
  letter-spacing: -0.012em;
}

.report-frictions > article > div > p {
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
}

.report-frictions dl {
  display: grid;
  gap: 0.5rem;
  margin: 0.9rem 0 0;
}

.report-frictions dt {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.14rem;
  text-transform: uppercase;
}

.report-frictions dd {
  margin: 0.2rem 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.5;
}

.report-blind {
  padding: 1.4rem 1.5rem;
  border-radius: var(--radius-lg);
  background: var(--invert-bg);
  color: var(--invert-text);
}

.report-blind .report-eyebrow {
  color: var(--invert-muted);
}

.report-blind > p {
  margin: 0.7rem 0 0;
  font-size: clamp(1rem, 1.9vw, 1.2rem);
  font-weight: 600;
  letter-spacing: -0.018em;
  line-height: 1.35;
}

.report-blind ul {
  margin: 0.6rem 0 0;
  padding: 0;
  list-style: none;
}

.report-blind li {
  padding: 0.65rem 0;
  border-top: 1px solid var(--invert-border);
  color: var(--invert-muted);
  font-size: 13.5px;
  line-height: 1.55;
}

.report-title {
  margin: 0.7rem 0 0;
  font-size: clamp(1.4rem, 2.6vw, 1.9rem);
  font-weight: 700;
  letter-spacing: -0.028em;
  line-height: 1.06;
}

.report-premise {
  max-width: 52ch;
  margin: 0.6rem 0 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.6;
}

.report-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 0.9rem;
  margin-top: 1.4rem;
}

.report-columns > div {
  padding: 1.2rem 1.3rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.report-sub {
  display: block;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.14rem;
  text-transform: uppercase;
}

.report-rows > div {
  padding: 0.85rem 0;
  border-top: 1px solid var(--border);
}

.report-rows > div:first-child {
  border-top: 0;
  padding-top: 0.7rem;
}

.report-rows h5 {
  margin: 0 0 0.25rem;
  font-size: 14.5px;
  font-weight: 600;
}

.report-rows p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.5;
}

.report-phases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  gap: 0.9rem;
  margin-top: 0.9rem;
  padding: 1.2rem 1.3rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.report-step {
  display: block;
  margin-bottom: 0.45rem;
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}

.report-phases p {
  margin: 0 0 0.4rem;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.5;
}

.report-phases em {
  color: var(--brand-deep);
  font-family: var(--font-mono);
  font-size: 11px;
  font-style: normal;
  line-height: 1.5;
}

.report-close {
  display: grid;
  gap: 1.2rem;
  padding: 1.5rem 1.6rem;
  border-radius: var(--radius-lg);
  background: var(--surface-2);
  border: 1px solid var(--border);
}

.report-wedge {
  max-width: 60ch;
  margin: 0.6rem 0 0;
  font-size: 15px;
  line-height: 1.6;
}

.report-first p {
  margin: 0.4rem 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.55;
}

.report-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.2rem;
}

.report-actions .is-primary {
  padding: 0.7rem 1.5rem;
  border-radius: 9999px;
  background: var(--brand);
  color: var(--on-brand);
  font-size: 13.5px;
  font-weight: 600;
}

.report-actions .is-primary:hover {
  background: var(--brand-soft);
}

.report-actions button {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16rem;
  text-transform: uppercase;
  transition: color 180ms ease;
}

.report-actions button:hover {
  color: var(--text);
}
</style>
