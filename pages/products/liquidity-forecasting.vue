<template>
  <div>
    <AppHeader />
    <main>
      <!-- Hero -->
      <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#060809] overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-forecast" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-forecast)" />
          </svg>
        </div>
        <div class="absolute top-1/3 left-1/4 w-96 h-96 bg-[#15c411] rounded-full opacity-15 blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-400 rounded-full opacity-10 blur-3xl"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row items-center gap-16">
            <div class="lg:w-1/2 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 mb-3">
                <NuxtLink to="/products/atreasury" class="text-white/40 hover:text-white/70 text-xs font-semibold transition-colors">ATreasury</NuxtLink>
                <svg class="w-3 h-3 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-white/60 text-xs font-semibold">Suite</span>
              </div>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#15c411]/20 border border-[#15c411]/30 text-[#15c411] text-xs font-bold uppercase tracking-widest mb-6">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                AI-Powered · Liquidity Forecasting Suite
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Know where your cash will be before it gets there
              </h1>
              <p class="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                The ATreasury Liquidity Forecasting Suite uses machine learning trained on your historical cash flows to generate probabilistic forecasts up to 90 days out. Model scenarios, manage FX exposure, and receive alerts before your position deteriorates.
              </p>
              <p class="text-base text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Move treasury from reactive to predictive. Stop managing yesterday's position — start planning tomorrow's.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <NuxtLink to="/contact" class="btn-primary px-8 py-4 text-base">See a Forecast Demo</NuxtLink>
                <NuxtLink to="/products/atreasury" class="px-8 py-4 text-base border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">Back to ATreasury</NuxtLink>
              </div>
            </div>

            <!-- Forecasting UI Mockup -->
            <div class="lg:w-1/2 w-full">
              <div class="bg-[#111418] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div class="bg-[#1a1f24] px-4 py-3 border-b border-white/5 flex items-center gap-2">
                  <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div class="mx-auto text-[10px] text-white/40 font-mono">30-Day Cash Flow Forecast</div>
                </div>
                <div class="p-6">
                  <div class="flex justify-between items-start mb-6">
                    <div>
                      <p class="text-white/50 text-xs uppercase tracking-wider mb-1">Projected Position (Day 30)</p>
                      <p class="text-[#15c411] font-black text-3xl">$28.2M</p>
                      <p class="text-white/40 text-xs mt-1">±$1.4M confidence interval</p>
                    </div>
                    <div class="bg-[#15c411]/20 border border-[#15c411]/30 rounded-lg px-3 py-2 text-center">
                      <p class="text-[#15c411] font-bold text-sm">87%</p>
                      <p class="text-white/40 text-xs">Confidence</p>
                    </div>
                  </div>
                  <!-- Mini chart representation -->
                  <div class="mb-6">
                    <div class="flex items-end justify-between gap-1 h-20">
                      <div v-for="(bar, i) in forecastBars" :key="i" class="flex-1 rounded-t relative group">
                        <div class="absolute bottom-0 w-full rounded-t opacity-30" :class="bar.rangeColor" :style="`height: ${bar.rangeH}%`"></div>
                        <div class="absolute bottom-0 w-full rounded-t" :class="bar.color" :style="`height: ${bar.h}%`"></div>
                      </div>
                    </div>
                    <div class="flex justify-between mt-2">
                      <p class="text-white/30 text-[10px]">Today</p>
                      <p class="text-white/30 text-[10px]">Day 15</p>
                      <p class="text-white/30 text-[10px]">Day 30</p>
                    </div>
                  </div>
                  <div class="space-y-3">
                    <p class="text-white/40 text-xs uppercase tracking-wider">Forecast Drivers</p>
                    <div v-for="driver in forecastDrivers" :key="driver.name" class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-2 h-2 rounded-full" :class="driver.color"></div>
                        <p class="text-white/70 text-xs">{{ driver.name }}</p>
                      </div>
                      <p class="text-white text-xs font-semibold" :class="driver.valueColor">{{ driver.value }}</p>
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

      <!-- How the ML works -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">How it Works</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Machine learning trained on your cash flows</h2>
            <p class="text-gray-500 max-w-2xl mx-auto">The forecasting engine learns from your historical inflows, outflows, seasonal patterns, and counterparty behaviour — then projects them forward with quantified uncertainty.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="step in mlSteps" :key="step.title" class="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <div class="w-16 h-16 rounded-2xl bg-[#ebfaeb] flex items-center justify-center mx-auto mb-5">
                <svg class="w-8 h-8 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="step.icon" />
                </svg>
              </div>
              <h3 class="font-bold text-navy-900 text-lg mb-3">{{ step.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="py-20 bg-gray-50 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Forecasting Capabilities</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Everything you need to run forward-looking treasury</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="feat in features" :key="feat.title" class="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-[#ebfaeb]">
                <svg class="w-5 h-5 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feat.icon" />
                </svg>
              </div>
              <h3 class="text-base font-bold text-navy-900 mb-2">{{ feat.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ feat.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Scenario Planning -->
      <section class="py-20 bg-white border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-16 items-center">
            <div class="lg:w-1/2">
              <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Scenario Modelling</p>
              <h2 class="text-3xl font-bold text-navy-900 mb-6">Model your risks before they materialise</h2>
              <p class="text-gray-600 leading-relaxed mb-8">Run side-by-side scenarios to understand how different assumptions impact your liquidity. What if a major payer delays by 30 days? What if FX moves 15%? What if that credit facility isn't renewed?</p>
              <div class="space-y-4">
                <div v-for="scenario in scenarios" :key="scenario.name" class="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div class="w-3 h-3 rounded-full mt-1 flex-shrink-0" :class="scenario.color"></div>
                  <div>
                    <h4 class="font-bold text-navy-900 text-sm mb-1">{{ scenario.name }}</h4>
                    <p class="text-xs text-gray-600">{{ scenario.description }}</p>
                  </div>
                  <div class="ml-auto text-right flex-shrink-0">
                    <p class="font-bold text-sm" :class="scenario.valueColor">{{ scenario.value }}</p>
                    <p class="text-xs text-gray-400">Day 30</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-1/2">
              <div class="grid grid-cols-1 gap-4">
                <div v-for="alert in alertTypes" :key="alert.title" class="flex items-start gap-4 p-5 rounded-xl border" :class="alert.borderClass">
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" :class="alert.iconBg">
                    <svg class="w-5 h-5" :class="alert.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="alert.icon" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-navy-900 text-sm mb-1">{{ alert.title }}</h4>
                    <p class="text-xs text-gray-600">{{ alert.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Stop guessing. Start forecasting."
        subtitle="See how the ATreasury Liquidity Forecasting Suite gives your treasury team a window into the future."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Liquidity Forecasting Suite | ATreasury — Altisly',
  description: 'ML-powered cash flow forecasting up to 90 days out. Multi-scenario modelling, FX exposure alerts, and real-time liquidity intelligence for corporate treasuries.',
})

const forecastBars = [
  { h: 60, rangeH: 65, color: 'bg-[#15c411]', rangeColor: 'bg-[#15c411]' },
  { h: 58, rangeH: 63, color: 'bg-[#15c411]', rangeColor: 'bg-[#15c411]' },
  { h: 65, rangeH: 72, color: 'bg-[#15c411]', rangeColor: 'bg-[#15c411]' },
  { h: 62, rangeH: 70, color: 'bg-[#15c411]', rangeColor: 'bg-[#15c411]' },
  { h: 70, rangeH: 80, color: 'bg-[#15c411]/60', rangeColor: 'bg-[#15c411]' },
  { h: 68, rangeH: 82, color: 'bg-[#15c411]/60', rangeColor: 'bg-[#15c411]' },
  { h: 75, rangeH: 90, color: 'bg-[#15c411]/50', rangeColor: 'bg-[#15c411]' },
  { h: 72, rangeH: 88, color: 'bg-[#15c411]/50', rangeColor: 'bg-[#15c411]' },
  { h: 80, rangeH: 95, color: 'bg-[#15c411]/40', rangeColor: 'bg-[#15c411]' },
  { h: 78, rangeH: 95, color: 'bg-[#15c411]/40', rangeColor: 'bg-[#15c411]' },
]

const forecastDrivers = [
  { name: 'Recurring inflows', value: '+$4.2M', color: 'bg-green-400', valueColor: 'text-green-400' },
  { name: 'Scheduled outflows', value: '-$2.1M', color: 'bg-red-400', valueColor: 'text-red-400' },
  { name: 'FX adjustments', value: '-$380K', color: 'bg-yellow-400', valueColor: 'text-yellow-400' },
  { name: 'Loan repayments', value: '-$1.8M', color: 'bg-red-400', valueColor: 'text-red-400' },
]

const stats = [
  { value: '90-Day', label: 'Maximum Forecast Horizon' },
  { value: '94%', label: 'Forecast Accuracy (7-day)' },
  { value: 'Real-Time', label: 'Model Refresh Rate' },
  { value: 'Unlimited', label: 'Scenario Variations' },
]

const mlSteps = [
  {
    title: 'Historical Training',
    description: 'The model ingests 12–24 months of your actual inflows, outflows, and balance movements, learning your business\'s unique seasonal patterns and behavioural rhythms.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
  },
  {
    title: 'Probabilistic Forecasting',
    description: 'Rather than a single-point estimate, the model generates a probability distribution — showing you the expected outcome plus upper and lower confidence bounds.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Continuous Refinement',
    description: 'The model updates daily as actual results come in, recalibrating predictions and narrowing uncertainty as you approach the forecast date.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
]

const features = [
  {
    title: 'Multi-Horizon Forecasting',
    description: 'Generate forecasts across customisable horizons: 7-day, 14-day, 30-day, and 90-day views with different confidence levels and granularity for each.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    title: 'Cashflow Category Decomposition',
    description: 'Break the forecast down by inflow and outflow category — receivables, payroll, loan repayments, capex, and more — so you know exactly what\'s driving your future position.',
    icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Multi-Currency Forecasting',
    description: 'Forecast positions in each currency separately and consolidated into your base currency. Live FX rate updates feed into projections automatically.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Scenario Planning & Stress Testing',
    description: 'Define custom scenarios — payment delays, FX shocks, credit line drawdowns, or revenue shortfalls — and instantly see the modelled impact on your 30-day and 90-day position.',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
  },
  {
    title: 'Threshold Alerts & Triggers',
    description: 'Set minimum balance thresholds per account and currency. When the forecast breaches a limit, the right team members receive an alert before the problem actually occurs.',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  },
  {
    title: 'FX Exposure Monitoring',
    description: 'Track your open currency exposures against forecast positions. Receive alerts when unhedged FX risk exceeds configured limits and generate hedging recommendations.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
  },
]

const scenarios = [
  { name: 'Base Case', description: 'All inflows and outflows as expected with current counterparties', value: '$28.2M', color: 'bg-[#15c411]', valueColor: 'text-[#15c411]' },
  { name: 'Payer Delay Scenario', description: 'Top 3 receivables delayed by 15 days due to counterparty issues', value: '$21.8M', color: 'bg-yellow-400', valueColor: 'text-yellow-500' },
  { name: 'FX Stress Scenario', description: 'USD/NGN moves 20% adverse, affecting all USD-denominated flows', value: '$19.4M', color: 'bg-red-400', valueColor: 'text-red-500' },
]

const alertTypes = [
  {
    title: 'Minimum Balance Alert',
    description: 'Triggered when the 7-day forecast breaches the configured minimum balance threshold for any account.',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    borderClass: 'border-yellow-200 bg-yellow-50',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    title: 'FX Exposure Limit Alert',
    description: 'Raised when unhedged FX exposure in any currency exceeds the board-approved limit.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1',
    borderClass: 'border-orange-200 bg-orange-50',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Forecast Model Drift Alert',
    description: 'Notifies treasury when actual cash flows deviate significantly from model predictions, prompting model recalibration.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3',
    borderClass: 'border-blue-200 bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
]
</script>
