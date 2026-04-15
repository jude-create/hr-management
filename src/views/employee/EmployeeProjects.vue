<script setup>
import { ref, computed } from 'vue'
import Image1 from '@/assets/img/image1.png'
import Image2 from '@/assets/img/image2.png'
import Image3 from '@/assets/img/image3.png'
import Image4 from '@/assets/img/image4.png'
import Image5 from '@/assets/img/image5.png'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import useTheme from '@/config/useTheme'
import { Projector } from 'lucide-vue-next'

const { isDark} = useTheme()

const employee = [
  {
    project: "Amongus - Discovery Phase",
    startDate: "Feb 01, 2025",
    endDate: "Mar 05, 2025",
    status: "Completed",
    statusColor: "#3FC28A"
  },
  {
    project: "Wildcare - Development Project",
    startDate: "Feb 22, 2025",
    endDate: "Mar 25, 2025",
    status: "Completed",
    statusColor: "#3FC28A"
  },
   {
    project: "Hingutsan Web Development",
    startDate: "Apr 12, 2025",
    endDate: "Oct 05, 2025",
    status: "Pending",
    statusColor: "#EFBE12"
  },
   {
    project: "Montilisy Ecommerce Platform",
    startDate: "Jun 18, 2025",
    endDate: "Aug 05, 2025",
    status: "Pending",
    statusColor: "#EFBE12"
  },
  
];









</script>


<template>
  <div class="overflow-x-auto space-y-4 mt-4 ">
    <!-- Table -->
    <div class="hidden md:block">
      <!-- Table Header -->
      <div class="flex border-b-2 border-[#A2A1A81A]  font-light text-[#A2A1A8] text-base pb-2">
        <div class="w-[11%] px-3">Sr. No.</div>
        <div class="w-[36%] px-3">Project Name</div>
        <div class="w-[17%] px-3">Start Date</div>
        <div class="w-[17%] px-3">Finish Date</div>
        <div class="w-[15%] px-3">Status</div>
      </div>

      <!-- Table Rows -->
      <div class="divide-y-2 divide-[#A2A1A81A] ">
        <div
         v-for="(employee, index) in  employee"
        :key="index"
          class="flex py-2 items-center hover:bg-[#7152F310] transition-colors text-base"
        >
          <div class="w-[11%] px-3 ">
           
            <p class="font-light">{{ index  + 1 }}</p>
          </div>
          <div class="w-[36%] px-3 font-light">{{ employee.project }}</div>
          <div class="w-[17%] px-3 font-light">{{ employee.startDate }}</div>
          <div class="w-[17%] px-3 font-light">{{ employee.endDate }}</div>
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
        v-for="(employee, index) in  employee"
        :key="'m-' + index"
        class="py-3 px-1 hover:bg-[#7152F310] transition-colors"
      >
        <!-- Top row: date + status badge -->
        <div class="flex items-center justify-between mb-2">
          
            <p class="font-light">{{ index  + 1 }}</p>
          <span
            class="inline-flex items-center justify-center font-light text-xs px-3 py-1 rounded-lg flex-shrink-0"
            :style="{ color: employee.statusColor, backgroundColor: `${employee.statusColor}1A` }"
          >{{ employee.status }}</span>
        </div>

        <!-- Info grid: 2x2 -->
        <div class="grid grid-cols-2 gap-y-2 gap-x-4 px-5">
          <div class="flex items-center gap-2">
            <div>
              <p class="text-sm font-medium">{{ employee.project }}</p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#A2A1A8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
             <div>
              <p class="text-[10px] text-[#A2A1A8]">Start Date</p>
              <p class="text-sm font-medium">{{ employee.startDate }}</p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#A2A1A8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <div>
              <p class="text-[10px] text-[#A2A1A8]">End Date</p>
              <p class="text-sm font-medium">{{ employee.endDate }}</p>
            </div>
          </div>

          
          </div>
        </div>
      </div>
    



  

  </div>
</template> 