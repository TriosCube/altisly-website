import { setCookie } from 'h3'
import { WRITE_SESSION_COOKIE } from '~/server/utils/writeAuth'

export default defineEventHandler((event) => {
  setCookie(event, WRITE_SESSION_COOKIE, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  })
  return { success: true }
})
