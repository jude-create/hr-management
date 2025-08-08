<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { ChevronDown } from 'lucide-vue-next'

// Props
const props = defineProps({
  modelValue: String,
  placeholder: String,
  options: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])

const showOptions = ref(false)
const selectRef = ref(null)

const selectOption = (value) => {
  emit('update:modelValue', value)
  showOptions.value = false
}

// Close dropdown if clicked outside
onClickOutside(selectRef, () => {
  showOptions.value = false
})
</script>

<template>
  <div class="relative" ref="selectRef">
    <!-- Input look -->
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      readonly
      @click="showOptions = !showOptions"
      class="w-full border-2 rounded-lg px-3 py-2 text-sm placeholder:text-[#8A8D91]
             border-[#A2A1A833] focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
    />
    <ChevronDown
      class="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 cursor-pointer"
      @click="showOptions = !showOptions" />
    <!-- Dropdown -->
    <div
      v-if="showOptions"
      class="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto"
    >
      <div
        v-for="option in options"
        :key="option"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        @click="selectOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>
