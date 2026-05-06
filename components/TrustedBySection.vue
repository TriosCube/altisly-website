<template>
  <section class="py-16 bg-[#f2fdf1] border-y border-[#d9f9d4]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <p class="text-navy-900 font-semibold text-lg">
          Architecting scalable systems across key sectors and domains
        </p>
      </div>

      <!-- Marquee -->
      <div class="relative overflow-hidden">
        <div class="flex gap-12 items-center animate-marquee">
          <div
            v-for="domain in [...domains, ...domains]"
            :key="domain.name + Math.random()"
            class="flex-shrink-0 flex items-center justify-center h-10 px-5 text-gray-500 hover:text-[#15c411] transition-colors duration-300"
          >
            <div class="flex items-center gap-3">
              <svg class="w-6 h-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="domain.icon" />
              </svg>
              <span class="font-bold text-lg tracking-tight whitespace-nowrap">{{ domain.name }}</span>
            </div>
          </div>
        </div>
        <!-- Fade edges -->
        <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f2fdf1] to-transparent pointer-events-none z-10"></div>
        <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f2fdf1] to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const domains = [
  { name: 'Fintech & Embedded Finance', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
  { name: 'Treasury Systems', icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { name: 'Digital Health', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { name: 'Agritech & Supply Chain', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
  { name: 'Govtech & Public Infrastructure', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1' },
  { name: 'Identity Verification', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { name: 'E-commerce & Retail', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
  { name: 'Compliance Automation', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
]
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
  width: max-content;
}
</style>
