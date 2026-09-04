import { onBeforeUnmount, onMounted, readonly, ref } from 'vue'

const STEP_MS = 2600
const STEPS = 8

const step = ref(0)
const stepStartedAt = ref(0)

let timer: ReturnType<typeof setInterval> | undefined
let consumers = 0
let frozen = false

function advance() {
  step.value = (step.value + 1) % STEPS
  stepStartedAt.value = performance.now()
}

function start() {
  if (timer || frozen) return
  timer = setInterval(advance, STEP_MS)
}

function stop() {
  clearInterval(timer)
  timer = undefined
}

function onVisibility() {
  if (document.hidden) stop()
  else start()
}

export const CYCLE_STEPS = STEPS

export function useOperationCycle() {
  onMounted(() => {
    consumers += 1
    if (consumers > 1) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      frozen = true
      step.value = 4
      stepStartedAt.value = performance.now()
      return
    }

    stepStartedAt.value = performance.now()
    start()
    document.addEventListener('visibilitychange', onVisibility)
  })

  onBeforeUnmount(() => {
    consumers -= 1
    if (consumers > 0) return

    stop()
    document.removeEventListener('visibilitychange', onVisibility)
  })

  return {
    step: readonly(step),
    stepStartedAt: readonly(stepStartedAt),
    stepMs: STEP_MS,
  }
}
