<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Systems Architecture"
        title="Design scalable, fault-tolerant frameworks"
        description="We architect complex systems from the ground up. Whether you are building a new enterprise platform or refactoring a legacy monolith, we design for resilience, scale, and performance."
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

      <!-- Features -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Core Principles</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Architected for the modern web</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              We do not just write code; we design the structural blueprints that allow your organization to scale without accumulating technical debt.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="feature in features" :key="feature.title" class="card p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
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

      <!-- Approach -->
      <section class="py-20 bg-[#ebfaeb] border-y border-[#52e147]/20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Methodology</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">From blueprint to execution</h2>
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
                </div>
                <p class="text-sm text-gray-600 leading-relaxed">{{ phase.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to architect your next platform?"
        subtitle="Partner with elite systems architects to build resilient infrastructure."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Systems Architecture | Altisry',
  description: 'Design scalable, fault-tolerant frameworks. We architect complex systems from the ground up.',
})

const stats = [
  { value: 'Zero', label: 'Technical Debt Tolerance' },
  { value: 'High', label: 'Availability & Throughput' },
  { value: '100%', label: 'Infrastructure as Code' },
  { value: 'Global', label: 'Deployment Scalability' },
]

const features = [
  {
    title: 'Microservices & Event-Driven Design',
    description: 'Decompose monolithic applications into scalable, independently deployable microservices communicating via robust event buses.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Cloud-Native Infrastructure',
    description: 'Design environments optimized for AWS, GCP, or Azure using Kubernetes, Docker, and Terraform for complete Infrastructure as Code (IaC).',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    title: 'API Gateway & Routing',
    description: 'Architect centralized API gateways to handle authentication, rate limiting, and intelligent routing for your distributed systems.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
  {
    title: 'Database & State Management',
    description: 'Design optimal database schemas (SQL/NoSQL), caching layers (Redis), and distributed state management to eliminate bottlenecks.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
  },
  {
    title: 'Observability & Monitoring',
    description: 'Embed deep observability into the architecture from day one using tools like Datadog, Prometheus, and distributed tracing.',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5',
  },
  {
    title: 'Security & Fault Tolerance',
    description: 'Implement zero-trust security perimeters, automated failovers, and disaster recovery protocols to guarantee 99.99% uptime.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
]

const phases = [
  { title: 'Discovery & Requirements Engineering', description: 'We map your business domain, identify performance bottlenecks, and define non-functional requirements (NFRs) such as throughput, latency, and security constraints.' },
  { title: 'System Modeling & Blueprinting', description: 'We create comprehensive architectural diagrams, data flow models, and API contracts. You get a clear, actionable blueprint of the target state.' },
  { title: 'Proof of Concept (PoC) & Prototyping', description: 'Before committing to a full build, we develop PoCs for high-risk technical assumptions to validate the architecture against real-world constraints.' },
  { title: 'Execution & Governance', description: 'We lead or partner with your engineering teams to implement the architecture, establishing CI/CD pipelines, code standards, and automated testing.' },
]
</script>
