import { createError, getCookie } from 'h3'
import { getAllEnquiries } from '~/server/utils/enquiriesDb'
import { isValidWriteSession, WRITE_SESSION_COOKIE } from '~/server/utils/writeAuth'

export default defineEventHandler((event) => {
  const session = getCookie(event, WRITE_SESSION_COOKIE)
  if (!isValidWriteSession(session)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  return getAllEnquiries()
})
