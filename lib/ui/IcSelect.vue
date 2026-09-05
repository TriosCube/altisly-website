<template>
  <div
    v-if="searchable"
    :class="variant === 'form' ? cn('cv-field', $attrs.class as string) : undefined"
  >
    <label v-if="variant === 'form' && label" :for="selectId" class="cv-field-label">
      {{ label }}
      <span v-if="required" aria-hidden="true" class="ic-field-required">*</span>
    </label>
    <ComboboxRoot
      :model-value="normalizedModelValue"
      :disabled="disabled || loading"
      ignore-filter
      @update:model-value="onUpdate"
      @update:open="onComboOpen"
    >
      <ComboboxAnchor as-child>
        <ComboboxTrigger
          :id="selectId"
          :class="triggerClasses"
          :aria-label="variant === 'filter' ? (ariaLabel ?? placeholder ?? label) : undefined"
          :aria-invalid="error ? 'true' : undefined"
          :aria-describedby="describedBy"
          :aria-required="required ? 'true' : undefined"
        >
          <span class="ic-dropdown-item-content">
            <img
              v-if="selectedOption?.image"
              :src="selectedOption.image"
              alt=""
              class="ic-select-option-image"
            />
            <span :class="['truncate', selectedOption ? 'text-body' : 'text-muted-2']">{{
              selectedLabel
            }}</span>
          </span>
          <span v-if="loading" class="ic-select-spinner" aria-hidden="true" />
          <ChevronDown
            v-else
            :size="variant === 'filter' ? 13 : 14"
            class="ic-dropdown-chevron"
            aria-hidden="true"
          />
        </ComboboxTrigger>
      </ComboboxAnchor>
      <ComboboxPortal>
        <ComboboxContent
          class="ic-dropdown-content"
          position="popper"
          :side-offset="4"
          align="start"
        >
          <div class="ic-dropdown-search">
            <Search :size="13" class="ic-dropdown-search-icon" aria-hidden="true" />
            <ComboboxInput
              v-model="query"
              class="ic-dropdown-search-input"
              :placeholder="searchPlaceholder"
              :display-value="() => ''"
              auto-focus
            />
          </div>
          <ComboboxViewport class="ic-dropdown-viewport" @scroll="onViewportScroll">
            <ComboboxEmpty class="ic-dropdown-empty">{{ t('components.noMatches') }}</ComboboxEmpty>
            <ComboboxItem
              v-for="opt in filteredOptions"
              :key="String(opt.value)"
              :value="itemValue(opt.value)"
              :disabled="opt.disabled"
              class="ic-dropdown-item"
            >
              <span class="ic-dropdown-item-content">
                <img v-if="opt.image" :src="opt.image" alt="" class="ic-select-option-image" />
                {{ opt.label }}
              </span>
              <ComboboxItemIndicator class="ic-dropdown-indicator">
                <Check :size="13" aria-hidden="true" />
              </ComboboxItemIndicator>
            </ComboboxItem>
          </ComboboxViewport>
        </ComboboxContent>
      </ComboboxPortal>
    </ComboboxRoot>
    <IcErrorMsg v-if="variant === 'form'" :id="errorId" :error="error" />
  </div>

  <div v-else-if="variant === 'form'" :class="cn('cv-field', $attrs.class as string)">
    <label v-if="label" :for="selectId" class="cv-field-label">
      {{ label }}
      <span v-if="required" aria-hidden="true" class="ic-field-required">*</span>
    </label>
    <SelectRoot
      :model-value="normalizedModelValue"
      :disabled="disabled || loading"
      @update:model-value="onUpdate"
    >
      <SelectTrigger
        :id="selectId"
        :class="triggerClasses"
        :aria-invalid="error ? 'true' : undefined"
        :aria-describedby="describedBy"
        :aria-required="required ? 'true' : undefined"
        @blur="emit('blur')"
        @focus="emit('focus')"
      >
        <SelectValue :placeholder="placeholder">
          <img
            v-if="selectedOption?.image"
            :src="selectedOption.image"
            alt=""
            class="ic-select-option-image"
          />
          <span :class="['truncate', selectedOption ? 'text-body' : 'text-muted-2']">{{
            selectedLabel
          }}</span>
        </SelectValue>
        <SelectIcon as-child>
          <span v-if="loading" class="ic-select-spinner" aria-hidden="true" />
          <ChevronDown v-else :size="14" class="ic-dropdown-chevron" aria-hidden="true" />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent class="ic-dropdown-content" position="popper" :side-offset="4" align="start">
          <SelectViewport class="ic-dropdown-viewport">
            <SelectItem
              v-for="opt in normalizedOptions"
              :key="String(opt.value)"
              :value="itemValue(opt.value)"
              :disabled="opt.disabled"
              class="ic-dropdown-item"
            >
              <span class="ic-dropdown-item-content">
                <img v-if="opt.image" :src="opt.image" alt="" class="ic-select-option-image" />
                <SelectItemText>{{ opt.label }}</SelectItemText>
              </span>
              <SelectItemIndicator class="ic-dropdown-indicator">
                <Check :size="13" aria-hidden="true" />
              </SelectItemIndicator>
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
    <IcErrorMsg :id="errorId" :error="error" />
  </div>

  <SelectRoot
    v-else
    :model-value="normalizedModelValue"
    :disabled="disabled"
    @update:model-value="onUpdate"
  >
    <SelectTrigger
      :id="selectId"
      :class="triggerClasses"
      :aria-label="ariaLabel ?? placeholder ?? label"
      @blur="emit('blur')"
      @focus="emit('focus')"
    >
      <SelectValue :placeholder="placeholder">
        <img
          v-if="selectedOption?.image"
          :src="selectedOption.image"
          alt=""
          class="ic-select-option-image"
        />
        <span :class="['truncate', selectedOption ? 'text-body' : 'text-muted-2']">{{
          selectedLabel
        }}</span>
      </SelectValue>
      <SelectIcon as-child>
        <span v-if="loading" class="ic-select-spinner" aria-hidden="true" />
        <ChevronDown v-else :size="13" class="ic-dropdown-chevron" aria-hidden="true" />
      </SelectIcon>
    </SelectTrigger>
    <SelectPortal>
      <SelectContent class="ic-dropdown-content" position="popper" :side-offset="4" align="start">
        <SelectViewport class="ic-dropdown-viewport">
          <SelectItem
            v-for="opt in normalizedOptions"
            :key="String(opt.value)"
            :value="itemValue(opt.value)"
            :disabled="opt.disabled"
            class="ic-dropdown-item"
          >
            <span class="ic-dropdown-item-content">
              <img v-if="opt.image" :src="opt.image" alt="" class="ic-select-option-image" />
              <SelectItemText>{{ opt.label }}</SelectItemText>
            </span>
            <SelectItemIndicator class="ic-dropdown-indicator">
              <Check :size="13" aria-hidden="true" />
            </SelectItemIndicator>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<script setup lang="ts">

import { computed, nextTick, ref, useAttrs, useId, watch, onBeforeUnmount } from 'vue'
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  ComboboxRoot,
  ComboboxAnchor,
  ComboboxTrigger,
  ComboboxPortal,
  ComboboxContent,
  ComboboxViewport,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxEmpty,
  type AcceptableValue,
} from 'reka-ui'
import { ChevronDown, Check, Search } from '@lucide/vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from './cn'
import IcErrorMsg from './IcErrorMsg.vue'
import type { IcSelectOption } from './types'
// Only one string here needed translating.
const t = (key: string) => (key === 'components.noMatches' ? 'No matches' : key)

defineOptions({ inheritAttrs: false })

const triggerStyles = cva('ic-dropdown-trigger', {
  variants: {
    variant: {
      form: 'is-input',
      filter: 'is-filter',
    },
    state: {
      default: '',
      error: 'is-error',
    },
  },
  defaultVariants: { variant: 'form', state: 'default' },
})

type TriggerVariants = VariantProps<typeof triggerStyles>

const props = withDefaults(
  defineProps<{
    modelValue?: string | number | null
    options: Array<IcSelectOption | string | number>
    variant?: TriggerVariants['variant']
    label?: string
    error?: string | boolean
    placeholder?: string
    placeholderDisabled?: boolean
    required?: boolean
    disabled?: boolean
    loading?: boolean
    id?: string
    ariaLabel?: string
    searchable?: boolean
    searchPlaceholder?: string
    serverFilter?: boolean
    searchDebounce?: number
  }>(),
  {
    variant: 'form',
    required: false,
    disabled: false,
    loading: false,
    placeholderDisabled: true,
    searchable: false,
    searchPlaceholder: 'Search…',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:searchTerm': [value: string]
  'load-more': []
  blur: []
  focus: []
}>()

function onViewportScroll(e: Event) {
  const el = e.target as HTMLElement
  if (el.scrollHeight - el.scrollTop - el.clientHeight < 48) emit('load-more')
}

const $attrs = useAttrs()

const autoId = useId()
const selectId = computed(() => props.id ?? `ic-select-${autoId}`)
const errorId = computed(() => `${selectId.value}-error`)

const triggerClasses = computed(() =>
  cn(
    triggerStyles({
      variant: props.variant,
      state: props.error ? 'error' : 'default',
    }),
    props.variant === 'filter' && ($attrs.class as string | undefined),
  ),
)

const describedBy = computed(() => (props.error ? errorId.value : undefined))

const normalizedOptions = computed<IcSelectOption[]>(() =>
  props.options.map((opt) =>
    typeof opt === 'string' || typeof opt === 'number' ? { value: opt, label: String(opt) } : opt,
  ),
)

const EMPTY_VALUE_BASE = '__ic_select_empty__'
const emptyValue = computed(() => {
  let sentinel = EMPTY_VALUE_BASE
  const values = new Set(normalizedOptions.value.map((option) => String(option.value)))
  while (values.has(sentinel)) sentinel += '_'
  return sentinel
})
const itemValue = (value: string | number): string =>
  value === '' ? emptyValue.value : String(value)
const hasEmptyOption = computed(() => normalizedOptions.value.some((o) => o.value === ''))

const retainedOption = ref<IcSelectOption | null>(null)
watch(
  [() => props.modelValue, normalizedOptions],
  () => {
    const val = String(props.modelValue ?? '')
    const match = normalizedOptions.value.find((o) => String(o.value) === val)
    if (match) retainedOption.value = match
  },
  { immediate: true },
)

const selectedOption = computed(() => {
  const val = String(props.modelValue ?? '')
  const match = normalizedOptions.value.find((o) => String(o.value) === val)
  if (match) return match
  if (val && retainedOption.value && String(retainedOption.value.value) === val) {
    return retainedOption.value
  }
  return undefined
})

const selectedLabel = computed(() => selectedOption.value?.label ?? props.placeholder ?? '')

const query = ref('')
const filteredOptions = computed<IcSelectOption[]>(() => {
  if (props.serverFilter) return normalizedOptions.value
  const q = query.value.trim().toLowerCase()
  if (!q) return normalizedOptions.value
  return normalizedOptions.value.filter(
    (o) => o.label.toLowerCase().includes(q) || String(o.value).toLowerCase().includes(q),
  )
})

let searchTimer: ReturnType<typeof setTimeout> | undefined
watch(query, (value) => {
  if (!props.serverFilter) return
  const delay = props.searchDebounce ?? 250
  if (searchTimer) clearTimeout(searchTimer)
  if (delay <= 0) {
    emit('update:searchTerm', value)
    return
  }
  searchTimer = setTimeout(() => emit('update:searchTerm', value), delay)
})
onBeforeUnmount(() => {
  if (searchTimer) clearTimeout(searchTimer)
})
function onComboOpen(open: boolean) {
  query.value = ''
  if (open)
    nextTick(() => {
      query.value = ''
    })
}

const normalizedModelValue = computed<string | undefined>(() => {
  if (props.modelValue === undefined || props.modelValue === null || props.modelValue === '') {
    return hasEmptyOption.value ? emptyValue.value : undefined
  }
  return String(props.modelValue)
})

function onUpdate(value: AcceptableValue | AcceptableValue[]) {
  if (value === undefined || value === null) return
  const next = Array.isArray(value) ? value[0] : value
  if (next === undefined || next === null) return
  emit('update:modelValue', next === emptyValue.value ? '' : String(next))
}
</script>

<style scoped>
.ic-field-required {
  color: var(--negative);
  margin-left: 2px;
}
.ic-select-option-image {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  object-fit: contain;
  flex-shrink: 0;
}
.ic-dropdown-item-content {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex: 1;
}
.ic-select-spinner {
  display: inline-block;
  width: 13px;
  height: 13px;
  border: 2px solid color-mix(in srgb, currentColor 25%, transparent);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: ic-select-spin 0.6s linear infinite;
  opacity: 0.7;
}
@keyframes ic-select-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
