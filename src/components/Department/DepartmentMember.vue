<script setup>
import { ChevronRightIcon } from 'lucide-vue-next'

defineProps({
  member: Object
})
</script>

<template>
  <div class="flex items-center justify-between p-2 hover:bg-[#7152F310] rounded cursor-pointer">
    <div class="flex items-center gap-2">
      <img :src="member.avatar" class="w-8 h-8 rounded-full" />
      <div>
        <p class=" font-light">{{ member.name }}</p>
        <p class="text-xs text-[#A2A1A8] font-light">{{ member.title }}</p>
      </div>
    </div>
    <ChevronRightIcon class="h-5 w-5" />
  </div>
</template>
