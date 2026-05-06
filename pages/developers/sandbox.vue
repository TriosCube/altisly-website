<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Sandbox"
        title="Build safely in a full-featured test environment"
        description="Use mock institutions, synthetic account data, and test payment flows before going live."
        parent-label="Developers"
        parent-href="/developers"
      >
        <template #cta>
          <NuxtLink to="/get-started" class="btn-primary text-base px-8 py-4">Create sandbox account</NuxtLink>
          <NuxtLink to="/developers/docs" class="btn-outline-white text-base px-8 py-4">Read docs</NuxtLink>
        </template>
      </PageHero>

      <section class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="item in features" :key="item.title" class="card hover:border-brand-300 transition-all">
              <h2 class="text-lg font-bold text-navy-900 mb-2">{{ item.title }}</h2>
              <p class="text-sm text-gray-600 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app'

useSeoMeta({
  title: 'Sandbox | Altisly Developers',
  description: 'Test Altisly integrations with mock data and safe payment simulations.',
})

const features = [
  { title: 'Mock bank connections', description: 'Simulate user consent, account linking, and refresh behavior.' },
  { title: 'Synthetic transaction streams', description: 'Test categorization, balances, and reconciliation logic.' },
  { title: 'Payment simulations', description: 'Validate successful, pending, and failed payout and pay-in paths.' },
  { title: 'Webhook replay', description: 'Replay events to test idempotency and retry handling.' },
]
</script>
