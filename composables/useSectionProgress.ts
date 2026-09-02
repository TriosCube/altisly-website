import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useSectionProgress() {
  const sectionRef = ref<HTMLElement | null>(null)
  const progress = ref(0)

  function update() {
    const section = sectionRef.value
    if (!section) return

    const rect = section.getBoundingClientRect()
    const maxScroll = Math.max(section.offsetHeight - window.innerHeight, 1)
    const current = Math.min(Math.max(-rect.top, 0), maxScroll)

    progress.value = current / maxScroll
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
  })

  return { sectionRef, progress }
}
