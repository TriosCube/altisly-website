<template>
  <div>
    <PageIntro
      eyebrow="The work"
      title="Built to hold up."
      lede="Six platforms across treasury, payments, identity and health infrastructure. Each one shaped around the pressure it must survive, and each one still doing its job."
    >
      <template #actions>
        <AppButton variant="lime" to="/diagnose">Run a diagnostic →</AppButton>
        <AppButton variant="ghost" to="/contact">Start a build</AppButton>
      </template>
    </PageIntro>

    <section class="py-16">
      <div class="container-isura">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <NuxtLink v-for="project in projects" :key="project.slug" :to="`/work/${project.slug}`">
            <ProjectCard :project="project" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import PageIntro from '@/components/ui/PageIntro.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import AppButton from '@/components/ui/AppButton.vue'
import CtaSection from '@/components/landing/CtaSection.vue'
import { projects } from '@/data/projects'
import { metaDescriptions } from '@/data/site'

useSeoMeta({
  title: 'Work | Altisly',
  description: metaDescriptions.work,
})
</script>
