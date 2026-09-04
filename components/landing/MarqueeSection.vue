<template>
  <section class="bg-invert text-invert overflow-hidden border-t border-b border-invert">
    <div class="flex gap-14 py-[22px] whitespace-nowrap animate-marquee">
      <span
        v-for="(item, i) in [...items, ...items]"
        :key="`${item}-${i}`"
        class="inline-flex items-center gap-[18px] text-[22px] font-semibold tracking-[-0.02em]"
      >
        {{ item }} <span class="text-brand text-[22px]">✦</span>
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  'Treasury',
  'Payments',
  'Identity',
  'Health records',
  'Core banking',
  'Approvals and audit',
  'Workflow automation',
]
</script>
