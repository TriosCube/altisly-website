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
              color-mix(in srgb, #c8f75d 50%, transparent),
              transparent 75%
            );
            pointer-events: none;
          "
        ></div>

        <div class="relative z-10">
          <h2
            class="text-[clamp(40px,4.8vw,64px)] font-bold tracking-[-0.032em] leading-[0.98] max-w-[12ch]"
          >
            Build it like it has
            <span class="inline-flex items-center bg-brand text-on-brand px-5.5 pb-1 rounded-full"
              >to last.</span
            >
          </h2>
          <p class="text-invert-muted text-[17px] mt-5 mb-7 max-w-[36ch]">
            Tell us about the operation, the pressure it runs under, and the system it needs. An
            engineer replies, not a sales team.
          </p>
          <div class="flex gap-3 flex-wrap">
            <AppButton variant="lime" size="lg" to="/contact">Start a build →</AppButton>
            <AppButton variant="on-dark-ghost" size="lg" to="/diagnose"
              >Run a diagnostic</AppButton
            >
          </div>
        </div>

        <div class="relative z-10">
          <div
            v-for="(item, i) in bullets"
            :key="item.k"
            class="flex items-center justify-between py-4 border-t border-invert text-sm"
            :class="{ 'border-b': i === bullets.length - 1 }"
          >
            <span class="text-invert-muted">{{ item.k }}</span>
            <span
              class="font-code font-semibold text-[22px] tracking-[-0.015em]"
              :class="item.lime ? 'text-brand' : 'text-invert'"
              >{{ item.v }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue'

const bullets = [
  { k: 'Platforms shipped', v: '6', lime: false },
  { k: 'Operational domains', v: '5', lime: false },
  { k: 'Rust services live', v: '2', lime: true },
  { k: 'Commits, two flagships', v: '700+', lime: true },
]
</script>
