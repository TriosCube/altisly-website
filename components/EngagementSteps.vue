<template>
  <section class="py-16 bg-[#060809]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mb-10">
        <p class="text-[#52e147] text-sm font-semibold uppercase tracking-widest mb-3">
          {{ label || 'How we engage' }}
        </p>
        <h2 class="text-2xl md:text-3xl font-bold text-white leading-tight">{{ title }}</h2>
      </div>

      <ol class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
        <li
          v-for="(step, i) in steps"
          :key="step.title"
          class="bg-[#060809] p-6"
        >
          <p class="text-[#52e147] text-xs font-bold tracking-widest mb-3">
            {{ String(i + 1).padStart(2, '0') }}
          </p>
          <h3 class="text-white font-semibold mb-2">{{ step.title }}</h3>
          <p class="text-sm text-white/60 leading-relaxed">{{ step.desc }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  steps: { title: string; desc: string }[]
  label?: string
}>()
</script>
