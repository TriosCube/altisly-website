import { createHash, timingSafeEqual } from 'crypto'

export const WRITE_SESSION_COOKIE = 'altisly_write_session'

const DEFAULT_USERNAME = 'editor'
const DEFAULT_PASSWORD = 'altisly-write'
const DEFAULT_SECRET = 'altisly-write-session-secret'

const isProd = process.env.NODE_ENV === 'production'

const safeCompare = (a: string, b: string) => {
  const ba = Buffer.from(a)
  const bb = Buffer.from(b)
  if (ba.length !== bb.length) return false
  return timingSafeEqual(ba, bb)
}

const getUsername = () => process.env.BLOG_ADMIN_USERNAME ?? (isProd ? '' : DEFAULT_USERNAME)
const getPassword = () => process.env.BLOG_ADMIN_PASSWORD ?? (isProd ? '' : DEFAULT_PASSWORD)
const getSecret = () => process.env.BLOG_ADMIN_SESSION_SECRET ?? (isProd ? '' : DEFAULT_SECRET)

export const isWriteAuthConfigured = () =>
  Boolean(getUsername() && getPassword() && getSecret())

export const isValidWriteCredentials = (username: string, password: string) =>
  isWriteAuthConfigured() &&
  safeCompare(username, getUsername()) &&
  safeCompare(password, getPassword())

export const createWriteSessionValue = () => {
  if (!isWriteAuthConfigured()) return ''
  return createHash('sha256')
    .update(`${getUsername()}:${getPassword()}:${getSecret()}`)
    .digest('hex')
}

export const isValidWriteSession = (sessionValue: string | undefined) =>
  Boolean(sessionValue && safeCompare(sessionValue, createWriteSessionValue()))
