<template>
  <article class="drift-card bg-surface border border-base rounded-isura-xl p-7 lg:p-9">
    <div class="flex gap-5 items-start">
      <span class="font-code text-brand-deep text-[15px] pt-1 w-8 flex-shrink-0">
        {{ String(index + 1).padStart(2, '0') }}
      </span>
      <div class="flex-1">
        <h3 class="text-[24px] font-bold tracking-[-0.022em] leading-[1.15] mb-3">
          {{ decision.title }}
        </h3>
        <p class="text-muted text-[15px] leading-[1.6] mb-5 max-w-[58ch]">{{ decision.body }}</p>
        <aside class="rounded-isura-md bg-surface-2 border border-base p-4">
          <div class="font-code text-[10.5px] tracking-[0.1em] uppercase text-brand-deep mb-2">
            Rejected
          </div>
          <p class="text-[14px] text-muted leading-relaxed">{{ decision.rejected }}</p>
        </aside>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Decision } from '@/utils/types'

defineProps<{
  decision: Decision
  index: number
}>()
</script>
