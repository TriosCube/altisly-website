<template>
  <header class="py-14 pb-20 relative overflow-hidden">
    <div
      class="container-isura grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 items-center"
    >
      <div>
        <span class="eyebrow-pill">
          <span
            class="w-6 h-6 rounded-full bg-brand text-on-brand grid place-items-center text-sm font-bold"
            >✦</span
          >
          Built for work that has to hold up
        </span>

        <h1
          class="font-extrabold text-[clamp(48px,6.4vw,92px)] leading-[0.98] tracking-[-0.035em] my-5.5 text-body"
        >
          We build the systems
          <span
            class="inline-flex items-center gap-4 bg-brand text-on-brand px-5.5 pb-1.5 rounded-full font-bold align-middle mr-1"
          >
            businesses run on.
            <span class="text-on-brand text-[0.55em] ml-1">✦</span>
          </span>
        </h1>

        <p class="text-lg leading-relaxed text-muted max-w-130 mb-8">
          Altisly designs and builds the software behind day to day operations: the ledgers,
          approvals, records and workflows a business cannot afford to get wrong.
        </p>

        <div class="flex gap-3 items-center flex-wrap">
          <AppButton variant="lime" size="lg" to="/contact">Talk to us →</AppButton>
          <AppButton variant="ghost" size="lg" to="/diagnose">Run a diagnostic</AppButton>
        </div>
      </div>

      <HeroStage />
    </div>
  </header>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue'
import HeroStage from './HeroStage.vue'
</script>
