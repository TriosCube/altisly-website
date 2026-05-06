<template>
  <div>
    <AppHeader />
    <main>
      <!-- Hero -->
      <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#060809] overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-recon" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-recon)" />
          </svg>
        </div>
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row items-center gap-16">
            <div class="lg:w-1/2 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 mb-3">
                <NuxtLink to="/products/atreasury" class="text-white/40 hover:text-white/70 text-xs font-semibold transition-colors">ATreasury</NuxtLink>
                <svg class="w-3 h-3 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-white/60 text-xs font-semibold">Suite</span>
              </div>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-3 7l2 2 4-4"></path></svg>
                Reconciliation Management Suite
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Reconcile everything. Automatically.
              </h1>
              <p class="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Eliminate manual matching, spreadsheet nightmares, and month-end firefighting. Our Reconciliation Management Suite automates the full lifecycle — from data ingestion through break resolution to audit-ready sign-off.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <NuxtLink to="/contact" class="btn-primary px-8 py-4 text-base">Request a Demo</NuxtLink>
                <NuxtLink to="/products/atreasury" class="px-8 py-4 text-base border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">Back to ATreasury</NuxtLink>
              </div>
            </div>

            <!-- Reconciliation UI Mockup -->
            <div class="lg:w-1/2 w-full">
              <div class="bg-[#111418] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div class="bg-[#1a1f24] px-4 py-3 border-b border-white/5 flex items-center gap-2">
                  <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div class="mx-auto text-[10px] text-white/40 font-mono">Reconciliation Engine — Live</div>
                </div>
                <div class="p-6">
                  <div class="flex justify-between items-center mb-6">
                    <div>
                      <p class="text-white/50 text-xs uppercase tracking-wider mb-1">Today's Run</p>
                      <p class="text-white font-bold text-xl">12,847 transactions</p>
                    </div>
                    <div class="text-right">
                      <p class="text-[#15c411] text-2xl font-black">98.4%</p>
                      <p class="text-white/40 text-xs">Match Rate</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-3 mb-6">
                    <div class="bg-green-500/10 border border-green-500/20 rounded-xl p-3 text-center">
                      <p class="text-green-400 font-bold text-lg">12,641</p>
                      <p class="text-white/40 text-xs mt-1">Matched</p>
                    </div>
                    <div class="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-3 text-center">
                      <p class="text-yellow-400 font-bold text-lg">142</p>
                      <p class="text-white/40 text-xs mt-1">Pending</p>
                    </div>
                    <div class="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-center">
                      <p class="text-red-400 font-bold text-lg">64</p>
                      <p class="text-white/40 text-xs mt-1">Breaks</p>
                    </div>
                  </div>
                  <div>
                    <p class="text-white/40 text-xs uppercase tracking-wider mb-3">Recent Breaks</p>
                    <div class="space-y-2">
                      <div v-for="brk in mockBreaks" :key="brk.id" class="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                        <div class="flex items-center gap-3">
                          <div class="w-2 h-2 rounded-full" :class="brk.dotColor"></div>
                          <div>
                            <p class="text-white text-xs font-medium">{{ brk.ref }}</p>
                            <p class="text-white/40 text-xs">{{ brk.reason }}</p>
                          </div>
                        </div>
                        <div class="text-right">
                          <p class="text-white text-xs font-semibold">{{ brk.amount }}</p>
                          <p class="text-xs" :class="brk.ageColor">{{ brk.age }}</p>
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

      <!-- The Problem -->
      <section class="py-20 bg-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">The Problem</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Manual reconciliation is costing you more than time</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-red-50 border border-red-100 rounded-2xl p-6">
              <p class="font-bold text-red-600 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span>✕</span> Without ATreasury Reconciliation
              </p>
              <ul class="space-y-3">
                <li v-for="pain in painPoints" :key="pain" class="flex items-start gap-3 text-sm text-gray-700">
                  <svg class="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  {{ pain }}
                </li>
              </ul>
            </div>
            <div class="bg-[#ebfaeb] border border-[#15c411]/20 rounded-2xl p-6">
              <p class="font-bold text-[#15c411] text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span>✓</span> With ATreasury Reconciliation
              </p>
              <ul class="space-y-3">
                <li v-for="gain in gains" :key="gain" class="flex items-start gap-3 text-sm text-gray-700">
                  <svg class="w-4 h-4 text-[#15c411] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  {{ gain }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="py-20 bg-gray-50 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Capabilities</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Full-lifecycle reconciliation automation</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="feat in features" :key="feat.title" class="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-blue-50">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feat.icon" />
                </svg>
              </div>
              <h3 class="text-base font-bold text-navy-900 mb-2">{{ feat.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ feat.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Reconciliation Types -->
      <section class="py-20 bg-white border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">What We Reconcile</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Every reconciliation type your business needs</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="type in reconTypes" :key="type.title" class="flex items-start gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="type.icon" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-navy-900 mb-2">{{ type.title }}</h3>
                <p class="text-sm text-gray-600 leading-relaxed">{{ type.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="End manual reconciliation today"
        subtitle="See how our Reconciliation Suite achieves 99%+ match rates across all your transaction sources."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Reconciliation Management Suite | ATreasury — Altisly',
  description: 'Automate the full reconciliation lifecycle. Match transactions across bank statements, ledgers, and payment processors with configurable rules and AI-assisted break resolution.',
})

const mockBreaks = [
  { id: 1, ref: 'TXN-2847-A', reason: 'Amount mismatch', amount: '$4,200.00', age: '2h old', dotColor: 'bg-yellow-400', ageColor: 'text-yellow-400' },
  { id: 2, ref: 'TXN-2841-C', reason: 'Missing counterpart', amount: '$18,500.00', age: '5h old', dotColor: 'bg-red-400', ageColor: 'text-red-400' },
  { id: 3, ref: 'TXN-2839-B', reason: 'Date variance', amount: '$920.50', age: '1d old', dotColor: 'bg-red-400', ageColor: 'text-red-400' },
]

const stats = [
  { value: '99%+', label: 'Automated Match Rate' },
  { value: '80%', label: 'Reduction in Manual Work' },
  { value: '<1hr', label: 'Daily Reconciliation Cycle' },
  { value: '100%', label: 'Audit Trail Coverage' },
]

const painPoints = [
  'Finance teams spend 3–5 hours daily on manual matching across spreadsheets',
  'Breaks sit unresolved for days, distorting your cash position',
  'No systematic ageing or escalation of outstanding items',
  'Month-end close takes weeks due to accumulated unresolved differences',
  'Audit preparation requires recreating the entire reconciliation trail',
  'Single-source reconciliation misses intercompany and processor differences',
]

const gains = [
  'Transactions matched automatically within minutes of bank statement receipt',
  'Breaks flagged, aged, and escalated based on configurable rules',
  'Real-time match rate dashboard with drill-down to individual items',
  'Month-end close accelerated from weeks to hours',
  'Complete, timestamped audit trail for every match and exception',
  'Reconcile across banks, payment processors, and internal ledgers simultaneously',
]

const features = [
  {
    title: 'Multi-Source Data Ingestion',
    description: 'Ingest bank statements (MT940/CAMT), payment processor reports, and internal ledger exports via API or secure file transfer — automatically parsed and normalised.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
  },
  {
    title: 'Configurable Matching Engine',
    description: 'Define exact, partial, and tolerance-based matching rules per transaction type, counterparty, currency, and date window. Rules cascade in priority order.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'AI-Assisted Break Resolution',
    description: 'Machine learning suggests probable causes for each break — timing differences, format inconsistencies, duplicate postings — and recommends resolution actions.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: 'Break Ageing & Escalation',
    description: 'Every unmatched item is automatically aged from the moment it appears. Configurable escalation rules alert the right people as breaks age past defined thresholds.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Intercompany Reconciliation',
    description: 'Reconcile transactions between legal entities within your group. Automatically identify intercompany mismatches and generate elimination entries for consolidation.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Audit-Ready Reporting',
    description: 'Every match, exception, and resolution is logged with a full timestamp and user trail. Export reconciliation packs directly for internal audit and external auditors.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
]

const reconTypes = [
  {
    title: 'Bank Statement Reconciliation',
    description: 'Match every bank statement line against your internal cash ledger. Handle timing differences, reversals, and bank charges automatically with configurable tolerance windows.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  },
  {
    title: 'Payment Processor Reconciliation',
    description: 'Reconcile settlement files from Stripe, Flutterwave, Paystack, and other processors against your expected payout amounts, fees, and refunds.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2',
  },
  {
    title: 'Intercompany Reconciliation',
    description: 'Automatically identify and reconcile intercompany transactions across your group entities. Generate elimination entries and highlight unreported intercompany balances.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0',
  },
  {
    title: 'Nostro & Correspondent Reconciliation',
    description: 'Reconcile your Nostro accounts with correspondent bank statements. Handle SWIFT MT940 messages and auto-match against your internal records with currency conversion.',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9',
  },
]
</script>
