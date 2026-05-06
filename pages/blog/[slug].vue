<template>
  <div>
    <AppHeader />
    <main>

      <template v-if="post">
        <!-- Hero -->
        <section class="relative overflow-hidden bg-white pt-40 pb-20 md:pt-48 md:pb-28 border-b border-gray-100">

          <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Breadcrumb -->
            <div class="flex items-center gap-2 mb-8 text-sm text-gray-500">
              <NuxtLink to="/blog" class="hover:text-navy-900 transition-colors">Blog</NuxtLink>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
              <span class="text-gray-600 truncate max-w-xs">{{ post.title }}</span>
            </div>

            <!-- Category + meta -->
            <div class="flex flex-wrap items-center gap-3 mb-6">
              <span
                class="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                :class="categoryStyle(post.category).heroBadge"
              >
                {{ post.category }}
              </span>
              <span class="text-gray-500 text-sm">{{ formatDate(post.createdAt) }}</span>
              <span class="text-gray-500 text-sm">·</span>
              <span class="text-gray-500 text-sm">{{ readTime(post.content) }}</span>
            </div>

            <h1 class="text-3xl md:text-5xl font-black text-navy-900 leading-tight tracking-tight mb-6">
              {{ post.title }}
            </h1>
            <p class="text-xl text-gray-600 leading-relaxed mb-8">{{ post.excerpt }}</p>

            <!-- Author -->
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-sm font-bold text-white">
                {{ post.author.charAt(0) }}
              </div>
              <div>
                <p class="text-navy-900 font-semibold text-sm">{{ post.author }}</p>
                <p class="text-gray-500 text-xs">Altisly</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Article + sidebar -->
        <section class="py-20 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-14">

              <!-- Main article -->
              <article class="flex-1 max-w-2xl">
                <!-- Back link -->
                <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 mb-10 group">
                  <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                  All posts
                </NuxtLink>

                <!-- Rendered content -->
                <div class="prose-altisly" v-html="renderedContent" />

                <!-- Tags -->
                <div v-if="post.tags?.length" class="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-100">
                  <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
                  >
                    {{ tag }}
                  </span>
                </div>

                <!-- Author card -->
                <div class="mt-10 p-6 rounded-2xl bg-brand-50 border border-brand-100 flex items-start gap-4">
                  <div class="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center text-lg font-bold text-white flex-shrink-0">
                    {{ post.author.charAt(0) }}
                  </div>
                  <div>
                    <p class="font-bold text-navy-900">{{ post.author }}</p>
                    <p class="text-gray-500 text-sm mt-1">Writing about open banking, product design, and financial infrastructure at Altisly.</p>
                  </div>
                </div>
              </article>

              <!-- Sidebar -->
              <aside class="lg:w-72 flex-shrink-0 space-y-6">

                <!-- Table of contents (from h2 headings) -->
                <div v-if="headings.length" class="card sticky top-24">
                  <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">In this post</h3>
                  <nav class="space-y-1">
                    <a
                      v-for="heading in headings"
                      :key="heading.id"
                      :href="`#${heading.id}`"
                      class="block text-sm text-gray-600 hover:text-brand-600 py-1 border-l-2 pl-3 transition-colors"
                      :class="activeHeading === heading.id ? 'border-brand-600 text-brand-600 font-medium' : 'border-gray-200'"
                    >
                      {{ heading.text }}
                    </a>
                  </nav>
                </div>

                <!-- Post meta card -->
                <div class="card">
                  <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Post details</h3>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-gray-500">Published</span>
                      <span class="text-xs font-semibold text-navy-900">{{ formatDate(post.createdAt) }}</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-gray-500">Read time</span>
                      <span class="text-xs font-semibold text-navy-900">{{ readTime(post.content) }}</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-gray-500">Category</span>
                      <span
                        class="text-xs font-bold px-2 py-0.5 rounded-full"
                        :class="categoryStyle(post.category).badge"
                      >
                        {{ post.category }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- CTA card -->
                <div class="bg-brand-50 border border-brand-100 rounded-2xl p-6 text-navy-900">
                  <h3 class="font-bold text-base mb-2">Start building</h3>
                  <p class="text-gray-600 text-sm mb-5">Connect to 5,000+ banks with a single Altisly integration.</p>
                  <NuxtLink to="/contact" class="block w-full text-center bg-brand-600 text-white font-bold text-sm py-2.5 rounded-xl hover:bg-brand-500 transition-colors">
                    Talk to sales
                  </NuxtLink>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <!-- Related posts -->
        <section v-if="relatedPosts.length" class="py-20 bg-brand-50 border-t border-brand-100">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between mb-10">
              <h2 class="text-2xl font-black text-navy-900">More from the blog</h2>
              <NuxtLink to="/blog" class="text-sm font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1 group">
                All posts
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NuxtLink>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <NuxtLink
                v-for="related in relatedPosts"
                :key="related.id"
                :to="`/blog/${related.slug}`"
                class="group card hover:shadow-xl hover:border-brand-400 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <span class="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full self-start mb-3" :class="categoryStyle(related.category).badge">
                  {{ related.category }}
                </span>
                <h3 class="text-base font-bold text-navy-900 mb-2 leading-snug flex-1 group-hover:text-brand-600 transition-colors">{{ related.title }}</h3>
                <p class="text-sm text-gray-500">{{ related.excerpt.slice(0, 100) }}…</p>
              </NuxtLink>
            </div>
          </div>
        </section>
      </template>

      <!-- 404 state -->
      <template v-else-if="!pending">
        <div class="min-h-screen flex items-center justify-center bg-white pt-20">
          <div class="text-center px-4">
            <p class="text-7xl font-black text-brand-100 mb-4">404</p>
            <h1 class="text-2xl font-bold text-navy-900 mb-3">Post not found</h1>
            <p class="text-gray-500 mb-8">This post may have been removed or the URL is incorrect.</p>
            <NuxtLink to="/blog" class="btn-primary">Back to blog</NuxtLink>
          </div>
        </div>
      </template>

      <!-- Loading state -->
      <template v-else>
        <div class="min-h-screen flex items-center justify-center bg-white pt-20">
          <div class="flex items-center gap-3 text-gray-400">
            <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span class="text-sm font-medium">Loading post…</span>
          </div>
        </div>
      </template>

    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { render } = useMarkdown()

type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  tags: string[]
  author: string
  createdAt: string
  updatedAt: string
  content: string
}

const rawSlug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
const slug = encodeURIComponent(String(rawSlug ?? ''))
const { data: post, pending, error } = await useFetch<BlogPost>(`/api/blog/${slug}`)
const { data: allPosts } = await useFetch<BlogPost[]>('/api/blog')

const renderedContent = computed(() => post.value ? render(post.value.content) : '')

const relatedPosts = computed(() => {
  if (!allPosts.value || !post.value) return []
  return allPosts.value.filter((p) => p.slug !== post.value!.slug).slice(0, 3)
})

// Extract headings for table of contents
const headings = computed(() => {
  if (!post.value) return []
  const h2Regex = /^## (.+)$/gm
  const result: { id: string; text: string }[] = []
  let match
  while ((match = h2Regex.exec(post.value.content)) !== null) {
    const text = match[1]
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    result.push({ id, text })
  }
  return result
})

const activeHeading = ref('')

onMounted(() => {
  // Add IDs to h2 elements after render
  nextTick(() => {
    const article = document.querySelector('.prose-altisly')
    if (!article) return
    article.querySelectorAll('h2').forEach((el) => {
      const id = el.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') ?? ''
      el.id = id
    })
  })

  // Track active heading on scroll
  const onScroll = () => {
    const article = document.querySelector('.prose-altisly')
    if (!article) return
    const h2s = Array.from(article.querySelectorAll('h2'))
    const scrollY = window.scrollY + 120
    let active = ''
    for (const el of h2s) {
      const rect = el.getBoundingClientRect()
      const top = rect.top + window.scrollY
      if (top <= scrollY) active = el.id
    }
    activeHeading.value = active
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

useSeoMeta({
  title: computed(() => post.value ? `${post.value.title} | Altisly Blog` : 'Blog | Altisly'),
  description: computed(() => post.value?.excerpt ?? ''),
})

const categoryStyle = (cat: string) => {
  const map: Record<string, { badge: string; heroBadge: string }> = {
    Product: { badge: 'bg-brand-100 text-brand-700', heroBadge: 'bg-brand-100 text-brand-700 border-brand-200' },
    Engineering: { badge: 'bg-purple-100 text-purple-700', heroBadge: 'bg-purple-100 text-purple-700 border-purple-200' },
    Market: { badge: 'bg-green-100 text-green-700', heroBadge: 'bg-green-100 text-green-700 border-green-200' },
  }
  return map[cat] ?? { badge: 'bg-gray-100 text-gray-700', heroBadge: 'bg-gray-100 text-gray-700 border-gray-200' }
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

const readTime = (content: string) => {
  const mins = Math.max(1, Math.round(content.split(/\s+/).length / 200))
  return `${mins} min read`
}
</script>

<style>
.prose-altisly .md-h2 {
  @apply text-2xl font-black text-navy-900 mt-12 mb-4 leading-snug;
}
.prose-altisly .md-h3 {
  @apply text-xl font-bold text-navy-900 mt-8 mb-3 leading-snug;
}
.prose-altisly .md-h1 {
  @apply text-3xl font-black text-navy-900 mt-10 mb-4;
}
.prose-altisly .md-p {
  @apply text-gray-700 leading-relaxed mb-5 text-base;
}
.prose-altisly .md-list {
  @apply mb-6 space-y-2 pl-0;
}
.prose-altisly .md-list li {
  @apply flex items-start gap-3 text-gray-700 text-base leading-relaxed;
}
.prose-altisly .md-list li::before {
  content: '';
  @apply w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0 mt-2;
}
.prose-altisly .code-block {
  @apply bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-6 overflow-x-auto;
}
.prose-altisly .code-block code {
  @apply text-gray-700 text-sm font-mono leading-relaxed;
}
.prose-altisly .inline-code {
  @apply bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded text-sm font-mono;
}
.prose-altisly strong {
  @apply font-bold text-navy-900;
}
.prose-altisly em {
  @apply italic;
}
</style>
