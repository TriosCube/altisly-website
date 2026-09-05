<template>
  <section
    id="how-we-work"
    ref="sectionRef"
    class="journey"
    data-nav-tone="dark"
    :class="{ 'is-awake': isAwake, 'is-revealed': isRevealed, 'is-deep': isDeep }"
    aria-label="How Altisly works"
  >
    <div class="journey-sticky">
      <div class="journey-river" aria-hidden="true"></div>

      <div class="journey-heading">
        <p>( How we work )</p>
        <h2>From problem to working system.</h2>
      </div>

      <div class="journey-cards">
        <article
          v-for="(move, i) in moves"
          :key="move.number"
          class="journey-card drift-card"
          :class="{ 'is-card-flipped': isFlipped(i) }"
          :style="{ '--card-index': i }"
        >
          <div class="journey-card-inner">
            <div class="journey-card-face journey-card-front">
              <span class="journey-icon" :class="`journey-icon-${icons[i]}`" aria-hidden="true">
                <span></span>
              </span>
              <p>{{ move.title }}</p>
            </div>

            <div class="journey-card-face journey-card-back">
              <span class="journey-card-index">{{ move.number }} · {{ move.title }}</span>
              <h3>{{ move.body }}</h3>
            </div>
          </div>
        </article>
      </div>

      <div class="journey-caption">
        <span>Method</span>
        <span>Work from judgement to system</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { moves } from '@/data/content'
import { useSectionProgress } from '@/composables/useSectionProgress'

const { sectionRef, progress } = useSectionProgress()

const icons = ['scan', 'build', 'system', 'mark']

const isAwake = computed(() => progress.value > 0.12)
const isRevealed = computed(() => progress.value > 0.24)
const isDeep = computed(() => progress.value > 0.58)

const firstFlipAt = 0.42
const flipStep = 0.11

function isFlipped(index: number) {
  return progress.value > firstFlipAt + index * flipStep
}
</script>

<style scoped>
.journey {
  --wash: color-mix(in srgb, var(--invert-text) 3%, transparent);
  --hair: color-mix(in srgb, var(--invert-text) 8%, transparent);
  --ink-22: color-mix(in srgb, var(--invert-text) 22%, transparent);
  --ink-18: color-mix(in srgb, var(--invert-text) 18%, transparent);
  --ink-12: color-mix(in srgb, var(--invert-text) 12%, transparent);
  position: relative;
  z-index: 3;
  min-height: 300svh;
  background: var(--invert-bg);
  color: var(--invert-text);
}

.journey-sticky {
  position: sticky;
  top: 0;
  display: grid;
  height: 100svh;
  overflow: hidden;
  align-content: center;
  justify-items: center;
  padding: clamp(5.5rem, 9svh, 7rem) 1rem clamp(3rem, 6svh, 4.5rem);
}

.journey-sticky::before {
  position: absolute;
  inset: 0;
  content: '';
  background:
    linear-gradient(var(--wash) 1px, transparent 1px),
    linear-gradient(90deg, var(--wash) 1px, transparent 1px);
  background-size: 7.2rem 7.2rem;
  opacity: 0.5;
}

.journey-sticky::after {
  position: absolute;
  inset: 0;
  content: '';
  pointer-events: none;
  background:
    radial-gradient(ellipse at 50% 44%, transparent 0 24%, color-mix(in srgb, var(--invert-bg) 86%, transparent) 74%),
    linear-gradient(180deg, var(--invert-bg), transparent 24%, transparent 76%, var(--invert-bg));
}

.journey-river {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 7rem;
  height: 68svh;
  pointer-events: none;
  transform: translate(-50%, -18%) scaleY(0.55);
  transition:
    opacity 760ms ease,
    transform 900ms ease;
}

.journey-river::before,
.journey-river::after {
  position: absolute;
  top: 0;
  left: 50%;
  width: 0.12rem;
  height: 100%;
  content: '';
  border-radius: 50rem;
  background: linear-gradient(
    180deg,
    transparent,
    var(--brand),
    color-mix(in srgb, var(--invert-text) 78%, transparent),
    transparent
  );
  box-shadow: 0 0 1.4rem color-mix(in srgb, var(--brand) 50%, transparent);
  transform: translateX(-50%);
}

.journey-river::before {
  clip-path: polygon(48% 0, 62% 10%, 42% 20%, 56% 32%, 38% 45%, 58% 58%, 42% 72%, 53% 86%, 48% 100%, 35% 100%, 45% 86%, 33% 72%, 52% 58%, 32% 45%, 50% 32%, 36% 20%, 56% 10%, 39% 0);
  animation: river-flow 3.4s linear infinite;
}

.journey-river::after {
  opacity: 0.38;
  filter: blur(7px);
  animation: river-flow 5.8s linear infinite reverse;
}

.is-awake .journey-river {
  opacity: 0;
  transform: translate(-50%, -8%) scaleY(1);
}

.is-deep .journey-river {
  opacity: 0.08;
  transform: translate(-50%, -1%) scaleY(1.18);
}

.journey-heading {
  position: relative;
  z-index: 2;
  display: grid;
  justify-items: center;
  margin-bottom: clamp(2.4rem, 6.5svh, 4.25rem);
  opacity: 0;
  transform: translateY(2rem);
  transition:
    opacity 720ms ease,
    transform 720ms ease;
}

.is-awake .journey-heading {
  opacity: 1;
  transform: translateY(0);
}

.journey-heading p {
  margin: 0 0 1rem;
  color: var(--invert-text);
  font-family: var(--font-mono);
  font-size: 0.76rem;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
}

.journey-heading h2 {
  margin: 0;
  color: var(--invert-text);
  font-size: clamp(34px, 4.6vw, 60px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1;
}

.journey-cards {
  position: relative;
  z-index: 2;
  display: grid;
  width: min(100%, 1240px);
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 1.6rem);
  perspective: 1600px;
}

.journey-card {
  min-height: clamp(17rem, 36svh, 24rem);
  opacity: 0;
  transform: translateY(calc(5rem + var(--card-index) * 0.7rem)) rotateX(12deg);
  transition:
    opacity 760ms ease,
    transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--card-index) * 86ms);
}

.is-revealed .journey-card {
  opacity: 1;
  transform: translateY(0) rotateX(0);
}

.journey-card.is-card-flipped:nth-child(3) {
  transform: translateY(0) translateX(0.65rem) rotateY(-7deg);
}

.journey-card.is-card-flipped:nth-child(4) {
  transform: translateY(0) translateX(1.1rem) rotateY(-5deg);
}

.journey-card-inner {
  position: relative;
  height: 100%;
  min-height: inherit;
  transform-style: preserve-3d;
  transition: transform 980ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--card-index) * 70ms);
}

.journey-card.is-card-flipped .journey-card-inner {
  transform: rotateY(180deg);
}

.journey-card-face {
  position: absolute;
  inset: 0;
  display: grid;
  min-height: inherit;
  align-content: space-between;
  overflow: hidden;
  padding: clamp(1.25rem, 2vw, 1.7rem);
  border: 1px solid var(--hair);
  border-radius: 0.75rem;
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--invert-text) 5%, transparent), color-mix(in srgb, var(--invert-text) 2%, transparent)),
    var(--invert-bg-2);
  backface-visibility: hidden;
}

.journey-card-face::before {
  position: absolute;
  inset: 0;
  content: '';
  opacity: 0.65;
  background:
    radial-gradient(circle at 52% 45%, color-mix(in srgb, var(--brand) 9%, transparent), transparent 13rem),
    linear-gradient(var(--wash) 1px, transparent 1px),
    linear-gradient(90deg, var(--wash) 1px, transparent 1px);
  background-size:
    auto,
    2.4rem 2.4rem,
    2.4rem 2.4rem;
}

.journey-card-front {
  justify-items: center;
  text-align: center;
}

.journey-card-back {
  transform: rotateY(180deg);
  background:
    radial-gradient(circle at 24% 22%, color-mix(in srgb, var(--brand) 9%, transparent), transparent 15rem),
    linear-gradient(180deg, color-mix(in srgb, var(--invert-text) 5%, transparent), color-mix(in srgb, var(--invert-text) 2%, transparent)),
    var(--invert-bg-2);
}

.journey-card-index,
.journey-card-face p,
.journey-card-face h3,
.journey-icon {
  position: relative;
  z-index: 1;
}

.journey-card-index {
  color: var(--invert-text);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.26rem;
  text-transform: uppercase;
}

.journey-card-face p {
  margin: 0;
  color: var(--invert-text);
  font-family: var(--font-mono);
  font-size: 0.76rem;
  letter-spacing: 0.34rem;
  text-transform: uppercase;
}

.journey-card-face h3 {
  max-width: 17rem;
  margin: 0;
  color: var(--invert-text);
  font-size: clamp(1.2rem, 1.8vw, 1.75rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.14;
}

.journey-icon {
  display: grid;
  width: 7rem;
  height: 7rem;
  place-items: center;
  justify-self: center;
  align-self: center;
  opacity: 0.9;
}

.journey-icon-scan {
  border: 1px solid var(--ink-18);
  border-radius: 50%;
  background:
    radial-gradient(circle, transparent 0 1.5rem, var(--ink-12) 1.56rem 1.62rem, transparent 1.68rem),
    radial-gradient(circle, transparent 0 2.65rem, var(--ink-12) 2.7rem 2.76rem, transparent 2.82rem);
}

.journey-icon-scan span {
  position: absolute;
  width: 0.12rem;
  height: 3.8rem;
  background: linear-gradient(180deg, transparent, var(--brand));
  transform-origin: 50% 100%;
  animation: scan-sweep 5s linear infinite;
}

.journey-icon-build span,
.journey-icon-build::before,
.journey-icon-build::after {
  width: 4.5rem;
  height: 2.45rem;
  content: '';
  border: 1px solid color-mix(in srgb, var(--brand) 58%, transparent);
  transform: rotate(30deg) skewX(-28deg);
}

.journey-icon-build::before,
.journey-icon-build::after {
  position: absolute;
}

.journey-icon-build::before {
  transform: translateY(-1.05rem) rotate(30deg) skewX(-28deg);
  opacity: 0.58;
}

.journey-icon-build::after {
  transform: translateY(1.05rem) rotate(30deg) skewX(-28deg);
  opacity: 0.38;
}

.journey-icon-system span {
  width: 0.7rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--brand);
  box-shadow:
    0 -3rem 0 -0.18rem var(--ink-22),
    3.2rem 0 0 -0.18rem var(--ink-22),
    -3.2rem -1.2rem 0 -0.18rem var(--ink-22),
    -2rem 2.7rem 0 -0.18rem var(--ink-22),
    2.4rem 2.5rem 0 -0.18rem var(--ink-22);
}

.journey-icon-system::before {
  position: absolute;
  width: 5.6rem;
  height: 5.4rem;
  content: '';
  opacity: 0.7;
  background:
    linear-gradient(32deg, transparent 49%, var(--ink-18) 50%, transparent 51%),
    linear-gradient(91deg, transparent 49%, var(--ink-18) 50%, transparent 51%),
    linear-gradient(132deg, transparent 49%, var(--ink-18) 50%, transparent 51%);
}

.journey-icon-mark {
  overflow: hidden;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: var(--brand);
}

.journey-icon-mark::after {
  position: absolute;
  right: -0.3rem;
  left: -0.3rem;
  top: 50%;
  height: 0.46rem;
  content: '';
  background: var(--invert-bg-2);
  transform: translateY(-50%);
}

.journey-caption {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 0.8rem;
  margin-top: clamp(2rem, 5svh, 3rem);
  color: var(--invert-text);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.24rem;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(1rem);
  transition:
    opacity 700ms ease,
    transform 700ms ease;
}

.is-revealed .journey-caption {
  opacity: 1;
  transform: translateY(0);
}

@keyframes river-flow {
  0% {
    background-position: 0 -18rem;
  }
  100% {
    background-position: 0 18rem;
  }
}

@keyframes scan-sweep {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 900px) {
  .journey {
    min-height: 0;
  }

  .journey-sticky {
    position: static;
    height: auto;
    padding: 5rem 1rem;
  }

  .journey-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (prefers-reduced-motion: reduce) {
  .journey-river::before,
  .journey-river::after,
  .journey-icon-scan span {
    animation: none;
  }

  .journey-card,
  .journey-heading,
  .journey-caption {
    opacity: 1;
    transform: none;
  }
}

/* Deeper ground for this section alone in light theme: the tokens are redefined on the root here
   rather than globally, so nothing else that paints from them moves. */
:root:not([data-theme='dark']) .journey {
  --invert-bg: #0a1812;
  --invert-bg-2: #0f2318;
  --invert-bg-3: #163020;
}
</style>
