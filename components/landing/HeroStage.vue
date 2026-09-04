<template>
  <div class="relative min-h-[580px] hidden lg:block" aria-hidden="true">
    <div
      class="absolute right-[60px] bottom-[130px] w-20 h-20 rounded-full bg-brand text-on-brand grid place-items-center z-[5] shadow-[0_14px_40px_-10px_color-mix(in_srgb,#C8F75D_70%,transparent)]"
    >
      <svg
        class="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    </div>

    <div
      class="stage-card z-[2] left-[130px] top-[60px] w-[320px] rotate-2"
      style="background: var(--text); color: var(--bg); border-color: var(--text)"
    >
      <div class="flex justify-between items-center">
        <span class="font-code text-[11px] opacity-70 tracking-[0.1em] uppercase">Approval</span>
        <span class="font-code text-xs opacity-70">WAITING · 2</span>
      </div>
      <div class="text-lg font-semibold tracking-[-0.015em] mt-[26px] leading-snug">
        Payment run, 148 items
      </div>
      <div class="flex justify-between items-end mt-6">
        <span class="text-xs opacity-70">Raised 09:14 · needs a second pair of eyes</span>
      </div>
    </div>

    <div
      class="stage-card z-[3] left-5 top-[10px] w-[320px] -rotate-6"
      style="
        background: var(--invert-bg);
        color: var(--invert-text);
        border-color: var(--invert-bg);
      "
    >
      <div class="flex justify-between items-center">
        <span class="text-sm font-semibold opacity-85 flex items-center gap-1.5">
          <span
            class="w-[22px] h-[22px] rounded-[6px] bg-brand inline-grid place-items-center text-on-brand font-extrabold text-xs"
            >✦</span
          >
          Position
        </span>
        <span
          class="w-[28px] h-[22px] rounded-[4px] bg-gradient-to-br from-[#DAFC7E] to-[#95C129] border border-white/10"
        ></span>
      </div>
      <div class="font-code text-brand text-[13px] tracking-[0.08em] mt-2">TODAY · CONSOLIDATED</div>
      <div class="text-[38px] font-bold tracking-[-0.03em] leading-none mt-[14px] mb-2">
        Reconciled
      </div>
      <div class="flex justify-between items-center">
        <span class="font-code text-brand text-xs">▲ nothing outstanding</span>
        <svg width="80" height="26" viewBox="0 0 80 26">
          <path
            d="M2 18 L14 14 L26 16 L38 8 L50 10 L62 4 L78 6"
            stroke="#C8F75D"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="flex justify-between items-end mt-[22px] text-[11px] opacity-80">
        <span class="font-code tracking-[0.08em]">Closed 16:40</span>
        <span class="font-code tracking-[0.08em]">Posted</span>
      </div>
    </div>

    <div class="stage-card z-[4] right-0 top-8 w-[280px] rotate-[4deg]">
      <span class="font-code text-[10.5px] text-muted tracking-[0.1em] uppercase">Queue · today</span>
      <div class="text-2xl font-bold tracking-[-0.02em] my-[14px] mt-1.5">
        Exceptions<span class="text-brand-deep mx-1">·</span>3
      </div>

      <div
        class="flex items-center gap-2.5 px-2.5 py-2 rounded-lg mb-1.5 text-[12.5px]"
        style="background: color-mix(in srgb, #c8f75d 25%, var(--surface)); color: var(--on-brand)"
      >
        <span class="font-semibold">Amount mismatch</span>
        <span class="ml-auto font-code font-semibold">now</span>
        <span class="best-badge text-[9px] px-1.5 py-0.5 rounded text-brand font-bold">OPEN</span>
      </div>
      <div
        class="flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-surface-2 mb-1.5 text-[12.5px]"
      >
        <span class="font-semibold">Missing reference</span>
        <span class="ml-auto font-code font-semibold">11:02</span>
      </div>
      <div class="flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-surface-2 text-[12.5px]">
        <span class="font-semibold">Duplicate entry</span>
        <span class="ml-auto font-code font-semibold">10:48</span>
      </div>

      <div
        class="mt-2.5 h-9 w-full bg-brand text-on-brand rounded-[10px] font-semibold text-[13px] flex items-center justify-center gap-1.5"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.4"
        >
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 018 0v4" />
        </svg>
        Every change recorded
      </div>
    </div>

    <div class="stage-card z-[4] left-[60px] bottom-[30px] w-[280px]">
      <span class="font-code text-[10.5px] text-muted tracking-[0.1em] uppercase"
        >Onboarding · in progress</span
      >
      <div class="mt-2.5 flex flex-col gap-2">
        <FlowRow label="Details captured" time="step 1" state="done" />
        <FlowRow label="Checks cleared" time="step 2" state="done" />
        <FlowRow label="Account opened" time="running" state="now" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FlowRow from './FlowRow.vue'
</script>

<style scoped>
.best-badge {
  background: var(--on-brand);
}
</style>
