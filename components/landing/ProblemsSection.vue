<template>
  <section class="py-20" id="problems">
    <div class="container-isura grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16">
      <div>
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">
          Problems we solve
        </span>
        <h2
          class="text-[clamp(34px,4.2vw,56px)] font-bold tracking-[-0.032em] leading-[1.02] mt-3 max-w-[12ch]"
        >
          You will know one of these.
        </h2>
      </div>

      <div class="flex flex-col">
        <div
          v-for="(problem, i) in problems"
          :key="problem.title"
          class="flex items-start gap-6 py-6 border-t border-base"
          :class="{ 'border-b': i === problems.length - 1 }"
        >
          <span class="font-code text-[13px] text-brand-deep pt-1 w-7 flex-shrink-0">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <div class="flex-1">
            <h3 class="text-[19px] font-semibold tracking-[-0.015em] leading-snug mb-1.5">
              {{ problem.title }}
            </h3>
            <p class="text-muted text-[14.5px] leading-relaxed">{{ problem.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { problems } from '@/data/content'
</script>
