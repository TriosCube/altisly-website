<template>
  <Transition name="cookie">
    <div v-if="visible" role="dialog" aria-label="Cookie preferences" class="cookie-banner">
      <div class="cookie-inner">
        <span class="cookie-icon" aria-hidden="true">🍪</span>

        <div class="cookie-body">
          <p class="cookie-title">We use cookies</p>
          <p class="cookie-desc">
            We use essential cookies for site operation and optional analytics cookies to understand
            how visitors use this site. Declining optional cookies has no effect on your browsing.
            <NuxtLink to="/privacy" target="_blank" class="cookie-link">Privacy Policy</NuxtLink>.
          </p>
        </div>

        <div class="cookie-actions">
          <button class="cookie-btn cookie-btn--ghost" @click="decline">Decline optional</button>
          <button class="cookie-btn cookie-btn--primary" @click="accept">Accept all</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">

const consent = useCookie<'accepted' | 'declined' | null>('ic_cookie_consent', {
  maxAge: 60 * 60 * 24 * 365, // 1 year
  sameSite: 'lax',
  default: () => null,
})

const visible = computed(() => consent.value === null)

function accept() { consent.value = 'accepted' }
function decline() { consent.value = 'declined' }
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  width: min(680px, calc(100vw - 32px));
  background: #fff;
  border: 1px solid #e2e6ef;
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06);
}
.cookie-inner {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  flex-wrap: wrap;
}
.cookie-icon { font-size: 26px; flex: none; }
.cookie-body { flex: 1; min-width: 200px; }
.cookie-title {
  font-size: 13.5px; font-weight: 650; color: #0f1117;
  margin: 0 0 3px;
}
.cookie-desc {
  font-size: 12.5px; line-height: 1.6; color: #6b7280; margin: 0;
}
.cookie-link { color: #16a34a; text-underline-offset: 2px; }
.cookie-actions { display: flex; gap: 8px; flex: none; flex-wrap: wrap; }
.cookie-btn {
  padding: 8px 16px; border-radius: 8px; font-size: 13px;
  font-weight: 600; cursor: pointer; white-space: nowrap;
  transition: background 0.12s, border-color 0.12s;
}
.cookie-btn--ghost {
  background: transparent; border: 1px solid #d1d5db; color: #6b7280;
}
.cookie-btn--ghost:hover { background: #f3f4f6; color: #0f1117; }
.cookie-btn--primary { background: #16a34a; border: 1px solid transparent; color: #fff; }
.cookie-btn--primary:hover { background: #15803d; }

.cookie-enter-active, .cookie-leave-active { transition: opacity 0.22s ease, transform 0.22s ease; }
.cookie-enter-from, .cookie-leave-to { opacity: 0; transform: translateX(-50%) translateY(12px); }
</style>
