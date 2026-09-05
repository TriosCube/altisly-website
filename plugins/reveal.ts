let observer: IntersectionObserver | null = null

function watcher() {
  if (observer) return observer
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-in')
        observer?.unobserve(entry.target)
      })
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.06 },
  )

  return observer
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps() {
      return { 'data-reveal': '' }
    },
    mounted(el: HTMLElement) {
      el.setAttribute('data-reveal', '')

      const eye = watcher()
      if (!eye) {
        el.classList.add('is-in')
        return
      }

      if (el.getBoundingClientRect().top < 0) {
        el.classList.add('is-in')
        return
      }

      eye.observe(el)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    },
  })
})
