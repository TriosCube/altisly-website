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
  </div>
</template>

<script setup lang="ts">
import PageIntro from '@/components/ui/PageIntro.vue'
import AppButton from '@/components/ui/AppButton.vue'
import ContactSection from '@/components/ContactSection.vue'
import { metaDescriptions } from '@/data/site'

useSeoMeta({
  title: 'Contact | Altisly',
  description: metaDescriptions.contact,
})
</script>
