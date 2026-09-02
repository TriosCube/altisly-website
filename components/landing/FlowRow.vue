<template>
  <div class="flex items-center gap-2.5 text-[12.5px]">
    
    <span
      class="w-[22px] h-[22px] rounded-full grid place-items-center flex-shrink-0"
      :class="{
        'bg-brand text-on-brand': state === 'done',
        'bg-invert text-brand shadow-[0_0_0_4px_color-mix(in_srgb,#C8F75D_25%,transparent)]':
          state === 'now',
        'bg-surface-2 text-muted': state === 'wait',
      }"
    >
      <svg
        v-if="state === 'done'"
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
      >
        <path d="M4 12l5 5L20 6" />
      </svg>
      <svg v-else-if="state === 'now'" width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="6" />
      </svg>
      <span v-else class="w-1.5 h-1.5 rounded-full bg-current"></span>
    </span>

    <span :class="{ 'text-muted': state === 'wait' }">{{ label }}</span>
    <span class="ml-auto font-code text-[10.5px] text-muted">{{ time }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  time: string
  state: 'done' | 'now' | 'wait'
}>()
</script>
