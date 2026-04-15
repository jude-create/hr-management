<script setup>
import { computed } from 'vue'
import dashboardLight from "@/assets/img/dashboard.png"
import dashboardDark from "@/assets/img/dashboard-dark.png"
import useTheme from '@/config/useTheme'

const { isDark } = useTheme()

// Choose image based on current theme
const dashboardImage = computed(() => (isDark.value ? dashboardDark : dashboardLight))
</script>

<template>
  <section
    class="rounded-2xl w-full h-full flex flex-col justify-center items-center"
    :class="{ 'bg-[#7152F30D]': !isDark, 'bg-[#F8F6FE]': isDark }"
  >
    <img
      :src="dashboardImage"
      alt="Dashboard"
      class="w-full max-w-[450px] h-auto object-contain"
    />
  </section>
</template>