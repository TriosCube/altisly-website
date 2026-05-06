<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Information Management"
        title="Transform raw data into strategic intelligence"
        description="We build the single source of truth for your organization. Connect disparate systems, clean your data flows, and unlock predictive analytics."
        parent-label="Our Expertise"
        parent-href="/about"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Book a consultation</NuxtLink>
        </template>
      </PageHero>

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

      <!-- Data types -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Capabilities</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Data architecture that scales</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="type in dataTypes" :key="type.title" class="card p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-[#ebfaeb]">
                <svg class="w-5 h-5 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="type.icon" />
                </svg>
              </div>
              <h3 class="text-base font-bold text-navy-900 mb-2">{{ type.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ type.description }}</p>
              <ul class="space-y-1.5">
                <li v-for="item in type.items" :key="item" class="text-xs text-gray-500 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#15c411] flex-shrink-0"></span>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Integration section -->
      <section class="py-20 bg-[#ebfaeb] border-y border-[#52e147]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12 items-center">
            <div class="flex-1">
              <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Data Engineering</p>
              <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">If it can't be mapped, it can't be optimized</h2>
              <p class="text-gray-600 leading-relaxed mb-8">
                We design high-performance ETL pipelines and data warehouses that consolidate your business metrics into one unified interface. No more fighting with spreadsheets or reconciling broken reports.
              </p>
              <div class="space-y-4 mb-8">
                <div v-for="item in integration" :key="item.title" class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-[#15c411] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-navy-900 text-sm">{{ item.title }}</p>
                    <p class="text-xs text-gray-600">{{ item.desc }}</p>
                  </div>
                </div>
              </div>
              <NuxtLink to="/contact" class="btn-primary">Talk to an architect</NuxtLink>
            </div>
            <div class="flex-1 bg-white border border-gray-200 shadow-sm rounded-2xl p-6 font-mono text-sm overflow-x-auto">
              <div class="text-[#15c411] mb-2"># Pipeline Configuration</div>
              <div class="text-gray-600">def build_unified_ledger(sources):</div>
              <div class="text-gray-600 ml-4">pipeline = ETL.create()</div>
              <div class="text-gray-600 ml-4">for source in sources:</div>
              <div class="text-gray-600 ml-8">pipeline.extract(source.api) \</div>
              <div class="text-gray-600 ml-12">.transform(cleanse_and_map) \</div>
              <div class="text-gray-600 ml-12">.load("bigquery.core_ledger")</div>
              <div class="text-gray-600 ml-4">return pipeline.execute()</div>
              <br />
              <div class="text-gray-400"># Output</div>
              <div class="text-gray-600">{"status": "success",</div>
              <div class="text-gray-600 ml-2"> "records_processed": 4500000,</div>
              <div class="text-gray-600 ml-2"> "latency_ms": 120,</div>
              <div class="text-gray-600 ml-2"> "data_warehouse": "Synced"}</div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to master your data?"
        subtitle="Partner with us to build an Information Management system that scales."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Information Management | Altisly',
  description: 'Transform raw data into strategic intelligence. We build data architecture, ETL pipelines, and business intelligence systems.',
})

const stats = [
  { value: '1 Truth', label: 'Single Source of Record' },
  { value: 'Real-time', label: 'Data Latency' },
  { value: '100%', label: 'Visibility' },
  { value: 'Zero', label: 'Data Silos' },
]

const dataTypes = [
  {
    title: 'Data Warehousing',
    description: 'Centralize your data into highly optimized warehouses like BigQuery or Snowflake.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
    items: ['Schema design', 'Data lakehouse setup', 'Access control', 'Cost optimization'],
  },
  {
    title: 'ETL & Pipelines',
    description: 'Automated data ingestion from legacy APIs, core banking, and CRMs.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2',
    items: ['Streaming & Batch', 'Data cleansing', 'Error handling', 'Real-time syncing'],
  },
  {
    title: 'Business Intelligence',
    description: 'Executive dashboards and predictive models for decision makers.',
    icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    items: ['Looker/Tableau integration', 'Predictive analytics', 'Custom KPI tracking', 'Automated reporting'],
  },
]

const integration = [
  { title: 'Systems Integration', desc: 'We connect legacy systems with modern data stacks' },
  { title: 'Data Cleansing', desc: 'Automated rules to resolve conflicting or duplicate records' },
  { title: 'Security & Compliance', desc: 'PII encryption, role-based access, and GDPR/NDPR compliance' },
  { title: 'Strategic Advisory', desc: 'We help you determine what metrics actually drive growth' },
]
</script>
