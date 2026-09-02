<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

type Variant = 'full' | 'symbol'
type Tone = 'auto' | 'on-dark' | 'rail'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    tone?: Tone
    size?: Size | number | string
    src?: string
    to?: string | object
    label?: string
    decorative?: boolean
  }>(),
  {
    variant: 'full',
    tone: 'auto',
    size: 'md',
    src: undefined,
    to: undefined,
    label: 'Isura',
    decorative: false,
  },
)

const brandSrc = computed(() => props.src)

const SIZES: Record<Size, string> = { sm: '20px', md: '28px', lg: '36px' }

const height = computed(() => {
  const s = props.size
  if (typeof s === 'number') return `${s}px`
  if (s in SIZES) return SIZES[s as Size]
  return String(s)
})

const viewBox = computed(() => (props.variant === 'symbol' ? '0 0 36 32' : '0 0 216 40'))

const a11y = computed(() =>
  props.decorative
    ? { 'aria-hidden': 'true' as const, role: undefined, 'aria-label': undefined }
    : { 'aria-hidden': undefined, role: 'img', 'aria-label': props.label },
)
</script>

<template>
  <component
    :is="to ? RouterLink : 'span'"
    :to="to"
    class="ic-logo"
    :class="[`ic-logo--${tone}`, { 'ic-logo--link': to }]"
    :style="{ '--ic-logo-h': height }"
  >
    <img
      v-if="brandSrc"
      :src="brandSrc"
      class="ic-logo__tenant"
      :alt="decorative ? '' : label"
      v-bind="a11y"
    />

    <svg
      v-else-if="variant === 'symbol'"
      class="ic-logo__mark"
      :viewBox="viewBox"
      fill="currentColor"
      v-bind="a11y"
    >
      <path
        d="M1 3h8l10 10h-8L1 3Zm26 0h8L25 13h-8L27 3ZM11 19h8L9 29H1l10-10Zm6 0h8l10 10h-8L17 19Z"
      />
    </svg>

    <svg v-else class="ic-logo__mark" :viewBox="viewBox" fill="currentColor" v-bind="a11y">
      <path
        d="M1 5h8l10 10h-8L1 5Zm26 0h8L25 15h-8L27 5ZM11 21h8L9 31H1l10-10Zm6 0h8l10 10h-8L17 21Z"
      />
      <path d="M43 4h2v32h-2zM56 8h5v24h-5z" />
      <path
        d="M70 8h24v4H75c-3 0-4 1-4 3s1 3 4 3h13c6 0 9 2 9 7s-3 7-9 7H66v-4h21c3 0 5-1 5-3s-2-3-5-3H74c-6 0-8-2-8-7s3-7 4-7Z"
      />
      <path d="M104 8h5v16c0 3 2 4 7 4h7c5 0 7-1 7-4V8h5v17c0 5-4 7-12 7h-7c-8 0-12-2-12-7V8Z" />
      <path
        fill-rule="evenodd"
        d="M144 8h20c7 0 10 3 10 8 0 4-2 7-8 8l9 8h-7l-8-8h-11v8h-5V8Zm5 4v8h14c4 0 6-1 6-4s-2-4-6-4h-14Z"
      />
      <path d="m183 32 13-24h6l13 24h-6l-10-19-10 19h-6Z" />
    </svg>
  </component>
</template>

<style scoped>
.ic-logo {
  display: inline-flex;
  align-items: center;
  flex: none;
  color: var(--ic-logo-ink, #0e2d22);
}

:root[data-theme='dark'] .ic-logo--auto {
  color: var(--ic-logo-ink, var(--brand, #c8f75d));
}

.ic-logo--on-dark {
  color: var(--ic-logo-ink, var(--brand, #c8f75d));
}

.ic-logo--rail {
  color: var(--ic-logo-ink, #f4f6f2);
}

.ic-logo__mark {
  display: block;
  height: var(--ic-logo-h);
  width: auto;
}

.ic-logo__tenant {
  display: block;
  height: var(--ic-logo-h);
  width: auto;
  max-width: 220px;
  object-fit: contain;
}

.ic-logo--link {
  text-decoration: none;
  border-radius: 6px;
  transition: opacity 0.15s ease;
}
.ic-logo--link:hover {
  opacity: 0.82;
}
.ic-logo--link:focus-visible {
  outline: 2px solid var(--focus, var(--brand, #c8f75d));
  outline-offset: 3px;
}
</style>
