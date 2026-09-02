<template>
  <div class="bg-page min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-1 grid place-items-center px-4 py-24">
      <div class="text-center max-w-[46ch]">
        <div
          class="font-code text-[clamp(72px,12vw,140px)] font-bold tracking-[-0.04em] leading-none text-brand-deep"
        >
          {{ error?.statusCode || 404 }}
        </div>
        <h1 class="text-[clamp(28px,3.4vw,44px)] font-bold tracking-[-0.03em] leading-[1.05] mt-4 mb-4">
          {{ error?.statusCode === 500 ? 'Something went wrong.' : 'Page not found.' }}
        </h1>
        <p class="text-muted text-[16px] leading-relaxed mb-8">
          {{
            error?.statusCode === 500
              ? 'We are looking into it. Try again in a few minutes.'
              : 'That page does not exist or has moved.'
          }}
        </p>
        <div class="flex gap-3 justify-center flex-wrap">
          <AppButton variant="lime" size="lg" to="/">Go home</AppButton>
          <AppButton variant="ghost" size="lg" to="/work">See the work</AppButton>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppButton from '@/components/ui/AppButton.vue'

defineProps<{
  error?: { statusCode?: number; message?: string }
}>()

useSeoMeta({ title: 'Page not found | Altisly' })
</script>
