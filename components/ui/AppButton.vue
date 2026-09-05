<template>
  <component
    :is="to ? NuxtLink : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :class="['btn-base', sizeClass, variantClass, 'active:translate-y-px']"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, resolveComponent } from 'vue'

const NuxtLink = resolveComponent('NuxtLink')

const props = withDefaults(
  defineProps<{
    variant?: 'lime' | 'ghost' | 'on-dark-ghost' | 'primary'
    size?: 'sm' | 'md' | 'lg'
    href?: string
    to?: string
  }>(),
  {
    variant: 'lime',
    size: 'md',
  },
)

const sizeClass = computed(
  () =>
    ({
      sm: 'btn-sm',
      md: '',
      lg: 'btn-lg',
    })[props.size],
)

const variantClass = computed(
  () =>
    ({
      lime: 'btn-lime',
      ghost: 'btn-ghost',
      'on-dark-ghost': 'btn-on-dark-ghost',
      primary: 'bg-invert text-invert hover:bg-deep-2',
    })[props.variant],
)
</script>
