<template>
  <section class="py-16">
    <div class="container-isura grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-start">
      <div>
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">Get in touch</span>
        <h2
          class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-5 max-w-[14ch]"
        >
          Tell us what you are building.
        </h2>
        <p class="text-muted text-[16px] leading-relaxed max-w-[42ch] mb-9">
          An engineer reads every enquiry and replies within one business day.
        </p>

        <div class="flex flex-col">
          <div
            v-for="(benefit, i) in benefits"
            :key="benefit.title"
            class="py-4 border-t border-base"
            :class="{ 'border-b': i === benefits.length - 1 }"
          >
            <p class="text-[15px] font-semibold mb-1">{{ benefit.title }}</p>
            <p class="text-muted text-[13.5px] leading-relaxed">{{ benefit.text }}</p>
          </div>
        </div>

        <div class="mt-8 font-code text-[12.5px] text-muted flex flex-col gap-1.5">
          <span>{{ site.email }}</span>
          <span>{{ site.phone }}</span>
          <span>{{ site.location }}</span>
        </div>
      </div>

      <div class="bg-surface border border-base rounded-isura-xl p-7 lg:p-9">
        <form class="flex flex-col gap-5" @submit.prevent="handleSubmit">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="field-label" for="contact-name">Full name</label>
              <input id="contact-name" v-model="form.name" type="text" required class="field-input" />
            </div>
            <div>
              <label class="field-label" for="contact-email">Business email</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                required
                class="field-input"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="field-label" for="contact-country">Country</label>
              <select id="contact-country" v-model="form.country" required class="field-input">
                <option value="" disabled>Select country</option>
                <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
              </select>
            </div>
            <div>
              <label class="field-label" for="contact-phone">Phone</label>
              <input id="contact-phone" v-model="form.phone" type="tel" class="field-input" />
            </div>
          </div>

          <div>
            <label class="field-label" for="contact-company">Company</label>
            <input
              id="contact-company"
              v-model="form.company"
              type="text"
              required
              class="field-input"
            />
          </div>

          <div>
            <label class="field-label" for="contact-message">What are you building?</label>
            <textarea
              id="contact-message"
              v-model="form.message"
              rows="4"
              class="field-input resize-none"
            ></textarea>
          </div>

          <label class="flex items-start gap-3 cursor-pointer">
            <input
              v-model="form.newsletter"
              type="checkbox"
              class="mt-0.5 w-4 h-4 accent-[var(--brand-deep)]"
            />
            <span class="field-note">Send me occasional updates from Altisly.</span>
          </label>

          <AppButton variant="lime" size="lg" type="submit" :disabled="submitting">
            {{ submitting ? 'Sending' : 'Send enquiry →' }}
          </AppButton>

          <p class="field-note">
            By submitting, you agree to our
            <NuxtLink to="/legal/terms" class="underline underline-offset-2 text-body"
              >Terms</NuxtLink
            >
            and
            <NuxtLink to="/legal/privacy" class="underline underline-offset-2 text-body"
              >Privacy Policy</NuxtLink
            >.
          </p>

          <p v-if="submitted" class="text-[13.5px] font-medium text-brand-deep">
            Thanks. We will be in touch within one business day.
          </p>
          <p v-if="submitError" class="text-[13.5px] font-medium text-negative">
            {{ submitError }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import { site } from '@/data/site'

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
const submitError = ref('')

function extractErrorMessage(error: unknown) {
  const statusMessage = (error as { data?: { statusMessage?: string } })?.data?.statusMessage
  if (typeof statusMessage === 'string' && statusMessage.trim()) return statusMessage
  return 'Could not send enquiry right now. Please email hello@altisly.com.'
}

async function handleSubmit() {
  submitError.value = ''
  submitted.value = false
  submitting.value = true
  try {
    await $fetch('/api/enquiries', {
      method: 'POST',
      body: {
        type: 'contact',
        sourcePage: '/contact',
        name: form.name,
        email: form.email,
        country: form.country,
        phone: form.phone,
        company: form.company,
        message: form.message,
        newsletter: form.newsletter,
      },
    })
    submitted.value = true
    Object.assign(form, {
      name: '',
      email: '',
      country: '',
      phone: '',
      company: '',
      message: '',
      newsletter: false,
    })
  } catch (error: unknown) {
    submitError.value = extractErrorMessage(error)
  } finally {
    submitting.value = false
  }
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
  {
    title: 'Engineers, not account managers',
    text: 'The person who replies is the person who would architect the system.',
  },
  {
    title: 'Architecture first',
    text: 'We start with your data model and failure modes, before anyone writes code.',
  },
  {
    title: 'Handover by design',
    text: 'Every engagement ends with documented systems your own team runs.',
  },
]
</script>
