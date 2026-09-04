<template>
  <div>
    <HeroSection />
    <MarqueeSection />
    <ProblemsSection />
    <ModelSection />
    <StatementSection />
    <JourneySection />
    <WhoWeAre />
    <PrinciplesSection />
    <BeliefSection />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/landing/HeroSection.vue'
import MarqueeSection from '@/components/landing/MarqueeSection.vue'
import ProblemsSection from '@/components/landing/ProblemsSection.vue'
import ModelSection from '@/components/landing/ModelSection.vue'
import StatementSection from '@/components/landing/StatementSection.vue'
import JourneySection from '@/components/landing/JourneySection.vue'
import WhoWeAre from '@/components/landing/WhoWeAre.vue'
import PrinciplesSection from '@/components/landing/PrinciplesSection.vue'
import BeliefSection from '@/components/landing/BeliefSection.vue'
import CtaSection from '@/components/landing/CtaSection.vue'
import { metaDescriptions } from '@/data/site'

useSeoMeta({
  title: 'Altisly · We build the systems businesses run on',
  description: metaDescriptions.home,
})
</script>
