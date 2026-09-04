<template>
  <section class="py-[110px]" id="belief">
    <div class="container-isura">
      <div
        class="bg-brand text-on-brand rounded-isura-xl p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 items-end"
      >
        <div>
          <span class="font-code text-[11px] tracking-[0.14em] uppercase opacity-70">
            What we believe
          </span>
          <p
            class="text-[clamp(30px,4vw,56px)] font-bold tracking-[-0.032em] leading-[1.06] mt-5 max-w-[18ch]"
          >
            Technology is only worth it when the business underneath works better.
          </p>
        </div>

        <div class="flex flex-col">
          <p
            v-for="(line, i) in supports"
            :key="line"
            class="text-[15px] leading-relaxed py-4 border-t border-on-brand/25"
            :class="{ 'border-b': i === supports.length - 1 }"
          >
            {{ line }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const supports = [
  'Not software for software\'s sake.',
  'Not automation around a broken process.',
  'Not another system your team has to work around.',
]
</script>
