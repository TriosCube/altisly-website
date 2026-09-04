<template>
  <div>
    <PageIntro eyebrow="Legal" :title="title" :lede="updated">
      <template #meta>
        <div class="flex flex-wrap gap-2">
          <NuxtLink
            v-for="link in legalLinks"
            :key="link.to"
            :to="link.to"
            class="chip bg-surface-2 border-base text-[12px] hover:border-strong transition-colors"
            :class="link.to === route.path ? 'bg-brand text-on-brand border-brand' : 'text-muted'"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </template>
    </PageIntro>

    <section class="py-14">
      <div class="container-isura flex flex-col lg:flex-row gap-12">
        <aside class="lg:w-60 flex-shrink-0">
          <div class="lg:sticky lg:top-24">
            <p class="font-code text-[10.5px] tracking-[0.1em] uppercase text-muted mb-4">
              Contents
            </p>
            <nav class="flex flex-col">
              <a
                v-for="section in toc"
                :key="section.id"
                :href="`#${section.id}`"
                class="text-[13px] text-muted hover:text-body py-1.5 pl-3 border-l-2 border-transparent hover:border-brand-deep leading-snug transition-colors"
              >
                {{ section.label }}
              </a>
            </nav>
          </div>
        </aside>

        <article class="flex-1 min-w-0">
          <div
            v-if="intro || $slots.intro"
            class="rounded-isura-lg border border-base bg-surface-2 p-5 mb-10 text-[14px] text-muted leading-relaxed"
          >
            <slot name="intro">{{ intro }}</slot>
          </div>

          <slot name="before" />

          <div v-for="section in sections" :id="section.id" :key="section.id" class="mb-11">
            <h2
              class="text-[21px] font-bold tracking-[-0.02em] mb-4 pb-3 border-b border-base"
            >
              {{ section.title }}
            </h2>
            <div class="flex flex-col gap-4">
              <p
                v-for="para in section.body"
                :key="para"
                class="text-[14.5px] text-muted leading-relaxed"
              >
                {{ para }}
              </p>

              <div v-if="section.subsections" class="flex flex-col gap-5">
                <div v-for="sub in section.subsections" :key="sub.title">
                  <h3 class="font-semibold text-[14.5px] mb-2">{{ sub.title }}</h3>
                  <ul class="flex flex-col gap-2">
                    <li
                      v-for="item in sub.items"
                      :key="item"
                      class="flex items-start gap-3 text-[14px] text-muted leading-relaxed"
                    >
                      <span class="w-1.5 h-1.5 rounded-full bg-brand-deep flex-shrink-0 mt-2"></span>
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>

              <ul v-if="section.list" class="flex flex-col gap-2">
                <li
                  v-for="item in section.list"
                  :key="item"
                  class="flex items-start gap-3 text-[14px] text-muted leading-relaxed"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-brand-deep flex-shrink-0 mt-2"></span>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <slot name="after" />
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PageIntro from '@/components/ui/PageIntro.vue'

interface TocEntry {
  id: string
  label: string
}

interface Subsection {
  title: string
  items: string[]
}

interface Section {
  id: string
  title: string
  body?: string[]
  list?: string[]
  subsections?: Subsection[]
}

defineProps<{
  title: string
  updated: string
  toc: TocEntry[]
  sections: Section[]
  intro?: string
}>()

const route = useRoute()

const legalLinks = [
  { to: '/legal/privacy', label: 'Privacy Policy' },
  { to: '/legal/terms', label: 'Terms of Service' },
  { to: '/legal/notice', label: 'Legal Notice' },
]
</script>
