<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <CookieBanner />
</template>

<script setup lang="ts">
import CookieBanner from '@/components/ui/CookieBanner.vue'

useHead({
  noscript: [
    {
      innerHTML:
        '<style>[data-reveal]{opacity:1 !important;transform:none !important}</style>',
      tagPosition: 'head',
    },
  ],
})
</script>
