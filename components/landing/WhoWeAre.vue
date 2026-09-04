<template>
  <section class="py-20 border-b border-base" id="who-we-are">
    <div class="container-isura grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16">
      <div>
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">Who we are</span>
        <h2
          class="text-[clamp(34px,4.2vw,56px)] font-bold tracking-[-0.032em] leading-[1.02] mt-3 max-w-[16ch]"
        >
          Some problems do not fit a software brief.
        </h2>
        <p class="text-muted text-[17px] leading-relaxed max-w-[46ch] mt-6">
          Altisly works inside the operation, not beside it. We take on problems where the process,
          the data and the software all have to change together, and we build until the new way of
          working can stand on its own.
        </p>
      </div>

      <div class="flex flex-col lg:pt-14">
        <div
          v-for="(item, i) in whoWeAre"
          :key="item.title"
          class="py-6 border-t border-base"
          :class="{ 'border-b': i === whoWeAre.length - 1 }"
        >
          <h3 class="text-[20px] font-bold tracking-[-0.018em] mb-1.5">{{ item.title }}</h3>
          <p class="text-muted text-[14.5px] leading-relaxed">{{ item.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { whoWeAre } from '@/data/content'
</script>
