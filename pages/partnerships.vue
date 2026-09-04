<template>
  <div>
    <PageIntro
      eyebrow="Partnerships"
      title="Three ways we work together."
      lede="We co-build with institutions, founders and platform teams who need systems that hold up under regulation."
    >
      <template #actions>
        <AppButton variant="lime" to="/contact">Start a conversation →</AppButton>
        <AppButton variant="ghost" to="/work">See the work</AppButton>
      </template>
    </PageIntro>

    <section class="py-16 border-b border-base">
      <div class="container-isura">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <article v-for="program in partnerPrograms" :key="program.title" class="bento-card">
            <h3 class="text-[24px] font-bold tracking-[-0.022em] leading-[1.1] mb-3">
              {{ program.title }}
            </h3>
            <p class="text-muted text-[14.5px] leading-relaxed mb-7">{{ program.description }}</p>
            <ul class="flex flex-col gap-2.5 mt-auto">
              <li
                v-for="benefit in program.benefits"
                :key="benefit"
                class="text-[13.5px] flex items-start gap-2.5"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-brand-deep mt-2 flex-shrink-0"></span>
                {{ benefit }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="py-16 border-b border-base">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">
          The engagement
        </span>
        <h2
          class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8 max-w-[16ch]"
        >
          How the work actually runs.
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <article v-for="stage in engagementStages" :key="stage.title" class="bento-card">
            <div class="flex items-center justify-between gap-3 mb-5">
              <span
                class="w-11 h-11 rounded-full bg-brand text-on-brand grid place-items-center font-code font-bold text-[15px]"
              >
                {{ stage.number }}
              </span>
              <span class="font-code text-[11px] text-muted">{{ stage.duration }}</span>
            </div>
            <h3 class="text-[20px] font-bold tracking-[-0.02em] leading-[1.15] mb-2.5">
              {{ stage.title }}
            </h3>
            <p class="text-muted text-[14px] leading-relaxed">{{ stage.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="py-16 border-b border-base">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">The fit</span>
        <h2
          class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8 max-w-[18ch]"
        >
          Where we help, and where we do not.
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <article class="bento-card">
            <h3 class="text-[17px] font-bold tracking-[-0.018em] mb-5">This is our work</h3>
            <ul class="flex flex-col gap-3.5">
              <li
                v-for="item in engagementFit.yes"
                :key="item"
                class="flex items-start gap-3 text-[14.5px] leading-relaxed"
              >
                <span
                  class="w-5 h-5 rounded-full bg-brand text-on-brand grid place-items-center flex-shrink-0 mt-0.5"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {{ item }}
              </li>
            </ul>
          </article>

          <article class="bento-card">
            <h3 class="text-[17px] font-bold tracking-[-0.018em] mb-5">This is not</h3>
            <ul class="flex flex-col gap-3.5">
              <li
                v-for="item in engagementFit.no"
                :key="item"
                class="flex items-start gap-3 text-[14.5px] leading-relaxed text-muted"
              >
                <span
                  class="w-5 h-5 rounded-full bg-surface-2 text-muted grid place-items-center flex-shrink-0 mt-0.5"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </span>
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="py-16 border-b border-base">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">Commercials</span>
        <h2
          class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8 max-w-[16ch]"
        >
          How the money is arranged.
        </h2>

        <dl class="bg-surface border border-base rounded-isura-xl p-7 lg:p-9 flex flex-col">
          <div
            v-for="(row, i) in commercialModels"
            :key="row.model"
            class="grid grid-cols-1 md:grid-cols-[200px_240px_1fr] gap-2 md:gap-6 py-4 border-t border-base"
            :class="{ 'border-t-0 pt-0': i === 0 }"
          >
            <dt class="font-semibold text-[15px]">{{ row.model }}</dt>
            <dd class="font-code text-[13px] text-muted m-0">{{ row.shape }}</dd>
            <dd class="text-muted text-[14.5px] leading-relaxed m-0">{{ row.suits }}</dd>
          </div>
        </dl>

        <p class="text-muted text-[14px] mt-5 max-w-[62ch]">
          Every arrangement is written down before the first commit: scope, ownership, what happens
          if we stop, and who runs it afterwards.
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">Questions</span>
        <h2
          class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8"
        >
          Asked before every build.
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <article v-for="faq in partnerFaqs" :key="faq.q" class="bento-card">
            <h3 class="text-[16px] font-semibold tracking-[-0.015em] mb-2.5">{{ faq.q }}</h3>
            <p class="text-muted text-[14.5px] leading-relaxed">{{ faq.a }}</p>
          </article>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import PageIntro from '@/components/ui/PageIntro.vue'
import AppButton from '@/components/ui/AppButton.vue'
import CtaSection from '@/components/landing/CtaSection.vue'
import {
  commercialModels,
  engagementFit,
  engagementStages,
  partnerFaqs,
  partnerPrograms,
} from '@/data/content'

useSeoMeta({
  title: 'Partnerships | Altisly',
  description:
    'Venture co-build, systems rebuild and platform partnership. Three ways to work with the Altisly studio.',
})
</script>
