import { getCookie } from 'h3'
import { isValidWriteSession, WRITE_SESSION_COOKIE } from '~/server/utils/writeAuth'

export default defineEventHandler((event) => {
  const session = getCookie(event, WRITE_SESSION_COOKIE)
  return { authenticated: isValidWriteSession(session) }
})
