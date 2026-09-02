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
          Tech-enabled consulting and venture building
        </span>

        <h1
          class="font-extrabold text-[clamp(48px,6.4vw,92px)] leading-[0.98] tracking-[-0.035em] my-5.5 text-body"
        >
          We build the heavy systems
          <span
            class="inline-flex items-center gap-4 bg-brand text-on-brand px-5.5 pb-1.5 rounded-full font-bold align-middle mr-1"
          >
            end to end.
            <span class="text-on-brand text-[0.55em] ml-1">✦</span>
          </span>
        </h1>

        <p class="text-lg leading-relaxed text-muted max-w-130 mb-8">
          We design and ship AI-enabled workflows for treasury, payments, identity and health
          infrastructure, shaped around the controls and failure modes that determine whether
          operations hold up.
        </p>

        <div class="flex gap-3 items-center flex-wrap">
          <AppButton variant="lime" size="lg" to="/diagnose">Run a diagnostic →</AppButton>
          <AppButton variant="ghost" size="lg" to="/work">See the work</AppButton>
        </div>

        <div class="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5">
          <div v-for="stat in stats" :key="stat.label" class="border-t border-base pt-3.5">
            <div class="font-code text-[26px] font-bold tracking-[-0.02em] text-body leading-none">
              {{ stat.value }}
            </div>
            <div class="text-[12.5px] text-muted mt-1.5 leading-snug">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <HeroStage />
    </div>
  </header>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue'
import HeroStage from './HeroStage.vue'
import { stats } from '@/data/content'
</script>
