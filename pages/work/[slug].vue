<template>
  <div v-if="project">
    <PageIntro :eyebrow="project.role" :title="project.name" :lede="project.tagline">
      <template #meta>
        <div class="flex flex-wrap items-center gap-3">
          <StatusPill :status="project.status" />
          <span class="font-code text-[12px] text-muted">{{ project.period }}</span>
          <span v-if="project.scale" class="font-code text-[12px] text-muted">
            {{ project.scale }}
          </span>
        </div>

        <div class="flex flex-wrap gap-2 mt-4">
          <span
            v-for="item in project.stack"
            :key="item"
            class="chip bg-surface-2 border-base text-[11.5px] text-muted"
            >{{ item }}</span
          >
        </div>
      </template>
    </PageIntro>

    <section v-reveal class="py-16">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">The problem</span>
        <h2
          class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-7"
        >
          What was actually at stake.
        </h2>
        <div class="flex flex-col gap-4 max-w-[62ch]">
          <p v-for="p in project.problem" :key="p" class="text-muted text-[16px] leading-relaxed">
            {{ p }}
          </p>
        </div>
      </div>
    </section>

    <section v-reveal class="py-16">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted"
          >The decisions</span
        >
        <h2
          class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8"
        >
          The calls that shaped it.
        </h2>
        <div class="flex flex-col gap-4">
          <DecisionBlock
            v-for="(decision, i) in project.decisions"
            :key="decision.title"
            :decision="decision"
            :index="i"
          />
        </div>
      </div>
    </section>

    <section v-reveal v-if="project.diagram" class="bg-invert text-invert py-16">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-invert-muted"
          >The architecture</span
        >
        <h2
          class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8"
        >
          How the pieces sit.
        </h2>
        <ArchDiagram :diagram="project.diagram" invert />
      </div>
    </section>

    <section v-reveal class="py-16">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">The build</span>
        <h2
          class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8"
        >
          What shipped.
        </h2>
        <dl class="bg-surface border border-base rounded-isura-xl p-7 lg:p-9 flex flex-col">
          <div
            v-for="(row, i) in project.build"
            :key="row.component"
            class="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-2 md:gap-6 py-4 border-t border-base"
            :class="{ 'border-t-0 pt-0': i === 0 }"
          >
            <dt class="font-semibold text-[15px]">{{ row.component }}</dt>
            <dd class="text-muted text-[14.5px] leading-relaxed m-0">{{ row.detail }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section v-reveal class="pb-20">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">The outcome</span>
        <h2
          class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-7"
        >
          Where it landed.
        </h2>
        <div class="flex flex-col gap-4 max-w-[62ch]">
          <p v-for="p in project.outcome" :key="p" class="text-muted text-[16px] leading-relaxed">
            {{ p }}
          </p>
        </div>

        <nav
          class="flex flex-wrap justify-between items-center gap-3 mt-12 pt-7 border-t border-base"
          aria-label="More builds"
        >
          <AppButton variant="ghost" :to="`/work/${adjacent.prev.slug}`"
            >← {{ adjacent.prev.name }}</AppButton
          >
          <AppButton variant="ghost" :to="`/work/${adjacent.next.slug}`"
            >{{ adjacent.next.name }} →</AppButton
          >
        </nav>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import PageIntro from '@/components/ui/PageIntro.vue'
import StatusPill from '@/components/ui/StatusPill.vue'
import DecisionBlock from '@/components/ui/DecisionBlock.vue'
import ArchDiagram from '@/components/ui/ArchDiagram.vue'
import AppButton from '@/components/ui/AppButton.vue'
import CtaSection from '@/components/landing/CtaSection.vue'
import { getAdjacent, getProject } from '@/data/projects'
import { metaDescriptions } from '@/data/site'

const route = useRoute()
const slug = String(route.params.slug)
const project = getProject(slug)

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Build not found', fatal: true })
}

const adjacent = getAdjacent(slug)

const description =
  slug in metaDescriptions
    ? metaDescriptions[slug as keyof typeof metaDescriptions]
    : project!.summary

useSeoMeta({
  title: `${project!.name} | Altisly`,
  description,
})
</script>
