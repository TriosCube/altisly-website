<template>
  <section ref="sectionRef" class="statement-section" id="statement">
    <div class="container-isura">
      <div class="max-w-[54rem]" :class="{ 'is-shown': shown }">
        <span class="reveal font-code text-[11px] tracking-[0.14em] uppercase text-muted" style="--i: 0">
          A note before the method
        </span>
        <p
          class="reveal text-[clamp(30px,calc(4.4*var(--vwu)),58px)] font-bold tracking-[-0.032em] leading-[1.06] mt-5"
          style="--i: 1"
        >
          Sometimes the software is the easy part.
        </p>
        <p class="reveal text-muted text-[17px] leading-relaxed max-w-[46ch] mt-6" style="--i: 2">
          The harder problem is understanding how the work, the decisions and the information need to
          move before anything gets built.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const shown = ref(false)

let observer: IntersectionObserver | undefined

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shown.value = true
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      shown.value = true
      observer?.disconnect()
    },
    { rootMargin: '-18% 0px -18% 0px' },
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
/* The note holds a screen on its own so it lands as a beat between the
   method and the code, rather than sharing a scroll with either. */
.statement-section {
  min-height: 100svh;
  display: grid;
  align-items: center;
  padding: 6rem 0;
}

.reveal {
  display: block;
  opacity: 0;
  transform: translateY(0.9rem);
  transition:
    opacity 760ms ease,
    transform 760ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i) * 130ms);
}

.is-shown .reveal {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
