<template>
  <section
    id="features"
    ref="sectionRef"
    class="relative"
    :style="{ minHeight: '260vh' }"
    aria-label="How Altisly builds"
  >
    <div class="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
      <div class="container-isura w-full">
        <div class="text-center">
          <span class="text-[13px] text-muted tracking-[0.04em]">How we build</span>
          <h2
            class="font-bold tracking-[-0.035em] text-[clamp(40px,5vw,64px)] leading-none text-center mt-[14px] max-w-[18ch] mx-auto"
          >
            Four moves
            <span
              class="inline-block align-middle w-14 h-14 rounded-full bg-brand text-on-brand text-center leading-[56px] text-[28px] mx-1"
              >✦</span
            >
            every time
          </h2>
        </div>

        <div class="relative mt-14">
          <div class="absolute left-0 right-0 top-[46px] h-px bg-[var(--border)] hidden lg:block">
            <div
              class="h-px bg-brand-deep origin-left transition-transform duration-200 ease-out"
              :style="{ transform: `scaleX(${riverScale})` }"
            ></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px] relative">
            <div
              v-for="(move, i) in moves"
              :key="move.number"
              class="[perspective:1400px] h-[280px]"
            >
              <div
                class="relative w-full h-full transition-transform duration-700 ease-out [transform-style:preserve-3d]"
                :class="{ '[transform:rotateY(180deg)]': isFlipped(i) }"
              >
                <div
                  class="absolute inset-0 [backface-visibility:hidden] bg-surface border border-base rounded-isura-xl p-8 flex flex-col"
                >
                  <div
                    class="w-14 h-14 rounded-full bg-brand text-on-brand grid place-items-center font-code font-bold text-lg"
                  >
                    {{ move.number }}
                  </div>
                  <h3
                    class="text-[26px] font-bold tracking-[-0.022em] leading-[1.1] mt-auto"
                  >
                    {{ move.title }}
                  </h3>
                </div>

                <div
                  class="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-invert text-invert border border-invert rounded-isura-xl p-8 flex flex-col"
                >
                  <span
                    class="font-code text-[11px] tracking-[0.1em] uppercase text-invert-muted"
                    >{{ move.number }} · {{ move.title }}</span
                  >
                  <p
                    class="text-[19px] font-semibold tracking-[-0.015em] leading-[1.3] mt-auto"
                  >
                    {{ move.body }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex justify-between items-center mt-10 pt-5 border-t border-base text-[12.5px] text-muted font-code tracking-[0.08em] uppercase"
        >
          <span>Method</span>
          <span>Work from judgement to system</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { moves } from '@/data/content'
import { useSectionProgress } from '@/composables/useSectionProgress'

const { sectionRef, progress } = useSectionProgress()

const firstFlipAt = 0.34
const flipStep = 0.13

function isFlipped(index: number) {
  return progress.value > firstFlipAt + index * flipStep
}

const riverScale = computed(() => Math.min(Math.max(progress.value * 1.4, 0), 1))
</script>
