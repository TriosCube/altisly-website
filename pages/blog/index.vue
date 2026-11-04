<template>
  <div>
    <PageIntro
      eyebrow="Insights"
      title="Notes from the build."
      lede="Engineering deep dives, architecture decisions and what we learned shipping operations-heavy software."
    >
      <template #meta>
        <div class="flex flex-wrap gap-2">
          <NuxtLink
            v-for="cat in categories"
            :key="cat"
            :to="{ query: cat === 'All' ? {} : { category: cat } }"
            class="chip transition-colors"
            :class="
              activeCategory === cat
                ? 'bg-brand text-on-brand border-brand'
                : 'bg-surface-2 border-base text-muted hover:border-strong'
            "
            :aria-current="activeCategory === cat ? 'true' : undefined"
          >
            {{ cat }}
          </NuxtLink>
        </div>
      </template>
    </PageIntro>

    <section v-reveal class="py-14">
      <div ref="listTop" class="container-isura">
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
            v-if="featured"
            :to="`/blog/${featured.slug}`"
            class="drift-card group grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] rounded-isura-xl overflow-hidden border border-base bg-surface hover:border-strong transition-colors mb-4"
          >
            <div
              class="relative bg-invert text-invert p-10 flex flex-col justify-between min-h-[240px] overflow-hidden"
            >
              <img
                v-if="featured.coverImage"
                :src="featured.coverImage"
                alt=""
                class="absolute inset-0 w-full h-full object-cover opacity-45"
              />
              <span
                class="relative chip bg-[var(--invert-wash-2)] text-invert-muted border-invert font-code text-[11px] self-start"
                >{{ featured.category }}</span
              >
              <span
                v-if="!featured.coverImage"
                class="text-[68px] font-extrabold tracking-[-0.04em] leading-none text-brand select-none"
                >{{ featured.category.slice(0, 2).toUpperCase() }}</span
              >
            </div>

            <div class="p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <p class="font-code text-[11px] text-muted mb-3">
                  {{ formatDate(featured.createdAt) }} ·
                  {{ readTime(featured.words) }}
                </p>
                <h2
                  class="text-[clamp(24px,calc(2.6*var(--vwu)),34px)] font-bold tracking-[-0.026em] leading-[1.1] mb-4"
                >
                  {{ featured.title }}
                </h2>
                <p class="text-muted text-[15px] leading-relaxed">
                  {{ featured.excerpt }}
                </p>
              </div>
              <div class="flex items-center justify-between mt-8 pt-5 border-t border-base">
                <span class="text-[13.5px] text-muted">{{ featured.author }}</span>
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
              v-for="post in gridPosts"
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
                <span class="font-code text-[11px] text-muted">{{ readTime(post.words) }}</span>
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

          <nav
            v-if="totalPages > 1"
            aria-label="Pagination"
            class="flex flex-wrap items-center justify-center gap-2 mt-12"
          >
            <NuxtLink
              v-if="page > 1"
              :to="pageLink(page - 1)"
              class="chip bg-surface-2 border-base text-muted hover:border-strong"
              rel="prev"
              >← Newer</NuxtLink
            >
            <NuxtLink
              v-for="n in totalPages"
              :key="n"
              :to="pageLink(n)"
              class="chip min-w-10 justify-center transition-colors"
              :class="
                n === page
                  ? 'bg-brand text-on-brand border-brand'
                  : 'bg-surface-2 border-base text-muted hover:border-strong'
              "
              :aria-current="n === page ? 'page' : undefined"
              :aria-label="`Page ${n}`"
              >{{ n }}</NuxtLink
            >
            <NuxtLink
              v-if="page < totalPages"
              :to="pageLink(page + 1)"
              class="chip bg-surface-2 border-base text-muted hover:border-strong"
              rel="next"
              >Older →</NuxtLink
            >
          </nav>
        </template>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import PageIntro from '@/components/ui/PageIntro.vue'
import AppButton from '@/components/ui/AppButton.vue'
import CtaSection from '@/components/landing/CtaSection.vue'
import { site } from '@/data/site'

useAdsense()

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

type PostCard = Omit<BlogPost, 'content'> & { words: number }

// Page 1 leads with a featured post above a full grid; later pages are grid only.
const FIRST_PAGE = 13
const PER_PAGE = 12

const route = useRoute()

// Strip bodies before they are serialised into the page payload.
const { data: posts, pending, error, refresh } = await useFetch<BlogPost[], unknown, string, 'get', PostCard[]>(
  '/api/blog',
  {
    transform: (list) =>
      list.map(({ content, ...rest }) => ({ ...rest, words: content.split(/\s+/).length })),
  },
)

const categories = computed(() => {
  const cats = new Set<string>(['All'])
  posts.value?.forEach((p) => cats.add(p.category))
  return Array.from(cats)
})

const activeCategory = computed(() => {
  const c = route.query.category
  return typeof c === 'string' && categories.value.includes(c) ? c : 'All'
})

const filteredPosts = computed(() => {
  if (!posts.value) return []
  if (activeCategory.value === 'All') return posts.value
  return posts.value.filter((p) => p.category === activeCategory.value)
})

const totalPages = computed(() => {
  const n = filteredPosts.value.length
  return n <= FIRST_PAGE ? 1 : 1 + Math.ceil((n - FIRST_PAGE) / PER_PAGE)
})

const page = computed(() => {
  const n = Number.parseInt(String(route.query.page ?? '1'), 10)
  return Number.isFinite(n) ? Math.min(Math.max(n, 1), totalPages.value) : 1
})

const pagePosts = computed(() => {
  const start = page.value === 1 ? 0 : FIRST_PAGE + (page.value - 2) * PER_PAGE
  const size = page.value === 1 ? FIRST_PAGE : PER_PAGE
  return filteredPosts.value.slice(start, start + size)
})

// The router keeps scroll position on query-only changes, so jump back to the list.
const listTop = ref<HTMLElement | null>(null)
watch([page, activeCategory], () => {
  const el = listTop.value
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120 })
})

const featured = computed(() => (page.value === 1 ? pagePosts.value[0] : undefined))
const gridPosts = computed(() => (page.value === 1 ? pagePosts.value.slice(1) : pagePosts.value))

function pageLink(n: number) {
  const query: Record<string, string> = {}
  if (activeCategory.value !== 'All') query.category = activeCategory.value
  if (n > 1) query.page = String(n)
  return { query }
}

const canonical = computed(() => {
  const params = new URLSearchParams(pageLink(page.value).query).toString()
  return `${site.url}/blog${params ? `?${params}` : ''}`
})

useSeoMeta({
  title: () => (page.value > 1 ? `Insights, page ${page.value} | Altisly` : 'Insights | Altisly'),
  description:
    'Engineering deep dives, architecture decisions and strategic analysis from the Altisly studio.',
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
})

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function readTime(words: number) {
  const mins = Math.max(1, Math.round(words / 200))
  return `${mins} min read`
}
</script>
