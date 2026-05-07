<template>
  <div>
    <AppHeader />
    <main>
      <!-- Hero -->
      <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#060809] overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-atreasury" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-atreasury)" />
          </svg>
        </div>
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#15c411] rounded-full opacity-20 blur-3xl -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-1/3 w-72 h-72 bg-[#15c411] rounded-full opacity-10 blur-3xl"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row items-center gap-16">
            <div class="lg:w-1/2 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
                <span class="w-2 h-2 rounded-full bg-[#15c411] animate-pulse"></span>
                Flagship Treasury Platform
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                The complete treasury system
              </h1>
              <p class="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                Atreasury is a full-stack treasury management platform. It connects every bank account, automates your daily liquidity workflow, enforces compliance controls, and gives your finance team a single book of record — in real time.
              </p>
              <p class="text-base text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Built for corporate treasuries, fintechs, banks, and payment companies operating across multiple currencies, corridors, and entities.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <NuxtLink to="/contact" class="btn-primary px-8 py-4 text-base">Request a Demo</NuxtLink>
                <NuxtLink to="/developers/api" class="px-8 py-4 text-base border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">View API Docs</NuxtLink>
              </div>
            </div>

            <div class="lg:w-1/2 w-full">
              <div class="bg-[#111418] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div class="bg-[#1a1f24] px-4 py-3 border-b border-white/5 flex items-center gap-2">
                  <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div class="mx-auto bg-black/30 rounded-md px-3 py-1 text-[10px] text-white/40 font-mono flex items-center gap-2">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    app.atreasury.com
                  </div>
                </div>
                <div class="p-6">
                  <div class="flex justify-between items-end mb-8">
                    <div>
                      <p class="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">Global Cash Position</p>
                      <h3 class="text-4xl font-bold text-white">$24,500,000<span class="text-lg text-white/30 font-normal">.00</span></h3>
                    </div>
                    <div class="flex gap-2">
                      <div class="px-3 py-1.5 bg-[#15c411]/20 text-[#15c411] border border-[#15c411]/30 rounded text-xs font-bold flex items-center gap-2">
                        <div class="w-1.5 h-1.5 rounded-full bg-[#15c411]"></div>
                        Live Sync
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-4 mb-8">
                    <div class="bg-white/5 rounded-xl p-4 border border-white/5">
                      <p class="text-white/40 text-xs mb-2">Inflow (24h)</p>
                      <p class="text-white font-semibold text-lg">+$1.2M</p>
                      <div class="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-green-400 w-3/4"></div></div>
                    </div>
                    <div class="bg-white/5 rounded-xl p-4 border border-white/5">
                      <p class="text-white/40 text-xs mb-2">Outflow (24h)</p>
                      <p class="text-white font-semibold text-lg">-$450K</p>
                      <div class="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-red-400 w-1/4"></div></div>
                    </div>
                    <div class="bg-white/5 rounded-xl p-4 border border-white/5">
                      <p class="text-white/40 text-xs mb-2">Active Sweeps</p>
                      <p class="text-white font-semibold text-lg">3</p>
                      <div class="mt-2 flex gap-1">
                        <div class="h-1 flex-1 bg-blue-400 rounded-full"></div>
                        <div class="h-1 flex-1 bg-blue-400 rounded-full"></div>
                        <div class="h-1 flex-1 bg-blue-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p class="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">Connected Accounts</p>
                    <div class="space-y-3">
                      <div v-for="account in dashboardAccounts" :key="account.name" class="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <div class="flex items-center gap-3">
                          <div class="w-8 h-8 rounded flex items-center justify-center font-bold text-xs" :class="account.colorClass">{{ account.letter }}</div>
                          <div>
                            <p class="text-white text-sm font-medium">{{ account.name }}</p>
                            <p class="text-white/40 text-xs font-mono">{{ account.mask }}</p>
                          </div>
                        </div>
                        <div class="text-right">
                          <p class="text-white font-semibold">{{ account.balance }}</p>
                          <p class="text-xs" :class="account.changeClass">{{ account.change }}</p>
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
          <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div v-for="stat in stats" :key="stat.value" class="text-center">
              <p class="text-3xl md:text-4xl font-bold text-[#15c411] mb-1">{{ stat.value }}</p>
              <p class="text-sm text-gray-500 font-medium">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- What Atreasury Does -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">The Platform</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Everything treasury, in one system</h2>
            <p class="text-gray-500 max-w-2xl mx-auto text-base">Atreasury replaces spreadsheets, manual bank portals, and disconnected tools with a single automated operating layer for your entire finance function.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="feature in platformFeatures" :key="feature.title" class="card p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-[#ebfaeb]">
                <svg class="w-5 h-5 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                </svg>
              </div>
              <h3 class="text-base font-bold text-navy-900 mb-2">{{ feature.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Product Suites -->
      <section class="py-20 bg-gray-50 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Modular Suites</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Deploy the modules your business needs</h2>
            <p class="text-gray-500 max-w-2xl mx-auto text-base">Each Atreasury suite is a standalone product that integrates deeply with the core platform. Use them individually or as a unified stack.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink v-for="suite in productSuites" :key="suite.title" :to="suite.href" class="group block bg-white rounded-2xl border border-gray-100 p-7 hover:border-[#15c411] hover:shadow-lg transition-all duration-300">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300" :class="suite.iconBg">
                <svg class="w-6 h-6" :class="suite.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="suite.icon" />
                </svg>
              </div>
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-base font-bold text-navy-900 group-hover:text-[#15c411] transition-colors leading-tight">{{ suite.title }}</h3>
                <span v-if="suite.badge" class="text-[9px] font-bold bg-[#ebfaeb] text-[#15c411] px-2 py-0.5 rounded-full ml-2 mt-0.5 whitespace-nowrap">{{ suite.badge }}</span>
              </div>
              <p class="text-sm text-gray-600 leading-relaxed mb-5">{{ suite.description }}</p>
              <ul class="space-y-1.5 mb-6">
                <li v-for="point in suite.bullets" :key="point" class="flex items-center gap-2 text-xs text-gray-500">
                  <svg class="w-3.5 h-3.5 text-[#15c411] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  {{ point }}
                </li>
              </ul>
              <div class="flex items-center gap-1 text-xs font-bold text-[#15c411] group-hover:gap-2 transition-all">
                Explore suite
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- How it works -->
      <section class="py-20 bg-white border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-16 items-center">
            <div class="lg:w-1/2">
              <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#15c411]/10 to-transparent rounded-bl-full"></div>
                <div class="relative z-10">
                  <div class="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                    <div>
                      <p class="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Global Cash Position</p>
                      <p class="text-3xl font-black text-navy-900">$24,500,000</p>
                    </div>
                    <div class="px-3 py-1 bg-[#ebfaeb] text-[#15c411] text-xs font-bold rounded-full">Real-time sync</div>
                  </div>
                  <div class="space-y-4 mb-6">
                    <div v-for="account in dashboardAccounts" :key="account.name" class="flex items-center justify-between">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs" :class="account.lightClass">{{ account.letter }}</div>
                        <p class="text-sm font-semibold text-navy-900">{{ account.name }}</p>
                      </div>
                      <p class="text-sm font-bold text-gray-600">{{ account.shortBalance }}</p>
                    </div>
                  </div>
                  <div class="pt-6 border-t border-gray-100">
                    <p class="text-xs text-gray-400 font-medium mb-3">Daily report published at</p>
                    <div class="flex items-center gap-3">
                      <div class="text-2xl font-black text-navy-900">09:00</div>
                      <div class="px-2 py-1 bg-green-50 text-green-600 text-xs font-bold rounded">Automated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-1/2">
              <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">How it works</p>
              <h2 class="section-title text-3xl font-bold text-navy-900 mb-6">One platform. Zero spreadsheets.</h2>
              <p class="text-gray-600 leading-relaxed mb-8">
                Atreasury acts as the central nervous system for your capital. It connects directly to your banking partners, ERP systems, and data warehouses — eliminating manual data entry, spreadsheet consolidation, and key-man dependencies.
              </p>
              <ul class="space-y-5">
                <li v-for="step in howItWorks" :key="step.title" class="flex items-start gap-4">
                  <div class="mt-1 w-6 h-6 rounded-full bg-[#15c411]/10 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-navy-900 text-sm">{{ step.title }}</h4>
                    <p class="text-sm text-gray-600 mt-1">{{ step.description }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Integrations -->
      <section class="py-20 bg-gray-50 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Integrations</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Connects to your entire financial stack</h2>
            <p class="text-gray-500 max-w-xl mx-auto text-base">Atreasury integrates with your banks, ERPs, data warehouses, and payment rails through direct API and file-based connections.</p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="category in integrations" :key="category.title" class="bg-white rounded-2xl border border-gray-100 p-6">
              <div class="w-9 h-9 rounded-lg bg-[#ebfaeb] flex items-center justify-center mb-4">
                <svg class="w-4 h-4 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.icon" />
                </svg>
              </div>
              <h4 class="text-sm font-bold text-navy-900 mb-3">{{ category.title }}</h4>
              <ul class="space-y-1">
                <li v-for="item in category.items" :key="item" class="text-xs text-gray-500">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to deploy Atreasury?"
        subtitle="Schedule a demo to see how we eliminate key-man risk and automate your entire treasury operation."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Atreasury | Altisly',
  description: 'The complete treasury system. Multi-bank aggregation, automated liquidity publishing, reconciliation, compliance, merchant management, and liquidity forecasting — in one platform.',
})

const dashboardAccounts = [
  { name: 'Citibank UK', mask: '**** 4920', balance: '$12,200,000', shortBalance: '$12.2M', change: '+2.4%', letter: 'C', colorClass: 'bg-blue-500/20 text-blue-400', lightClass: 'bg-blue-100 text-blue-600', changeClass: 'text-green-400' },
  { name: 'Standard Chartered', mask: '**** 1102', balance: '$8,100,000', shortBalance: '$8.1M', change: '0.0%', letter: 'S', colorClass: 'bg-red-500/20 text-red-400', lightClass: 'bg-red-100 text-red-600', changeClass: 'text-white/40' },
  { name: 'JP Morgan', mask: '**** 8831', balance: '$4,200,000', shortBalance: '$4.2M', change: '-1.2%', letter: 'J', colorClass: 'bg-yellow-500/20 text-yellow-400', lightClass: 'bg-yellow-100 text-yellow-600', changeClass: 'text-red-400' },
]

const stats = [
  { value: '$2B+', label: 'Transactions Managed' },
  { value: '99.9%', label: 'Platform Uptime' },
  { value: '0%', label: 'Liquidity Failure Rate' },
  { value: 'Real-Time', label: 'Cash Positioning' },
  { value: '09:00', label: 'Automated Daily Report' },
]

const platformFeatures = [
  {
    title: 'Cross-Bank Aggregation',
    description: 'Connect every banking partner via direct API. Real-time balance and transaction data flows into one consolidated dashboard, eliminating manual portal logins.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
  },
  {
    title: 'Automated Liquidity Publishing',
    description: 'Automate daily liquidity reporting and distribute real-time insights directly to key stakeholders without manual intervention.',
    icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    title: 'Cash Positioning Engine',
    description: 'See your exact cash position across all entities, currencies, and accounts at any point in time. Drill down from group level to individual account.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Liquidity Sweep Automation',
    description: 'Configure target balances, minimum thresholds, and sweep rules. Atreasury executes cross-entity and cross-border liquidity movements automatically.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  },
  {
    title: 'Deposit Rate Optimisation',
    description: 'Monitor and compare deposit rates across all banking partners. Atreasury flags rate changes and recommends optimal allocation strategies.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    title: 'Multi-Currency Management',
    description: 'Manage positions, exposures, and transfers across multiple currencies with live FX rates and automated hedging trigger alerts.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'ERP & GL Integration',
    description: 'Bidirectional sync with SAP, Oracle, NetSuite, and other ERPs. Journal entries and reconciled data post directly to your general ledger.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  },
  {
    title: 'BigQuery Data Pipeline',
    description: 'All treasury data continuously flows into Google BigQuery, making it available for BI dashboards, ML models, and advanced analytics.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-6 9l2 2 4-4',
  },
  {
    title: 'Operational Continuity',
    description: 'SOPs and workflows are embedded into the software. Treasury operations continue running without interruption even when key people leave.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
]

const productSuites = [
  {
    title: 'Reconciliation Management Suite',
    href: '/products/reconciliation-suite',
    badge: 'Core',
    description: 'Automate the full reconciliation lifecycle. Match transactions across bank statements, internal ledgers, and payment processors with configurable rules and AI-assisted break resolution.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-3 7l2 2 4-4',
    iconBg: 'bg-blue-50 group-hover:bg-blue-100',
    iconColor: 'text-blue-600',
    bullets: ['Automated transaction matching', 'Break detection & ageing', 'Multi-source reconciliation', 'Audit-ready reporting'],
  },
  {
    title: 'Compliance Management Suite',
    href: '/products/compliance-suite',
    badge: 'Regulated',
    description: 'Embed compliance controls directly into your treasury workflows. AML screening, KYC document management, regulatory reporting, and sanctions screening run automatically on every transaction.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    iconBg: 'bg-purple-50 group-hover:bg-purple-100',
    iconColor: 'text-purple-600',
    bullets: ['Real-time AML transaction monitoring', 'Automated sanctions screening', 'KYC workflow management', 'Regulatory filing automation'],
  },
  {
    title: 'Merchant Management Suite',
    href: '/products/merchant-suite',
    badge: 'Payments',
    description: 'Onboard, manage, and settle with merchants at scale. Configure tiered fee structures, automate disbursements, manage disputes, and give every merchant real-time visibility into their account.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-1 4h1',
    iconBg: 'bg-orange-50 group-hover:bg-orange-100',
    iconColor: 'text-orange-600',
    bullets: ['Digital merchant onboarding', 'Automated settlement & disbursement', 'Dispute & chargeback management', 'Merchant portal & reporting'],
  },
  {
    title: 'Liquidity Forecasting Suite',
    href: '/products/liquidity-forecasting',
    badge: 'AI-Powered',
    description: 'Predict your cash position days and weeks into the future. Machine learning models trained on your historical flows generate probabilistic forecasts with scenario planning and alert triggers.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    iconBg: 'bg-[#ebfaeb] group-hover:bg-[#d4f7d4]',
    iconColor: 'text-[#15c411]',
    bullets: ['ML-powered cash flow forecasting', 'Multi-scenario modelling', 'FX exposure & hedging alerts', 'Custom forecast horizons'],
  },
  {
    title: 'Settlement System Suite',
    href: '/products/settlement-system',
    badge: 'Infrastructure',
    description: 'Build and operate your own settlement infrastructure. Process high-volume payment batches, manage clearing windows, handle multi-currency settlement, and maintain a clean settlement ledger.',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    iconBg: 'bg-teal-50 group-hover:bg-teal-100',
    iconColor: 'text-teal-600',
    bullets: ['Batch & real-time payment processing', 'Multi-currency clearing & netting', 'Settlement ledger management', 'Correspondent banking integration'],
  },
  {
    title: 'Cash Flow Analytics',
    href: '/contact',
    badge: 'Add-on',
    description: 'Deep-dive analytics on inflows, outflows, working capital cycles, and counterparty exposure. Executive dashboards, drill-down reports, and scheduled distribution to finance leadership.',
    icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    iconBg: 'bg-gray-100 group-hover:bg-gray-200',
    iconColor: 'text-gray-600',
    bullets: ['Executive treasury dashboards', 'Working capital analytics', 'Counterparty exposure reporting', 'Scheduled distribution'],
  },
]

const howItWorks = [
  { title: 'Automated Data Ingestion', description: 'Direct API integrations with banks, payment processors, and ERPs pull transaction and balance data continuously — no manual downloads.' },
  { title: 'Rules-Based Processing Engine', description: 'Set limits, target balances, sweep rules, and approval workflows. The engine executes them autonomously and logs every action.' },
  { title: 'Real-Time Consolidated View', description: 'Every entity, account, and currency rolls up into a single, drill-down dashboard updated in real time throughout the trading day.' },
  { title: 'Automated Publishing & Alerts', description: 'Daily reports go out at your configured time. Threshold breaches and anomalies trigger instant alerts to the right team members.' },
  { title: 'Enterprise Data Export', description: 'Clean, structured data flows into your BI tools, general ledger, and BigQuery warehouse for downstream analytics and audit trails.' },
]

const integrations = [
  {
    title: 'Banking Partners',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    items: ['Citibank', 'Standard Chartered', 'JP Morgan', 'HSBC', 'Stanbic', 'GTBank', 'Access Bank'],
  },
  {
    title: 'ERP & Accounting',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2',
    items: ['SAP S/4HANA', 'Oracle ERP', 'NetSuite', 'QuickBooks', 'Sage', 'Microsoft Dynamics'],
  },
  {
    title: 'Data & Analytics',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10',
    items: ['Google BigQuery', 'Looker Studio', 'Tableau', 'Power BI', 'dbt', 'Snowflake'],
  },
  {
    title: 'Payment Rails',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    items: ['SWIFT', 'SEPA', 'ACH', 'Faster Payments', 'RTGS', 'Local rails'],
  },
]
</script>
