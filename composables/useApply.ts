import { ref } from 'vue'

const open = ref(false)
const role = ref('')

export function useApply() {
  function openApply(next = '') {
    role.value = next
    open.value = true
  }
  return { open, role, openApply }
}

export const CV_MAX_BYTES = 1024 * 1024
export const CV_ACCEPT = '.pdf,.doc,.docx'
export const CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]
