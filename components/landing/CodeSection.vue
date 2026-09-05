<template>
  <section id="code" ref="trackRef" class="code-track" v-reveal>
    <div class="code-stage band-alt">
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
          <div ref="windowRef" class="code-window">
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

            <div
              class="code-body"
              @pointerenter="enter"
              @pointermove="track"
              @pointerleave="leave"
              @click="copy"
            >
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

            <span
              class="code-cursor"
              :class="{ 'is-on': near }"
              :style="{ '--cx': `${dot.x}px`, '--cy': `${dot.y}px` }"
              aria-hidden="true"
            >
              {{ copied ? 'Copied' : 'Try it' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import { samples } from '@/data/code-samples'

const trackRef = ref<HTMLElement | null>(null)
const index = ref(0)
const active = computed(() => samples[index.value])

let cycle: ReturnType<typeof setInterval> | undefined
let frame = 0

// The section pins for a screen and a bit, so the scroll through it is what
// moves between samples: five domains across the travel, about one per fifth
// of the way down.
function update() {
  const track = trackRef.value
  if (!track) return

  const travel = track.offsetHeight - window.innerHeight
  if (travel <= 0) return

  const box = track.getBoundingClientRect()
  if (box.bottom < 0 || box.top > window.innerHeight) return

  const progress = Math.min(Math.max(-box.top / travel, 0), 1)
  index.value = Math.min(Math.floor(progress * samples.length), samples.length - 1)
}

function schedule() {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(update)
}

// Stacked, there is no track to scroll through and nothing to drive it, so
// that layout falls back to a timer.
function startTimer() {
  cycle = setInterval(() => {
    index.value = (index.value + 1) % samples.length
  }, 5200)
}

// Clicking a tab is a choice. Scrolling on will take it back, which is the
// right way round: the scroll position is the thing being read.
function select(i: number) {
  index.value = i
  if (!cycle) return
  clearInterval(cycle)
  startTimer()
}

onMounted(() => {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    update()
    return
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  startTimer()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  cancelAnimationFrame(dotFrame)
  clearInterval(cycle)
  clearTimeout(copiedTimer)
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
})

// The disc chases the pointer rather than being pinned to it: it is a weight
// being dragged along, which is what stops it reading as a badly drawn cursor.
const windowRef = ref<HTMLElement | null>(null)
const near = ref(false)
const copied = ref(false)
const dot = reactive({ x: 0, y: 0 })
const aim = { x: 0, y: 0 }
let dotFrame = 0
let copiedTimer: ReturnType<typeof setTimeout> | undefined

function chase() {
  dot.x += (aim.x - dot.x) * 0.18
  dot.y += (aim.y - dot.y) * 0.18

  if (Math.abs(aim.x - dot.x) < 0.4 && Math.abs(aim.y - dot.y) < 0.4) {
    dot.x = aim.x
    dot.y = aim.y
    dotFrame = 0
    return
  }

  dotFrame = requestAnimationFrame(chase)
}

function point(event: PointerEvent) {
  const box = windowRef.value?.getBoundingClientRect()
  if (!box) return
  aim.x = event.clientX - box.left
  aim.y = event.clientY - box.top
}

function enter(event: PointerEvent) {
  if (event.pointerType !== 'mouse') return
  point(event)
  // Start it where the pointer is, so it grows in place instead of flying in.
  dot.x = aim.x
  dot.y = aim.y
  near.value = true
}

function track(event: PointerEvent) {
  if (!near.value) return
  point(event)
  if (!dotFrame) dotFrame = requestAnimationFrame(chase)
}

function leave() {
  near.value = false
  copied.value = false
}

async function copy() {
  const text = active.value.lines
    .map((line) => line.map((tok) => tok.t).join(''))
    .join('\n')

  try {
    await navigator.clipboard.writeText(text)
  } catch {
    // Denied clipboard permission is not worth telling anyone about.
    return
  }

  copied.value = true
  clearTimeout(copiedTimer)
  copiedTimer = setTimeout(() => (copied.value = false), 1400)
}
</script>

<style scoped>
/* The track is taller than the screen and the stage inside it sticks, so the
   section holds for a beat instead of passing at scroll speed. Long enough to
   let the samples cycle while you are on it.

   It also starts a screen early, so while the note above is still pinned this
   one is already climbing over it. By the time the note would have released,
   this has covered it and taken the top for itself. */
.code-track {
  position: relative;
  z-index: 2;
  height: 210vh;
  margin-top: -100vh;
}

.code-stage {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  /* Opaque via band-alt, or the note underneath shows through the thing
     covering it, and a shade off the note so the join is visible in light. */
  /* clip, not hidden: this must not become a scroll container. */
  overflow: clip;
}

.code-grid {
  width: 100%;
}

/* Dark only. On a light background this same shadow is a grey smudge dragged
   across the top of the section, not depth. Light mode separates the two with
   the opaque background alone. */
[data-theme='dark'] .code-stage {
  box-shadow: 0 -40px 90px -40px rgb(3 8 5 / 0.85);
}

/* Dark only, and taller, because it has a bottom to hide. The code sits in the
   upper half, so the fade only eats empty surface and the frame around it. */
[data-theme='dark'] .code-bezel {
  height: min(72vh, 840px);
  -webkit-mask-image: linear-gradient(
    to bottom,
    #000 0%,
    #000 54%,
    rgb(0 0 0 / 0.55) 78%,
    rgb(0 0 0 / 0.12) 92%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    #000 0%,
    #000 54%,
    rgb(0 0 0 / 0.55) 78%,
    rgb(0 0 0 / 0.12) 92%,
    transparent 100%
  );
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
  top: 4%;
  left: 26%;
  width: 96%;
  height: 62%;
  pointer-events: none;
  border-radius: 50%;
  /* Hung from its top right corner, so rotating it swings the far end the way
     a pendulum swings: fast through the middle, slow at each extreme. */
  transform-origin: 100% 0%;
  background: radial-gradient(
    ellipse at 88% 12%,
    rgb(200 247 93 / 0.2) 0%,
    rgb(141 205 78 / 0.12) 24%,
    rgb(69 119 44 / 0.06) 48%,
    transparent 76%
  );
  /* Rasterise once and composite, rather than repainting a huge soft shape
     on every frame while the pointer is trying to get through. */
  will-change: rotate;
  animation: beam-swing 8.5s ease-in-out infinite alternate;
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

/* ease-in-out is what makes it read as a pendulum rather than a wiper: it
   slows into each extreme and accelerates back through the middle. */
@keyframes beam-swing {
  from {
    rotate: 6deg;
  }
  to {
    rotate: 38deg;
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
  display: flex;
  /* Light mode keeps a clean edge and sizes to hold the longest sample. The
     dissolve below is dark only: it works by the window and the page being the
     same colour, and against a near white page a dark green fading out is just
     a grey smear. */
  height: clamp(470px, 58vh, 620px);
  /* Arrives rather than appearing: the window rises into place once the
     section is on screen. */
  opacity: 0;
  translate: 0 2.6rem;
  transition:
    opacity 900ms ease,
    translate 900ms cubic-bezier(0.22, 1, 0.36, 1);
}

.is-in .code-bezel {
  opacity: 1;
  translate: none;
}

.code-window {
  position: relative;
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
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
  transition: color 150ms ease;
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
  flex: 1;
  min-height: 0;
  padding: 2.2rem 0 2.6rem;
  overflow: auto;
}

.code-cursor {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: grid;
  place-items: center;
  width: 132px;
  height: 132px;
  margin: -66px 0 0 -66px;
  border-radius: 50%;
  background: #fbfdf7;
  color: #0f1410;
  font-size: 13.5px;
  font-weight: 600;
  letter-spacing: -0.01em;
  pointer-events: none;
  /* translate carries the position and scale carries the arrival, as separate
     properties, so following the pointer cannot undo growing in. */
  translate: var(--cx, 0) var(--cy, 0);
  scale: 0.35;
  opacity: 0;
  transition:
    opacity 200ms ease,
    scale 340ms cubic-bezier(0.22, 1, 0.36, 1);
}

.code-cursor.is-on {
  scale: 1;
  opacity: 1;
}

/* Only where there is a real pointer to replace. */
@media (hover: hover) and (pointer: fine) {
  .code-body {
    cursor: none;
  }
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
  transition: opacity 150ms ease;
}

.code-enter-from,
.code-leave-to {
  opacity: 0;
}

@media (min-width: 1024px) {
  .code-grid {
    grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
    gap: 4.5rem;
    align-items: start;
  }

  /* Reach the viewport edge from inside the container, then keep going. */
  .code-bezel {
    margin-right: calc(0px - (100vw - min(100vw, 1280px)) / 2 - 32px - 5rem);
  }
}

@media (max-width: 1023px) {
  .code-track {
    height: auto;
    margin-top: 0;
  }

  .code-stage {
    position: static;
    height: auto;
    padding: 4rem 0;
  }

  [data-theme='dark'] .code-stage {
    box-shadow: none;
  }

  .code-bezel {
    border-radius: 18px;
    padding: 8px;
  }

  .code-window {
    border-radius: 12px;
  }

  .code-bezel {
    height: auto;
    opacity: 1;
    translate: none;
  }

  [data-theme='dark'] .code-bezel {
    height: auto;
    -webkit-mask-image: none;
    mask-image: none;
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

  .code-cursor {
    transition: none;
  }
}
</style>
