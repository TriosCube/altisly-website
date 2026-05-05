<template>
  <div>
    <AppHeader />
    <main>
      <!-- Hero -->
      <section class="relative overflow-hidden bg-white pt-40 pb-20 md:pt-48 md:pb-24 border-b border-gray-100">
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium mb-6">
                <span class="w-2 h-2 bg-gray-400 rounded-full" />
                Insights & Updates
              </p>
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-navy-900 leading-tight tracking-tight mb-4">
                Blog
              </h1>
              <p class="text-xl text-gray-600 max-w-xl leading-relaxed">
                Product updates, engineering deep dives, and market analysis from the Altisry team.
              </p>
            </div>
            <!-- Category filter pills -->
            <div class="flex flex-wrap gap-2">
              <button
                v-for="cat in categories"
                :key="cat"
                @click="activeCategory = cat"
                class="px-4 py-2 rounded-full text-sm font-semibold transition-all border"
                :class="activeCategory === cat
                  ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                  : 'border-gray-200 text-gray-600 hover:text-navy-900 hover:border-brand-300 bg-white'"
              >
                {{ cat }}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Posts grid -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <!-- Loading -->
          <div v-if="pending" class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div v-for="i in 3" :key="i" class="card animate-pulse">
              <div class="h-4 bg-gray-200 rounded w-1/4 mb-3" />
              <div class="h-6 bg-gray-200 rounded w-3/4 mb-2" />
              <div class="h-4 bg-gray-200 rounded w-full mb-1" />
              <div class="h-4 bg-gray-200 rounded w-5/6 mb-6" />
              <div class="h-4 bg-gray-200 rounded w-1/3" />
            </div>
          </div>

          <!-- Error -->
          <div v-else-if="error" class="text-center py-16">
            <p class="text-gray-400 mb-4">Could not load posts.</p>
            <button @click="refresh()" class="btn-primary">Try again</button>
          </div>

          <!-- Empty -->
          <div v-else-if="filteredPosts.length === 0" class="text-center py-16">
            <p class="text-gray-400">No posts in this category yet.</p>
          </div>

          <!-- Grid -->
          <template v-else>
            <!-- Featured first post -->
            <NuxtLink
              v-if="filteredPosts[0]"
              :to="`/blog/${filteredPosts[0].slug}`"
              class="group flex flex-col lg:flex-row gap-0 rounded-3xl overflow-hidden border border-gray-100 hover:border-brand-300 hover:shadow-xl transition-all duration-300 mb-8 block"
            >
              <!-- Visual side -->
              <div class="lg:w-2/5 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-12 min-h-[220px]">
                <div class="text-center">
                  <span
                    class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border"
                    :class="categoryStyle(filteredPosts[0].category).badge"
                  >
                    {{ filteredPosts[0].category }}
                  </span>
                  <p class="text-brand-200 text-7xl font-black leading-none select-none mt-2">{{ filteredPosts[0].category.slice(0, 2).toUpperCase() }}</p>
                </div>
              </div>
              <!-- Content side -->
              <div class="flex-1 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <p class="text-xs text-gray-400 font-medium mb-3">{{ formatDate(filteredPosts[0].createdAt) }} · {{ readTime(filteredPosts[0].content) }}</p>
                  <h2 class="text-2xl md:text-3xl font-black text-navy-900 leading-tight mb-4 group-hover:text-brand-600 transition-colors">
                    {{ filteredPosts[0].title }}
                  </h2>
                  <p class="text-gray-600 leading-relaxed mb-6">{{ filteredPosts[0].excerpt }}</p>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-full bg-brand-100 flex items-center justify-center text-xs font-bold text-brand-600">
                      {{ filteredPosts[0].author.charAt(0) }}
                    </div>
                    <span class="text-sm text-gray-500">{{ filteredPosts[0].author }}</span>
                  </div>
                  <span class="text-brand-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read post
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </NuxtLink>

            <!-- Remaining posts grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <NuxtLink
                v-for="post in filteredPosts.slice(1)"
                :key="post.id"
                :to="`/blog/${post.slug}`"
                class="group card hover:shadow-xl hover:border-brand-400 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div class="flex items-center justify-between mb-4">
                  <span
                    class="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    :class="categoryStyle(post.category).badge"
                  >
                    {{ post.category }}
                  </span>
                  <span class="text-xs text-gray-400">{{ readTime(post.content) }}</span>
                </div>
                <h2 class="text-lg font-bold text-navy-900 mb-3 leading-snug flex-1 group-hover:text-brand-600 transition-colors">
                  {{ post.title }}
                </h2>
                <p class="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3">{{ post.excerpt }}</p>
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-[10px] font-bold text-brand-600">
                      {{ post.author.charAt(0) }}
                    </div>
                    <span class="text-xs text-gray-500">{{ post.author }}</span>
                  </div>
                  <span class="text-xs text-gray-400">{{ formatDate(post.createdAt) }}</span>
                </div>
              </NuxtLink>
            </div>
          </template>
        </div>
      </section>

    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Blog | Altisry',
  description: 'Product updates, engineering deep dives, and open banking market analysis from the Altisry team.',
})

type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
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

const categoryStyle = (cat: string) => {
  const map: Record<string, { badge: string }> = {
    Product: { badge: 'bg-brand-100 text-brand-700' },
    Engineering: { badge: 'bg-purple-100 text-purple-700' },
    Market: { badge: 'bg-green-100 text-green-700' },
  }
  return map[cat] ?? { badge: 'bg-gray-100 text-gray-700' }
}

const formatDate = (iso: string) => {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

const readTime = (content: string) => {
  const words = content.split(/\s+/).length
  const mins = Math.max(1, Math.round(words / 200))
  return `${mins} min read`
}
</script>
