<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Service Status"
        title="Platform and API status"
        description="Track uptime, incidents, and maintenance windows across Altisly services."
      />

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-[#f2fdf1] border border-brand-200 rounded-2xl p-6 mb-8">
            <div class="flex items-center gap-3">
              <span class="w-3 h-3 bg-brand-600 rounded-full animate-pulse"></span>
              <p class="text-lg font-bold text-navy-900">All systems operational</p>
            </div>
            <p class="text-sm text-gray-600 mt-2">No active incidents reported.</p>
          </div>

          <div class="space-y-4">
            <div v-for="service in services" :key="service.name" class="card flex items-center justify-between">
              <div>
                <p class="font-semibold text-navy-900">{{ service.name }}</p>
                <p class="text-xs text-gray-500 mt-1">{{ service.description }}</p>
              </div>
              <span class="text-xs font-bold px-3 py-1 rounded-full bg-brand-100 text-brand-700 border border-brand-200">
                Operational
              </span>
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
  title: 'Service Status | Altisly',
  description: 'Live platform and API status for Altisly services.',
})

const services = [
  { name: 'Public API', description: 'Account, payment, and consent endpoints' },
  { name: 'Connect Sessions', description: 'Customer bank-linking and auth flow' },
  { name: 'Webhooks', description: 'Real-time event delivery infrastructure' },
  { name: 'Dashboard', description: 'Operational dashboard and admin controls' },
]
</script>
