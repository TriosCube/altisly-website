<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="API Reference"
        title="Everything you need to integrate Altisly APIs"
        description="Explore endpoints, auth, schemas, and example payloads for all core products."
        parent-label="Developers"
        parent-href="/developers"
      />

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-1 card">
            <p class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">API Collections</p>
            <ul class="space-y-2">
              <li v-for="group in groups" :key="group" class="text-sm text-navy-900 font-medium">{{ group }}</li>
            </ul>
          </div>
          <div class="lg:col-span-2 card">
            <p class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Sample Endpoint</p>
            <h2 class="text-lg font-bold text-navy-900 mb-2">POST /v1/bulk-payments</h2>
            <p class="text-sm text-gray-600 mb-4">Create a payout batch and return a tracking identifier.</p>
            <pre class="bg-gray-50 border border-gray-200 text-gray-700 rounded-xl p-4 text-xs overflow-x-auto"><code>{
  "batch_id": "pay_batch_001",
  "currency": "EUR",
  "payments": [
    { "recipient": "acct_001", "amount": 4200, "reference": "Payroll May" }
  ]
}</code></pre>
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
  title: 'API Reference | Altisly Developers',
  description: 'Reference documentation for Altisly APIs including payloads, auth, and schemas.',
})

const groups = [
  'Connect Sessions',
  'Accounts',
  'Transactions',
  'Payments',
  'Bulk Payments',
  'Webhooks',
]
</script>
