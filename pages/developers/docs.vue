<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Documentation"
        title="Implementation guides for every Altisly workflow"
        description="Follow step-by-step guides to launch onboarding, aggregation, payments, and treasury use cases."
        parent-label="Developers"
        parent-href="/developers"
      />

      <section class="py-20 bg-brand-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article v-for="guide in guides" :key="guide.title" class="bg-white rounded-2xl border border-brand-100 p-6 hover:shadow-md transition-all">
              <p class="text-xs uppercase tracking-wider font-bold text-brand-600 mb-2">{{ guide.level }}</p>
              <h2 class="text-lg font-bold text-navy-900 mb-2">{{ guide.title }}</h2>
              <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ guide.description }}</p>
              <span class="text-xs text-gray-500">{{ guide.time }}</span>
            </article>
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
  title: 'Documentation | Altisly Developers',
  description: 'Guides and tutorials for integrating Altisly APIs and launching in production.',
})

const guides = [
  {
    level: 'Starter',
    title: 'Connect your first customer bank account',
    description: 'Create a connect session, handle callback, and fetch account details.',
    time: '10 min',
  },
  {
    level: 'Payments',
    title: 'Implement pay-by-bank checkout',
    description: 'Add secure account-to-account payments to your payment flow.',
    time: '20 min',
  },
  {
    level: 'Treasury',
    title: 'Build a multi-entity cash dashboard',
    description: 'Aggregate balances and transactions across banks and legal entities.',
    time: '25 min',
  },
]
</script>
