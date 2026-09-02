<template>
  <div>
    <div v-if="pending" class="py-24">
      <div class="container-isura max-w-[760px]">
        <div class="skeleton h-5 w-1/4 mb-6"></div>
        <div class="skeleton h-12 w-3/4 mb-4"></div>
        <div class="skeleton h-4 w-full mb-2"></div>
        <div class="skeleton h-4 w-5/6"></div>
      </div>
    </div>

    <div v-else-if="error || !post" class="py-24">
      <div class="container-isura max-w-[760px] text-center">
        <h1 class="text-[32px] font-bold tracking-[-0.03em] mb-3">Post not found.</h1>
        <p class="text-muted mb-7">That piece has moved or was never published.</p>
        <AppButton variant="lime" to="/blog">Back to insights</AppButton>
      </div>
    </div>

    <template v-else>
      <PageIntro eyebrow="Insights" :title="post.title" :lede="post.excerpt">
        <template #meta>
          <div class="flex flex-wrap items-center gap-3">
            <span class="chip bg-brand text-on-brand border-brand text-[11.5px]">{{
              post.category
            }}</span>
            <span class="font-code text-[12px] text-muted">{{ post.author }}</span>
            <span class="font-code text-[12px] text-muted">{{ formatDate(post.createdAt) }}</span>
            <span class="font-code text-[12px] text-muted">{{ readTime(post.content) }}</span>
          </div>
        </template>
      </PageIntro>

      <section class="py-14">
        <div class="container-isura flex flex-col lg:flex-row gap-12">
          <aside v-if="headings.length" class="lg:w-60 flex-shrink-0 lg:order-2">
            <div class="lg:sticky lg:top-24">
              <p class="font-code text-[10.5px] tracking-[0.1em] uppercase text-muted mb-4">
                In this post
              </p>
              <nav class="flex flex-col">
                <a
                  v-for="heading in headings"
                  :key="heading.id"
                  :href="`#${heading.id}`"
                  class="text-[13px] py-1.5 pl-3 border-l-2 leading-snug transition-colors"
                  :class="
                    activeHeading === heading.id
                      ? 'border-brand-deep text-body'
                      : 'border-transparent text-muted hover:text-body'
                  "
                >
                  {{ heading.text }}
                </a>
              </nav>
            </div>
          </aside>

          <article class="flex-1 min-w-0 prose-altisly lg:order-1" v-html="renderedContent"></article>
        </div>
      </section>

      <section v-if="relatedPosts.length" class="pb-20">
        <div class="container-isura">
          <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">Keep reading</span>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
            <NuxtLink
              v-for="related in relatedPosts"
              :key="related.id"
              :to="`/blog/${related.slug}`"
              class="bento-card hover:border-strong transition-colors"
            >
              <span class="chip bg-surface-2 border-base text-[11px] text-muted self-start mb-4">{{
                related.category
              }}</span>
              <h3 class="text-[18px] font-bold tracking-[-0.02em] leading-snug mb-2">
                {{ related.title }}
              </h3>
              <p class="text-muted text-[13.5px] leading-relaxed">{{ related.excerpt }}</p>
            </NuxtLink>
          </div>
        </div>
      </section>

      <CtaSection />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import PageIntro from '@/components/ui/PageIntro.vue'
import AppButton from '@/components/ui/AppButton.vue'
import CtaSection from '@/components/landing/CtaSection.vue'

const route = useRoute()
const { render } = useMarkdown()

interface BlogPost {
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

const renderedContent = computed(() => (post.value ? render(post.value.content) : ''))

const relatedPosts = computed(() => {
  if (!allPosts.value || !post.value) return []
  return allPosts.value.filter((p) => p.slug !== post.value!.slug).slice(0, 3)
})

const headings = computed(() => {
  if (!post.value) return []
  const h2Regex = /^## (.+)$/gm
  const result: { id: string; text: string }[] = []
  let match
  while ((match = h2Regex.exec(post.value.content)) !== null) {
    const text = match[1]
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
    result.push({ id, text })
  }
  return result
})

const activeHeading = ref('')

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

onMounted(() => {
  nextTick(() => {
    const article = document.querySelector('.prose-altisly')
    if (!article) return
    article.querySelectorAll('h2').forEach((el) => {
      el.id = slugify(el.textContent ?? '')
    })
  })

  const onScroll = () => {
    const article = document.querySelector('.prose-altisly')
    if (!article) return
    const h2s = Array.from(article.querySelectorAll('h2'))
    const scrollY = window.scrollY + 120
    let active = ''
    for (const el of h2s) {
      const top = el.getBoundingClientRect().top + window.scrollY
      if (top <= scrollY) active = el.id
    }
    activeHeading.value = active
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

useSeoMeta({
  title: computed(() => (post.value ? `${post.value.title} | Altisly` : 'Insights | Altisly')),
  description: computed(() => post.value?.excerpt ?? ''),
})

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function readTime(content: string) {
  const mins = Math.max(1, Math.round(content.split(/\s+/).length / 200))
  return `${mins} min read`
}
</script>

<style>
@reference '~/assets/css/main.css';
.prose-altisly .md-h1 {
  @apply text-[30px] font-bold tracking-[-0.028em] mt-10 mb-4;
}
.prose-altisly .md-h2 {
  @apply text-[24px] font-bold tracking-[-0.024em] mt-12 mb-4 leading-snug;
}
.prose-altisly .md-h3 {
  @apply text-[19px] font-bold tracking-[-0.02em] mt-8 mb-3 leading-snug;
}
.prose-altisly .md-p {
  @apply text-muted leading-relaxed mb-5 text-[16px];
}
.prose-altisly .md-list {
  @apply mb-6 flex flex-col gap-2 pl-0;
}
.prose-altisly .md-list li {
  @apply flex items-start gap-3 text-muted text-[16px] leading-relaxed;
}
.prose-altisly .md-list li::before {
  content: '';
  @apply w-1.5 h-1.5 rounded-full bg-brand-deep flex-shrink-0 mt-2.5;
}
.prose-altisly .code-block {
  @apply bg-surface-2 border border-base rounded-isura-lg p-6 mb-6 overflow-x-auto;
}
.prose-altisly .code-block code {
  @apply font-code text-[13.5px] leading-relaxed text-body;
}
.prose-altisly .inline-code {
  @apply font-code text-[13.5px] px-1.5 py-0.5 rounded bg-surface-2 text-brand-deep;
}
.prose-altisly strong {
  @apply font-semibold text-body;
}
.prose-altisly em {
  @apply italic;
}
</style>
