<script setup>
import { ref, computed } from 'vue'
import Image1 from '@/assets/img/image1.png'
import Image2 from '@/assets/img/image2.png'
import Image3 from '@/assets/img/image3.png'
import Image4 from '@/assets/img/image4.png'
import Image5 from '@/assets/img/image5.png'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import useTheme from '@/config/useTheme'

const { isDark} = useTheme()

const employee = [
  {
    date: "July 01, 2023",
    checkIn: "09:28 AM",
    checkOut: "07:00 PM",
    break: "00:30 Min",
    workingH: "09:02 Hrs",
    status: "On Time",
    statusColor: "#3FC28A"
  },
  {
    date: "July 01, 2023",
    checkIn: "09:28 AM",
    checkOut: "07:00 PM",
    break: "00:30 Min",
    workingH: "09:02 Hrs",
    status: "On Time",
    statusColor: "#3FC28A"
  },
   {
    date: "July 01, 2023",
    checkIn: "09:28 AM",
    checkOut: "07:00 PM",
    break: "00:30 Min",
    workingH: "09:02 Hrs",
    status: "On Time",
    statusColor: "#3FC28A"
  },
   {
    date: "July 01, 2023",
    checkIn: "09:28 AM",
    checkOut: "07:00 PM",
    break: "00:30 Min",
    workingH: "09:02 Hrs",
    status: "Low",
    statusColor: "#F45B69"
  },
   {
    date: "July 01, 2023",
    checkIn: "09:28 AM",
    checkOut: "07:00 PM",
    break: "00:30 Min",
    workingH: "09:02 Hrs",
    status: "Low",
    statusColor: "#F45B69"
  },
   {
    date: "July 01, 2023",
    checkIn: "09:28 AM",
    checkOut: "07:00 PM",
    break: "00:30 Min",
    workingH: "09:02 Hrs",
    status: "On Time",
    statusColor: "#3FC28A"
  },
   {
    date: "July 01, 2023",
    checkIn: "09:28 AM",
    checkOut: "07:00 PM",
    break: "00:30 Min",
    workingH: "09:02 Hrs",
    status: "On Time",
    statusColor: "#3FC28A"
  },
   {
    date: "July 01, 2023",
    checkIn: "09:28 AM",
    checkOut: "07:00 PM",
    break: "00:30 Min",
    workingH: "09:02 Hrs",
    status: "Low",
    statusColor: "#F45B69"
  },
   {
    date: "July 01, 2023",
    checkIn: "09:28 AM",
    checkOut: "07:00 PM",
    break: "00:30 Min",
    workingH: "09:02 Hrs",
    status: "On Time",
    statusColor: "#3FC28A"
  },
   {
    date: "July 01, 2023",
    checkIn: "09:28 AM",
    checkOut: "07:00 PM",
    break: "00:30 Min",
    workingH: "09:02 Hrs",
    status: "On Time",
    statusColor: "#3FC28A"
  },
];









</script>


<template>
  <div class="space-y-4 mt-4">

    <!-- DESKTOP TABLE — hidden on mobile -->
    <div class="hidden md:block overflow-x-auto">
      <div class="flex border-b-2 border-[#A2A1A81A] font-light text-[#A2A1A8] text-base pb-2">
        <div class="w-[22%] px-4">Date</div>
        <div class="w-[18%] px-4">Check In</div>
        <div class="w-[20%] px-4">Check Out</div>
        <div class="w-[15%] px-4">Break</div>
        <div class="w-[25%] px-4">Working Hours</div>
        <div class="w-[20%] px-4">Status</div>
      </div>
      <div class="divide-y-2 divide-[#A2A1A81A]">
        <div
          v-for="(emp, index) in employee"
          :key="index"
          class="flex py-2 items-center hover:bg-[#7152F310] transition-colors text-base"
        >
          <div class="w-[22%] px-4 font-light">{{ emp.date }}</div>
          <div class="w-[18%] px-4 font-light">{{ emp.checkIn }}</div>
          <div class="w-[20%] px-4 font-light">{{ emp.checkOut }}</div>
          <div class="w-[15%] px-4 font-light">{{ emp.break }}</div>
          <div class="w-[25%] px-4 font-light">{{ emp.workingH }}</div>
          <div class="w-[20%] px-4">
            <span
              class="inline-flex items-center justify-center font-light text-sm px-4 py-2 rounded-lg"
              :style="{ color: emp.statusColor, backgroundColor: `${emp.statusColor}1A` }"
            >{{ emp.status }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE CARDS — hidden on desktop -->
    <div class="md:hidden divide-y-2 divide-[#A2A1A81A] mb-7">
      <div
        v-for="(emp, index) in employee"
        :key="'m-' + index"
        class="py-3 px-1 hover:bg-[#7152F310] transition-colors"
      >
        <!-- Top row: date + status badge -->
        <div class="flex items-center justify-between mb-2">
          <p class="text-sm font-medium">{{ emp.date }}</p>
          <span
            class="inline-flex items-center justify-center font-light text-xs px-3 py-1 rounded-lg flex-shrink-0"
            :style="{ color: emp.statusColor, backgroundColor: `${emp.statusColor}1A` }"
          >{{ emp.status }}</span>
        </div>

        <!-- Info grid: 2x2 -->
        <div class="grid grid-cols-2 gap-y-2 gap-x-4">
          <div class="flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#A2A1A8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <div>
              <p class="text-[10px] text-[#A2A1A8]">Check In</p>
              <p class="text-sm font-medium">{{ emp.checkIn }}</p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#A2A1A8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <div>
              <p class="text-[10px] text-[#A2A1A8]">Check Out</p>
              <p class="text-sm font-medium">{{ emp.checkOut }}</p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#A2A1A8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <div>
              <p class="text-[10px] text-[#A2A1A8]">Break</p>
              <p class="text-sm font-medium">{{ emp.break }}</p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#A2A1A8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
            </svg>
            <div>
              <p class="text-[10px] text-[#A2A1A8]">Working Hours</p>
              <p class="text-sm font-medium">{{ emp.workingH }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>