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
    duration: "July 05 - July 08",
    days: "3",
    rManager: "Mark Willians",
    status: "Pending",
    statusColor: "#EFBE12"
  },
  {
    date: "July 01, 2023",
    duration: "July 05 - July 08",
    days: "3",
    rManager: "Mark Willians",
    status: "Approved",
    statusColor: "#3FC28A"
  },
   {
    date: "July 01, 2023",
    duration: "Mar 14 - Mar 16",
    days: "2",
    rManager: "Mark Willians",
    status: "Approved",
    statusColor: "#3FC28A"
  },
   {
    date: "July 01, 2023",
    duration: "Mar 14 - Mar 16",
    days: "2",
   rManager: "Mark Willians",
    status: "Approved",
    statusColor: "#3FC28A"
  },
   {
    date: "July 01, 2023",
    duration: "Jan 16 - Jan 19",
    days: "3",
    rManager: "Mark Willians",
    status: "Reject",
    statusColor: "#F45B69"
  },

];









</script>


<template>
  <div class="overflow-x-auto space-y-4 mt-4">
    <!-- Table -->
    <div class="hidden md:block">
      <!-- Table Header -->
      <div class="flex border-b-2 border-[#A2A1A81A]  font-light text-[#A2A1A8] text-base pb-2">
        <div class="w-[22%] px-3">Date</div>
        <div class="w-[22%] px-3">Duration</div>
        <div class="w-[15%] px-3">Days</div>
         <div class="w-[25%] px-3">Reporting Manager</div>
        <div class="w-[15%] px-3">Status</div>
      </div>

      <!-- Table Rows -->
      <div class="divide-y-2 divide-[#A2A1A81A] ">
        <div
         v-for="(employee, index) in  employee"
        :key="index"
          class="flex py-2 items-center hover:bg-[#7152F310] transition-colors text-base"
        >
          <div class="w-[22%] px-3 ">
           
            <p class="font-light">{{ employee.date }}</p>
          </div>
          <div class="w-[22%] px-3 font-light">{{ employee.duration }}</div>
          <div class="w-[15%] px-3 font-light">{{ employee.days }} Days</div>
          <div class="w-[25%] px-3 font-light">{{ employee.rManager }}</div>
          <div class="w-[15%] px-3">
            <span
              class="inline-flex items-center justify-center font-light text-sm px-4 py-2 rounded-lg"
              :style="{ color: employee.statusColor, backgroundColor: `${employee.statusColor}1A` }"
            >
              {{ employee.status }}
            </span>
          </div>
        </div>
      </div>
    </div>
    

      <!-- MOBILE CARDS — hidden on desktop -->
      <div class="md:hidden divide-y-2 divide-[#A2A1A81A] mb-7">
      <div
        v-for="(emp, index) in employee"
        :key=" index"
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
              <p class="text-[10px] text-[#A2A1A8]">Duration</p>
              <p class="text-sm font-medium">{{ emp.duration }}</p>
            </div>
          </div>

          <div class="flex items-center gap-2">
           
            <div>
              <p class="text-sm text-[#A2A1A8]">Reporting Manager</p>
              <p class="text-sm font-medium">{{ emp.rManager }}</p>
            </div>
          </div>

          <div class="flex items-center gap-2 px-5">
           
            <div>
              <p class="text-xs font-medium ">{{ emp.days }} days</p>
            </div>
          </div>

        
        </div>
      </div>
      </div>
    
   <!-- Pagination Controls (only visible if showPagination is true) -->

  

  </div>
</template> 