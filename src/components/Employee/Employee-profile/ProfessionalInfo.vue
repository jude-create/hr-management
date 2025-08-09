<script setup>
const props = defineProps({
  info: Array
})
</script>

<template>
  <div class="grid grid-cols-2 gap-6">
    <div v-for="item in info" :key="item.label">
      <p class="text-gray-400 text-sm">{{ item.label }}</p>
      <p class="font-medium">{{ item.value }}</p>
    </div>
  </div>
</template>
