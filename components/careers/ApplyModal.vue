<template>
  <Teleport to="body">
    <transition name="apply">
      <div v-if="open" class="apply-root" role="dialog" aria-modal="true" aria-label="Apply">
        <div class="apply-scrim" @click="close"></div>

        <div class="apply-card">
          <header class="apply-head">
            <div>
              <p class="apply-eyebrow">Apply</p>
              <h2 class="apply-title">{{ role || 'Send us your work' }}</h2>
            </div>
            <button type="button" class="apply-x" aria-label="Close" @click="close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </header>

          <div v-if="sent" class="apply-body">
            <p class="apply-done">Application received</p>
            <p class="apply-note">
              Thanks {{ form.name.split(' ')[0] }}. We read applications weekly and reply either way.
            </p>
          </div>

          <form v-else class="apply-body" @submit.prevent="submit">
            <label class="fld">
              <span>Role</span>
              <select v-model="form.role">
                <option value="">Open application</option>
                <option v-for="r in openRoles" :key="r.title" :value="r.title">
                  {{ r.title }} · {{ r.team }}
                </option>
              </select>
            </label>

            <div class="fld-row">
              <label class="fld">
                <span>Full name</span>
                <input v-model="form.name" type="text" required />
              </label>
              <label class="fld">
                <span>Email</span>
                <input v-model="form.email" type="email" required />
              </label>
            </div>

            <label class="fld">
              <span>Link to your work <em>CV, GitHub, portfolio</em></span>
              <input v-model="form.portfolio" type="url" placeholder="https://" />
            </label>

            <label class="fld">
              <span>Attach a CV <em>PDF or Word, up to 1MB</em></span>
              <input ref="fileRef" type="file" :accept="CV_ACCEPT" @change="pickFile" />
              <small v-if="cv" class="fld-file">{{ cv.name }} · {{ kb(cv.size) }}</small>
            </label>

            <label class="fld">
              <span>What should we look at first?</span>
              <textarea v-model="form.message" rows="4" required></textarea>
            </label>

            <p v-if="error" class="apply-err">{{ error }}</p>
          </form>

          <footer class="apply-foot">
            <AppButton variant="ghost" size="sm" @click="close">
              {{ sent ? 'Close' : 'Cancel' }}
            </AppButton>
            <AppButton v-if="!sent" variant="lime" size="sm" :disabled="busy" @click="submit">
              {{ busy ? 'Sending…' : 'Send application' }}
            </AppButton>
          </footer>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { reactive, ref, watch, onBeforeUnmount } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import { openRoles } from '@/data/content'
import { useApply, CV_ACCEPT, CV_MAX_BYTES, CV_TYPES } from '@/composables/useApply'

const { open, role } = useApply()

const fileRef = ref<HTMLInputElement | null>(null)
const cv = ref<File | null>(null)
const busy = ref(false)
const sent = ref(false)
const error = ref('')

const form = reactive({ role: '', name: '', email: '', portfolio: '', message: '' })

function kb(bytes: number) {
  return `${Math.max(1, Math.round(bytes / 1024))} KB`
}

watch(open, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
  if (isOpen) {
    sent.value = false
    error.value = ''
    form.role = role.value
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})

function close() {
  open.value = false
}

function pickFile(e: Event) {
  error.value = ''
  const file = (e.target as HTMLInputElement).files?.[0] ?? null
  if (!file) {
    cv.value = null
    return
  }
  if (!CV_TYPES.includes(file.type)) {
    error.value = 'That has to be a PDF or Word document.'
    if (fileRef.value) fileRef.value.value = ''
    return
  }
  if (file.size > CV_MAX_BYTES) {
    error.value = `That file is ${kb(file.size)}. The limit is 1MB.`
    if (fileRef.value) fileRef.value.value = ''
    return
  }
  cv.value = file
}

function asBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result).split(',')[1] ?? '')
    reader.onerror = () => reject(new Error('Could not read that file.'))
    reader.readAsDataURL(file)
  })
}

async function submit() {
  if (busy.value) return
  error.value = ''
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    error.value = 'Name, email and a short note are needed.'
    return
  }
  if (!form.portfolio.trim() && !cv.value) {
    error.value = 'Give us a link to your work, a CV, or both.'
    return
  }

  busy.value = true
  try {
    const payload: Record<string, unknown> = {
      type: 'application',
      name: form.name,
      email: form.email,
      role: form.role || 'Open application',
      portfolio: form.portfolio,
      message: form.message,
      sourcePage: '/careers',
    }
    if (cv.value) {
      payload.cvName = cv.value.name
      payload.cvType = cv.value.type
      payload.cvData = await asBase64(cv.value)
    }
    await $fetch('/api/enquiries', { method: 'POST', body: payload })
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
.apply-root {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-items: center;
  padding: 1.25rem;
}

.apply-scrim {
  position: absolute;
  inset: 0;
  background: rgb(0 0 0 / 0.45);
  backdrop-filter: blur(6px);
}

.apply-card {
  position: relative;
  width: min(38rem, 100%);
  max-height: min(86svh, 46rem);
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-pop);
  overflow: hidden;
}

.apply-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.4rem 1.5rem 1rem;
  border-bottom: 1px solid var(--border);
}

.apply-eyebrow {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.apply-title {
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-top: 0.2rem;
}

.apply-x {
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  display: grid;
  place-items: center;
  color: var(--muted);
  flex: 0 0 auto;
}

.apply-x:hover {
  background: var(--surface-2);
}

.apply-x svg {
  width: 1rem;
  height: 1rem;
}

.apply-body {
  padding: 1.25rem 1.5rem;
  overflow-y: auto;
  display: grid;
  gap: 0.9rem;
}

.fld-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
}

@media (max-width: 560px) {
  .fld-row {
    grid-template-columns: 1fr;
  }
}

.fld {
  display: grid;
  gap: 0.35rem;
}

.fld > span {
  font-size: 12.5px;
  font-weight: 600;
}

.fld em {
  font-style: normal;
  font-weight: 400;
  opacity: 0.55;
  margin-left: 0.3rem;
}

.fld input,
.fld select,
.fld textarea {
  width: 100%;
  padding: 0.6rem 0.7rem;
  border: 1px solid var(--border);
  border-radius: 0.6rem;
  background: var(--bg);
  color: inherit;
  font: inherit;
  font-size: 14px;
}

.fld input[type='file'] {
  padding: 0.45rem;
  font-size: 12.5px;
}

.fld input:focus,
.fld select:focus,
.fld textarea:focus {
  outline: 2px solid var(--brand);
  outline-offset: 1px;
}

.fld-file {
  font-size: 12px;
  color: var(--muted);
}

.apply-err {
  font-size: 13px;
  color: #b4231f;
}

.apply-done {
  font-size: 17px;
  font-weight: 700;
}

.apply-note {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.5;
}

.apply-foot {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border);
  background: var(--surface-2);
}

.apply-enter-active,
.apply-leave-active {
  transition: opacity 0.18s ease;
}

.apply-enter-from,
.apply-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .apply-enter-active,
  .apply-leave-active {
    transition: none;
  }
}
</style>
