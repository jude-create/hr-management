<script setup>
import { CalendarDays, EllipsisVerticalIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import Line from '@/assets/img/line.png'

const selectedColor = ref('purple')

const attrs = ref([
  {
    key: 'any',
    highlight: true,
    dates: { start: new Date(2025, 6, 16), end: new Date(2025, 6, 18) },
  },
])

const scheduleByDate = ref([
  {
    date: 'Wednesday, 06 June 2025',
    tasks: [
      { time: '09:30', role: 'UI/UX Designer', title: 'Practical Task Review' },
      { time: '12:00', role: 'Magento Developer', title: 'Resume Review' },
      { time: '01:30', role: 'Sales Manager', title: 'Final HR Round' },
    ],
  },
  {
    date: 'Friday, 18 June 2025',
    tasks: [
      { time: '09:30', role: 'UI/UX Designer', title: 'Practical Task Review' },
      { time: '12:00', role: 'Magento Developer', title: 'Resume Review' },
      { time: '01:30', role: 'Sales Manager', title: 'Final HR Round' },
    ],
  },
])
</script>

<template>
  <div class="w-80 border border-[#A2A1A833] rounded-lg p-2 mt-6 shadow-sm">
    <div class="flex items-center justify-between mb-4 px-2">
      <h1 class="text-lg font-semibold">My Schedule</h1>
      <span class="bg-[#7152F31A] rounded-lg w-fit p-4">
        <CalendarDays color="#7152F3" size="28" />
      </span>
    </div>

    <VCalendar
      expanded
      transparent
      borderless
      :color="selectedColor"
      :attributes="attrs"
    />

    <!-- Dynamic Schedule Mapping -->
    <section class="px-3 space-y-4">
      <div v-for="(entry, index) in scheduleByDate" :key="index">
        <div class="flex justify-between">
          <h2>{{ entry.date }}</h2>
          <EllipsisVerticalIcon />
        </div>

        <div class="mt-5 space-y-4">
          <div
            v-for="(task, idx) in entry.tasks"
            :key="idx"
            class="flex space-x-5 items-center"
          >
            <p class="font-semibold text-lg">{{ task.time }}</p>
            <img :src="Line" alt="line" class="h-12 w-[3px]" />
            <div>
              <p class="font-light text-base">{{ task.role }}</p>
              <p class="font-semibold text-base">{{ task.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.vc-container .vc-day {
  color: #A2A1A8;
}
</style>