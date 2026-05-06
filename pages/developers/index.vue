<template>
  <div>
    <AppHeader />
    <main>
      <PageHero
        tag="Developers"
        title="For developers with love"
        description="Clear documentation, a full sandbox environment, and SDKs in every major language. Integrate Altisly in hours, not weeks."
      >
        <template #cta>
          <NuxtLink to="/get-started" class="btn-primary text-base px-8 py-4">Get API keys</NuxtLink>
          <NuxtLink to="/developers/docs" class="btn-outline-white text-base px-8 py-4">Read the docs</NuxtLink>
        </template>
      </PageHero>

      <!-- Quick start -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12 items-start">
            <div class="lg:w-2/5">
              <p class="section-label">Quick start</p>
              <h2 class="section-title mb-5">Up and running in minutes</h2>
              <p class="section-subtitle mb-8">
                Our REST API is intuitive and well-documented. Pick your language and start building.
              </p>
              <div class="space-y-3">
                <button
                  v-for="lang in languages"
                  :key="lang.name"
                  @click="selectedLang = lang.name"
                  class="w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left"
                  :class="selectedLang === lang.name ? 'border-brand-400 bg-brand-50' : 'border-gray-200 hover:border-gray-300'"
                >
                  <span class="text-xl">{{ lang.emoji }}</span>
                  <span class="font-medium text-navy-900 text-sm">{{ lang.name }}</span>
                  <svg v-if="selectedLang === lang.name" class="w-4 h-4 text-brand-600 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex-1 bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden">
              <div class="flex items-center gap-2 px-5 py-3 border-b border-gray-200">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <span class="text-gray-500 text-xs ml-3">{{ codeExamples[selectedLang]?.filename }}</span>
              </div>
              <div class="p-6 font-mono text-sm overflow-x-auto">
                <pre class="text-gray-700 leading-relaxed whitespace-pre-wrap">{{ codeExamples[selectedLang]?.code }}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Developer resources -->
      <section class="py-20 bg-brand-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label">Resources</p>
            <h2 class="section-title mb-5">Everything you need to build</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink
              v-for="resource in resources"
              :key="resource.title"
              :to="resource.href"
              class="card hover:shadow-lg hover:border-brand-400 transition-all group"
            >
              <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" :class="resource.iconBg">
                <svg class="w-5 h-5" :class="resource.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="resource.icon" />
                </svg>
              </div>
              <h3 class="font-bold text-navy-900 mb-2 group-hover:text-brand-600 transition-colors">{{ resource.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ resource.description }}</p>
            </NuxtLink>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to start building?"
        subtitle="Get your API keys and access the sandbox — no credit card required."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Developers | Altisly',
  description: 'Build with Altisly. REST API, SDKs, documentation, and sandbox environment. Get started in minutes.',
})

const selectedLang = ref('Node.js')

const languages = [
  { name: 'Node.js', emoji: '🟩' },
  { name: 'Python', emoji: '🐍' },
  { name: 'Ruby', emoji: '💎' },
  { name: 'PHP', emoji: '🐘' },
]

const codeExamples: Record<string, { filename: string; code: string }> = {
  'Node.js': {
    filename: 'connect.js',
    code: `const Altisly = require('@altisly/sdk');

const client = new Altisly({
  apiKey: process.env.ALTISLY_API_KEY
});

// Create a connect session
const session = await client.connectSessions.create({
  customerId: 'cust_12345',
  consent: ['account_details', 'transactions'],
  returnTo: 'https://yourapp.com/callback'
});

console.log(session.connectUrl);
// → https://connect.altisly.co/...`,
  },
  Python: {
    filename: 'connect.py',
    code: `import altisly

client = altisly.Client(
    api_key=os.environ['ALTISLY_API_KEY']
)

# Create a connect session
session = client.connect_sessions.create(
    customer_id='cust_12345',
    consent=['account_details', 'transactions'],
    return_to='https://yourapp.com/callback'
)

print(session.connect_url)
# → https://connect.altisly.co/...`,
  },
  Ruby: {
    filename: 'connect.rb',
    code: `require 'altisly'

client = Altisly::Client.new(
  api_key: ENV['ALTISLY_API_KEY']
)

# Create a connect session
session = client.connect_sessions.create(
  customer_id: 'cust_12345',
  consent: %w[account_details transactions],
  return_to: 'https://yourapp.com/callback'
)

puts session.connect_url
# → https://connect.altisly.co/...`,
  },
  PHP: {
    filename: 'connect.php',
    code: `<?php
use Altisly\\Client;

$client = new Client([
    'api_key' => getenv('ALTISLY_API_KEY')
]);

// Create a connect session
$session = $client->connectSessions->create([
    'customer_id' => 'cust_12345',
    'consent' => ['account_details', 'transactions'],
    'return_to' => 'https://yourapp.com/callback'
]);

echo $session->connect_url;
// → https://connect.altisly.co/...`,
  },
}

const resources = [
  {
    title: 'API Reference',
    description: 'Complete reference documentation for all Altisly API endpoints with examples.',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    iconBg: 'bg-blue-100', iconColor: 'text-blue-600',
    href: '/developers/api',
  },
  {
    title: 'Guides & Tutorials',
    description: 'Step-by-step guides for common integration patterns and use cases.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    iconBg: 'bg-green-100', iconColor: 'text-green-600',
    href: '/developers/docs',
  },
  {
    title: 'Sandbox Environment',
    description: 'Full test environment with mock bank connections. No real data, no risk.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    iconBg: 'bg-purple-100', iconColor: 'text-purple-600',
    href: '/developers/sandbox',
  },
  {
    title: 'Webhooks',
    description: 'Set up real-time event notifications for account and transaction updates.',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600',
    href: '/developers/api',
  },
  {
    title: 'SDKs & Libraries',
    description: 'Official client libraries for Node.js, Python, Ruby, PHP, Java, and .NET.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    iconBg: 'bg-brand-100', iconColor: 'text-brand-600',
    href: '/developers/docs',
  },
  {
    title: 'Changelog',
    description: 'Stay up to date with the latest API changes, new features, and deprecations.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-6 9l2 2 4-4',
    iconBg: 'bg-orange-100', iconColor: 'text-orange-600',
    href: '/developers/docs',
  },
]
</script>
