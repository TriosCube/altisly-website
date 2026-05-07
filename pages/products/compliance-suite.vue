<template>
  <div>
    <AppHeader />
    <main>
      <!-- Hero -->
      <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#060809] overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-compliance" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-compliance)" />
          </svg>
        </div>
        <div class="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row items-center gap-16">
            <div class="lg:w-1/2 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 mb-3">
                <NuxtLink to="/products/atreasury" class="text-white/40 hover:text-white/70 text-xs font-semibold transition-colors">Atreasury</NuxtLink>
                <svg class="w-3 h-3 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-white/60 text-xs font-semibold">Suite</span>
              </div>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-6">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                Compliance Management Suite
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Compliance built into every transaction
              </h1>
              <p class="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                Stop treating compliance as an afterthought. The Atreasury Compliance Suite embeds AML screening, sanctions checks, KYC workflows, and regulatory reporting directly into your treasury operations — automatically, on every transaction.
              </p>
              <p class="text-base text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Built for banks, fintechs, payment companies, and corporate treasuries operating in regulated markets across Africa, the UK, and the EU.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <NuxtLink to="/contact" class="btn-primary px-8 py-4 text-base">Book a Compliance Demo</NuxtLink>
                <NuxtLink to="/products/atreasury" class="px-8 py-4 text-base border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">Back to Atreasury</NuxtLink>
              </div>
            </div>

            <!-- Compliance UI Mockup -->
            <div class="lg:w-1/2 w-full">
              <div class="bg-[#111418] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div class="bg-[#1a1f24] px-4 py-3 border-b border-white/5 flex items-center gap-2">
                  <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div class="mx-auto text-[10px] text-white/40 font-mono">Compliance Monitor — Real-Time</div>
                </div>
                <div class="p-6">
                  <div class="grid grid-cols-2 gap-4 mb-6">
                    <div class="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                      <p class="text-white/50 text-xs mb-1">Screened Today</p>
                      <p class="text-green-400 font-black text-2xl">24,812</p>
                      <p class="text-white/30 text-xs mt-1">transactions</p>
                    </div>
                    <div class="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                      <p class="text-white/50 text-xs mb-1">Alerts Raised</p>
                      <p class="text-red-400 font-black text-2xl">7</p>
                      <p class="text-white/30 text-xs mt-1">require review</p>
                    </div>
                  </div>
                  <div class="space-y-3 mb-6">
                    <p class="text-white/40 text-xs uppercase tracking-wider">Recent Alerts</p>
                    <div v-for="alert in mockAlerts" :key="alert.id" class="flex items-start justify-between p-3 rounded-lg border" :class="alert.bgClass">
                      <div class="flex items-start gap-3">
                        <div class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" :class="alert.dotClass">
                          <div class="w-2 h-2 rounded-full bg-current"></div>
                        </div>
                        <div>
                          <p class="text-white text-xs font-medium">{{ alert.title }}</p>
                          <p class="text-white/40 text-xs">{{ alert.detail }}</p>
                        </div>
                      </div>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ml-2 whitespace-nowrap" :class="alert.badgeClass">{{ alert.severity }}</span>
                    </div>
                  </div>
                  <div class="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div class="flex justify-between items-center">
                      <div>
                        <p class="text-white/40 text-xs mb-1">Sanctions Lists Active</p>
                        <p class="text-white font-bold">OFAC · UN · EU · HMT · FATF</p>
                      </div>
                      <div class="w-2 h-2 rounded-full bg-[#15c411] animate-pulse"></div>
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

      <!-- Core Pillars -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Four Pillars</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Complete compliance coverage</h2>
            <p class="text-gray-500 max-w-2xl mx-auto">The Compliance Suite covers every dimension of financial crime risk and regulatory obligation your treasury operation faces.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="pillar in pillars" :key="pillar.title" class="bg-gray-50 rounded-2xl border border-gray-100 p-8 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-5">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="pillar.icon" />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-navy-900 mb-3">{{ pillar.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ pillar.description }}</p>
              <ul class="space-y-2">
                <li v-for="point in pillar.points" :key="point" class="flex items-center gap-2 text-xs text-gray-500">
                  <svg class="w-3.5 h-3.5 text-[#15c411] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Regulatory Coverage -->
      <section class="py-20 bg-gray-50 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Regulatory Coverage</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Built for the regulatory frameworks that govern you</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="reg in regulations" :key="reg.title" class="bg-white rounded-2xl border border-gray-100 p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                  <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="reg.icon" />
                  </svg>
                </div>
                <h4 class="font-bold text-navy-900">{{ reg.title }}</h4>
              </div>
              <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ reg.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in reg.tags" :key="tag" class="text-[10px] font-bold bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Build compliance into your core operations"
        subtitle="See how the Atreasury Compliance Suite automates your entire financial crime prevention workflow."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Compliance Management Suite | Atreasury — Altisly',
  description: 'Embed AML screening, KYC management, sanctions checks, and regulatory reporting directly into your treasury operations — automatically on every transaction.',
})

const mockAlerts = [
  { id: 1, title: 'High-value unusual pattern', detail: 'TXN-9921 · $340,000 · Lagos → Dubai', severity: 'HIGH', bgClass: 'bg-red-500/10 border-red-500/20', dotClass: 'bg-red-500/20 text-red-400', badgeClass: 'bg-red-500/20 text-red-400' },
  { id: 2, title: 'Sanctions name match', detail: 'Counterparty screening · 72% confidence', severity: 'REVIEW', bgClass: 'bg-yellow-500/10 border-yellow-500/20', dotClass: 'bg-yellow-500/20 text-yellow-400', badgeClass: 'bg-yellow-500/20 text-yellow-400' },
  { id: 3, title: 'Structuring pattern detected', detail: '8 transactions · $9,800 each · 2h window', severity: 'HIGH', bgClass: 'bg-red-500/10 border-red-500/20', dotClass: 'bg-red-500/20 text-red-400', badgeClass: 'bg-red-500/20 text-red-400' },
]

const stats = [
  { value: '100%', label: 'Transaction Coverage' },
  { value: '<200ms', label: 'Screening Latency' },
  { value: '40+', label: 'Sanctions Lists' },
  { value: 'Real-Time', label: 'Alert Generation' },
]

const pillars = [
  {
    title: 'AML Transaction Monitoring',
    description: 'Every transaction is scored against behavioural models and rule-based typologies in real time. Suspicious patterns — structuring, layering, rapid movement — are flagged instantly with case management workflow.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    points: ['Real-time typology screening', 'Behavioural anomaly detection', 'Automated case management', 'SAR/STR workflow and filing support', 'Customisable risk scoring rules'],
  },
  {
    title: 'Sanctions & PEP Screening',
    description: 'Screen every counterparty, beneficiary, and related party against 40+ global sanctions lists and PEP databases before and at the point of transaction — with sub-200ms response times.',
    icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636',
    points: ['OFAC, UN, EU, HMT, FATF list coverage', 'Fuzzy-name matching algorithm', 'Politically Exposed Persons (PEP) database', 'Adverse media screening', 'Continuous list updates'],
  },
  {
    title: 'KYC Workflow Management',
    description: 'Manage the full customer due diligence lifecycle from initial onboarding through ongoing monitoring and enhanced due diligence for high-risk customers and counterparties.',
    icon: 'M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2',
    points: ['Digital document collection & verification', 'Risk-tiered onboarding workflows', 'Ongoing monitoring & re-KYC triggers', 'Beneficial ownership mapping', 'Enhanced Due Diligence (EDD) module'],
  },
  {
    title: 'Regulatory Reporting & Filing',
    description: 'Automate the production and submission of required regulatory reports. Suspicious Activity Reports, large transaction reports, and statistical returns generated directly from your transaction data.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    points: ['SAR/STR auto-generation & filing', 'Large Cash Transaction Reports (CTR)', 'Regulatory statistical returns', 'Cross-border reporting support', 'Audit log with full evidential chain'],
  },
]

const regulations = [
  {
    title: 'African Regulatory Frameworks',
    description: 'Configured for CBN, AMCON, BoG, and other African central bank requirements — including local filing formats and reporting deadlines.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    tags: ['CBN (Nigeria)', 'BoG (Ghana)', 'NFIU', 'EFCC', 'AMCON'],
  },
  {
    title: 'UK & EU Compliance',
    description: 'Full coverage of FCA, PRA, and EU AML Directives (AMLD5/6). Built-in GDPR-compliant data handling for KYC records and transaction data.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5',
    tags: ['FCA', 'PRA', 'AMLD6', 'GDPR', '6MLD'],
  },
  {
    title: 'Global Standards',
    description: 'FATF recommendations, Wolfsberg principles, and Correspondent Banking Due Diligence Standards form the baseline for all compliance controls.',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9',
    tags: ['FATF', 'Wolfsberg', 'SWIFT KYC', 'Basel III', 'OFAC'],
  },
]
</script>
