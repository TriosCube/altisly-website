<template>
  <section class="py-[60px]" id="what-we-change">
    <div class="container-isura">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[240px] gap-4">
        <div
          class="bento-card md:col-span-2 row-span-2 bg-invert text-invert border-invert p-8 overflow-hidden relative"
        >
          <span
            class="chip bg-[rgba(234,239,230,0.12)] text-invert-muted border-invert font-code text-[11.5px]"
            >What we change</span
          >
          <h3
            class="text-[36px] font-bold tracking-[-0.025em] leading-none mt-[14px] mb-3 max-w-[16ch]"
          >
            We work across the operation, not just the software.
          </h3>
          <p class="text-invert-muted text-[15px] max-w-[38ch] mb-7">
            Four things have to move together. Change one and the other three fight you.
          </p>

          <svg
            class="absolute right-[-120px] bottom-[-160px] w-[520px] h-[520px] opacity-50"
            viewBox="0 0 400 400"
            fill="none"
          >
            <circle
              cx="200"
              cy="200"
              r="180"
              stroke="currentColor"
              stroke-width="0.5"
              opacity="0.3"
            />
            <circle
              cx="200"
              cy="200"
              r="140"
              stroke="currentColor"
              stroke-width="0.5"
              opacity="0.3"
            />
            <circle
              cx="200"
              cy="200"
              r="100"
              stroke="currentColor"
              stroke-width="0.5"
              opacity="0.4"
            />
            <ellipse
              cx="200"
              cy="200"
              rx="180"
              ry="60"
              stroke="currentColor"
              stroke-width="0.5"
              opacity="0.3"
            />
            <ellipse
              cx="200"
              cy="200"
              rx="180"
              ry="120"
              stroke="currentColor"
              stroke-width="0.5"
              opacity="0.3"
            />
            <line
              x1="20"
              y1="200"
              x2="380"
              y2="200"
              stroke="currentColor"
              stroke-width="0.5"
              opacity="0.3"
            />
            <circle cx="120" cy="160" r="6" fill="#C8F75D" />
            <circle cx="250" cy="220" r="6" fill="#C8F75D" />
            <circle cx="300" cy="120" r="4" fill="#C8F75D" />
            <circle cx="180" cy="280" r="4" fill="#C8F75D" />
            <circle cx="80" cy="240" r="4" fill="#C8F75D" />
          </svg>

          <NuxtLink
            to="/work"
            class="mt-auto relative z-10 inline-flex items-center gap-3 text-[15px] font-semibold border-t border-invert pt-5 w-fit group"
          >
            See what we have built
            <span
              class="w-9 h-9 rounded-full bg-brand text-on-brand grid place-items-center flex-shrink-0"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
              >
                <path d="M7 17L17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </span>
          </NuxtLink>
        </div>

        <div class="bento-card bg-brand text-on-brand border-brand">
          <div class="icon-on-lime w-[42px] h-[42px] rounded-full text-brand grid place-items-center mb-auto">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="6" cy="12" r="2.5" />
              <circle cx="18" cy="6" r="2.5" />
              <circle cx="18" cy="18" r="2.5" />
              <path d="M8.5 11L15.5 7M8.5 13l7 4" />
            </svg>
          </div>
          <span class="font-code text-[10.5px] tracking-[0.14em] uppercase opacity-70 mb-1.5">
            01
          </span>
          <h4 class="text-[22px] font-bold tracking-[-0.02em] leading-[1.1] mb-2">
            {{ layers[0].label }}
          </h4>
          <p class="text-on-brand/80 text-sm">{{ layers[0].body }}</p>
        </div>

        <div class="bento-card">
          <div
            class="w-[42px] h-[42px] rounded-full bg-brand text-on-brand grid place-items-center mb-auto"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect x="3" y="4" width="18" height="6" rx="1.5" />
              <rect x="3" y="14" width="18" height="6" rx="1.5" />
              <path d="M7 7h.01M7 17h.01" />
            </svg>
          </div>
          <span class="font-code text-[10.5px] tracking-[0.14em] uppercase text-muted mb-1.5">
            02
          </span>
          <h4 class="text-[22px] font-bold tracking-[-0.02em] leading-[1.1] mb-2">
            {{ layers[1].label }}
          </h4>
          <p class="text-muted text-sm">{{ layers[1].body }}</p>
        </div>

        <div class="bento-card md:col-span-2 bg-invert text-invert border-invert">
          <span
            class="chip bg-[rgba(234,239,230,0.12)] text-invert-muted border-invert font-code text-[11.5px]"
            >03</span
          >
          <h4 class="text-[22px] font-bold tracking-[-0.02em] leading-[1.1] mt-4 mb-2">
            {{ layers[2].label }}
          </h4>
          <p class="text-invert-muted text-sm max-w-[38ch]">{{ layers[2].body }}</p>

          <div class="flex items-end gap-1 h-[70px] mt-auto">
            <div
              v-for="(bar, i) in reportBars"
              :key="i"
              class="flex-1 rounded-[3px]"
              :style="{ height: bar.h, background: bar.color }"
            ></div>
          </div>
        </div>

        <div class="bento-card">
          <div
            class="w-[42px] h-[42px] rounded-full bg-brand text-on-brand grid place-items-center mb-auto"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <span class="font-code text-[10.5px] tracking-[0.14em] uppercase text-muted mb-1.5">
            04
          </span>
          <h4 class="text-[22px] font-bold tracking-[-0.02em] leading-[1.1] mb-2">
            {{ layers[3].label }}
          </h4>
          <p class="text-muted text-sm">{{ layers[3].body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { layers } from '@/data/content'

const reportBars = [
  { h: '30%', color: 'rgba(234,239,230,0.15)' },
  { h: '50%', color: 'rgba(234,239,230,0.15)' },
  { h: '40%', color: 'rgba(234,239,230,0.15)' },
  { h: '75%', color: '#C8F75D' },
  { h: '90%', color: '#C8F75D' },
  { h: '65%', color: '#C8F75D' },
  { h: '45%', color: 'rgba(234,239,230,0.15)' },
  { h: '60%', color: 'rgba(234,239,230,0.15)' },
  { h: '50%', color: 'rgba(234,239,230,0.15)' },
  { h: '70%', color: 'rgba(234,239,230,0.15)' },
  { h: '35%', color: 'rgba(234,239,230,0.15)' },
  { h: '55%', color: 'rgba(234,239,230,0.15)' },
]
</script>

<style scoped>
.icon-on-lime {
  background: var(--on-brand);
}
</style>
