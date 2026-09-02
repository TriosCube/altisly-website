<template>
  <header class="pt-14 pb-12 border-b border-base">
    <div class="container-isura">
      <span class="eyebrow-pill">
        <span
          class="w-6 h-6 rounded-full bg-brand text-on-brand grid place-items-center text-sm font-bold"
          >✦</span
        >
        {{ eyebrow }}
      </span>

      <h1
        class="font-extrabold text-[clamp(40px,5.4vw,76px)] leading-[1] tracking-[-0.035em] mt-5 mb-4 max-w-[18ch]"
      >
        {{ title }}
      </h1>

      <p v-if="lede" class="text-lg leading-relaxed text-muted max-w-[52ch]">{{ lede }}</p>

      <div v-if="$slots.actions" class="flex gap-3 flex-wrap mt-8">
        <slot name="actions" />
      </div>

      <div v-if="$slots.meta" class="mt-8">
        <slot name="meta" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  lede?: string
}>()
</script>
