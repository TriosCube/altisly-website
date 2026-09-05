<template>
  <aside v-if="slot" class="max-w-content mx-auto px-6 my-14">
    <p class="text-muted text-[11px] uppercase tracking-[0.14em] mb-2">Sponsored</p>
    <ins
      ref="unit"
      class="adsbygoogle block w-full overflow-hidden rounded-lg border border-base bg-surface-2"
      style="display: block; min-height: 90px"
      :data-ad-client="client"
      :data-ad-slot="slot"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  </aside>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{ slot?: string }>(), { slot: '' })

const client = 'ca-pub-4228173539269709'
const unit = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!props.slot) return
  try {
    // The loader defines this array; pushing an empty object fills the unit.
    ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
  } catch {
    // A blocked or unavailable loader should never take the page down.
  }
})
</script>
