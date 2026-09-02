<template>
  <span
    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-pill text-[11.5px] font-semibold"
    :class="toneClass"
  >
    <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
    {{ status }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ProjectStatus } from '@/utils/types'

const props = defineProps<{ status: ProjectStatus }>()

const toneClass = computed(
  () =>
    ({
      Active: 'bg-brand text-on-brand',
      Shipped: 'bg-invert text-invert',
      Maintained: 'bg-surface-2 text-muted border border-base',
    })[props.status],
)
</script>
