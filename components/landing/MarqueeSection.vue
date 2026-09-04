<template>
  <section class="strip bg-invert text-invert border-b border-invert overflow-hidden relative z-10">
    <div class="flex items-stretch">
      <div
        class="hidden md:flex items-center flex-shrink-0 px-7 border-r border-invert"
      >
        <span class="font-code text-[11px] tracking-[0.16em] uppercase text-invert-muted">
          Where work gets hard
        </span>
      </div>

      <div class="flex-1 overflow-hidden">
        <div class="flex gap-12 py-5 whitespace-nowrap animate-marquee">
          <span
            v-for="(item, i) in [...items, ...items]"
            :key="`${item}-${i}`"
            class="inline-flex items-center gap-12 font-code text-[14px] tracking-[0.12em] uppercase"
          >
            {{ item }} <span class="text-brand">✦</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  'Manual handoffs',
  'Disconnected systems',
  'Unclear ownership',
  'Fragmented records',
  'Repeated work',
  'Operational bottlenecks',
]
</script>

<style scoped>
.strip {
  box-shadow: 0 -22px 44px -30px rgba(15, 20, 16, 0.5);
}
</style>
