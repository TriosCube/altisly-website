<template>
  <div>
    <AppHeader />
    <main>
      <!-- Hero -->
      <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#060809] overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-merchant" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-merchant)" />
          </svg>
        </div>
        <div class="absolute top-1/4 right-1/3 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row items-center gap-16">
            <div class="lg:w-1/2 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 mb-3">
                <NuxtLink to="/products/atreasury" class="text-white/40 hover:text-white/70 text-xs font-semibold transition-colors">Atreasury</NuxtLink>
                <svg class="w-3 h-3 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-white/60 text-xs font-semibold">Suite</span>
              </div>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold uppercase tracking-widest mb-6">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-1 4h1"></path></svg>
                Merchant Management Suite
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Onboard, manage, and settle merchants at scale
              </h1>
              <p class="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                Give every merchant a best-in-class experience. The Atreasury Merchant Suite handles digital onboarding, tiered fee configuration, automated settlement disbursements, dispute resolution, and real-time merchant reporting in one platform.
              </p>
              <p class="text-base text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Built for payment aggregators, acquiring banks, super-apps, and marketplaces managing hundreds to thousands of merchants.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <NuxtLink to="/contact" class="btn-primary px-8 py-4 text-base">Book a Demo</NuxtLink>
                <NuxtLink to="/products/atreasury" class="px-8 py-4 text-base border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">Back to Atreasury</NuxtLink>
              </div>
            </div>

            <!-- Merchant UI Mockup -->
            <div class="lg:w-1/2 w-full">
              <div class="bg-[#111418] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div class="bg-[#1a1f24] px-4 py-3 border-b border-white/5 flex items-center gap-2">
                  <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div class="mx-auto text-[10px] text-white/40 font-mono">Merchant Dashboard — Portfolio View</div>
                </div>
                <div class="p-6">
                  <div class="grid grid-cols-3 gap-3 mb-6">
                    <div class="bg-white/5 rounded-xl p-4 border border-white/5">
                      <p class="text-white/40 text-xs mb-1">Active Merchants</p>
                      <p class="text-white font-black text-xl">1,284</p>
                    </div>
                    <div class="bg-white/5 rounded-xl p-4 border border-white/5">
                      <p class="text-white/40 text-xs mb-1">Pending Settlement</p>
                      <p class="text-orange-400 font-black text-xl">$2.4M</p>
                    </div>
                    <div class="bg-white/5 rounded-xl p-4 border border-white/5">
                      <p class="text-white/40 text-xs mb-1">Open Disputes</p>
                      <p class="text-yellow-400 font-black text-xl">23</p>
                    </div>
                  </div>
                  <p class="text-white/40 text-xs uppercase tracking-wider mb-3">Merchant Portfolio</p>
                  <div class="space-y-2">
                    <div v-for="m in mockMerchants" :key="m.name" class="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs" :class="m.colorClass">{{ m.letter }}</div>
                        <div>
                          <p class="text-white text-xs font-medium">{{ m.name }}</p>
                          <p class="text-white/40 text-xs">{{ m.category }} · {{ m.tier }}</p>
                        </div>
                      </div>
                      <div class="text-right">
                        <p class="text-white text-xs font-semibold">{{ m.volume }}</p>
                        <div class="flex items-center gap-1 justify-end mt-1">
                          <div class="w-1.5 h-1.5 rounded-full" :class="m.statusColor"></div>
                          <p class="text-xs text-white/40">{{ m.status }}</p>
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

      <!-- Merchant Lifecycle -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">The Merchant Journey</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">From onboarding to settlement — fully automated</h2>
          </div>
          <div class="relative">
            <div class="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gray-100 z-0"></div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div v-for="(step, idx) in lifecycle" :key="step.title" class="text-center">
                <div class="w-20 h-20 rounded-2xl bg-orange-50 border-2 border-orange-100 flex items-center justify-center mx-auto mb-5">
                  <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="step.icon" />
                  </svg>
                </div>
                <div class="bg-[#15c411] text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center mx-auto mb-3">{{ idx + 1 }}</div>
                <h3 class="font-bold text-navy-900 mb-2">{{ step.title }}</h3>
                <p class="text-xs text-gray-500 leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="py-20 bg-gray-50 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Core Capabilities</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Everything you need to run a merchant portfolio</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="feat in features" :key="feat.title" class="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-orange-50">
                <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feat.icon" />
                </svg>
              </div>
              <h3 class="text-base font-bold text-navy-900 mb-2">{{ feat.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ feat.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Merchant Portal -->
      <section class="py-20 bg-white border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-16 items-center">
            <div class="lg:w-1/2">
              <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Merchant Self-Service Portal</p>
              <h2 class="text-3xl font-bold text-navy-900 mb-6">Give merchants the visibility they demand</h2>
              <p class="text-gray-600 leading-relaxed mb-8">Every merchant on your platform gets their own branded portal with real-time transaction data, settlement statements, dispute management, and API access — reducing your support burden dramatically.</p>
              <ul class="space-y-4">
                <li v-for="point in portalFeatures" :key="point.title" class="flex items-start gap-4">
                  <div class="w-6 h-6 rounded-full bg-[#15c411]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg class="w-4 h-4 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-navy-900 text-sm">{{ point.title }}</h4>
                    <p class="text-sm text-gray-600 mt-1">{{ point.description }}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="lg:w-1/2">
              <div class="grid grid-cols-2 gap-4">
                <div v-for="card in portalCards" :key="card.title" class="bg-gray-50 rounded-xl border border-gray-100 p-5">
                  <div class="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center mb-3">
                    <svg class="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="card.icon" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-bold text-navy-900 mb-1">{{ card.title }}</h4>
                  <p class="text-xs text-gray-500">{{ card.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Scale your merchant network with confidence"
        subtitle="See how the Merchant Management Suite automates onboarding, settlement, and portfolio management."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Merchant Management Suite | Atreasury — Altisly',
  description: 'Onboard, manage, and settle merchants at scale. Digital onboarding, tiered fee configuration, automated disbursements, dispute resolution, and real-time reporting.',
})

const mockMerchants = [
  { name: 'ShopExpress Lagos', category: 'E-commerce', tier: 'Premium', volume: '$420K/mo', letter: 'S', colorClass: 'bg-blue-500/20 text-blue-400', status: 'Active', statusColor: 'bg-green-400' },
  { name: 'FoodCourt Africa', category: 'F&B', tier: 'Standard', volume: '$180K/mo', letter: 'F', colorClass: 'bg-orange-500/20 text-orange-400', status: 'Active', statusColor: 'bg-green-400' },
  { name: 'TechMart GH', category: 'Electronics', tier: 'Premium', volume: '$290K/mo', letter: 'T', colorClass: 'bg-purple-500/20 text-purple-400', status: 'Review', statusColor: 'bg-yellow-400' },
]

const stats = [
  { value: '1,000+', label: 'Merchants Supported' },
  { value: 'T+1', label: 'Settlement Cycle' },
  { value: '99.8%', label: 'Disbursement Accuracy' },
  { value: '<24hr', label: 'Merchant Onboarding' },
]

const lifecycle = [
  {
    title: 'Digital Onboarding',
    description: 'Merchants complete a guided digital application with document upload, KYC verification, and automated risk scoring.',
    icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z',
  },
  {
    title: 'Configuration',
    description: 'Set merchant-specific fee structures, settlement frequencies, payout accounts, and transaction limits.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Transaction Processing',
    description: 'Live transaction monitoring, real-time balance updates, and automated fee deduction on every payment.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  },
  {
    title: 'Settlement & Payout',
    description: 'Automated settlement runs disburse net funds to merchant accounts on their configured cycle — T+0, T+1, or weekly.',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
  },
]

const features = [
  {
    title: 'Digital Merchant Onboarding',
    description: 'Guided onboarding flows with document collection, automated KYC checks, business verification, and risk-tiered approval workflows. Onboard a new merchant in under 24 hours.',
    icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z',
  },
  {
    title: 'Tiered Fee Configuration',
    description: 'Define complex fee structures per merchant: flat fees, percentage rates, volume-based tiers, interchange plus, blended pricing — all configurable without engineering support.',
    icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
  {
    title: 'Automated Settlement & Disbursement',
    description: 'Schedule settlement runs daily, weekly, or on-demand. The engine calculates net settlement amounts after fees, reversals, and reserves — then disburses via your chosen payment rails.',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
  },
  {
    title: 'Dispute & Chargeback Management',
    description: 'Centralised dispute queue with automated evidence collection, representment workflows, and chargeback liability tracking. Merchants can submit rebuttal documents via their portal.',
    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  },
  {
    title: 'Merchant Risk Monitoring',
    description: 'Continuous monitoring of transaction velocity, chargeeback ratios, and fraud indicators. Automated holds, flags, and escalations keep your portfolio risk within acceptable limits.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  },
  {
    title: 'Reserve & Rolling Reserve Management',
    description: 'Define, hold, and release rolling reserves per merchant with full transparency. Track reserve balances, release schedules, and communicate reserve positions via the merchant portal.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
]

const portalFeatures = [
  { title: 'Real-Time Transaction Feed', description: 'Merchants see every transaction as it happens, with full details on status, amount, fees, and settlement timing.' },
  { title: 'Settlement Statements', description: 'Downloadable daily and monthly settlement reports in PDF and CSV formats, reconciliation-ready.' },
  { title: 'Dispute Self-Service', description: 'Merchants can view, respond to, and submit evidence for disputes directly without calling your support team.' },
  { title: 'API & Webhook Access', description: 'Full REST API and webhook configuration for merchants who want to integrate data into their own systems.' },
]

const portalCards = [
  { title: 'Transaction History', desc: 'Full searchable history with filters', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2' },
  { title: 'Settlement Reports', desc: 'Daily and monthly statements', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586' },
  { title: 'Dispute Centre', desc: 'Track and respond to chargebacks', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4' },
  { title: 'API Management', desc: 'Keys, webhooks, and docs', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
]
</script>
