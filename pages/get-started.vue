<template>
  <div>
    <AppHeader />
    <main class="min-h-screen bg-brand-50 flex items-center py-20">
      <div class="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="text-center mb-8">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100 text-brand-600 text-sm font-semibold mb-5 border border-brand-200">
            API Keys
          </div>
          <h1 class="text-3xl font-bold text-navy-900 mb-3">Get your API keys</h1>
          <p class="text-gray-600">Create a free account and start building with Altisly's open banking platform.</p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">Full name *</label>
              <input v-model="form.name" type="text" placeholder="John Smith" required class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">Work email *</label>
              <input v-model="form.email" type="email" placeholder="you@company.com" required class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">Company name *</label>
              <input v-model="form.company" type="text" placeholder="Acme Corp" required class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">Primary use case</label>
              <select v-model="form.useCase" class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition bg-white">
                <option value="">Select a use case</option>
                <option v-for="uc in useCases" :key="uc" :value="uc">{{ uc }}</option>
              </select>
            </div>

            <div class="flex items-start gap-3">
              <input v-model="form.terms" type="checkbox" id="terms" required class="mt-1 w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-400" />
              <label for="terms" class="text-xs text-gray-600 leading-relaxed">
                I agree to the <NuxtLink to="/legal/terms" class="text-brand-600 hover:underline">Terms of Service</NuxtLink> and <NuxtLink to="/legal/privacy" class="text-brand-600 hover:underline">Privacy Policy</NuxtLink>
              </label>
            </div>

            <button type="submit" class="w-full btn-primary py-4 text-base" :disabled="submitting">
              <span v-if="submitting">Creating account...</span>
              <span v-else-if="submitted">✓ Check your inbox!</span>
              <span v-else>Create free account →</span>
            </button>
            <p v-if="submitError" class="text-sm text-red-600 font-medium text-center">{{ submitError }}</p>
          </form>

          <div class="mt-6 pt-6 border-t border-gray-100">
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <p class="font-bold text-navy-900 text-sm">Free</p>
                <p class="text-xs text-gray-500">Sandbox access</p>
              </div>
              <div>
                <p class="font-bold text-navy-900 text-sm">No card</p>
                <p class="text-xs text-gray-500">Required</p>
              </div>
              <div>
                <p class="font-bold text-navy-900 text-sm">Instant</p>
                <p class="text-xs text-gray-500">API keys</p>
              </div>
            </div>
          </div>
        </div>

        <p class="text-center text-sm text-gray-500 mt-6">
          Already have an account?
          <a href="#" class="text-brand-600 hover:underline font-medium">Sign in</a>
        </p>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Get API Keys | Altisly',
  description: 'Create a free Altisly account and get instant access to the sandbox. No credit card required.',
})

const form = reactive({ name: '', email: '', company: '', useCase: '', terms: false })
const submitting = ref(false)
const submitted = ref(false)
const submitError = ref('')

async function handleSubmit() {
  submitError.value = ''
  submitted.value = false
  submitting.value = true
  try {
    await $fetch('/api/enquiries', {
      method: 'POST',
      body: {
        type: 'api-keys',
        sourcePage: '/get-started',
        name: form.name,
        email: form.email,
        company: form.company,
        useCase: form.useCase,
      },
    })
    submitted.value = true
    Object.assign(form, { name: '', email: '', company: '', useCase: '', terms: false })
  }
  catch {
    submitError.value = 'Could not submit right now. Please email hello@altisly.com.'
  }
  finally {
    submitting.value = false
  }
}

const useCases = [
  'Data Aggregation / PFM',
  'Lending / Credit',
  'Open Banking Payments',
  'AML / Compliance',
  'Treasury Management',
  'E-commerce',
  'Other',
]
</script>
