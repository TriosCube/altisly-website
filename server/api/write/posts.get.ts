import { getCookie, createError } from 'h3'
import { isValidWriteSession, WRITE_SESSION_COOKIE } from '~/server/utils/writeAuth'
import { getAllPosts } from '~/server/utils/postsDb'

export default defineEventHandler((event) => {
  const session = getCookie(event, WRITE_SESSION_COOKIE)
  if (!isValidWriteSession(session)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }
  return getAllPosts()
})
