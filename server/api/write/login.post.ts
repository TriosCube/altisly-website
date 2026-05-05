import { readBody, setCookie, createError } from 'h3'
import { isValidWriteCredentials, createWriteSessionValue, WRITE_SESSION_COOKIE } from '~/server/utils/writeAuth'

export default defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => null)
  const username = typeof body?.username === 'string' ? body.username.trim() : ''
  const password = typeof body?.password === 'string' ? body.password : ''

  if (!username || !password || !isValidWriteCredentials(username, password)) {
    throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' })
  }

  setCookie(event, WRITE_SESSION_COOKIE, createWriteSessionValue(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8,
  })

  return { success: true }
})
