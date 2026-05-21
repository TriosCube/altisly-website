import { getPublishedPosts } from '~/server/utils/postsDb'

const BASE_URL = 'https://www.altisly.com'

const STATIC_PAGES = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/partnerships', priority: '0.7', changefreq: 'monthly' },
  { url: '/careers', priority: '0.7', changefreq: 'weekly' },
  { url: '/get-started', priority: '0.9', changefreq: 'monthly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/developers', priority: '0.7', changefreq: 'monthly' },
  { url: '/developers/api', priority: '0.6', changefreq: 'monthly' },
  { url: '/developers/docs', priority: '0.6', changefreq: 'monthly' },
  { url: '/developers/sandbox', priority: '0.6', changefreq: 'monthly' },
  { url: '/products/altis-ai', priority: '0.8', changefreq: 'monthly' },
  { url: '/products/altis-health', priority: '0.8', changefreq: 'monthly' },
  { url: '/products/altis-learn', priority: '0.8', changefreq: 'monthly' },
  { url: '/products/atreasury', priority: '0.8', changefreq: 'monthly' },
  { url: '/products/compliance-suite', priority: '0.8', changefreq: 'monthly' },
  { url: '/products/liquidity-forecasting', priority: '0.8', changefreq: 'monthly' },
  { url: '/products/merchant-suite', priority: '0.8', changefreq: 'monthly' },
  { url: '/products/reconciliation-suite', priority: '0.8', changefreq: 'monthly' },
  { url: '/products/settlement-system', priority: '0.8', changefreq: 'monthly' },
  { url: '/products/treasury-api', priority: '0.8', changefreq: 'monthly' },
  { url: '/industries/agriculture', priority: '0.7', changefreq: 'monthly' },
  { url: '/industries/banking', priority: '0.7', changefreq: 'monthly' },
  { url: '/industries/ecommerce', priority: '0.7', changefreq: 'monthly' },
  { url: '/industries/financial-services', priority: '0.7', changefreq: 'monthly' },
  { url: '/industries/government-tech', priority: '0.7', changefreq: 'monthly' },
  { url: '/industries/healthcare', priority: '0.7', changefreq: 'monthly' },
  { url: '/expertise/compliance-automation', priority: '0.7', changefreq: 'monthly' },
  { url: '/expertise/cross-sector-advisory', priority: '0.7', changefreq: 'monthly' },
  { url: '/expertise/fintech-embedded-finance', priority: '0.7', changefreq: 'monthly' },
  { url: '/expertise/identity-systems', priority: '0.7', changefreq: 'monthly' },
  { url: '/expertise/information-management', priority: '0.7', changefreq: 'monthly' },
  { url: '/expertise/systems-architecture', priority: '0.7', changefreq: 'monthly' },
  { url: '/expertise/treasury-operating-systems', priority: '0.7', changefreq: 'monthly' },
  { url: '/expertise/treasury-systems', priority: '0.7', changefreq: 'monthly' },
  { url: '/expertise/venture-building', priority: '0.7', changefreq: 'monthly' },
  { url: '/company/security', priority: '0.6', changefreq: 'monthly' },
  { url: '/company/success-stories', priority: '0.7', changefreq: 'monthly' },
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
${[...staticEntries, ...blogEntries].join('\n')}
</urlset>`

  setResponseHeader(event, 'Content-Type', 'application/xml')
  return xml
})
