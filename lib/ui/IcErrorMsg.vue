<template>
  <p v-if="show" :id="id" class="cv-field-error" role="alert">
    <slot>{{ text }}</slot>
  </p>
  <p v-else-if="reserve" class="cv-field-error" aria-hidden="true">&nbsp;</p>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

// Trimmed from the core component: the original resolved HTTP error shapes
// through the services layer, and nothing here passes one.
const props = withDefaults(
  defineProps<{
    id?: string
    error?: string | boolean | null
    reserve?: boolean
  }>(),
  { reserve: false },
)

const slots = useSlots()
const text = computed(() => (typeof props.error === 'string' ? props.error : ''))
const show = computed(() => Boolean(slots.default || text.value))
</script>

<style scoped>
.cv-field-error {
  font-size: 12px;
  line-height: 1.35;
  color: #b4231f;
  margin-top: 0.3rem;
}
</style>
