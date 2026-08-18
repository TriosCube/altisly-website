<template>
  <section class="py-20" :class="muted ? 'bg-gray-50 border-y border-gray-100' : 'bg-white'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mb-12">
        <p v-if="label" class="section-label">{{ label }}</p>
        <h2 class="text-3xl md:text-4xl font-bold text-navy-900 leading-tight">{{ title }}</h2>
        <p v-if="intro" class="mt-4 text-gray-600 leading-relaxed">{{ intro }}</p>
      </div>

      <dl class="grid md:grid-cols-2 gap-x-12 lg:gap-x-20">
        <div
          v-for="item in items"
          :key="item.title"
          class="py-5 border-t border-gray-200"
        >
          <dt class="font-semibold text-navy-900 mb-1.5 flex items-center gap-2">
            {{ item.title }}
            <span
              v-if="item.badge"
              class="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-brand-100 text-brand-600 border border-brand-200"
            >{{ item.badge }}</span>
          </dt>
          <dd class="text-sm text-gray-600 leading-relaxed">{{ item.description }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface SpecItem {
  title: string
  description: string
  badge?: string
}

defineProps<{
  title: string
  items: SpecItem[]
  label?: string
  intro?: string
  muted?: boolean
}>()
</script>
