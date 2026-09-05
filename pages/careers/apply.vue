<template>
  <div>
    <PageIntro
      eyebrow="Apply"
      :title="role || 'Send us your work'"
      :subtitle="
        role
          ? 'Tell us who you are and show us something you have built. We read every one.'
          : 'No role has to fit. Show us the work and we will find the shape.'
      "
    />

    <section class="section-shell">
      <div class="container-altisly max-w-[640px]">
        <div v-if="sent" class="rounded-isura-lg border border-base bg-surface p-8 text-center">
          <h2 class="text-[22px] font-bold tracking-[-0.02em] mb-2">Application received</h2>
          <p class="text-muted text-[15px] leading-relaxed mb-6">
            Thanks {{ form.name.split(' ')[0] }}. We read applications weekly and reply either way.
          </p>
          <AppButton variant="ghost" to="/careers">Back to open roles</AppButton>
        </div>

        <form v-else class="grid gap-5" @submit.prevent="submit">
          <div>
            <label class="field-label" for="apply-role">Role</label>
            <select id="apply-role" v-model="form.role" class="field-input">
              <option value="">Open application</option>
              <option v-for="r in openRoles" :key="r.title" :value="r.title">
                {{ r.title }} · {{ r.team }}
              </option>
            </select>
          </div>

          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label class="field-label" for="apply-name">Full name</label>
              <input id="apply-name" v-model="form.name" type="text" required class="field-input" />
            </div>
            <div>
              <label class="field-label" for="apply-email">Email</label>
              <input id="apply-email" v-model="form.email" type="email" required class="field-input" />
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label class="field-label" for="apply-phone">Phone <span class="opt">optional</span></label>
              <input id="apply-phone" v-model="form.phone" type="tel" class="field-input" />
            </div>
            <div>
              <label class="field-label" for="apply-company">Currently at <span class="opt">optional</span></label>
              <input id="apply-company" v-model="form.company" type="text" class="field-input" />
            </div>
          </div>

          <div>
            <label class="field-label" for="apply-portfolio">
              Link to your work
              <span class="opt">CV, GitHub, portfolio, anything</span>
            </label>
            <input
              id="apply-portfolio"
              v-model="form.portfolio"
              type="url"
              required
              placeholder="https://"
              class="field-input"
            />
          </div>

          <div>
            <label class="field-label" for="apply-message">
              What should we look at first?
            </label>
            <textarea
              id="apply-message"
              v-model="form.message"
              rows="5"
              required
              class="field-input"
              placeholder="Point us at one thing you built and tell us what was hard about it."
            ></textarea>
          </div>

          <p v-if="error" class="text-[13.5px] text-red-600">{{ error }}</p>

          <div class="flex items-center gap-3">
            <AppButton variant="lime" :disabled="busy" @click="submit">
              {{ busy ? 'Sending…' : 'Send application →' }}
            </AppButton>
            <AppButton variant="ghost" to="/careers">Cancel</AppButton>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import PageIntro from '@/components/ui/PageIntro.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { openRoles } from '@/data/content'

const route = useRoute()
const role = ref('')

const form = reactive({
  role: '',
  name: '',
  email: '',
  phone: '',
  company: '',
  portfolio: '',
  message: '',
})

const busy = ref(false)
const sent = ref(false)
const error = ref('')

onMounted(() => {
  const wanted = String(route.query.role ?? '')
  // Only accept a role we actually advertise, so the query cannot inject text.
  const match = openRoles.find((r) => r.title === wanted)
  if (match) {
    form.role = match.title
    role.value = match.title
  }
})

useHead({ title: 'Apply · Altisly' })

async function submit() {
  if (busy.value) return
  error.value = ''
  if (!form.name.trim() || !form.email.trim() || !form.portfolio.trim() || !form.message.trim()) {
    error.value = 'Name, email, a link to your work and a short note are all needed.'
    return
  }
  busy.value = true
  try {
    await $fetch('/api/enquiries', {
      method: 'POST',
      body: {
        type: 'application',
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        role: form.role || 'Open application',
        portfolio: form.portfolio,
        message: form.message,
        sourcePage: '/careers/apply',
      },
    })
    sent.value = true
  } catch (e: unknown) {
    const msg = (e as { statusMessage?: string })?.statusMessage
    error.value = msg || 'Could not send that. Please try again, or email hello@altisly.com.'
  } finally {
    busy.value = false
  }
}
</script>

<style scoped>
.opt {
  font-weight: 400;
  opacity: 0.55;
  margin-left: 0.35rem;
  font-size: 0.85em;
}
</style>
