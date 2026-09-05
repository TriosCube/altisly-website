<template>
  <section class="cta-section py-25 pb-35">
    <div class="container-isura cta-wrap">
      <div class="cta-glow cta-glow-a" aria-hidden="true"></div>
      <div class="cta-glow cta-glow-b" aria-hidden="true"></div>

      <div
        class="cta text-invert rounded-isura-xl p-18 px-14 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative"
      >

        <div class="relative z-10">
          <h2
            class="text-[clamp(40px,4.8vw,64px)] font-bold tracking-[-0.032em] leading-[0.98] max-w-[12ch]"
          >
            Have a problem
            <span class="inline-flex items-center bg-brand text-on-brand px-5.5 pb-1 rounded-full"
              >worth solving?</span
            >
          </h2>
          <p class="text-invert-muted text-[17px] mt-5 mb-7 max-w-[36ch]">
            Tell us what is not working, what you are trying to build, or where you want to go
            next.
          </p>
          <div class="flex gap-3 flex-wrap">
            <AppButton variant="lime" size="lg" to="/contact">Talk to us →</AppButton>
            <AppButton variant="on-dark-ghost" size="lg" to="/diagnose"
              >Run a diagnostic</AppButton
            >
          </div>
        </div>

        <div class="relative z-10">
          <span class="font-code text-[11px] tracking-[0.14em] uppercase text-invert-muted">
            What happens next
          </span>
          <div
            v-for="(step, i) in nextSteps"
            :key="step"
            class="flex items-start gap-4 py-4 border-t border-invert"
            :class="{ 'border-b': i === nextSteps.length - 1, 'mt-4': i === 0 }"
          >
            <span class="cta-num font-code text-[12px] pt-1 w-6 flex-shrink-0">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <span class="text-[14.5px] leading-relaxed text-invert">{{ step }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue'
import { nextSteps } from '@/data/content'
</script>

<style scoped>
/* The glow reaches past the card, so the section clips it at the viewport rather than letting it
   push the page sideways. */
.cta-section {
  overflow: clip;
}

/* Glass needs something behind it, so the light sits in the section rather than inside the card.
   The card is a translucent pane over a blur: the glow, the page and the edge all read through it. */
.cta-wrap {
  position: relative;
  isolation: isolate;
}

.cta-glow {
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(10px);
}

.cta-glow-a {
  right: -6rem;
  bottom: -7rem;
  width: 34rem;
  height: 34rem;
  background: radial-gradient(
    closest-side,
    color-mix(in srgb, var(--brand) 62%, transparent),
    transparent 72%
  );
}

.cta-glow-b {
  left: -8rem;
  top: -6rem;
  width: 30rem;
  height: 30rem;
  background: radial-gradient(
    closest-side,
    color-mix(in srgb, var(--brand-deep) 34%, transparent),
    transparent 70%
  );
}

.cta {
  z-index: 1;
  background-color: color-mix(in srgb, var(--invert-bg) 58%, transparent);
  background-image: linear-gradient(152deg, var(--sheen), transparent 44%);
  backdrop-filter: blur(28px) saturate(1.6);
  -webkit-backdrop-filter: blur(28px) saturate(1.6);
  border: 1px solid color-mix(in srgb, var(--invert-text) 16%, transparent);
  --sheen: rgb(var(--invert-text-rgb) / 0.09);
}

.cta-num {
  color: var(--brand);
}

:root:not([data-theme='dark']) .cta {
  --invert-bg: var(--surface);
  --invert-text: var(--text);
  --invert-muted: var(--muted);
  --invert-border: var(--border);
  --invert-hairline: var(--border-strong);
  --invert-wash: var(--surface-2);
  --sheen: rgb(255 255 255 / 0.55);
  border-color: color-mix(in srgb, var(--text) 10%, transparent);
}

:root:not([data-theme='dark']) .cta-num {
  color: var(--brand-deep);
}
</style>
