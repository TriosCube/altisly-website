<template>
  <section ref="sectionRef" class="py-28" id="who-we-are">
    <div class="container-isura" :class="{ 'is-shown': shown }">
      <h2
        class="reveal text-[clamp(34px,calc(4.6*var(--vwu)),60px)] font-bold tracking-[-0.036em] leading-[1] max-w-[16ch]"
        style="--i: 0"
      >
        Some problems do not fit a software brief.
      </h2>

      <p class="reveal text-muted text-[17px] leading-relaxed max-w-[46ch] mt-8" style="--i: 1">
        Altisly works inside the operation, not beside it. We take on problems where the process, the
        data and the software all have to change together, and we build until the new way of working
        can stand on its own.
      </p>

      <div class="mt-16 flex flex-col">
        <div
          v-for="(item, i) in whoWeAre"
          :key="item.title"
          class="reveal trait"
          :style="{ '--i': i + 2 }"
        >
          <span class="font-code text-[12px] text-brand-deep w-9 flex-shrink-0">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { whoWeAre } from '@/data/content'

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
    { rootMargin: '-15% 0px -15% 0px' },
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(1rem);
  transition:
    opacity 720ms ease,
    transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i) * 120ms);
}

.is-shown .reveal {
  opacity: 1;
  transform: none;
}

.trait {
  display: grid;
  grid-template-columns: 2.4rem 1fr;
  gap: 0.4rem 0;
  padding: 1.4rem 0;
  border-top: 1px solid var(--border);
}

.trait:last-child {
  border-bottom: 1px solid var(--border);
}

.trait h3 {
  margin: 0;
  font-size: clamp(19px, calc(2.2*var(--vwu)), 26px);
  font-weight: 600;
  letter-spacing: -0.022em;
  line-height: 1.15;
}

.trait p {
  grid-column: 2;
  margin: 0;
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--muted);
}

@media (min-width: 900px) {
  .trait {
    grid-template-columns: 3rem minmax(0, 26ch) 1fr;
    align-items: baseline;
    gap: 2rem;
  }

  .trait p {
    grid-column: 3;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
