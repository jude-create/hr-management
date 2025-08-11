<script setup>
const props = defineProps({
  account: Array
})
</script>

<template>
  <div  class="grid grid-cols-2 gap-5 divide divide-y-2 divide-[#A2A1A81A] ">
    <div
     v-for="item in account" :key="item.label"
     class="font-light pb-5"
     >
      <p class="text-[#A2A1A8]">{{ item.label }}</p>
      <p class="pt-2">{{ item.value }}</p>
    </div>
  </div>
</template>
