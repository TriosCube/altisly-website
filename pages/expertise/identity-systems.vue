<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Identity Systems"
        title="Secure verification & access flows"
        description="We architect identity infrastructure that balances zero-trust security with frictionless user experiences. From automated KYC to biometric device binding."
        parent-label="Our Expertise"
        parent-href="/about"
      >
        <template #cta>
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">Book a consultation</NuxtLink>
        </template>
      </PageHero>

      <!-- What is SCA -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12 items-center">
            <div class="flex-1">
              <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Zero-Trust Architecture</p>
              <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Authentication that builds trust</h2>
              <p class="text-gray-600 leading-relaxed mb-8">
                In modern financial and enterprise systems, identity is the new perimeter. We build robust authentication systems leveraging multi-factor flows, biometric binding, and real-time fraud detection.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div v-for="factor in factors" :key="factor.title" class="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                  <div class="text-2xl mb-2">{{ factor.emoji }}</div>
                  <p class="font-bold text-navy-900 text-sm">{{ factor.title }}</p>
                  <p class="text-xs text-gray-500 mt-1">{{ factor.examples }}</p>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <div class="grid grid-cols-1 gap-5">
                <div v-for="feature in features" :key="feature.title" class="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-[#15c411] transition-all duration-300 shadow-sm hover:shadow-md">
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#ebfaeb]">
                    <svg class="w-5 h-5 text-[#15c411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-navy-900 mb-1 text-sm">{{ feature.title }}</h3>
                    <p class="text-xs text-gray-600 leading-relaxed">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to upgrade your identity systems?"
        subtitle="Partner with us to build secure, scalable authentication flows for your platform."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Identity Systems | Altisly',
  description: 'Secure verification & access flows. We architect zero-trust identity infrastructure, automated KYC, and biometric device binding.',
})

const factors = [
  { emoji: '🔑', title: 'Knowledge', examples: 'Dynamic PINs & passphrases' },
  { emoji: '📱', title: 'Possession', examples: 'Hardware tokens & devices' },
  { emoji: '👆', title: 'Inherence', examples: 'Biometrics & Face ID' },
]

const features = [
  {
    title: 'Automated KYC & Onboarding',
    description: 'Integrate global identity verification APIs directly into your core systems for frictionless user onboarding.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Biometric Device Binding',
    description: 'Securely bind authentication logic to a specific physical device using hardware-backed key storage and biometrics.',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
  {
    title: 'Dynamic Linking & SCA',
    description: 'Ensure every critical transaction is uniquely linked to the specific amount and payee, complying with strict regulatory standards.',
    icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
  },
  {
    title: 'Role-Based Access Control (RBAC)',
    description: 'Architect complex permissions systems for enterprise platforms, ensuring users only access what they strictly need.',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  },
]
</script>
