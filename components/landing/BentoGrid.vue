<template>
  <section class="py-[60px]">
    <div class="container-isura">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[240px] gap-4">
        <div
          class="bento-card md:col-span-2 row-span-2 bg-invert text-invert border-invert p-8 overflow-hidden relative"
        >
          <span
            class="chip bg-[rgba(234,239,230,0.12)] text-invert-muted border-invert font-code text-[11.5px]"
            >What we build</span
          >
          <h3
            class="text-[36px] font-bold tracking-[-0.025em] leading-none mt-[14px] mb-3 max-w-[16ch]"
          >
            Systems for operations that cannot afford to break.
          </h3>
          <p class="text-invert-muted text-[15px] max-w-[38ch] mb-7">
            Product surfaces, AI workflows, financial rails and operating systems that turn messy
            business logic into software teams can trust.
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

          <div class="flex gap-8 mt-auto relative z-10">
            <div v-for="stat in orbitStats" :key="stat.label">
              <div class="text-[11.5px] text-invert-muted tracking-[0.08em] uppercase">
                {{ stat.label }}
              </div>
              <div class="text-[26px] font-bold tracking-[-0.02em] mt-1 font-code text-brand">
                {{ stat.value }}
              </div>
            </div>
          </div>
        </div>

        <a :href="treasuryUrl" class="bento-card bg-brand text-on-brand border-brand">
          <span
            class="arrow-btn absolute top-[22px] right-[22px] w-11 h-11 rounded-full text-brand grid place-items-center"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M7 17L17 7" />
              <path d="M9 7h8v8" />
            </svg>
          </span>
          <h4 class="text-[22px] font-bold tracking-[-0.02em] leading-[1.1]">
            Explore<br />Isura
          </h4>
          <p class="text-on-brand/80 text-sm mt-auto">
            Our multi tenant platform: five applications, two Rust services, one framework
            underneath.
          </p>
        </a>

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
              <rect x="3" y="6" width="18" height="14" rx="2" />
              <path d="M16 13a2 2 0 110 4 2 2 0 010-4z" />
            </svg>
          </div>
          <h4 class="text-[22px] font-bold tracking-[-0.02em] leading-[1.1] mb-2">
            Health innovation
          </h4>
          <p class="text-muted text-sm">
            Secure care workflows, patient data flows and decision support built with restraint.
          </p>
        </div>

        <div class="bento-card md:col-span-2 bg-invert text-invert border-invert">
          <span
            class="chip bg-[rgba(234,239,230,0.12)] text-invert-muted border-invert font-code text-[11.5px]"
            >Ops platforms</span
          >
          <h4 class="text-[22px] font-bold tracking-[-0.02em] leading-[1.1] mt-4 mb-2">
            Automation, roles and telemetry in one operating layer.
          </h4>
          <p class="text-invert-muted text-sm max-w-[38ch]">
            Every build is shaped around the pressure it must survive: data boundaries, approvals,
            audit trails, failure paths, and the operators who use it every day.
          </p>

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
              <path d="M3 3v18h18" />
              <path d="M7 14l4-4 4 3 5-7" />
            </svg>
          </div>
          <h4 class="text-[22px] font-bold tracking-[-0.02em] leading-[1.1] mb-2">
            Core banking
          </h4>
          <p class="text-muted text-sm">
            Accounts, ledgers, limits and audit records for products that need regulated trust.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const treasuryUrl = useRuntimeConfig().public.treasuryUrl

const orbitStats = [
  { label: 'Platforms', value: '6' },
  { label: 'Rust services', value: '2' },
  { label: 'Domains', value: '5' },
]

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
.arrow-btn {
  background: var(--on-brand);
}
</style>
