<template>
  <div>
    <PageIntro
      eyebrow="About"
      title="A studio, not an agency."
      lede="Altisly is a tech-enabled consulting and venture building studio in Lagos. We build our own platforms, and we build for teams whose operations have outgrown their tooling."
    >
      <template #actions>
        <AppButton variant="lime" href="https://isura.altisly.com">See a build →</AppButton>
        <AppButton variant="ghost" to="/contact">Talk to an engineer</AppButton>
      </template>
    </PageIntro>

    <section v-reveal class="py-16">
      <div class="container-isura grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12">
        <div>
          <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">The story</span>
          <h2
            class="text-[clamp(32px,calc(3.8*var(--vwu)),52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 max-w-[14ch]"
          >
            How we got here.
          </h2>
        </div>
        <div class="flex flex-col gap-4">
          <p v-for="p in aboutStory" :key="p" class="text-muted text-[16px] leading-relaxed">
            {{ p }}
          </p>
        </div>
      </div>
    </section>

    <section v-reveal class="py-16">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted"
          >The principles</span
        >
        <h2
          class="text-[clamp(32px,calc(3.8*var(--vwu)),52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8"
        >
          What every build answers to.
        </h2>

        <div data-reveal-flow class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article
            v-for="(principle, i) in principles"
            :key="principle.title"
            class="bento-card"
            v-reveal
          >
            <div
              class="w-11 h-11 rounded-full bg-brand text-on-brand grid place-items-center font-code font-bold text-[15px] mb-5"
            >
              {{ String(i + 1).padStart(2, '0') }}
            </div>
            <h3 class="text-[22px] font-bold tracking-[-0.02em] leading-[1.15] mb-2.5">
              {{ principle.title }}
            </h3>
            <p class="text-muted text-[14.5px] leading-relaxed">{{ principle.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section v-reveal class="pb-16">
      <div class="container-isura">
        <div data-reveal-flow class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="drift-card bg-surface border border-base rounded-isura-xl p-6"
            v-reveal
          >
            <div class="font-code text-[34px] font-bold tracking-[-0.025em] leading-none">
              {{ stat.value }}
            </div>
            <div class="text-[13px] text-muted mt-2 leading-snug">{{ stat.label }}</div>
          </div>
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
import { aboutStory, principles, stats } from '@/data/content'
import { metaDescriptions } from '@/data/site'

useSeoMeta({
  title: 'About | Altisly',
  description: metaDescriptions.about,
})
</script>
