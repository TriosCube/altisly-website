import tailwindcss from '@tailwindcss/vite'

const themeInit = `(function(){try{var t=localStorage.getItem('altisly-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var r=(t==='light'||t==='dark')?t:(d?'dark':'light');document.documentElement.setAttribute('data-theme',r);}catch(e){}})();`

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  ssr: true,

  modules: ['@vercel/analytics/nuxt'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      treasuryUrl: 'https://treasury.altisly.com',
    },
  },

  routeRules: {
    '/expertise/**': { redirect: '/about' },
    '/developers/**': { redirect: '/' },
    '/get-started': { redirect: '/contact' },
    '/status': { redirect: '/' },
    '/company/security': { redirect: '/about' },
    '/products/**': { redirect: '/' },
    '/industries/**': { redirect: '/work' },
    '/solutions/**': { redirect: '/work' },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en', 'data-theme': 'light' },
      title: 'Altisly · We build the heavy systems',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'theme-color', content: '#0E2D22' },
        {
          name: 'description',
          content:
            'Altisly builds AI-enabled workflows serious teams scale on: treasury, payments, identity, and health infrastructure.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Onest:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
        },
      ],
      script: [{ innerHTML: themeInit, tagPosition: 'head' }],
    },
  },
})
