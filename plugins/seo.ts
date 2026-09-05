import { site } from '~/data/site'

// Every page gets a canonical pointing at the apex, plus the sharing tags.
// Without a canonical, www and the apex both served 200 and Google saw two
// complete copies of the site, splitting the signals between them.
export default defineNuxtPlugin(() => {
  const route = useRoute()

  useHead({
    link: [
      {
        rel: 'canonical',
        href: () => `${site.url}${route.path === '/' ? '' : route.path}`,
      },
    ],
    meta: [
      { property: 'og:site_name', content: site.name },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: () => `${site.url}${route.path === '/' ? '' : route.path}` },
      { property: 'og:image', content: `${site.url}/og.png` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${site.url}/og.png` },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: site.name,
          url: site.url,
          email: site.email,
          telephone: site.phone,
          description: site.role,
          address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
          areaServed: ['NG', 'GH', 'GB'],
        }),
      },
    ],
  })
})
