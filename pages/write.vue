<template>
  <div class="min-h-screen bg-gray-50">

    <!-- ── LOGIN ───────────────────────────────────────────────────────────── -->
    <div v-if="!authenticated" class="min-h-screen flex items-center justify-center px-4">
      <div class="w-full max-w-sm">
        <!-- Logo -->
        <div class="text-center mb-8">
          <NuxtLink to="/" class="inline-block">
            <img src="~/assets/svg/logo_light.svg" alt="Altisly" class="h-8 w-auto mx-auto" />
          </NuxtLink>
          <p class="text-gray-400 text-sm mt-4">Writing dashboard</p>
        </div>

        <div class="bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
          <h1 class="text-xl font-black text-navy-900 mb-1">Sign in</h1>
          <p class="text-gray-500 text-sm mb-6">Access the private blog management dashboard.</p>

          <form @submit.prevent="login">
            <div class="mb-4">
              <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Username</label>
              <input
                v-model="loginForm.username"
                type="text"
                autocomplete="username"
                required
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
                placeholder="editor"
              />
            </div>
            <div class="mb-6">
              <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Password</label>
              <input
                v-model="loginForm.password"
                type="password"
                autocomplete="current-password"
                required
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
              />
            </div>

            <div v-if="loginError" class="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
              {{ loginError }}
            </div>

            <button
              type="submit"
              :disabled="loginPending"
              class="w-full btn-primary py-3 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {{ loginPending ? 'Signing in…' : 'Open dashboard' }}
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- ── DASHBOARD ───────────────────────────────────────────────────────── -->
    <template v-else>

      <!-- Top bar -->
      <header class="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <NuxtLink to="/" class="flex items-center">
              <img src="~/assets/svg/logo_light.svg" alt="Altisly" class="h-6 w-auto" />
            </NuxtLink>
            <span class="text-gray-300">/</span>
            <span class="text-sm font-semibold text-gray-600">Blog Dashboard</span>
          </div>
          <div class="flex items-center gap-3">
            <NuxtLink to="/blog" target="_blank" class="text-sm text-gray-500 hover:text-navy-900 transition-colors font-medium">
              View blog ↗
            </NuxtLink>
            <button @click="logout" class="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50">
              Log out
            </button>
          </div>
        </div>
      </header>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <!-- ── EDITOR ── -->
        <template v-if="view === 'editor'">
          <div class="flex items-center justify-between mb-6">
            <button @click="cancelEdit" class="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-navy-900 transition-colors group">
              <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to posts
            </button>
            <h1 class="text-lg font-black text-navy-900">{{ editPost.id ? 'Edit post' : 'New post' }}</h1>
          </div>

          <div v-if="saveError" class="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
            {{ saveError }}
          </div>

          <form @submit.prevent="savePost" class="flex flex-col lg:flex-row gap-6 items-start">

            <!-- Main column -->
            <div class="flex-1 space-y-4">
              <div>
                <label class="write-label">Title</label>
                <input
                  v-model="editPost.title"
                  @input="autoSlug"
                  type="text"
                  required
                  class="write-input"
                  placeholder="Post title…"
                />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="sm:col-span-2">
                  <label class="write-label">Slug</label>
                  <input v-model="editPost.slug" type="text" required class="write-input font-mono text-sm" />
                </div>
                <div>
                  <label class="write-label">Status</label>
                  <select v-model="editPost.status" class="write-input">
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="write-label">Author</label>
                  <input v-model="editPost.author" type="text" class="write-input" placeholder="Your name" />
                </div>
                <div>
                  <label class="write-label">Category</label>
                  <select v-model="editPost.category" class="write-input">
                    <option value="Product">Product</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Market">Market</option>
                    <option value="Company">Company</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="write-label">Excerpt</label>
                <textarea v-model="editPost.excerpt" rows="2" required class="write-input resize-none" placeholder="Brief summary shown in listing…" />
              </div>

              <div>
                <label class="write-label flex items-center justify-between">
                  Content
                  <span class="text-gray-400 font-normal normal-case tracking-normal">Markdown supported</span>
                </label>
                <textarea
                  v-model="editPost.content"
                  rows="24"
                  required
                  class="write-input font-mono text-sm resize-y"
                  placeholder="## Your first heading&#10;&#10;Write your post in Markdown…"
                />
              </div>

              <!-- Bottom actions -->
              <div class="flex items-center justify-between pt-2">
                <p v-if="editPost.slug" class="text-xs text-gray-400">
                  Preview at:
                  <NuxtLink :to="`/blog/${editPost.slug}`" target="_blank" class="text-brand-600 hover:underline">/blog/{{ editPost.slug }}</NuxtLink>
                </p>
                <div class="flex gap-3 ml-auto">
                  <button type="button" @click="cancelEdit" class="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                  <button type="submit" :disabled="savePending" class="btn-primary px-6 py-2.5 text-sm disabled:opacity-60 disabled:cursor-not-allowed">
                    {{ savePending ? 'Saving…' : (editPost.id ? 'Update post' : 'Save post') }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Sidebar widgets -->
            <div class="lg:w-64 space-y-4 flex-shrink-0 w-full">

              <!-- Tags -->
              <div class="bg-white rounded-2xl border border-gray-200 p-4">
                <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Tags</h3>
                <div class="flex flex-wrap gap-1.5 mb-3">
                  <button
                    v-for="tag in allKnownTags"
                    :key="tag"
                    type="button"
                    @click="toggleTag(tag)"
                    class="px-2.5 py-1 rounded-full text-xs font-semibold transition-all border"
                    :class="editPost.tags.includes(tag)
                      ? 'bg-brand-600 text-white border-brand-600'
                      : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-brand-400'"
                  >
                    {{ tag }}
                  </button>
                </div>
                <div class="flex gap-2">
                  <input
                    v-model="newTag"
                    type="text"
                    placeholder="New tag…"
                    class="flex-1 px-3 py-1.5 rounded-lg border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-400"
                    @keydown.enter.prevent="addTag"
                  />
                  <button type="button" @click="addTag" class="px-3 py-1.5 rounded-lg bg-gray-100 text-xs font-semibold text-gray-600 hover:bg-gray-200 transition-colors">
                    Add
                  </button>
                </div>
              </div>

              <!-- Preview stats -->
              <div class="bg-white rounded-2xl border border-gray-200 p-4">
                <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Preview</h3>
                <div class="space-y-2 text-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-gray-500">Words</span>
                    <span class="font-semibold text-navy-900">{{ wordCount }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-500">Read time</span>
                    <span class="font-semibold text-navy-900">{{ readTimePreview }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-500">Status</span>
                    <span
                      class="font-semibold px-2 py-0.5 rounded-full"
                      :class="editPost.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'"
                    >
                      {{ editPost.status }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </template>

        <!-- ── POST LIST ── -->
        <template v-else>
          <!-- Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span class="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-100">Private dashboard</span>
              <h1 class="text-2xl font-black text-navy-900 mt-2">
                {{ dashboardTab === 'posts' ? 'Blog Posts' : 'Contact Queries' }}
              </h1>
              <p class="text-gray-500 text-sm mt-0.5">
                {{ dashboardTab === 'posts'
                  ? 'Manage, publish, and organise all blog content.'
                  : 'Review all enquiry records routed to hello@altisly.com.' }}
              </p>
            </div>
            <button
              v-if="dashboardTab === 'posts'"
              @click="createPost"
              class="btn-primary whitespace-nowrap self-start sm:self-auto"
            >
              + New post
            </button>
          </div>

          <div class="flex gap-2 mb-6">
            <button
              @click="dashboardTab = 'posts'"
              class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
              :class="dashboardTab === 'posts' ? 'bg-navy-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
            >
              Posts
            </button>
            <button
              @click="dashboardTab = 'enquiries'"
              class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
              :class="dashboardTab === 'enquiries' ? 'bg-navy-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
            >
              Contact Queries
            </button>
          </div>

          <template v-if="dashboardTab === 'posts'">
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <p class="text-xs text-gray-400 mb-1">Total</p>
                <p class="text-2xl font-black text-navy-900">{{ posts.length }}</p>
              </div>
              <div class="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <p class="text-xs text-gray-400 mb-1">Published</p>
                <p class="text-2xl font-black text-green-600">{{ publishedCount }}</p>
              </div>
              <div class="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <p class="text-xs text-gray-400 mb-1">Drafts</p>
                <p class="text-2xl font-black text-gray-500">{{ draftCount }}</p>
              </div>
            </div>

            <!-- Filters + search -->
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm mb-4">
              <div class="flex flex-wrap items-center gap-3 p-4 border-b border-gray-100">
                <div class="flex gap-2">
                  <button
                    v-for="f in (['all', 'published', 'draft'] as const)"
                    :key="f"
                    @click="listFilter = f"
                    class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                    :class="listFilter === f ? 'bg-navy-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
                  >
                    {{ f.charAt(0).toUpperCase() + f.slice(1) }}
                    <span class="ml-1 opacity-60">
                      ({{ f === 'all' ? posts.length : f === 'published' ? publishedCount : draftCount }})
                    </span>
                  </button>
                </div>
                <input
                  v-model="searchQuery"
                  type="search"
                  placeholder="Search posts…"
                  class="ml-auto px-3 py-1.5 rounded-lg border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-400 w-48"
                />
              </div>

              <!-- Loading -->
              <div v-if="postsLoading" class="p-8 text-center text-gray-400 text-sm">Loading posts…</div>

              <!-- Empty -->
              <div v-else-if="filteredListPosts.length === 0" class="p-8 text-center text-gray-400 text-sm">
                <template v-if="posts.length === 0">
                  No posts yet.
                  <button @click="createPost" class="text-brand-600 font-semibold hover:underline ml-1">Create your first post →</button>
                </template>
                <template v-else>No posts match this filter.</template>
              </div>

              <!-- Table -->
              <div v-else class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead class="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th class="text-left px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Title</th>
                      <th class="text-left px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                      <th class="text-left px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider hidden md:table-cell">Category</th>
                      <th class="text-left px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider hidden lg:table-cell">Updated</th>
                      <th class="text-right px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-50">
                    <tr v-for="p in filteredListPosts" :key="p.id" class="hover:bg-gray-50 transition-colors">
                      <td class="px-5 py-4">
                        <p class="font-semibold text-navy-900 text-sm">{{ p.title }}</p>
                        <p class="text-gray-400 text-xs mt-0.5">/blog/{{ p.slug }}</p>
                      </td>
                      <td class="px-4 py-4">
                        <span
                          class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                          :class="p.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'"
                        >
                          {{ p.status }}
                        </span>
                      </td>
                      <td class="px-4 py-4 hidden md:table-cell">
                        <span class="text-xs text-gray-500">{{ p.category || '—' }}</span>
                      </td>
                      <td class="px-4 py-4 hidden lg:table-cell">
                        <span class="text-xs text-gray-400">{{ formatDate(p.updatedAt || p.createdAt) }}</span>
                      </td>
                      <td class="px-5 py-4">
                        <div class="flex items-center justify-end gap-2 flex-wrap">
                          <NuxtLink
                            v-if="p.status === 'published'"
                            :to="`/blog/${p.slug}`"
                            target="_blank"
                            class="px-2.5 py-1 rounded-lg border border-brand-200 text-brand-600 text-xs font-semibold hover:bg-brand-50 transition-colors"
                          >
                            View
                          </NuxtLink>
                          <button
                            @click="toggleStatus(p)"
                            class="px-2.5 py-1 rounded-lg border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-gray-50 transition-colors"
                          >
                            {{ p.status === 'published' ? 'Unpublish' : 'Publish' }}
                          </button>
                          <button
                            @click="editExisting(p)"
                            class="px-2.5 py-1 rounded-lg border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-gray-50 transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            @click="deletePost(p.id)"
                            :disabled="deletingId === p.id"
                            class="px-2.5 py-1 rounded-lg border border-red-200 text-red-600 text-xs font-semibold hover:bg-red-50 transition-colors disabled:opacity-50"
                          >
                            {{ deletingId === p.id ? '…' : 'Delete' }}
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </template>

          <template v-else>
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <p class="text-xs text-gray-400 mb-1">Total Queries</p>
                <p class="text-2xl font-black text-navy-900">{{ enquiries.length }}</p>
              </div>
              <div class="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <p class="text-xs text-gray-400 mb-1">Contact</p>
                <p class="text-2xl font-black text-navy-900">{{ enquiries.filter((q) => q.type === 'contact').length }}</p>
              </div>
              <div class="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <p class="text-xs text-gray-400 mb-1">Recipient</p>
                <p class="text-sm font-black text-brand-600 mt-2">hello@altisly.com</p>
              </div>
            </div>

            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm mb-4">
              <div v-if="enquiriesLoading" class="p-8 text-center text-gray-400 text-sm">Loading contact queries…</div>
              <div v-else-if="enquiries.length === 0" class="p-8 text-center text-gray-400 text-sm">No contact queries yet.</div>
              <div v-else class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead class="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th class="text-left px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Type</th>
                      <th class="text-left px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Name / Email</th>
                      <th class="text-left px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider hidden md:table-cell">Company</th>
                      <th class="text-left px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider hidden lg:table-cell">Message</th>
                      <th class="text-left px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Received</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-50">
                    <tr v-for="q in enquiries" :key="q.id" class="hover:bg-gray-50 transition-colors align-top">
                      <td class="px-5 py-4">
                        <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-50 text-brand-600 border border-brand-100">
                          {{ q.type }}
                        </span>
                      </td>
                      <td class="px-4 py-4">
                        <p class="font-semibold text-navy-900 text-sm">{{ q.name || '—' }}</p>
                        <p class="text-gray-500 text-xs mt-0.5">{{ q.email }}</p>
                        <p class="text-gray-400 text-xs mt-0.5">Source: {{ q.sourcePage }}</p>
                      </td>
                      <td class="px-4 py-4 hidden md:table-cell">
                        <p class="text-xs text-gray-500">{{ q.company || '—' }}</p>
                        <p class="text-xs text-gray-400 mt-1">{{ q.country || '—' }}</p>
                      </td>
                      <td class="px-4 py-4 hidden lg:table-cell">
                        <p class="text-xs text-gray-500 max-w-xs whitespace-pre-line">{{ q.message || q.useCase || '—' }}</p>
                      </td>
                      <td class="px-4 py-4">
                        <p class="text-xs text-gray-500">{{ formatDate(q.createdAt) }}</p>
                        <p class="text-[11px] text-gray-400 mt-1">{{ q.recipient }}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </template>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

useSeoMeta({ title: 'Write | Altisly', robots: 'noindex,nofollow' })

type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string
  category: string
  tags: string[]
  content: string
  author: string
  status: 'draft' | 'published'
  updatedAt: string
  createdAt: string
}

type EnquiryRecord = {
  id: string
  type: 'contact' | 'api-keys' | 'newsletter'
  name: string
  email: string
  company: string
  country: string
  phone: string
  message: string
  useCase: string
  newsletter: boolean
  sourcePage: string
  recipient: string
  createdAt: string
}

const emptyPost = (): BlogPost => ({
  id: '', title: '', slug: '', excerpt: '', coverImage: '', category: 'Product',
  tags: [], content: '', author: '', status: 'draft', updatedAt: '', createdAt: '',
})

const toSlug = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')

// ── Auth state ────────────────────────────────────────────────────────────────
const authenticated = ref(false)
const loginForm = reactive({ username: '', password: '' })
const loginError = ref('')
const loginPending = ref(false)

onMounted(async () => {
  const res = await $fetch<{ authenticated: boolean }>('/api/write/session').catch(() => ({ authenticated: false }))
  authenticated.value = res.authenticated
  if (authenticated.value) {
    await Promise.all([loadPosts(), loadEnquiries()])
  }
})

const login = async () => {
  loginPending.value = true
  loginError.value = ''
  try {
    await $fetch('/api/write/login', {
      method: 'POST',
      body: { username: loginForm.username, password: loginForm.password },
    })
    authenticated.value = true
    await Promise.all([loadPosts(), loadEnquiries()])
  } catch {
    loginError.value = 'Access denied. Check your credentials and try again.'
  } finally {
    loginPending.value = false
  }
}

const logout = async () => {
  await $fetch('/api/write/logout', { method: 'POST' }).catch(() => {})
  authenticated.value = false
  loginForm.username = ''
  loginForm.password = ''
}

// ── Post list ─────────────────────────────────────────────────────────────────
const posts = ref<BlogPost[]>([])
const enquiries = ref<EnquiryRecord[]>([])
const postsLoading = ref(false)
const enquiriesLoading = ref(false)
const listFilter = ref<'all' | 'published' | 'draft'>('all')
const searchQuery = ref('')
const deletingId = ref<string | null>(null)
const dashboardTab = ref<'posts' | 'enquiries'>('posts')

const publishedCount = computed(() => posts.value.filter((p) => p.status === 'published').length)
const draftCount = computed(() => posts.value.length - publishedCount.value)

const filteredListPosts = computed(() => {
  let list = [...posts.value].sort((a, b) =>
    (b.updatedAt || b.createdAt).localeCompare(a.updatedAt || a.createdAt),
  )
  if (listFilter.value !== 'all') list = list.filter((p) => p.status === listFilter.value)
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter((p) => p.title.toLowerCase().includes(q) || p.tags.join(' ').toLowerCase().includes(q))
  }
  return list
})

const loadPosts = async () => {
  postsLoading.value = true
  try {
    posts.value = await $fetch<BlogPost[]>('/api/write/posts')
  } finally {
    postsLoading.value = false
  }
}

const loadEnquiries = async () => {
  enquiriesLoading.value = true
  try {
    enquiries.value = await $fetch<EnquiryRecord[]>('/api/write/enquiries')
  } finally {
    enquiriesLoading.value = false
  }
}

const toggleStatus = async (post: BlogPost) => {
  const updated: BlogPost = {
    ...post,
    status: post.status === 'published' ? 'draft' : 'published',
    updatedAt: new Date().toISOString(),
  }
  const saved = await $fetch<BlogPost>('/api/write/posts', { method: 'POST', body: updated })
  posts.value = posts.value.map((p) => (p.id === saved.id ? saved : p))
}

const deletePost = async (id: string) => {
  if (!confirm('Delete this post permanently?')) return
  deletingId.value = id
  try {
    await $fetch(`/api/write/posts/${id}`, { method: 'DELETE' })
    posts.value = posts.value.filter((p) => p.id !== id)
  } finally {
    deletingId.value = null
  }
}

// ── Editor ────────────────────────────────────────────────────────────────────
const view = ref<'list' | 'editor'>('list')
const editPost = reactive<BlogPost>(emptyPost())
const saveError = ref('')
const savePending = ref(false)
const newTag = ref('')

const allKnownTags = computed(() => {
  const set = new Set<string>(['Product', 'Engineering', 'Market', 'Payments', 'Open Banking'])
  posts.value.forEach((p) => p.tags.forEach((t) => set.add(t)))
  editPost.tags.forEach((t) => set.add(t))
  return Array.from(set).sort()
})

const wordCount = computed(() => editPost.content.split(/\s+/).filter(Boolean).length)
const readTimePreview = computed(() => `${Math.max(1, Math.round(wordCount.value / 200))} min read`)

const autoSlug = () => {
  if (!editPost.id) editPost.slug = toSlug(editPost.title)
}

const toggleTag = (tag: string) => {
  const idx = editPost.tags.indexOf(tag)
  if (idx === -1) editPost.tags.push(tag)
  else editPost.tags.splice(idx, 1)
}

const addTag = () => {
  const t = newTag.value.trim()
  if (!t) return
  if (!editPost.tags.includes(t)) editPost.tags.push(t)
  newTag.value = ''
}

const createPost = () => {
  Object.assign(editPost, emptyPost())
  saveError.value = ''
  view.value = 'editor'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const editExisting = (post: BlogPost) => {
  Object.assign(editPost, { ...post })
  saveError.value = ''
  view.value = 'editor'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const cancelEdit = () => {
  view.value = 'list'
}

const savePost = async () => {
  savePending.value = true
  saveError.value = ''
  const now = new Date().toISOString()
  const payload: BlogPost = {
    ...editPost,
    id: editPost.id || crypto.randomUUID(),
    slug: editPost.slug || toSlug(editPost.title),
    updatedAt: now,
    createdAt: editPost.createdAt || now,
  }
  try {
    const saved = await $fetch<BlogPost>('/api/write/posts', { method: 'POST', body: payload })
    const idx = posts.value.findIndex((p) => p.id === saved.id)
    if (idx === -1) posts.value.unshift(saved)
    else posts.value[idx] = saved
    view.value = 'list'
  } catch {
    saveError.value = 'Could not save post. Please try again.'
  } finally {
    savePending.value = false
  }
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
</script>

<style scoped>
.write-label {
  @apply block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5;
}
.write-input {
  @apply w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-white;
}
</style>
