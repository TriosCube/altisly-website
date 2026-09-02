<template>
  <article
    class="bento-card h-full p-0 overflow-hidden hover:border-strong transition-colors"
  >
    <div class="p-7 flex-1 flex flex-col">
      <div class="flex items-center justify-between gap-3">
        <StatusPill :status="project.status" />
        <span class="font-code text-[11px] text-muted">{{ project.period }}</span>
      </div>

      <h3 class="text-[26px] font-bold tracking-[-0.024em] leading-none mt-5 mb-2">
        {{ project.name }}
      </h3>
      <p class="text-muted text-[14.5px] leading-relaxed">{{ project.tagline }}</p>

      <div class="flex items-center gap-2 mt-4 font-code text-[11px] text-muted">
        <span>{{ project.role }}</span>
        <span class="text-brand-deep">·</span>
        <span>{{ project.build.length }} components</span>
        <template v-if="project.scale">
          <span class="text-brand-deep">·</span>
          <span>{{ project.scale }}</span>
        </template>
      </div>

      <div class="flex flex-wrap gap-2 mt-6">
        <span
          v-for="item in visibleStack"
          :key="item"
          class="chip bg-surface-2 border-base text-[11.5px] text-muted"
          >{{ item }}</span
        >
        <span v-if="hiddenCount > 0" class="chip bg-surface-2 border-base text-[11.5px] text-muted"
          >+{{ hiddenCount }}</span
        >
      </div>
    </div>

    <div
      class="flex items-center justify-between px-7 py-4 bg-surface-2 border-t border-base text-[13px]"
    >
      <span class="text-muted">Read the decisions</span>
      <span class="w-8 h-8 rounded-full bg-brand text-on-brand grid place-items-center">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
          <path d="M7 17L17 7" />
          <path d="M9 7h8v8" />
        </svg>
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import StatusPill from './StatusPill.vue'
import type { Project } from '@/utils/types'

const props = defineProps<{ project: Project }>()

const visibleStack = computed(() => props.project.stack.slice(0, 4))
const hiddenCount = computed(() => props.project.stack.length - visibleStack.value.length)
</script>
