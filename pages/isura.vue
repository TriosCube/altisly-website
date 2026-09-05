<template>
  <div>
    <PageIntro :eyebrow="isuraHero.eyebrow" :title="isuraHero.title" :lede="isuraHero.lede">
      <template #actions>
        <AppButton variant="lime" to="/contact">Talk to us about Isura →</AppButton>
        <AppButton variant="ghost" to="/work/isura">Read the case study</AppButton>
      </template>

      <template #meta>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="item in stack"
            :key="item"
            class="chip bg-surface-2 border-base text-[11.5px] text-muted"
            >{{ item }}</span
          >
        </div>
      </template>
    </PageIntro>

    <section v-reveal class="py-16">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">
          The foundation
        </span>
        <h2
          class="text-[clamp(32px,calc(3.8*var(--vwu)),52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8 max-w-[18ch]"
        >
          Four decisions everything else rests on.
        </h2>

        <div data-reveal-flow class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article v-for="(pillar, i) in isuraPillars" :key="pillar.title" class="bento-card" v-reveal>
            <div
              class="w-11 h-11 rounded-full bg-brand text-on-brand grid place-items-center font-code font-bold text-[15px] mb-5"
            >
              {{ String(i + 1).padStart(2, '0') }}
            </div>
            <h3 class="text-[22px] font-bold tracking-[-0.02em] leading-[1.15] mb-2.5">
              {{ pillar.title }}
            </h3>
            <p class="text-muted text-[14.5px] leading-relaxed">{{ pillar.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section v-reveal v-if="project?.diagram" class="bg-invert text-invert py-16">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-invert-muted">
          The architecture
        </span>
        <h2
          class="text-[clamp(32px,calc(3.8*var(--vwu)),52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8"
        >
          How the pieces sit.
        </h2>
        <ArchDiagram :diagram="project.diagram" invert />
      </div>
    </section>

    <section v-reveal class="py-16">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">The surfaces</span>
        <h2
          class="text-[clamp(32px,calc(3.8*var(--vwu)),52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8 max-w-[16ch]"
        >
          One platform, four audiences.
        </h2>

        <div data-reveal-flow class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <article v-for="(surface, i) in isuraSurfaces" :key="surface.name" class="bento-card" v-reveal>
            <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">
              {{ surface.audience }}
            </span>
            <h3 class="text-[20px] font-bold tracking-[-0.02em] leading-[1.15] mt-2.5 mb-2.5">
              {{ surface.name }}
            </h3>
            <p class="text-muted text-[14px] leading-relaxed">{{ surface.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section v-reveal class="py-16">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">
          What it carries
        </span>
        <h2
          class="text-[clamp(32px,calc(3.8*var(--vwu)),52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8 max-w-[16ch]"
        >
          The parts a tenant actually uses.
        </h2>

        <div data-reveal-flow class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <article v-for="(cap, i) in isuraCapabilities" :key="cap.title" class="bento-card" v-reveal>
            <h3 class="text-[19px] font-bold tracking-[-0.02em] leading-[1.15] mb-2.5">
              {{ cap.title }}
            </h3>
            <p class="text-muted text-[14px] leading-relaxed">{{ cap.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section v-reveal class="py-16">
      <div class="container-isura">
        <div data-reveal-flow class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="(item, i) in isuraProof"
            :key="item.label"
            class="drift-card bg-surface border border-base rounded-isura-xl p-6"
            v-reveal
          >
            <div class="font-code text-[34px] font-bold tracking-[-0.025em] leading-none">
              {{ item.value }}
            </div>
            <div class="text-[13px] text-muted mt-2 leading-snug">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section v-reveal class="py-16">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">Questions</span>
        <h2
          class="text-[clamp(32px,calc(3.8*var(--vwu)),52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8"
        >
          The ones we get asked.
        </h2>

        <div data-reveal-flow class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <article v-for="(faq, i) in isuraFaqs" :key="faq.q" class="bento-card" v-reveal>
            <h3 class="text-[16px] font-semibold tracking-[-0.015em] mb-2.5">{{ faq.q }}</h3>
            <p class="text-muted text-[14.5px] leading-relaxed">{{ faq.a }}</p>
          </article>
        </div>
      </div>
    </section>

    <CtaSection v-reveal />
  </div>
</template>

<script setup lang="ts">
import PageIntro from '@/components/ui/PageIntro.vue'
import AppButton from '@/components/ui/AppButton.vue'
import ArchDiagram from '@/components/ui/ArchDiagram.vue'
import CtaSection from '@/components/landing/CtaSection.vue'
import {
  isuraCapabilities,
  isuraFaqs,
  isuraHero,
  isuraPillars,
  isuraProof,
  isuraSurfaces,
} from '@/data/isura'
import { getProject } from '@/data/projects'
import { metaDescriptions } from '@/data/site'

const project = getProject('isura')
const stack = project?.stack ?? []

useSeoMeta({
  title: 'Isura | Altisly',
  description: metaDescriptions.isura,
})
</script>
