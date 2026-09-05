<template>
  <div>
    <div class="landing-top">
      <HeroSection class="landing-hero" />
      <MarqueeSection />
    </div>
    <ProblemsSection />
    <StackSection />
    <WaysInSection />
    <StatementSection />
    <CodeSection />
    <JourneySection />
    <WhoWeAre />
    <BeliefSection />
    <InsightsSection :posts="posts || []" />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/landing/HeroSection.vue'
import MarqueeSection from '@/components/landing/MarqueeSection.vue'
import ProblemsSection from '@/components/landing/ProblemsSection.vue'
import StackSection from '@/components/landing/StackSection.vue'
import WaysInSection from '@/components/landing/WaysInSection.vue'
import StatementSection from '@/components/landing/StatementSection.vue'
import CodeSection from '@/components/landing/CodeSection.vue'
import JourneySection from '@/components/landing/JourneySection.vue'
import WhoWeAre from '@/components/landing/WhoWeAre.vue'
import InsightsSection from '@/components/landing/InsightsSection.vue'
import BeliefSection from '@/components/landing/BeliefSection.vue'
import CtaSection from '@/components/landing/CtaSection.vue'
import { metaDescriptions } from '@/data/site'

useSeoMeta({
  title: 'Altisly · We build the systems businesses run on',
  description: metaDescriptions.home,
})

type Post = {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category: string
  content: string
  createdAt: string
}

const { data: posts } = await useFetch<Post[]>('/api/blog', { default: () => [] })
</script>

<style scoped>
/* Hero and the signal strip are one viewport. The hero takes whatever is left after the strip, so
   the strip is always on screen without anyone having to guess its height. */
.landing-top {
  display: flex;
  flex-direction: column;
  min-height: calc(100svh - var(--nav-h, 4.5rem));
}

.landing-hero {
  flex: 1;
  min-height: 0;
}
</style>
