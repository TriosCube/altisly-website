<template>
  <section id="code" class="code-track" v-reveal>
    <div class="code-stage">
      <span class="code-glow" aria-hidden="true"></span>
      <span class="code-beam" aria-hidden="true"></span>

      <div class="container-isura code-grid">
        <div class="code-copy">
          <span class="font-code text-[11px] tracking-[0.14em] uppercase text-muted">
            { the work } <span class="caret" aria-hidden="true">_</span>
          </span>
          <h2 class="code-title">The system says no before a person has to.</h2>
          <p class="text-muted text-[16.5px] leading-relaxed max-w-[40ch] mt-6 text-pretty">
            Money moving, a clinician signing, a parcel changing hands. Different operations,
            one job: make the wrong thing impossible rather than merely discouraged.
          </p>
          <p class="font-code text-[12.5px] text-muted mt-7 min-h-[3.4em] max-w-[38ch]">
            <!-- The window runs off the right edge, so the filename would sit
                 off screen if it stayed in the tab bar. -->
            <span class="code-file">{{ active.file }}</span>
            {{ active.note }}
          </p>
          <AppButton class="mt-2" variant="lime" size="md" to="/about">How we work</AppButton>
        </div>

        <!-- The window runs past the right edge of the viewport rather than sitting
             inside the column, so the code reads as a surface the page is resting
             on. The stage clips it, so the page itself never scrolls sideways. -->
        <div class="code-bezel">
          <div class="code-window">
            <div class="code-tabs" role="tablist">
              <button
                v-for="(s, i) in samples"
                :key="s.domain"
                type="button"
                role="tab"
                class="code-tab"
                :class="{ 'is-on': i === index }"
                :aria-selected="i === index"
                @click="select(i)"
              >
                {{ s.domain }}
              </button>
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
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
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
/* The track is taller than the screen and the stage inside it sticks, so the
   section holds for a beat instead of passing at scroll speed. Long enough to
   let the samples cycle while you are on it. */
.code-track {
  position: relative;
  height: 210vh;
}

.code-stage {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  /* clip, not hidden: this must not become a scroll container. */
  overflow: clip;
}

.code-grid {
  width: 100%;
}

/* Ambient light the beam travels through, so the corner is never flat black. */
.code-glow {
  position: absolute;
  top: -16%;
  right: -8%;
  width: min(64vw, 820px);
  aspect-ratio: 1;
  pointer-events: none;
  border-radius: 50%;
  background: radial-gradient(circle at 55% 45%, rgb(69 119 44 / 0.22), transparent 66%);
}

/* A shaft of light behind the window, running low left to high right and
   sliding along its own axis. rotate and translate are separate properties,
   so animating the slide leaves the angle alone instead of overwriting it. */
.code-beam {
  position: absolute;
  top: 50%;
  left: 52%;
  width: 155%;
  height: 27%;
  margin: -13.5% 0 0 -77.5%;
  pointer-events: none;
  border-radius: 50%;
  rotate: -42deg;
  background: radial-gradient(
    ellipse at center,
    rgb(200 247 93 / 0.18) 0%,
    rgb(141 205 78 / 0.11) 22%,
    rgb(69 119 44 / 0.06) 46%,
    transparent 74%
  );
  /* Rasterise once and composite, rather than repainting a huge soft shape
     on every frame while the pointer is trying to get through. */
  will-change: translate;
  animation: beam-travel 17s ease-in-out infinite alternate;
}

.caret {
  animation: caret-blink 1.15s steps(1) infinite;
}

@keyframes caret-blink {
  0%,
  50% {
    opacity: 1;
  }
  50.01%,
  100% {
    opacity: 0;
  }
}

/* 11.7 over 13 is tan(42deg), so the slide runs straight down the beam. */
@keyframes beam-travel {
  from {
    translate: -13vw 11.7vw;
  }
  to {
    translate: 13vw -11.7vw;
  }
}

.code-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  align-items: center;
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

.code-bezel {
  min-width: 0;
  border: 1px solid var(--invert-border);
  border-radius: 22px 0 0 22px;
  padding: 10px 0 10px 10px;
  background: linear-gradient(150deg, rgb(200 247 93 / 0.07), rgb(3 8 5 / 0.5));
  box-shadow: var(--shadow-pop);
}

.code-window {
  min-width: 0;
  border-radius: 14px 0 0 14px;
  background: var(--invert-bg);
  color: var(--invert-text);
  overflow: hidden;
}

.code-tabs {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.05rem 1.5rem;
  border-bottom: 1px solid rgb(var(--invert-text-rgb) / 0.08);
}

/* Plain labels rather than pills: the active one is simply the one you can
   read, which keeps the chrome out of the way of the code. */
.code-tab {
  font-size: 13.5px;
  font-weight: 600;
  color: rgb(var(--invert-text-rgb) / 0.38);
  transition: color 200ms ease;
}

.code-tab:hover {
  color: rgb(var(--invert-text-rgb) / 0.75);
}

.code-tab.is-on {
  color: var(--invert-text);
}

.code-file {
  display: block;
  margin-bottom: 0.35rem;
  color: var(--muted-2);
}

.code-body {
  /* Reserved so a shorter sample does not shrink the window mid-fade. */
  min-height: 27rem;
  padding: 2.2rem 0 2.6rem;
  overflow-x: auto;
}

.code-pre {
  margin: 0;
  font-family: var(--font-mono, ui-monospace, monospace);
  font-size: 13.5px;
  line-height: 2.35;
}

.code-line {
  display: block;
  white-space: pre;
  padding-right: 1.5rem;
}

.code-num {
  display: inline-block;
  width: 3.6rem;
  padding-right: 1.4rem;
  text-align: right;
  color: rgb(var(--invert-text-rgb) / 0.22);
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
  color: rgb(var(--invert-text-rgb) / 0.4);
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

@media (min-width: 1024px) {
  .code-grid {
    grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
    gap: 4.5rem;
  }

  /* Reach the viewport edge from inside the container, then keep going. */
  .code-bezel {
    margin-right: calc(0px - (100vw - min(100vw, 1280px)) / 2 - 32px - 5rem);
  }
}

@media (max-width: 1023px) {
  .code-track {
    height: auto;
  }

  .code-stage {
    position: static;
    height: auto;
    padding: 4rem 0;
  }

  .code-bezel {
    border-radius: 18px;
    padding: 8px;
  }

  .code-window {
    border-radius: 12px;
  }

  .code-body {
    min-height: 24rem;
    padding: 1.5rem 0 1.8rem;
  }

  .code-pre {
    font-size: 12px;
    line-height: 2;
  }

  .code-num {
    width: 2.8rem;
    padding-right: 1rem;
  }

  .code-tabs {
    gap: 1.1rem;
    padding: 0.85rem 1rem;
    overflow-x: auto;
  }

  .code-tab {
    flex: none;
    font-size: 12.5px;
  }
}

@media (max-height: 820px) and (min-width: 1024px) {
  .code-body {
    min-height: 22rem;
    padding: 1.6rem 0 1.8rem;
  }

  .code-pre {
    line-height: 2;
  }
}

@media (prefers-reduced-motion: reduce) {
  .code-enter-active,
  .code-leave-active {
    transition: none;
  }

  .code-beam,
  .caret {
    animation: none;
  }
}
</style>
