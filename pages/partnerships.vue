<template>
  <div>
    <PageIntro
      eyebrow="Partnerships"
      title="Three ways we work together."
      lede="We co-build with institutions, founders and platform teams who need systems that hold up under regulation."
    >
      <template #actions>
        <AppButton variant="lime" to="/contact">Start a conversation →</AppButton>
        <AppButton variant="ghost" to="/work">See the work</AppButton>
      </template>
    </PageIntro>

    <section class="py-16">
      <div class="container-isura">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <article v-for="program in partnerPrograms" :key="program.title" class="bento-card">
            <h3 class="text-[24px] font-bold tracking-[-0.022em] leading-[1.1] mb-3">
              {{ program.title }}
            </h3>
            <p class="text-muted text-[14.5px] leading-relaxed mb-7">{{ program.description }}</p>
            <ul class="flex flex-col gap-2.5 mt-auto">
              <li
                v-for="benefit in program.benefits"
                :key="benefit"
                class="text-[13.5px] flex items-start gap-2.5"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-brand-deep mt-2 flex-shrink-0"></span>
                {{ benefit }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import PageIntro from '@/components/ui/PageIntro.vue'
import AppButton from '@/components/ui/AppButton.vue'
import CtaSection from '@/components/landing/CtaSection.vue'
import { partnerPrograms } from '@/data/content'

useSeoMeta({
  title: 'Partnerships | Altisly',
  description:
    'Venture co-build, systems rebuild and platform partnership. Three ways to work with the Altisly studio.',
})
</script>
