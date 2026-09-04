<template>
  <section class="py-25 pb-35">
    <div class="container-isura">
      <div
        class="bg-invert text-invert rounded-isura-xl p-18 px-14 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative overflow-hidden"
      >
        
        <div
          class="absolute -right-50 -bottom-50 w-125 h-125 rounded-full"
          style="
            background: radial-gradient(
              closest-side,
              color-mix(in srgb, var(--brand) 50%, transparent),
              transparent 75%
            );
            pointer-events: none;
          "
        ></div>

        <div class="relative z-10">
          <h2
            class="text-[clamp(40px,4.8vw,64px)] font-bold tracking-[-0.032em] leading-[0.98] max-w-[12ch]"
          >
            Have a problem
            <span class="inline-flex items-center bg-brand text-on-brand px-5.5 pb-1 rounded-full"
              >worth solving?</span
            >
          </h2>
          <p class="text-invert-muted text-[17px] mt-5 mb-7 max-w-[36ch]">
            Tell us what is not working, what you are trying to build, or where you want to go
            next. An engineer replies, not a sales team.
          </p>
          <div class="flex gap-3 flex-wrap">
            <AppButton variant="lime" size="lg" to="/contact">Talk to us →</AppButton>
            <AppButton variant="on-dark-ghost" size="lg" to="/diagnose"
              >Run a diagnostic</AppButton
            >
          </div>
        </div>

        <div class="relative z-10">
          <span class="font-code text-[11px] tracking-[0.14em] uppercase text-invert-muted">
            What happens next
          </span>
          <div
            v-for="(step, i) in nextSteps"
            :key="step"
            class="flex items-start gap-4 py-4 border-t border-invert"
            :class="{ 'border-b': i === nextSteps.length - 1, 'mt-4': i === 0 }"
          >
            <span class="font-code text-[12px] text-brand pt-1 w-6 flex-shrink-0">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <span class="text-[14.5px] leading-relaxed text-invert">{{ step }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue'
import { nextSteps } from '@/data/content'
</script>
