<template>
  <section ref="sectionRef" class="py-24" id="what-we-change">
    <div class="container-isura">
      <div class="max-w-[20ch]">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">
          What we change
        </span>
        <h2
          class="text-[clamp(34px,4.6vw,60px)] font-bold tracking-[-0.032em] leading-[1.02] mt-3"
        >
          We work on more than the software.
        </h2>
      </div>

      <div
        class="model mt-14 grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,34rem)] gap-12 lg:gap-16 items-center"
        :class="{ 'is-shown': shown }"
      >
        <div class="order-2 lg:order-1">
          <p class="text-muted text-[17px] leading-relaxed max-w-[42ch]">
            Four things have to move together. Change one and the other three fight you.
          </p>

          <div class="mt-8 flex flex-col">
            <button
              v-for="(layer, i) in layers"
              :key="layer.label"
              type="button"
              class="layer-row"
              :class="{ 'is-active': active === i }"
              :style="{ '--i': i }"
              @mouseenter="active = i"
              @focus="active = i"
            >
              <span class="font-code text-[11px] text-brand-deep w-7 flex-shrink-0">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <span class="flex-1 text-left">
                <span class="block text-[18px] font-semibold tracking-[-0.015em]">
                  {{ layer.label }}
                </span>
                <span class="layer-body block text-muted text-[14px] leading-relaxed">
                  {{ layer.body }}
                </span>
              </span>
            </button>
          </div>

          <NuxtLink
            to="/work"
            class="inline-flex items-center gap-2.5 mt-9 font-code text-[11px] tracking-[0.14em] uppercase text-muted hover:text-body transition-colors"
          >
            See what we have built
            <span class="w-1.5 h-1.5 rounded-full bg-brand-deep"></span>
          </NuxtLink>
        </div>

        <div class="order-1 lg:order-2 diagram" @mouseleave="active = -1">
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <circle class="ring" cx="50" cy="50" r="34" />
            <path
              v-for="(node, i) in nodes"
              :key="`line-${i}`"
              class="spoke"
              :class="{ 'is-dim': active > -1 && active !== i }"
              :d="`M 50 50 L ${node.x} ${node.y}`"
            />
            <template v-if="!reduced">
              <circle
                v-for="(node, i) in nodes"
                :key="`packet-${i}`"
                class="packet"
                r="1.1"
              >
                <animateMotion
                  :dur="`${4.6 + i * 0.4}s`"
                  :begin="`${i * 1.15}s`"
                  repeatCount="indefinite"
                  :path="`M ${node.x} ${node.y} L 50 50`"
                />
                <animate
                  attributeName="opacity"
                  :dur="`${4.6 + i * 0.4}s`"
                  :begin="`${i * 1.15}s`"
                  repeatCount="indefinite"
                  values="0;0.9;0.9;0"
                  keyTimes="0;0.2;0.75;1"
                />
              </circle>
            </template>
          </svg>

          <span class="hub" aria-hidden="true"></span>

          <button
            v-for="(node, i) in nodes"
            :key="node.label"
            type="button"
            class="node"
            :class="{ 'is-active': active === i, 'is-dim': active > -1 && active !== i }"
            :style="{ '--x': `${node.x}%`, '--y': `${node.y}%`, '--i': i }"
            @mouseenter="active = i"
            @focus="active = i"
          >
            <span class="node-dot"></span>
            <span class="node-label">{{ node.label }}</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { layers } from '@/data/content'

const nodes = [
  { label: layers[0].label, x: 50, y: 10 },
  { label: layers[1].label, x: 50, y: 90 },
  { label: layers[2].label, x: 10, y: 50 },
  { label: layers[3].label, x: 90, y: 50 },
]

const sectionRef = ref<HTMLElement | null>(null)
const shown = ref(false)
const reduced = ref(false)
const active = ref(-1)

let observer: IntersectionObserver | undefined

onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduced.value) {
    shown.value = true
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      shown.value = true
      observer?.disconnect()
    },
    { rootMargin: '-12% 0px -12% 0px' },
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.diagram {
  position: relative;
  width: 100%;
  max-width: 34rem;
  margin: 0 auto;
  aspect-ratio: 1;
}

.diagram svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.ring {
  fill: none;
  stroke: var(--border);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
  opacity: 0;
  transition: opacity 800ms ease 500ms;
}

.is-shown .ring {
  opacity: 1;
}

.spoke {
  fill: none;
  stroke: var(--border-strong);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  transition:
    stroke-dashoffset 700ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 260ms ease;
  transition-delay: calc(var(--i, 0) * 140ms);
}

.spoke:nth-of-type(2) {
  transition-delay: 140ms;
}
.spoke:nth-of-type(3) {
  transition-delay: 280ms;
}
.spoke:nth-of-type(4) {
  transition-delay: 420ms;
}

.is-shown .spoke {
  stroke-dashoffset: 0;
}

.spoke.is-dim {
  opacity: 0.35;
}

.packet {
  fill: var(--brand-deep);
  opacity: 0;
}

.hub {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0.7rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--brand);
  transform: translate(-50%, -50%) scale(0.2);
  opacity: 0;
  transition:
    transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 500ms ease;
}

.hub::after {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    color-mix(in srgb, var(--brand) 22%, transparent),
    transparent 68%
  );
  content: '';
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.is-shown .hub {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

.node {
  position: absolute;
  left: var(--x);
  top: var(--y);
  display: grid;
  gap: 0.6rem;
  justify-items: center;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition:
    opacity 620ms ease,
    color 240ms ease;
  transition-delay: calc(var(--i) * 160ms);
}

.is-shown .node {
  opacity: 1;
}

.node.is-dim {
  opacity: 0.4;
}

.node-dot {
  width: 0.55rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--surface);
  border: 1.5px solid var(--border-strong);
  transition:
    background 240ms ease,
    border-color 240ms ease,
    box-shadow 240ms ease;
}

.node.is-active .node-dot {
  background: var(--brand);
  border-color: var(--brand);
  box-shadow: 0 0 0 6px color-mix(in srgb, var(--brand) 22%, transparent);
}

.node-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  white-space: nowrap;
  transition: color 240ms ease;
}

.node.is-active .node-label {
  color: var(--text);
}

.layer-row {
  display: flex;
  align-items: flex-start;
  gap: 1.1rem;
  padding: 1rem 0;
  border-top: 1px solid var(--border);
  text-align: left;
  opacity: 0;
  transform: translateY(0.6rem);
  transition:
    opacity 560ms ease,
    transform 560ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 240ms ease;
  transition-delay: calc(var(--i) * 120ms);
}

.layer-row:last-child {
  border-bottom: 1px solid var(--border);
}

.is-shown .layer-row {
  opacity: 1;
  transform: none;
}

.layer-row.is-active {
  border-top-color: var(--brand-deep);
}

.layer-body {
  margin-top: 0.3rem;
}

@media (prefers-reduced-motion: reduce) {
  .ring,
  .spoke,
  .hub,
  .node,
  .layer-row {
    opacity: 1;
    transform: none;
    stroke-dashoffset: 0;
    transition: none;
  }

  .hub {
    transform: translate(-50%, -50%);
  }

  .node {
    transform: translate(-50%, -50%);
  }
}
</style>
