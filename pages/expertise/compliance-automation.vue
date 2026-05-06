<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Compliance Automation"
        title="Institutionalize compliance into code"
        description="We architect automated compliance pipelines for AML, KYC, and regulatory reporting. Eliminate human error and scale your operations without scaling your compliance headcount."
        parent-label="Our Expertise"
        parent-href="/about"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Book a consultation</NuxtLink>
        </template>
      </PageHero>

      <!-- What's included -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Systems Engineering</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Automated regulatory frameworks</h2>
            <p class="section-subtitle mx-auto text-center max-w-2xl text-gray-600">
              Stop relying on manual reviews and spreadsheets. We build compliance engines that monitor transactions, flag anomalies, and generate reports automatically.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="item in included" :key="item.title" class="card p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-9 h-9 rounded-lg flex items-center justify-center bg-[#ebfaeb]">
                  <svg class="w-4 h-4 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
                  </svg>
                </div>
                <h3 class="font-bold text-navy-900 text-sm">{{ item.title }}</h3>
              </div>
              <p class="text-sm text-gray-600 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Timeline -->
      <section class="py-20 bg-[#ebfaeb] border-y border-[#52e147]/20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Implementation</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">How we build compliance engines</h2>
          </div>
          <div class="space-y-6">
            <div v-for="(phase, i) in phases" :key="phase.title" class="flex gap-5">
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 rounded-full bg-[#15c411] text-white font-bold flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#15c411]/25">
                  {{ i + 1 }}
                </div>
                <div v-if="i < phases.length - 1" class="w-0.5 flex-1 bg-[#52e147]/30 my-2"></div>
              </div>
              <div class="pb-6">
                <div class="flex items-center gap-3 mb-2">
                  <h3 class="font-bold text-navy-900">{{ phase.title }}</h3>
                  <span class="text-[10px] bg-white text-[#15c411] font-bold px-2.5 py-1 rounded-full border border-[#15c411]/20 uppercase tracking-wide">{{ phase.phase_label }}</span>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed">{{ phase.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to automate compliance?"
        subtitle="Let's build a resilient compliance framework that protects your organization at scale."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Compliance Automation | Altisly',
  description: 'Automate AML, KYC, and regulatory reporting. We build compliance systems that eliminate human error and scale your operations.',
})

const included = [
  {
    title: 'AML Transaction Monitoring',
    description: 'Rule-based and ML-driven engines that flag suspicious transaction patterns across millions of records in real time.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Identity & KYC Pipelines',
    description: 'Automated user onboarding flows integrating tier-1 identity verification APIs directly into your core systems.',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  },
  {
    title: 'Sanctions & PEP Screening',
    description: 'Continuous background screening of your entire database against global watchlists with automated alert routing.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
  {
    title: 'Automated Regulatory Reporting',
    description: 'ETL pipelines that automatically compile, format, and generate regulatory reports (e.g. SARs) for direct submission.',
    icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    title: 'Audit Trails & Immutability',
    description: 'Every compliance decision, whether automated or manual, is logged into an immutable ledger for flawless audits.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-6 9l2 2 4-4',
  },
  {
    title: 'Strategic Advisory',
    description: 'We help you interpret complex regulatory frameworks and translate them directly into scalable systems architecture.',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
  },
]

const phases = [
  { phase_label: 'Phase 1', title: 'Data Mapping & Rule Definition', description: 'We map your existing data architecture and translate your compliance manuals and SOPs into deterministic logic and machine-readable rules.' },
  { phase_label: 'Phase 2', title: 'Engine Architecture & Integration', description: 'We build the core compliance engine, integrating it directly into your ledgers, payment rails, and user onboarding flows.' },
  { phase_label: 'Phase 3', title: 'Shadow Testing & Tuning', description: 'The system runs in shadow mode alongside your manual team. We tune the rules to eliminate false positives and ensure 100% catch rates.' },
  { phase_label: 'Phase 4', title: 'Go Live & Institutionalization', description: 'Your compliance operations are fully automated. Your compliance officers shift from manual reviewers to strategic exception handlers.' },
]
</script>
