import { createError } from 'h3'
import { getPostBySlug } from '~/server/utils/postsDb'

export default defineEventHandler((event) => {
  const rawSlug = event.context.params?.slug
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug
  if (!slug) throw createError({ statusCode: 400, statusMessage: 'Missing slug' })

  const post = getPostBySlug(slug)
  if (!post) throw createError({ statusCode: 404, statusMessage: 'Not found' })

  return post
})
