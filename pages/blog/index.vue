<template>
  <div>
    <PageIntro
      eyebrow="Insights"
      title="Notes from the build."
      lede="Engineering deep dives, architecture decisions and what we learned shipping operations-heavy software."
    >
      <template #meta>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat"
            class="chip transition-colors"
            :class="
              activeCategory === cat
                ? 'bg-brand text-on-brand border-brand'
                : 'bg-surface-2 border-base text-muted hover:border-strong'
            "
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </template>
    </PageIntro>

    <section v-reveal class="py-14">
      <div class="container-isura">
        <div data-reveal-flow v-if="pending" class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="i in 3" :key="i" class="bento-card min-h-[240px]" v-reveal>
            <div class="skeleton h-4 w-1/4 mb-4"></div>
            <div class="skeleton h-6 w-3/4 mb-3"></div>
            <div class="skeleton h-4 w-full mb-2"></div>
            <div class="skeleton h-4 w-5/6"></div>
          </div>
        </div>

        <div v-else-if="error" class="py-16 text-center">
          <p class="text-muted mb-5">Could not load posts.</p>
          <AppButton variant="lime" @click="refresh()">Try again</AppButton>
        </div>

        <div v-else-if="filteredPosts.length === 0" class="py-16 text-center">
          <p class="text-muted">No posts in this category yet.</p>
        </div>

        <template v-else>
          <NuxtLink
            v-if="filteredPosts[0]"
            :to="`/blog/${filteredPosts[0].slug}`"
            class="drift-card group grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] rounded-isura-xl overflow-hidden border border-base bg-surface hover:border-strong transition-colors mb-4"
          >
            <div
              class="relative bg-invert text-invert p-10 flex flex-col justify-between min-h-[240px] overflow-hidden"
            >
              <img
                v-if="filteredPosts[0].coverImage"
                :src="filteredPosts[0].coverImage"
                alt=""
                loading="lazy"
                class="absolute inset-0 w-full h-full object-cover opacity-45"
              />
              <span
                class="relative chip bg-[var(--invert-wash-2)] text-invert-muted border-invert font-code text-[11px] self-start"
                >{{ filteredPosts[0].category }}</span
              >
              <span
                v-if="!filteredPosts[0].coverImage"
                class="text-[68px] font-extrabold tracking-[-0.04em] leading-none text-brand select-none"
                >{{ filteredPosts[0].category.slice(0, 2).toUpperCase() }}</span
              >
            </div>

            <div class="p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <p class="font-code text-[11px] text-muted mb-3">
                  {{ formatDate(filteredPosts[0].createdAt) }} ·
                  {{ readTime(filteredPosts[0].content) }}
                </p>
                <h2
                  class="text-[clamp(24px,calc(2.6*var(--vwu)),34px)] font-bold tracking-[-0.026em] leading-[1.1] mb-4"
                >
                  {{ filteredPosts[0].title }}
                </h2>
                <p class="text-muted text-[15px] leading-relaxed">
                  {{ filteredPosts[0].excerpt }}
                </p>
              </div>
              <div class="flex items-center justify-between mt-8 pt-5 border-t border-base">
                <span class="text-[13.5px] text-muted">{{ filteredPosts[0].author }}</span>
                <span
                  class="w-9 h-9 rounded-full bg-brand text-on-brand grid place-items-center"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.2"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </div>
            </div>
          </NuxtLink>

          <div data-reveal-flow class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <NuxtLink
              v-for="(post, i) in filteredPosts.slice(1)"
              :key="post.id"
              :to="`/blog/${post.slug}`"
              class="bento-card hover:border-strong transition-colors"
              v-reveal
            >
              <img
                v-if="post.coverImage"
                :src="post.coverImage"
                alt=""
                loading="lazy"
                class="w-full h-40 object-cover rounded-isura-md border border-base mb-4"
              />
              <div class="flex items-center justify-between mb-4">
                <span class="chip bg-surface-2 border-base text-[11px] text-muted">{{
                  post.category
                }}</span>
                <span class="font-code text-[11px] text-muted">{{ readTime(post.content) }}</span>
              </div>
              <h2 class="text-[19px] font-bold tracking-[-0.02em] leading-snug mb-3">
                {{ post.title }}
              </h2>
              <p class="text-muted text-[14px] leading-relaxed">{{ post.excerpt }}</p>
              <div
                class="flex items-center justify-between mt-auto pt-4 border-t border-base font-code text-[11px] text-muted"
              >
                <span>{{ post.author }}</span>
                <span>{{ formatDate(post.createdAt) }}</span>
              </div>
            </NuxtLink>
          </div>
        </template>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PageIntro from '@/components/ui/PageIntro.vue'
import AppButton from '@/components/ui/AppButton.vue'
import CtaSection from '@/components/landing/CtaSection.vue'

useSeoMeta({
  title: 'Insights | Altisly',
  description:
    'Engineering deep dives, architecture decisions and strategic analysis from the Altisly studio.',
})

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string
  category: string
  tags: string[]
  author: string
  status: string
  createdAt: string
  content: string
}

const { data: posts, pending, error, refresh } = await useFetch<BlogPost[]>('/api/blog')

const categories = computed(() => {
  const cats = new Set<string>(['All'])
  posts.value?.forEach((p) => cats.add(p.category))
  return Array.from(cats)
})

const activeCategory = ref('All')

const filteredPosts = computed(() => {
  if (!posts.value) return []
  if (activeCategory.value === 'All') return posts.value
  return posts.value.filter((p) => p.category === activeCategory.value)
})

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function readTime(content: string) {
  const words = content.split(/\s+/).length
  const mins = Math.max(1, Math.round(words / 200))
  return `${mins} min read`
}
</script>
