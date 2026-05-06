<template>
  <section class="py-20 md:py-28 bg-[#f2fdf1]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <!-- Left content -->
        <div class="flex-1">
          <p class="section-label">Get Started</p>
          <h2 class="section-title mb-5">
            Build tomorrow's scalable systems with Altisry
          </h2>
          <p class="section-subtitle mb-8">
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          <div class="space-y-4">
            <div v-for="benefit in benefits" :key="benefit.text" class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-[#15c411] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-gray-700 text-sm leading-relaxed">{{ benefit.text }}</p>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="flex-1 w-full max-w-lg">
          <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <h3 class="text-lg font-bold text-navy-900 mb-6">Talk to our team</h3>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Full name *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="John Smith"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52e147] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Business email *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52e147] focus:border-transparent transition"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Country *</label>
                  <select
                    v-model="form.country"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-[#52e147] focus:border-transparent transition bg-white"
                  >
                    <option value="" disabled>Select country</option>
                    <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Phone number</label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52e147] focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Company name *</label>
                <input
                  v-model="form.company"
                  type="text"
                  placeholder="Acme Corp"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52e147] focus:border-transparent transition"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">How can we help?</label>
                <textarea
                  v-model="form.message"
                  rows="3"
                  placeholder="Tell us about your project or systems challenges..."
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52e147] focus:border-transparent transition resize-none"
                ></textarea>
              </div>

              <div class="flex items-start gap-3">
                <input
                  v-model="form.newsletter"
                  type="checkbox"
                  id="newsletter"
                  class="mt-1 w-4 h-4 text-[#15c411] border-gray-300 rounded focus:ring-[#52e147]"
                />
                <label for="newsletter" class="text-xs text-gray-600 leading-relaxed">
                  I agree to receive emails from Altisry about the company's news, insights, and updates.
                </label>
              </div>

              <p class="text-xs text-gray-500">
                By submitting this form, I agree to the
                <NuxtLink to="/legal/terms" class="text-[#15c411] hover:underline">Terms of Service</NuxtLink>
                and to the processing of my contact details in accordance with the
                <NuxtLink to="/legal/privacy" class="text-[#15c411] hover:underline">Privacy Policy</NuxtLink>.
              </p>

              <button
                type="submit"
                class="w-full inline-flex items-center justify-center py-4 px-6 rounded-lg bg-[#15c411] text-white font-semibold text-base hover:bg-[#13ad0f] transition-colors disabled:opacity-70"
                :disabled="submitting"
              >
                <span v-if="submitting">Sending...</span>
                <span v-else>Get started →</span>
              </button>

              <div v-if="submitted" class="text-center text-sm text-green-600 font-medium">
                ✓ Thanks! We'll be in touch within 24 hours.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  country: '',
  phone: '',
  company: '',
  message: '',
  newsletter: false,
})

const submitting = ref(false)
const submitted = ref(false)

async function handleSubmit() {
  submitting.value = true
  await new Promise((resolve) => setTimeout(resolve, 1000))
  submitting.value = false
  submitted.value = true
}

const countries = [
  'Nigeria',
  'United Kingdom',
  'United States',
  'Canada',
  'South Africa',
  'Kenya',
  'Ghana',
  'United Arab Emirates',
  'Germany',
  'France',
  'Other',
]

const benefits = [
  { text: 'Partner with a team that bridges high-level strategy with technical execution.' },
  { text: 'Eliminate key-person dependencies through automated, self-sustaining systems.' },
  { text: 'Deploy robust data architectures for finance, health, and enterprise.' },
  { text: 'Dedicated advisory and technical co-founding for ambitious ventures.' },
]
</script>
