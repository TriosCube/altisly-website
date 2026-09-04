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
    label: 'Altisly',
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

const viewBox = '0 0 36 32'

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

    <template v-else>
      <svg
        class="ic-logo__mark"
        :viewBox="viewBox"
        fill="currentColor"
        v-bind="variant === 'symbol' ? a11y : { 'aria-hidden': 'true' }"
      >
        <path
          d="M1 3h8l10 10h-8L1 3Zm26 0h8L25 13h-8L27 3ZM11 19h8L9 29H1l10-10Zm6 0h8l10 10h-8L17 19Z"
        />
      </svg>

      <template v-if="variant === 'full'">
        <span class="ic-logo__rule" aria-hidden="true"></span>
        <span class="ic-logo__word" :aria-hidden="decorative ? 'true' : undefined">Altisly</span>
      </template>
    </template>
  </component>
</template>

<style scoped>
.ic-logo {
  display: inline-flex;
  align-items: center;
  gap: calc(var(--ic-logo-h) * 0.22);
  flex: none;
  color: var(--ic-logo-ink, var(--color-deep, #11231c));
}

:root[data-theme='dark'] .ic-logo--auto {
  color: var(--ic-logo-ink, var(--brand, #c8f75d));
}

.ic-logo--on-dark {
  color: var(--ic-logo-ink, var(--brand, #c8f75d));
}

.ic-logo--rail {
  color: var(--ic-logo-ink, var(--bg, #f4f6f2));
}

.ic-logo__mark {
  display: block;
  height: var(--ic-logo-h);
  width: auto;
}

.ic-logo__rule {
  display: block;
  width: max(1px, calc(var(--ic-logo-h) * 0.04));
  height: calc(var(--ic-logo-h) * 0.72);
  border-radius: 1px;
  background: currentColor;
}

.ic-logo__word {
  font-family: var(--font-sans);
  font-size: calc(var(--ic-logo-h) * 0.6);
  font-weight: 500;
  letter-spacing: 0.09em;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
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
