<template>
  <section class="py-[110px]">
    <div class="container-isura">
      <div
        class="bg-brand text-on-brand rounded-isura-xl p-14 px-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-14 items-start"
      >
        
        <div>
          <div
            class="avatar-circle w-16 h-16 rounded-full text-brand grid place-items-center text-[22px] font-bold mb-4"
          >
            ✦
          </div>
          <div class="text-[12px] tracking-[0.1em] uppercase opacity-70">How we build</div>
          <div class="font-semibold text-base mt-1.5">Structure beats discipline</div>
          <div class="text-[13px] opacity-70 mt-0.5">The principle we do not bend on</div>
        </div>

        <div>
          <blockquote
            class="m-0 text-[clamp(26px,3vw,40px)] font-semibold tracking-[-0.025em] leading-[1.18]"
          >
            A rule that depends on
            <span class="highlight-word text-brand px-2 rounded-[8px]">perfect memory</span> is a
            liability. We isolate tenants by schema because the best guardrail is the one a tired
            developer cannot accidentally step around.
          </blockquote>

          <div class="grid grid-cols-3 gap-4 mt-11">
            <div v-for="stat in stats" :key="stat.label" class="border-t pt-5 border-on-brand/25">
              <div class="text-[38px] font-bold tracking-[-0.025em] font-code">
                {{ stat.value }}
              </div>
              <div class="text-[13px] opacity-70 mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.avatar-circle {
  background: var(--on-brand);
}
.highlight-word {
  background: var(--on-brand);
}
</style>

<script setup lang="ts">
const stats = [
  { value: '6', label: 'platforms shipped' },
  { value: '700+', label: 'commits across two flagships' },
  { value: '5', label: 'operational domains' },
]
</script>
