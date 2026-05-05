import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

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

const ensureFile = () => {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })
  if (!existsSync(POSTS_FILE)) writeFileSync(POSTS_FILE, JSON.stringify([], null, 2), 'utf-8')
}

export const getAllPosts = (): BlogPost[] => {
  ensureFile()
  return JSON.parse(readFileSync(POSTS_FILE, 'utf-8')) as BlogPost[]
}

export const getPublishedPosts = (): BlogPost[] =>
  getAllPosts()
    .filter((p) => p.status === 'published')
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))

const normalizeSlug = (value: string) =>
  decodeURIComponent(String(value || ''))
    .trim()
    .toLowerCase()
    .replace(/\/+$/, '')

export const getPostBySlug = (slug: string): BlogPost | null => {
  const target = normalizeSlug(slug)
  return getAllPosts().find((p) => p.status === 'published' && normalizeSlug(p.slug) === target) ?? null
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
