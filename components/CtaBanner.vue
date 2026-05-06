<template>
  <section class="relative overflow-hidden bg-[#0f360e] py-16 md:py-20">
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#15c411] rounded-full opacity-20 blur-3xl -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-[#15c411] rounded-full opacity-10 blur-3xl translate-y-1/2"></div>
    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-5">
        {{ title || 'Ready to get started?' }}
      </h2>
      <p class="text-white/60 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
        {{ subtitle || 'Join 300+ companies already using Altisly to power their open banking services.' }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/contact" class="btn-primary text-base px-8 py-4">
          Contact us
        </NuxtLink>
        <NuxtLink to="/get-started" class="btn-outline-white text-base px-8 py-4">
          Get API keys
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
}>()
</script>
