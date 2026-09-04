<template>
  <div>
    <PageIntro
      eyebrow="Contact"
      title="Talk to an engineer."
      lede="Tell us about the operation, the pressure it runs under, and the system it needs. An engineer replies, not a sales team."
    >
      <template #actions>
        <AppButton variant="ghost" to="/diagnose">Run a diagnostic first →</AppButton>
      </template>
    </PageIntro>

    <ContactSection />

    <section class="py-16">
      <div class="container-isura grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16">
        <div>
          <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">
            Before you write
          </span>
          <h2
            class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 max-w-[14ch]"
          >
            What makes a first message useful.
          </h2>
          <p class="text-muted text-[15px] leading-relaxed max-w-[42ch] mt-5">
            Four lines is plenty. The more concrete the operation, the more concrete the reply.
          </p>
        </div>

        <div class="bento-card">
          <ul class="flex flex-col gap-4">
            <li
              v-for="(item, i) in messageChecklist"
              :key="item"
              class="flex items-start gap-4 text-[15px] leading-relaxed"
            >
              <span class="font-code text-[12px] text-brand-deep pt-1 w-6 flex-shrink-0">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="pb-20">
      <div class="container-isura">
        <span class="font-code text-[11px] tracking-[0.1em] uppercase text-muted">Questions</span>
        <h2
          class="text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.03em] leading-[1.05] mt-3 mb-8"
        >
          What happens after you send it.
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <article v-for="faq in contactFaqs" :key="faq.q" class="bento-card">
            <h3 class="text-[16px] font-semibold tracking-[-0.015em] mb-2.5">{{ faq.q }}</h3>
            <p class="text-muted text-[14.5px] leading-relaxed">{{ faq.a }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PageIntro from '@/components/ui/PageIntro.vue'
import AppButton from '@/components/ui/AppButton.vue'
import ContactSection from '@/components/ContactSection.vue'
import { contactFaqs, messageChecklist } from '@/data/content'
import { metaDescriptions } from '@/data/site'

useSeoMeta({
  title: 'Contact | Altisly',
  description: metaDescriptions.contact,
})
</script>
