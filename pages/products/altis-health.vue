<template>
  <div>
    <AppHeader />
    <main>

      <!-- Hero -->
      <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#060809] overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-health" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-health)" />
          </svg>
        </div>
        <div class="absolute top-1/3 left-1/4 w-96 h-96 bg-rose-500 rounded-full opacity-10 blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/3 w-72 h-72 bg-[#15c411] rounded-full opacity-10 blur-3xl"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row items-center gap-16">
            <div class="lg:w-1/2 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-bold uppercase tracking-widest mb-4">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                Altis Health
              </div>
              <!-- Under construction banner -->
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-400/30 text-yellow-300 text-xs font-semibold mb-6">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                Currently in development — early access available
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Health information management and facility lending — built for Africa
              </h1>
              <p class="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                Altis Health is a dual-platform product: a comprehensive <strong class="text-white">Health Information Management System (HIMS)</strong> that digitises the full clinical and administrative record of a health facility, and a <strong class="text-white">Health Facility Lending Engine</strong> that uses that operational data to underwrite credit for clinics, hospitals, and diagnostic centres.
              </p>
              <p class="text-base text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                We are building this for the millions of health facilities across Africa and emerging markets that are data-rich in operations but invisible to traditional lenders.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <NuxtLink to="/contact" class="btn-primary px-8 py-4 text-base">Request Early Access</NuxtLink>
                <NuxtLink to="/contact" class="px-8 py-4 text-base border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">Partner with Us</NuxtLink>
              </div>
            </div>

            <!-- Health Dashboard Mockup -->
            <div class="lg:w-1/2 w-full">
              <div class="bg-[#111418] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div class="bg-[#1a1f24] px-4 py-3 border-b border-white/5 flex items-center gap-2">
                  <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div class="mx-auto text-[10px] text-white/40 font-mono">Altis Health — Facility Dashboard</div>
                </div>
                <div class="p-6">
                  <div class="grid grid-cols-2 gap-4 mb-6">
                    <div class="bg-white/5 border border-white/5 rounded-xl p-4">
                      <p class="text-white/40 text-xs mb-1">Active Patients</p>
                      <p class="text-white font-black text-2xl">1,842</p>
                      <p class="text-[#15c411] text-xs mt-1">+24 today</p>
                    </div>
                    <div class="bg-white/5 border border-white/5 rounded-xl p-4">
                      <p class="text-white/40 text-xs mb-1">Monthly Revenue</p>
                      <p class="text-white font-black text-2xl">₦18.4M</p>
                      <p class="text-[#15c411] text-xs mt-1">+12% vs last month</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-3 mb-6">
                    <div class="bg-rose-500/10 border border-rose-500/20 rounded-xl p-3 text-center">
                      <p class="text-rose-400 font-bold text-lg">48</p>
                      <p class="text-white/40 text-xs mt-1">OPD Today</p>
                    </div>
                    <div class="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 text-center">
                      <p class="text-blue-400 font-bold text-lg">12</p>
                      <p class="text-white/40 text-xs mt-1">Admitted</p>
                    </div>
                    <div class="bg-[#15c411]/10 border border-[#15c411]/20 rounded-xl p-3 text-center">
                      <p class="text-[#15c411] font-bold text-lg">₦2.1M</p>
                      <p class="text-white/40 text-xs mt-1">Credit Available</p>
                    </div>
                  </div>
                  <p class="text-white/40 text-xs uppercase tracking-wider mb-3">Recent Activity</p>
                  <div class="space-y-2">
                    <div v-for="item in mockActivity" :key="item.ref" class="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                      <div class="flex items-center gap-3">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center" :class="item.iconBg">
                          <svg class="w-3.5 h-3.5" :class="item.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"></path></svg>
                        </div>
                        <div>
                          <p class="text-white text-xs font-medium">{{ item.label }}</p>
                          <p class="text-white/40 text-[10px]">{{ item.ref }}</p>
                        </div>
                      </div>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded-full" :class="item.badgeClass">{{ item.status }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Two platforms banner -->
      <section class="py-12 bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex items-start gap-5 p-6 rounded-2xl bg-rose-50 border border-rose-100">
              <div class="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              </div>
              <div>
                <p class="text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">Platform One</p>
                <h3 class="font-bold text-navy-900 text-lg mb-2">Health Information Management System</h3>
                <p class="text-sm text-gray-600 leading-relaxed">A complete digital backbone for the health facility — patient records, clinical workflows, pharmacy, lab, billing, and claims processing in one system.</p>
              </div>
            </div>
            <div class="flex items-start gap-5 p-6 rounded-2xl bg-[#ebfaeb] border border-[#15c411]/20">
              <div class="w-12 h-12 rounded-xl bg-[#15c411]/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <p class="text-xs font-bold text-[#15c411] uppercase tracking-wider mb-1">Platform Two</p>
                <h3 class="font-bold text-navy-900 text-lg mb-2">Health Facility Lending Engine</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Uses the HIMS operational data — patient volume, revenue, claims, and payment history — to underwrite working capital and equipment loans for health facilities that banks cannot score.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- HIMS Features -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Health Information Management System</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">The complete digital operating system for your health facility</h2>
            <p class="text-gray-500 max-w-2xl mx-auto">From the moment a patient registers to the moment a claim is settled — every workflow, every record, every transaction lives in one connected system.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="feat in himsFeatures" :key="feat.title" class="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:border-rose-300 hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-rose-50">
                <svg class="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feat.icon" />
                </svg>
              </div>
              <h3 class="text-base font-bold text-navy-900 mb-2">{{ feat.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ feat.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Lending Engine -->
      <section class="py-20 bg-gray-50 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-16 items-start">
            <div class="lg:w-1/2">
              <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Health Facility Lending Engine</p>
              <h2 class="text-3xl font-bold text-navy-900 mb-6">Unlock credit for facilities that banks can't score</h2>
              <p class="text-gray-600 leading-relaxed mb-6">Most health facilities in emerging markets are creditworthy but invisible to traditional lenders — no audited accounts, no collateral, no credit bureau history. Altis Health changes this by building the credit score from the inside out.</p>
              <p class="text-gray-600 leading-relaxed mb-8">Because the HIMS captures real operational data — daily patient volume, claims settlement rates, pharmacy revenue, payroll — we can underwrite based on what the facility actually earns and produces, not what it can prove on paper.</p>
              <ul class="space-y-4">
                <li v-for="point in lendingPoints" :key="point.title" class="flex items-start gap-4">
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
              <div class="space-y-4">
                <div v-for="product in loanProducts" :key="product.name" class="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
                  <div class="flex items-start justify-between mb-3">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-xl flex items-center justify-center" :class="product.iconBg">
                        <svg class="w-5 h-5" :class="product.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="product.icon" />
                        </svg>
                      </div>
                      <h4 class="font-bold text-navy-900">{{ product.name }}</h4>
                    </div>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full" :class="product.badgeClass">{{ product.badge }}</span>
                  </div>
                  <p class="text-sm text-gray-600 leading-relaxed mb-3">{{ product.description }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in product.tags" :key="tag" class="text-[10px] font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{{ tag }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Who it's for -->
      <section class="py-20 bg-white border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Who It's Built For</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Every type of health facility in emerging markets</h2>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="segment in segments" :key="segment.name" class="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-rose-300 transition-colors">
              <div class="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center mx-auto mb-4">
                <svg class="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="segment.icon" />
                </svg>
              </div>
              <h4 class="font-bold text-navy-900 mb-2">{{ segment.name }}</h4>
              <p class="text-xs text-gray-500 leading-relaxed">{{ segment.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Early access CTA -->
      <section class="py-20 bg-[#060809] relative overflow-hidden">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-rose-500 rounded-full opacity-10 blur-3xl -translate-y-1/2"></div>
        <div class="relative max-w-3xl mx-auto px-4 text-center">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-400/30 text-yellow-300 text-xs font-semibold mb-6">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            Currently in development
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-white mb-6">Be part of building Altis Health</h2>
          <p class="text-white/70 text-lg leading-relaxed mb-10">We are working with a select group of health facilities, hospital networks, and health finance partners to co-design and pilot the platform. If you operate in the health sector or finance health facilities, we want to hear from you.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact" class="btn-primary px-8 py-4 text-base">Request Early Access</NuxtLink>
            <NuxtLink to="/contact" class="px-8 py-4 text-base border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">Become a Design Partner</NuxtLink>
          </div>
        </div>
      </section>

    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Altis Health | Altisry',
  description: 'Altis Health is a Health Information Management System and Health Facility Lending Engine — built to digitise clinical operations and unlock credit for health facilities across Africa.',
})

const mockActivity = [
  { label: 'OPD Registration', ref: 'PAT-20241102-0482', status: 'Completed', icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z', iconBg: 'bg-blue-500/20', iconColor: 'text-blue-400', badgeClass: 'bg-green-500/20 text-green-400' },
  { label: 'Lab Result Uploaded', ref: 'LAB-20241102-0121', status: 'Ready', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z', iconBg: 'bg-purple-500/20', iconColor: 'text-purple-400', badgeClass: 'bg-blue-500/20 text-blue-400' },
  { label: 'Loan Disbursement', ref: 'LND-20241102-0008', status: '₦500K', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1', iconBg: 'bg-[#15c411]/20', iconColor: 'text-[#15c411]', badgeClass: 'bg-[#15c411]/20 text-[#15c411]' },
]

const himsFeatures = [
  {
    title: 'Electronic Medical Records (EMR)',
    description: 'Structured, searchable patient records from first visit through discharge. Clinicians document consultations, diagnoses, prescriptions, and referrals from any device.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  },
  {
    title: 'OPD & IPD Management',
    description: 'Manage outpatient queues, inpatient admissions, ward assignments, bed tracking, and discharge workflows — all linked to the patient record.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1',
  },
  {
    title: 'Pharmacy & Drug Management',
    description: 'Drug dispensing linked directly to prescriptions, automatic inventory deduction, expiry tracking, re-order alerts, and supplier management.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    title: 'Laboratory Information System',
    description: 'Request tests, receive results digitally, attach results to the patient record, and generate lab reports — integrated with external lab partners.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'Billing & Revenue Cycle',
    description: 'Automatic billing from every clinical interaction — consultations, drugs, labs, procedures. Support for cash, HMO, and NHIS payment types with claims generation.',
    icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z',
  },
  {
    title: 'HMO & Insurance Claims',
    description: 'Generate, track, and reconcile claims against HMO schedules. Automated pre-authorisation requests, claim submission, and rejection management.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Staff & HR Management',
    description: 'Clinician scheduling, shift management, attendance tracking, and payroll integration — keeping the workforce coordinated with the patient flow.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Health Analytics & Reporting',
    description: 'Facility performance dashboards covering patient volume, revenue by department, disease burden, drug consumption, and clinician productivity.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'NHIS & Regulatory Compliance',
    description: 'Built-in compliance with Nigeria\'s NHIS, state health authority reporting formats, and WHO ICD-10 coding — keeping the facility audit-ready.',
    icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
  },
]

const lendingPoints = [
  { title: 'Operational Data as Credit Evidence', description: 'Patient volume, HMO claims, pharmacy turnover, and billing history become the inputs to an underwriting model — no audited accounts required.' },
  { title: 'Automated Credit Scoring', description: 'A continuously updating credit score based on 12+ months of HIMS data, refreshed in real time as the facility\'s performance evolves.' },
  { title: 'Fast Disbursement', description: 'Because the data is live and verified inside the system, underwriting decisions happen in days — not the weeks required for traditional bank lending.' },
  { title: 'Repayment from Revenue', description: 'Repayments are structured to align with the facility\'s billing cycles — including automated deduction from HMO settlements and daily collections.' },
]

const loanProducts = [
  {
    name: 'Working Capital Facility',
    badge: 'Most Popular',
    badgeClass: 'bg-[#ebfaeb] text-[#15c411]',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    iconBg: 'bg-[#ebfaeb]',
    iconColor: 'text-[#15c411]',
    description: 'Short-term credit to cover operational gaps — drug restocking, payroll, supplier payments — while waiting for HMO claims to settle or revenue to clear.',
    tags: ['₦500K – ₦10M', '30–90 day tenor', 'No collateral', 'Auto-repay from collections'],
  },
  {
    name: 'Equipment Finance',
    badge: 'Asset-Backed',
    badgeClass: 'bg-blue-100 text-blue-600',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    description: 'Medium-term finance for diagnostic equipment, surgical tools, and facility infrastructure — underwritten against the facility\'s revenue capacity and equipment ROI projections.',
    tags: ['₦2M – ₦50M', '12–36 month tenor', 'Equipment as security', 'Deferred repayment'],
  },
  {
    name: 'Expansion Capital',
    badge: 'Growth',
    badgeClass: 'bg-purple-100 text-purple-600',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    description: 'Larger capital for facility expansion — opening a new ward, satellite clinic, or diagnostic centre — underwritten against the demonstrated performance of the existing facility.',
    tags: ['₦20M – ₦200M', '24–60 month tenor', 'Structured repayment', 'Performance-linked'],
  },
]

const segments = [
  { name: 'Private Clinics', desc: '1–20 bed facilities providing primary and secondary care', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16' },
  { name: 'Hospitals', desc: 'General and specialist hospitals seeking to digitise and access capital', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { name: 'Diagnostic Centres', desc: 'Labs and imaging centres managing high-volume test workflows', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547' },
  { name: 'HMO Partners', desc: 'Health management organisations looking for a digitised provider network', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0' },
]
</script>
