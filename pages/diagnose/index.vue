<template>
  <DiagnoseScanner />
</template>

<script setup lang="ts">
import DiagnoseScanner from '@/components/diagnose/DiagnoseScanner.vue'
import { metaDescriptions } from '@/data/site'

definePageMeta({ layout: false })

useSeoMeta({
  title: 'Diagnose | Altisly',
  description: metaDescriptions.diagnose,
})
</script>
