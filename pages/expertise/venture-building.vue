<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Venture Building"
        title="We build and launch scalable tech ventures"
        description="We act as your technical co-founder. From zero to one, we provide the strategy, engineering, and systems architecture needed to bring high-impact ventures to market."
        parent-label="Our Expertise"
        parent-href="/about"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Pitch your idea</NuxtLink>
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

      <!-- Benefits -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">The Altisly Advantage</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">More than just capital or code</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Building a successful tech company requires an intersection of domain expertise, robust engineering, and strategic execution. We provide all three.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="benefit in benefits" :key="benefit.title" class="card p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-[#ebfaeb]">
                <svg class="w-5 h-5 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="benefit.icon" />
                </svg>
              </div>
              <h3 class="text-base font-bold text-navy-900 mb-2">{{ benefit.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- How it works -->
      <section class="py-20 bg-[#ebfaeb] border-y border-[#52e147]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Our Process</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">From concept to scale</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div v-for="(step, i) in steps" :key="step.title" class="relative text-center">
              <div class="w-12 h-12 rounded-full bg-[#15c411] text-white font-bold text-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#15c411]/25">
                {{ i + 1 }}
              </div>
              <h3 class="font-bold text-navy-900 mb-2">{{ step.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ step.desc }}</p>
              <div v-if="i < steps.length - 1" class="hidden md:block absolute top-6 left-3/4 w-1/2 h-0.5 bg-[#52e147]/30"></div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Building a high-impact venture?"
        subtitle="We partner with visionary founders to engineer the future."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Venture Building | Altisly',
  description: 'We build and launch scalable tech ventures. Altisly acts as your technical co-founder providing strategy, engineering, and systems architecture.',
})

const stats = [
  { value: 'Zero to One', label: 'Product Engineering' },
  { value: 'Strategic', label: 'Technical Co-Founding' },
  { value: 'Scalable', label: 'Systems Architecture' },
  { value: 'Global', label: 'Market Execution' },
]

const benefits = [
  {
    title: 'Technical Co-Founding',
    description: 'We don\'t just build your app; we architect your entire technical organization, ensuring you are ready for Series A and beyond.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Systems Architecture',
    description: 'We lay down a resilient, scalable, cloud-native foundation so you never have to rewrite your entire codebase when you hit product-market fit.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    title: 'Data & Intelligence',
    description: 'We wire up your data pipelines from day one, ensuring your business intelligence and predictive models are accurate and actionable.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
  },
  {
    title: 'Security & Compliance',
    description: 'We embed enterprise-grade security and compliance protocols into your core ledger, passing strict audits effortlessly.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Rapid Prototyping',
    description: 'We build functional MVPs at breakneck speed, allowing you to validate assumptions and secure funding with working software.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Go-to-Market Strategy',
    description: 'We advise on product positioning, data flows, and operational execution to ensure your launch is flawless and scalable.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
]

const steps = [
  { title: 'Validation & Strategy', desc: 'We stress-test your business model, map out the data architecture, and define the MVP scope.' },
  { title: 'Engineering & Build', desc: 'Our team develops the core infrastructure, ledgers, APIs, and front-end interfaces.' },
  { title: 'Launch & Iterate', desc: 'We deploy the product, monitor analytics, and rapidly iterate based on real user feedback.' },
  { title: 'Scale & Handoff', desc: 'We help you scale operations and transition the technical knowledge to your internal team.' },
]
</script>
