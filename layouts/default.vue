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
  html.ask-open .shell {
    padding-right: var(--ask-w);
  }
}

@media (prefers-reduced-motion: reduce) {
  .shell {
    transition: none;
  }
}
</style>
