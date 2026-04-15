<script setup>
import { UserGroupIcon } from '@heroicons/vue/24/outline';
import up from '@/assets/img/up.png';
import down from '@/assets/img/down.png';

// 👇 Define props
defineProps({
  title: String,
  value: Number,
  icon: Object,
  percentage: Number,
  trend: String,
  date: String
});
</script>

<template>
  <article class=" w-full   rounded-lg pt-5 md:h-44  h-53 border border-[#A2A1A833] shadow-sm space-y-3 ">
    <div class="md:flex items-center space-x-2 px-2 md:px-4">
      <div class="relative border border-gray-300 rounded-xl px-3 py-3 bg-[#A2A1A81A] w-fit">
        <component :is="icon" class="size-6 text-[#7152F3]" />
      </div>
      <p class="text-sm font-light pt-1 md:pt-0">{{ title }}</p>
    </div>

    <div class="flex items-center justify-between mt-2 px-3 md:px-4">
      <p class="md:text-2xl font-semibold text-lg ">{{ value }}</p>
      <div
        class="flex items-center space-x-2 px-1 md:px-3 py-2 rounded-lg"
        :class="trend === 'up' ? 'bg-[#30BE821A]' : 'bg-[#F052521A]'"
      >
        <img :src="trend === 'up' ? up : down" alt="trend" class="h-4 w-4" />
        <p :class="trend === 'up' ? 'text-[#30BE82]' : 'text-[#F05252]'">{{ percentage }}%</p>
      </div>
    </div>

    <div class="border border-t-2 border-[#A2A1A833]" />

    <div class="text-sm text-[#A2A1A8] md:px-4 px-2">
      Update: {{ date }}
    </div>
  </article>
</template>
