<template>
  <div>
    <AppHeader />
    <main>
      <!-- Hero -->
      <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#060809] overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-settlement" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-settlement)" />
          </svg>
        </div>
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full opacity-10 blur-3xl"></div>
        <div class="absolute bottom-1/3 left-1/3 w-72 h-72 bg-cyan-400 rounded-full opacity-10 blur-3xl"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row items-center gap-16">
            <div class="lg:w-1/2 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 mb-3">
                <NuxtLink to="/products/atreasury" class="text-white/40 hover:text-white/70 text-xs font-semibold transition-colors">Atreasury</NuxtLink>
                <svg class="w-3 h-3 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-white/60 text-xs font-semibold">Suite</span>
              </div>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-widest mb-6">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                Settlement System Suite
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Your own settlement infrastructure, fully operated
              </h1>
              <p class="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                Build and operate a production-grade settlement system without a 5-year engineering project. Atreasury's Settlement Suite gives you batch processing, real-time clearing, multi-currency netting, and a clean settlement ledger — deployed in weeks.
              </p>
              <p class="text-base text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Designed for banks, payment service providers, mobile money operators, and fintechs who need to own their settlement stack.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <NuxtLink to="/contact" class="btn-primary px-8 py-4 text-base">Talk to an Engineer</NuxtLink>
                <NuxtLink to="/products/atreasury" class="px-8 py-4 text-base border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">Back to Atreasury</NuxtLink>
              </div>
            </div>

            <!-- Settlement UI Mockup -->
            <div class="lg:w-1/2 w-full">
              <div class="bg-[#111418] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div class="bg-[#1a1f24] px-4 py-3 border-b border-white/5 flex items-center gap-2">
                  <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div class="mx-auto text-[10px] text-white/40 font-mono">Settlement Engine — Batch Run</div>
                </div>
                <div class="p-6">
                  <div class="flex items-start justify-between mb-6">
                    <div>
                      <p class="text-white/50 text-xs uppercase tracking-wider mb-1">Current Batch</p>
                      <p class="text-white font-black text-2xl">Batch #2024-1847</p>
                      <p class="text-teal-400 text-xs mt-1 font-semibold">Processing</p>
                    </div>
                    <div class="text-right">
                      <p class="text-white/40 text-xs mb-1">Settlement Value</p>
                      <p class="text-white font-bold text-xl">$8,420,500</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-4 gap-2 mb-6">
                    <div class="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
                      <p class="text-green-400 font-bold">4,821</p>
                      <p class="text-white/40 text-[10px]">Settled</p>
                    </div>
                    <div class="bg-teal-500/10 border border-teal-500/20 rounded-lg p-3 text-center">
                      <p class="text-teal-400 font-bold">312</p>
                      <p class="text-white/40 text-[10px]">Processing</p>
                    </div>
                    <div class="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 text-center">
                      <p class="text-yellow-400 font-bold">48</p>
                      <p class="text-white/40 text-[10px]">Pending</p>
                    </div>
                    <div class="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-center">
                      <p class="text-red-400 font-bold">6</p>
                      <p class="text-white/40 text-[10px]">Failed</p>
                    </div>
                  </div>
                  <div>
                    <p class="text-white/40 text-xs uppercase tracking-wider mb-3">Recent Settlement Lines</p>
                    <div class="space-y-2">
                      <div v-for="item in mockSettlements" :key="item.id" class="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                        <div>
                          <p class="text-white text-xs font-medium font-mono">{{ item.ref }}</p>
                          <p class="text-white/40 text-xs">{{ item.rail }} · {{ item.currency }}</p>
                        </div>
                        <div class="text-right">
                          <p class="text-white text-xs font-semibold">{{ item.amount }}</p>
                          <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full" :class="item.statusClass">{{ item.status }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats -->
      <section class="py-12 bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="stat in stats" :key="stat.value" class="text-center">
              <p class="text-3xl md:text-4xl font-bold text-[#15c411] mb-1">{{ stat.value }}</p>
              <p class="text-sm text-gray-500 font-medium">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Settlement Modes -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Settlement Modes</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Batch, real-time, or hybrid — your choice</h2>
            <p class="text-gray-500 max-w-2xl mx-auto">Configure the right settlement model for each payment type. Mix batch and real-time settlement across different corridors, currencies, and counterparty types.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="mode in settlementModes" :key="mode.title" class="bg-gray-50 rounded-2xl border-2 p-8 text-center" :class="mode.borderClass">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" :class="mode.iconBg">
                <svg class="w-8 h-8" :class="mode.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="mode.icon" />
                </svg>
              </div>
              <h3 class="font-bold text-navy-900 text-lg mb-3">{{ mode.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-5">{{ mode.description }}</p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span v-for="tag in mode.tags" :key="tag" class="text-[10px] font-bold px-2 py-0.5 rounded-full" :class="mode.tagClass">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="py-20 bg-gray-50 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Settlement Infrastructure</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Production-grade, from day one</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="feat in features" :key="feat.title" class="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-teal-50">
                <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feat.icon" />
                </svg>
              </div>
              <h3 class="text-base font-bold text-navy-900 mb-2">{{ feat.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ feat.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Payment Rail Coverage -->
      <section class="py-20 bg-white border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Rail Coverage</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Settle across every major payment rail</h2>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="rail in paymentRails" :key="rail.name" class="bg-gray-50 rounded-xl border border-gray-100 p-5 text-center">
              <div class="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="rail.icon" />
                </svg>
              </div>
              <h4 class="font-bold text-navy-900 text-sm mb-1">{{ rail.name }}</h4>
              <p class="text-xs text-gray-500">{{ rail.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Own your settlement infrastructure"
        subtitle="Talk to our engineers about deploying the Atreasury Settlement Suite for your payment operation."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Settlement System Suite | Atreasury — Altisly',
  description: 'Production-grade settlement infrastructure. Batch processing, real-time clearing, multi-currency netting, and a clean settlement ledger — deployed in weeks.',
})

const mockSettlements = [
  { id: 1, ref: 'STL-20241102-0018', rail: 'RTGS', currency: 'NGN', amount: '₦42,000,000', status: 'SETTLED', statusClass: 'bg-green-500/20 text-green-400' },
  { id: 2, ref: 'STL-20241102-0017', rail: 'SEPA', currency: 'EUR', amount: '€18,400', status: 'PROCESSING', statusClass: 'bg-teal-500/20 text-teal-400' },
  { id: 3, ref: 'STL-20241102-0016', rail: 'SWIFT', currency: 'USD', amount: '$284,000', status: 'PENDING', statusClass: 'bg-yellow-500/20 text-yellow-400' },
]

const stats = [
  { value: '5M+', label: 'Daily Transactions Processed' },
  { value: '<2s', label: 'Real-Time Settlement Latency' },
  { value: '99.99%', label: 'System Availability' },
  { value: '15+', label: 'Payment Rails Supported' },
]

const settlementModes = [
  {
    title: 'Batch Settlement',
    description: 'Aggregate transactions over a defined window (hourly, end-of-day) and settle in a single net batch. Lower rail cost, predictable cycles.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    borderClass: 'border-gray-200',
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-600',
    tags: ['End-of-day', 'Intraday', 'Netting', 'Low cost'],
    tagClass: 'bg-gray-100 text-gray-600',
  },
  {
    title: 'Real-Time Settlement',
    description: 'Settle each transaction individually as it occurs. Immediate finality for high-value or time-sensitive payments where counterparty risk cannot be held.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    borderClass: 'border-teal-200',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    tags: ['Instant', 'RTGS', 'High-value', 'T+0'],
    tagClass: 'bg-teal-50 text-teal-600',
  },
  {
    title: 'Hybrid Settlement',
    description: 'Route transactions to batch or real-time settlement automatically based on configurable rules — value threshold, transaction type, counterparty rating, or time of day.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    borderClass: 'border-[#15c411]/40',
    iconBg: 'bg-[#ebfaeb]',
    iconColor: 'text-[#15c411]',
    tags: ['Rules-based routing', 'Best of both', 'Configurable'],
    tagClass: 'bg-[#ebfaeb] text-[#15c411]',
  },
]

const features = [
  {
    title: 'Multi-Currency Netting Engine',
    description: 'Net multilateral obligations across counterparties in each currency, drastically reducing the gross value of rails traffic and correspondent banking fees.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Settlement Ledger Management',
    description: 'A clean, double-entry settlement ledger records every debit, credit, and net position movement. Full audit trail from individual transaction to final net settlement.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2',
  },
  {
    title: 'Clearing Window Management',
    description: 'Define multiple clearing windows per day per currency and rail. The engine automatically collects, nets, and submits settlement instructions at each window close.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Failed Payment Handling',
    description: 'Automated retry logic, failed payment queue management, and counterparty notification workflows ensure every failed settlement is tracked to resolution.',
    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  },
  {
    title: 'Correspondent Banking Integration',
    description: 'Direct integration with correspondent banks via SWIFT MT103/MT202, local RTGS, and ISO 20022 message formats. Full message lifecycle tracking and acknowledgement handling.',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9',
  },
  {
    title: 'Liquidity Position Feedback',
    description: 'Every settled transaction feeds back into the Atreasury cash position in real time. Settlement activity is always reflected in your live liquidity view without manual reconciliation.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
]

const paymentRails = [
  { name: 'SWIFT MT/MX', desc: 'Cross-border wire transfers', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3' },
  { name: 'SEPA (SCT/SDD)', desc: 'Euro zone clearing', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8' },
  { name: 'ACH & FedWire', desc: 'US domestic rails', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4' },
  { name: 'RTGS (Local)', desc: 'African central bank RTGS', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { name: 'Faster Payments', desc: 'UK instant payments', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0' },
  { name: 'NIBSS (Nigeria)', desc: 'NIP & NCS clearing', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944' },
  { name: 'GhIPSS (Ghana)', desc: 'Ghana interbank settlement', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6' },
  { name: 'Mobile Money', desc: 'M-Pesa, MTN, Airtel', icon: 'M12 18h.01M8 21h8a2 2 0 002-2v-8a2 2 0 00-2-2H8a2 2 0 00-2 2v8a2 2 0 002 2z' },
]
</script>
