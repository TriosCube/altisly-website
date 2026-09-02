<template>
  <div>
    <HeroSection />
    <MarqueeSection />
    <JourneySection />
    <BentoGrid />
    <PrinciplesSection />
    <WorkShowcase />
    <TestimonialSection />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/landing/HeroSection.vue'
import MarqueeSection from '@/components/landing/MarqueeSection.vue'
import JourneySection from '@/components/landing/JourneySection.vue'
import BentoGrid from '@/components/landing/BentoGrid.vue'
import PrinciplesSection from '@/components/landing/PrinciplesSection.vue'
import WorkShowcase from '@/components/landing/WorkShowcase.vue'
import TestimonialSection from '@/components/landing/TestimonialSection.vue'
import CtaSection from '@/components/landing/CtaSection.vue'
import { metaDescriptions } from '@/data/site'

useSeoMeta({
  title: 'Altisly · We build the heavy systems',
  description: metaDescriptions.home,
})
</script>
