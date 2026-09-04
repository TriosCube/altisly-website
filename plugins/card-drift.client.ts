const SELECTOR = '.bento-card, .drift-card'
const STRENGTH = 5
const EASE = 0.14
const REST = 0.05

type Drift = { el: HTMLElement; x: number; y: number; tx: number; ty: number }

export default defineNuxtPlugin(() => {
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')

  if (!fine.matches || reduced.matches) return

  let current: Drift | null = null
  let raf = 0

  function clamp(value: number) {
    return Math.min(Math.max(value, -1), 1)
  }

  function apply(drift: Drift) {
    drift.el.style.setProperty('--drift-x', `${drift.x.toFixed(2)}px`)
    drift.el.style.setProperty('--drift-y', `${drift.y.toFixed(2)}px`)
  }

  function frame() {
    if (!current) {
      raf = 0
      return
    }

    current.x += (current.tx - current.x) * EASE
    current.y += (current.ty - current.y) * EASE
    apply(current)

    const settled =
      Math.abs(current.tx - current.x) < REST && Math.abs(current.ty - current.y) < REST

    if (settled && current.tx === 0 && current.ty === 0) {
      current.el.style.removeProperty('--drift-x')
      current.el.style.removeProperty('--drift-y')
      current = null
      raf = 0
      return
    }

    raf = requestAnimationFrame(frame)
  }

  function wake() {
    if (raf) return
    raf = requestAnimationFrame(frame)
  }

  function release() {
    if (!current) return
    current.tx = 0
    current.ty = 0
    wake()
  }

  document.addEventListener(
    'pointermove',
    (event) => {
      const target = event.target as Element | null
      const card = target?.closest?.(SELECTOR) as HTMLElement | null

      if (!card) {
        release()
        return
      }

      if (current && current.el !== card) {
        current.el.style.removeProperty('--drift-x')
        current.el.style.removeProperty('--drift-y')
        current = null
      }

      if (!current) current = { el: card, x: 0, y: 0, tx: 0, ty: 0 }

      const box = card.getBoundingClientRect()
      const nx = clamp((event.clientX - (box.left + box.width / 2)) / (box.width / 2 || 1))
      const ny = clamp((event.clientY - (box.top + box.height / 2)) / (box.height / 2 || 1))

      current.tx = -nx * STRENGTH
      current.ty = -ny * STRENGTH
      wake()
    },
    { passive: true },
  )

  document.addEventListener('pointerleave', release)
  window.addEventListener('blur', release)
})
