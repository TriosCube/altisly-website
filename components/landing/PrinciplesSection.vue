<template>
  <section class="bg-invert text-invert py-[90px]" id="principles">
    <div class="container-isura">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <h2
          class="text-[clamp(34px,4.2vw,54px)] font-bold tracking-[-0.032em] leading-[1.02] max-w-[16ch]"
        >
          What every build answers to.
        </h2>
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-invert-muted">
          Four positions
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 mt-12">
        <div
          v-for="(principle, i) in principles"
          :key="principle.title"
          class="border-t border-invert pt-5"
        >
          <span class="font-code text-[12px] text-brand">{{
            String(i + 1).padStart(2, '0')
          }}</span>
          <p class="text-[18px] font-semibold tracking-[-0.015em] leading-[1.25] mt-2">
            {{ principle.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { principles } from '@/data/content'
</script>
