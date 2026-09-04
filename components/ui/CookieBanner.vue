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
            <NuxtLink to="/legal/privacy" target="_blank" class="cookie-link">Privacy Policy</NuxtLink>.
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
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-float);
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
  font-size: 13.5px; font-weight: 650; color: var(--text);
  margin: 0 0 3px;
}
.cookie-desc {
  font-size: 12.5px; line-height: 1.6; color: var(--muted); margin: 0;
}
.cookie-link { color: var(--brand-deep); text-underline-offset: 2px; }
.cookie-actions { display: flex; gap: 8px; flex: none; flex-wrap: wrap; }
.cookie-btn {
  padding: 8px 16px; border-radius: var(--radius-sm); font-size: 13px;
  font-weight: 600; cursor: pointer; white-space: nowrap;
  transition: background 0.12s, border-color 0.12s, color 0.12s;
}
.cookie-btn--ghost {
  background: transparent; border: 1px solid var(--border-strong); color: var(--muted);
}
.cookie-btn--ghost:hover { background: var(--surface-2); color: var(--text); }
.cookie-btn--primary {
  background: var(--brand); border: 1px solid transparent; color: var(--on-brand);
}
.cookie-btn--primary:hover { background: var(--brand-soft); }

.cookie-enter-active, .cookie-leave-active { transition: opacity 0.22s ease, transform 0.22s ease; }
.cookie-enter-from, .cookie-leave-to { opacity: 0; transform: translateX(-50%) translateY(12px); }
</style>
