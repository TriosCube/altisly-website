<template>
  <div>
    <PageIntro
      eyebrow="Careers"
      title="Small team, consequential problems."
      lede="We hire systems thinkers and give them the autonomy to architect. The systems you build move money and carry patient records."
    >
      <template #actions>
        <AppButton variant="lime" to="/contact">Send us your work →</AppButton>
      </template>
    </PageIntro>

    <section class="py-16 border-b border-base">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">Life here</span>
        <h2
          class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8"
        >
          What you get.
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <article v-for="perk in perks" :key="perk.title" class="bento-card">
            <h3 class="text-[19px] font-bold tracking-[-0.018em] leading-[1.15] mb-2">
              {{ perk.title }}
            </h3>
            <p class="text-muted text-[14px] leading-relaxed">{{ perk.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="py-16 border-b border-base">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">
          What we look for
        </span>
        <h2
          class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8 max-w-[16ch]"
        >
          The four things we read for.
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article v-for="trait in whatWeLookFor" :key="trait.title" class="bento-card">
            <h3 class="text-[20px] font-bold tracking-[-0.02em] leading-[1.15] mb-2.5">
              {{ trait.title }}
            </h3>
            <p class="text-muted text-[14.5px] leading-relaxed">{{ trait.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="py-16 border-b border-base">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">How we hire</span>
        <h2
          class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8 max-w-[16ch]"
        >
          Four steps, about two weeks.
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <article v-for="step in hiringProcess" :key="step.title" class="bento-card">
            <span
              class="w-11 h-11 rounded-full bg-brand text-on-brand grid place-items-center font-code font-bold text-[15px] mb-5"
            >
              {{ step.number }}
            </span>
            <h3 class="text-[19px] font-bold tracking-[-0.02em] leading-[1.15] mb-2.5">
              {{ step.title }}
            </h3>
            <p class="text-muted text-[14px] leading-relaxed">{{ step.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="py-16 border-b border-base">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">The set-up</span>
        <h2
          class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8 max-w-[16ch]"
        >
          How the week is shaped.
        </h2>
        <dl class="bg-surface border border-base rounded-isura-xl p-7 lg:p-9 flex flex-col">
          <div
            v-for="(row, i) in workingHere"
            :key="row.label"
            class="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-6 py-4 border-t border-base"
            :class="{ 'border-t-0 pt-0': i === 0 }"
          >
            <dt class="font-semibold text-[15px]">{{ row.label }}</dt>
            <dd class="text-muted text-[14.5px] leading-relaxed m-0">{{ row.value }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="py-16">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">Open roles</span>
        <h2
          class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8"
        >
          Where we need people.
        </h2>

        <div class="flex flex-col">
          <NuxtLink
            v-for="(role, i) in openRoles"
            :key="role.title"
            to="/contact"
            class="flex items-center justify-between gap-4 py-5 border-t border-base group hover:bg-surface-2 transition-colors px-1"
            :class="{ 'border-b': i === openRoles.length - 1 }"
          >
            <div>
              <h3 class="font-semibold text-[16px] mb-1">{{ role.title }}</h3>
              <p class="font-code text-[12px] text-muted">
                {{ role.location }} · {{ role.type }}
              </p>
            </div>
            <span
              class="w-9 h-9 rounded-full bg-surface-2 group-hover:bg-brand group-hover:text-on-brand text-muted grid place-items-center flex-shrink-0 transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M7 17L17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </span>
          </NuxtLink>
        </div>

        <div
          class="rounded-isura-lg border border-base bg-surface-2 p-6 mt-9 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <h3 class="font-semibold text-[16px] mb-1.5">Nothing on the list fits?</h3>
            <p class="text-[14px] text-muted max-w-[52ch]">
              Send the work anyway. We open roles around people more often than we hire against a
              job description.
            </p>
          </div>
          <AppButton variant="lime" size="sm" to="/contact">Send us your work →</AppButton>
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
import { hiringProcess, openRoles, perks, whatWeLookFor, workingHere } from '@/data/content'

useSeoMeta({
  title: 'Careers | Altisly',
  description: 'Join Altisly. We hire systems architects, Rust engineers and product engineers.',
})
</script>
