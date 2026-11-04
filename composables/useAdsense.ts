// Ads run on the blog only; the rest of the site stays ad-free.
export function useAdsense() {
  useHead({
    link: [{ rel: 'preconnect', href: 'https://pagead2.googlesyndication.com' }],
    script: [
      {
        key: 'adsense',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4228173539269709',
        async: true,
        crossorigin: 'anonymous',
        tagPosition: 'head',
      },
    ],
  })
}
