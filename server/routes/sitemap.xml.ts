import { getPublishedPosts } from '~/server/utils/postsDb'
import { projects } from '~/data/projects'

const BASE_URL = 'https://www.altisly.com'

const STATIC_PAGES = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/partnerships', priority: '0.7', changefreq: 'monthly' },
  { url: '/careers', priority: '0.7', changefreq: 'weekly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/work', priority: '0.9', changefreq: 'monthly' },
  { url: '/diagnose', priority: '0.8', changefreq: 'monthly' },
  { url: '/legal/privacy', priority: '0.4', changefreq: 'yearly' },
  { url: '/legal/terms', priority: '0.4', changefreq: 'yearly' },
  { url: '/legal/notice', priority: '0.4', changefreq: 'yearly' },
]

function toXmlDate(iso: string) {
  return iso.split('T')[0]
}

export default defineEventHandler((event) => {
  const posts = getPublishedPosts()

  const staticEntries = STATIC_PAGES.map(
    (p) => `  <url>
    <loc>${BASE_URL}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )

  const workEntries = projects.map(
    (project) => `  <url>
    <loc>${BASE_URL}/work/${project.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
  )

  const blogEntries = posts.map(
    (post) => `  <url>
    <loc>${BASE_URL}/blog/${encodeURIComponent(post.slug)}</loc>
    <lastmod>${toXmlDate(post.updatedAt || post.createdAt)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`,
  )

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...workEntries, ...blogEntries].join('\n')}
</urlset>`

  setResponseHeader(event, 'Content-Type', 'application/xml')
  return xml
})
