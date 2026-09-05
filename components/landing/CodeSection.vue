<template>
  <section id="code" class="py-28" v-reveal>
    <div class="container-isura code-grid">
      <div class="code-copy">
        <span class="font-code text-[11px] tracking-[0.14em] uppercase text-muted">
          { the work } _
        </span>
        <h2 class="code-title">The system says no before a person has to.</h2>
        <p class="text-muted text-[16.5px] leading-relaxed max-w-[42ch] mt-6 text-pretty">
          Rules that live in the code cannot be forgotten on a busy afternoon. Whatever the
          language, the job is the same: make the wrong thing impossible rather than discouraged.
        </p>
        <p class="font-code text-[12.5px] text-muted mt-8 min-h-[3em]">{{ active.note }}</p>
      </div>

      <div class="code-window">
        <div class="code-tabs" role="tablist">
          <button
            v-for="(s, i) in samples"
            :key="s.lang"
            type="button"
            role="tab"
            class="code-tab"
            :class="{ 'is-on': i === index }"
            :aria-selected="i === index"
            @click="select(i)"
          >
            {{ s.lang }}
          </button>
          <span class="code-file font-code">{{ active.file }}</span>
        </div>

        <div class="code-body">
          <transition name="code" mode="out-in">
            <pre :key="index" class="code-pre"><code><span
              v-for="(line, li) in active.lines"
              :key="li"
              class="code-line"
            ><span class="code-num">{{ li + 1 }}</span><span
              v-for="(tok, ti) in line"
              :key="ti"
              :class="tok.c ? `tk-${tok.c}` : undefined"
            >{{ tok.t }}</span></span></code></pre>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { samples } from '@/data/code-samples'

const index = ref(0)
const active = computed(() => samples[index.value])
let cycle: ReturnType<typeof setInterval> | undefined

function start() {
  cycle = setInterval(() => {
    index.value = (index.value + 1) % samples.length
  }, 5200)
}

// Clicking a tab is a choice; the carousel should not immediately override it.
function select(i: number) {
  index.value = i
  clearInterval(cycle)
  start()
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  start()
})

onBeforeUnmount(() => clearInterval(cycle))
</script>

<style scoped>
.code-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .code-grid {
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: 4rem;
  }
}

.code-copy {
  min-width: 0;
}

.code-title {
  font-size: clamp(30px, calc(3.6 * var(--vwu)), 46px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin-top: 0.9rem;
  max-width: 16ch;
  text-wrap: balance;
}

.code-window {
  min-width: 0;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  background: var(--invert-bg);
  color: var(--invert-text);
  overflow: hidden;
  box-shadow: var(--shadow-pop);
}

.code-tabs {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.7rem 0.9rem;
  border-bottom: 1px solid rgb(var(--invert-text-rgb) / 0.1);
}

.code-tab {
  font-size: 12.5px;
  font-weight: 600;
  padding: 0.35rem 0.7rem;
  border-radius: 9999px;
  color: var(--invert-muted);
  transition:
    color 160ms ease,
    background 160ms ease;
}

.code-tab:hover {
  color: var(--invert-text);
}

.code-tab.is-on {
  color: var(--on-brand);
  background: var(--brand);
}

.code-file {
  margin-left: auto;
  font-size: 11.5px;
  color: var(--invert-muted);
}

.code-body {
  /* Reserved so a shorter sample does not shrink the window mid-fade. */
  min-height: 21rem;
  padding: 1.4rem 0.5rem 1.6rem;
  overflow-x: auto;
}

.code-pre {
  margin: 0;
  font-family: var(--font-mono, ui-monospace, monospace);
  font-size: 13px;
  line-height: 1.85;
}

.code-line {
  display: block;
  white-space: pre;
  padding-right: 1.2rem;
}

.code-num {
  display: inline-block;
  width: 2.6rem;
  padding-right: 1rem;
  text-align: right;
  color: rgb(var(--invert-text-rgb) / 0.28);
  user-select: none;
}

.tk-kw {
  color: #c8f75d;
}
.tk-fn {
  color: #8fd3ff;
}
.tk-str {
  color: #ffb38a;
}
.tk-num {
  color: #d6b4ff;
}
.tk-typ {
  color: #7fe3c1;
}
.tk-com {
  color: rgb(var(--invert-text-rgb) / 0.42);
  font-style: italic;
}

.code-enter-active,
.code-leave-active {
  transition: opacity 320ms ease;
}

.code-enter-from,
.code-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .code-enter-active,
  .code-leave-active {
    transition: none;
  }
}
</style>
