<template>
  <figure
    class="m-0 rounded-isura-xl p-6 lg:p-8 border"
    :class="invert ? 'bg-invert-2 border-invert' : 'bg-surface border-base'"
  >
    <div class="flex flex-col gap-5">
      <div
        v-for="layer in diagram.layers"
        :key="layer.label"
        class="grid grid-cols-1 md:grid-cols-[130px_1fr] gap-3 md:gap-5 items-start"
      >
        <h3
          class="font-code text-[11px] tracking-[0.1em] uppercase pt-2"
          :class="invert ? 'text-invert-muted' : 'text-muted'"
        >
          {{ layer.label }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <div
            v-for="node in layer.nodes"
            :key="node.label"
            class="rounded-isura-md px-3.5 py-2.5 border min-w-[132px]"
            :class="nodeClass(node.accent)"
          >
            <div class="text-[13.5px] font-semibold tracking-[-0.01em] leading-tight">
              {{ node.label }}
            </div>
            <div
              v-if="node.note"
              class="font-code text-[10.5px] mt-1.5 leading-snug"
              :class="node.accent ? 'text-on-brand/70' : invert ? 'text-invert-muted' : 'text-muted'"
            >
              {{ node.note }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <figcaption
      class="text-[13px] mt-6 pt-5 border-t"
      :class="invert ? 'text-invert-muted border-invert' : 'text-muted border-base'"
    >
      {{ diagram.caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import type { Diagram } from '@/utils/types'

const props = withDefaults(
  defineProps<{
    diagram: Diagram
    invert?: boolean
  }>(),
  { invert: false },
)

function nodeClass(accent?: boolean) {
  if (accent) return 'bg-brand text-on-brand border-brand'
  return props.invert ? 'bg-invert text-invert border-invert' : 'bg-surface-2 border-base text-body'
}
</script>
