<template>
  <div class="bg-page min-h-screen shell">
    <NavBar />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>

  <AskPanel />
</template>

<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AskPanel from '@/components/ui/AskPanel.vue'
</script>

<style>
/* Opening the panel narrows the page rather than covering it: the shell keeps the width the panel
   is not using, so nothing ends up underneath it. Below the panel's own breakpoint it takes the
   whole screen, and pushing would leave nothing to read. */
:root {
  --ask-w: 24rem;
}

.shell {
  transition: padding-right 320ms cubic-bezier(0.22, 1, 0.36, 1);
}

@media (min-width: 641px) {
  /* Display type is sized in --vwu, so narrowing the page narrows the headlines with it rather than
     letting them run on behind the panel. */
  html.ask-open {
    --vwu: calc((100vw - var(--ask-w)) / 100);
  }

  html.ask-open .shell {
    padding-right: var(--ask-w);
  }

  /* Anything fixed to the viewport has to keep clear of the dock as well, or it ends up behind it
     while the rest of the page has already moved. */
  html.ask-open .cookie-banner {
    left: calc(50% - var(--ask-w) / 2);
  }
}

@media (prefers-reduced-motion: reduce) {
  .shell {
    transition: none;
  }
}
</style>
