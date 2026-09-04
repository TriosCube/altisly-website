<template>
  <section ref="sectionRef" class="py-20" id="problems">
    <div class="container-isura">
      <div class="max-w-[22ch]">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">
          Problems we solve
        </span>
        <h2
          class="text-[clamp(34px,4.2vw,56px)] font-bold tracking-[-0.032em] leading-[1.02] mt-3"
        >
          When the tools stop fitting the operation.
        </h2>
      </div>

      <div class="mt-12 flex flex-col" :class="{ 'is-settled': settled }">
        <div
          v-for="(friction, i) in frictions"
          :key="friction.mess"
          class="friction-row grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center py-6 border-t border-base"
          :class="{ 'border-b': i === frictions.length - 1 }"
          :style="{ '--row-index': i }"
        >
          <p class="friction-mess font-code text-[14px] text-muted leading-snug">
            {{ friction.mess }}
          </p>

          <span
            class="friction-arrow w-8 h-8 rounded-full bg-surface-2 text-muted grid place-items-center flex-shrink-0 justify-self-start md:justify-self-center"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>

          <p class="friction-replaces text-[18px] font-semibold tracking-[-0.015em] leading-snug">
            {{ friction.replaces }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { frictions } from '@/data/content'

const sectionRef = ref<HTMLElement | null>(null)
const settled = ref(false)

let observer: IntersectionObserver | undefined

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    settled.value = true
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      settled.value = true
      observer?.disconnect()
    },
    { rootMargin: '-15% 0px -15% 0px' },
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.friction-mess,
.friction-arrow,
.friction-replaces {
  transition:
    transform 620ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 620ms ease;
  transition-delay: calc(var(--row-index) * 90ms);
}

.friction-mess {
  transform: translateX(-1.1rem) rotate(-1.4deg);
  opacity: 0.28;
}

.friction-row:nth-child(even) .friction-mess {
  transform: translateX(-0.7rem) rotate(1.1deg);
}

.friction-arrow {
  opacity: 0;
}

.friction-replaces {
  transform: translateX(1.4rem);
  opacity: 0;
}

.is-settled .friction-mess {
  transform: none;
  opacity: 1;
}

.is-settled .friction-arrow,
.is-settled .friction-replaces {
  transform: none;
  opacity: 1;
}
</style>
