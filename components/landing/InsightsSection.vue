<template>
  <section v-if="latest.length" class="pt-32 pb-28" v-reveal>
    <div class="container-isura">
      <div class="flex flex-wrap items-end justify-between gap-6 mb-10">
        <div>
          <span class="text-[13px] text-muted tracking-[0.04em]">Insights</span>
          <h2
            class="text-[clamp(34px,4vw,52px)] font-bold tracking-[-0.032em] leading-[1.04] mt-3 max-w-[16ch]"
          >
            Notes from the build.
          </h2>
        </div>
        <AppButton variant="ghost" to="/blog">Read all insights →</AppButton>
      </div>

      <div data-reveal-flow class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <NuxtLink
          v-for="post in latest"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="drift-card group rounded-isura-xl overflow-hidden border border-base bg-surface hover:border-strong transition-colors flex flex-col"
          v-reveal
        >
          <div class="relative bg-invert text-invert h-[168px] overflow-hidden flex-shrink-0">
            <img
              v-if="post.coverImage"
              :src="post.coverImage"
              alt=""
              loading="lazy"
              class="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-70 group-hover:scale-[1.03] transition-all duration-500"
            />
            <span
              class="absolute left-4 top-4 chip bg-[var(--invert-wash-2)] text-invert-muted border-invert font-code text-[11px]"
            >
              {{ post.category }}
            </span>
          </div>

          <div class="p-6 flex flex-col flex-1">
            <p class="font-code text-[11px] text-muted mb-2.5">
              {{ formatDate(post.createdAt) }} · {{ readTime(post.content) }}
            </p>
            <h3 class="text-[17px] font-bold tracking-[-0.02em] leading-snug mb-2.5">
              {{ post.title }}
            </h3>
            <p class="text-muted text-[13.5px] leading-relaxed line-clamp-3">{{ post.excerpt }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'

type Post = {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category: string
  content: string
  createdAt: string
}

const props = withDefaults(defineProps<{ posts?: Post[] }>(), { posts: () => [] })

// Hides itself when the blog is empty rather than shipping a hole in the home
// page, so a fresh host degrades quietly.
const latest = computed(() =>
  [...(props.posts ?? [])]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3),
)

function formatDate(iso: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function readTime(content: string) {
  const words = (content ?? '').trim().split(/\s+/).length
  return `${Math.max(1, Math.round(words / 220))} min read`
}
</script>
