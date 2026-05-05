import { getCookie, readBody, createError } from 'h3'
import { isValidWriteSession, WRITE_SESSION_COOKIE } from '~/server/utils/writeAuth'
import { upsertPost, type BlogPost } from '~/server/utils/postsDb'

export default defineEventHandler(async (event) => {
  const session = getCookie(event, WRITE_SESSION_COOKIE)
  if (!isValidWriteSession(session)) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const body = await readBody(event).catch(() => null)
  if (!body || typeof body.id !== 'string' || typeof body.title !== 'string') {
    throw createError({ statusCode: 400, statusMessage: 'Invalid post data' })
  }

  return upsertPost(body as BlogPost)
})
