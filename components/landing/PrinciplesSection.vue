<template>
  <section ref="sectionRef" class="bg-invert text-invert py-28" id="commitments">
    <div class="container-isura">
      <span class="font-code text-[11px] tracking-[0.14em] uppercase text-invert-muted">
        What we stand for
      </span>

      <div class="mt-12 flex flex-col">
        <div
          v-for="(commitment, i) in commitments"
          :key="commitment"
          :ref="(el) => setRef(el as HTMLElement, i)"
          class="statement"
          :class="{ 'is-shown': visible[i] }"
        >
          <span class="font-code text-[12px] text-brand">{{
            String(i + 1).padStart(2, '0')
          }}</span>
          <p>{{ commitment }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { commitments } from '@/data/content'

const sectionRef = ref<HTMLElement | null>(null)
const visible = ref<boolean[]>(commitments.map(() => false))
const rows: (HTMLElement | null)[] = []

let observer: IntersectionObserver | undefined

function setRef(el: HTMLElement | null, index: number) {
  rows[index] = el
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    visible.value = commitments.map(() => true)
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const index = rows.indexOf(entry.target as HTMLElement)
        if (index > -1) visible.value[index] = true
        observer?.unobserve(entry.target)
      })
    },
    { rootMargin: '-25% 0px -25% 0px' },
  )

  rows.forEach((row) => row && observer?.observe(row))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.statement {
  display: flex;
  align-items: baseline;
  gap: clamp(1rem, 3vw, 2.4rem);
  padding: clamp(1.4rem, 3vw, 2.2rem) 0;
  border-top: 1px solid var(--invert-border);
  opacity: 0;
  transform: translateY(1.2rem);
  transition:
    opacity 760ms ease,
    transform 760ms cubic-bezier(0.22, 1, 0.36, 1);
}

.statement:last-child {
  border-bottom: 1px solid var(--invert-border);
}

.statement.is-shown {
  opacity: 1;
  transform: none;
}

.statement p {
  margin: 0;
  font-size: clamp(28px, 4.6vw, 62px);
  font-weight: 700;
  letter-spacing: -0.034em;
  line-height: 1.02;
}

@media (prefers-reduced-motion: reduce) {
  .statement {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
