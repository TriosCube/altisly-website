import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import seedPosts from '~/data/posts.json'
import { RETIRED_POSTS } from '~/data/retired-posts'

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string
  category: string
  tags: string[]
  content: string
  author: string
  status: 'draft' | 'published'
  updatedAt: string
  createdAt: string
}

const DATA_DIR = join(process.cwd(), 'data')
const POSTS_FILE = join(DATA_DIR, 'posts.json')
const FALLBACK_POSTS = seedPosts as BlogPost[]

const ensureFile = () => {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })
  if (!existsSync(POSTS_FILE)) writeFileSync(POSTS_FILE, JSON.stringify([], null, 2), 'utf-8')
}

export const getAllPosts = (): BlogPost[] => {
  try {
    ensureFile()
    return JSON.parse(readFileSync(POSTS_FILE, 'utf-8')) as BlogPost[]
  }
  catch {
    // In serverless builds, filesystem paths can be unavailable/read-only.
    // Fall back to bundled seed data so public blog endpoints remain readable.
    return FALLBACK_POSTS
  }
}

const isLive = (p: BlogPost) => p.status === 'published' && !(p.slug in RETIRED_POSTS)

export const getPublishedPosts = (): BlogPost[] =>
  getAllPosts()
    .filter(isLive)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))

const normalizeSlug = (value: string) =>
  decodeURIComponent(String(value || ''))
    .trim()
    .toLowerCase()
    .replace(/\/+$/, '')

export const getPostBySlug = (slug: string): BlogPost | null => {
  const target = normalizeSlug(slug)
  return getAllPosts().find((p) => isLive(p) && normalizeSlug(p.slug) === target) ?? null
}

export const upsertPost = (post: BlogPost): BlogPost => {
  ensureFile()
  const posts = getAllPosts()
  const idx = posts.findIndex((p) => p.id === post.id)
  if (idx === -1) posts.unshift(post)
  else posts[idx] = post
  writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2), 'utf-8')
  return post
}

export const deletePost = (id: string): void => {
  ensureFile()
  writeFileSync(POSTS_FILE, JSON.stringify(getAllPosts().filter((p) => p.id !== id), null, 2), 'utf-8')
}
