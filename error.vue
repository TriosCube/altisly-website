<template>
  <div>
    <AppHeader />
    <main class="min-h-screen bg-brand-50 flex items-center justify-center px-4">
      <div class="text-center max-w-lg">
        <div class="text-8xl font-black text-brand-100 mb-4 leading-none">
          {{ error?.statusCode || 404 }}
        </div>
        <h1 class="text-3xl font-bold text-navy-900 mb-4">
          {{ error?.statusCode === 500 ? 'Something went wrong' : 'Page not found' }}
        </h1>
        <p class="text-gray-600 mb-8 leading-relaxed">
          {{ error?.statusCode === 500
            ? 'We\'re looking into it. Please try again in a few minutes.'
            : 'The page you\'re looking for doesn\'t exist or has been moved.'
          }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/" class="btn-primary text-base px-8 py-4">Go home</NuxtLink>
          <NuxtLink to="/contact" class="btn-outline text-base px-8 py-4">Contact support</NuxtLink>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error?: { statusCode?: number; message?: string }
}>()

useSeoMeta({ title: 'Page not found | Altisly' })
</script>
