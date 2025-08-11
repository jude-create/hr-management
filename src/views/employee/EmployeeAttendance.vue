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
  <div class="overflow-x-auto space-y-4 mt-4">
    <!-- Table -->
    <div>
      <!-- Table Header -->
      <div class="flex border-b-2 border-[#A2A1A81A]  font-light text-[#A2A1A8] text-base pb-2">
        <div class="w-[22%] px-4">Date</div>
        <div class="w-[18%] px-4">Check In</div>
        <div class="w-[20%] px-4">Check Out</div>
        <div class="w-[15%] px-4">Break</div>
         <div class="w-[25%] px-4">Working Hours</div>
        <div class="w-[20%] px-4">Status</div>
      </div>

      <!-- Table Rows -->
      <div class="divide-y-2 divide-[#A2A1A81A] ">
        <div
         v-for="(employee, index) in  employee"
        :key="index"
          class="flex py-2 items-center hover:bg-[#7152F310] transition-colors text-base"
        >
          <div class="w-[22%] px-4 ">
           
            <p class="font-light">{{ employee.date }}</p>
          </div>
          <div class="w-[18%] px-4 font-light">{{ employee.checkIn }}</div>
          <div class="w-[20%] px-4 font-light">{{ employee.checkOut }}</div>
          <div class="w-[15%] px-4 font-light">{{ employee.break }}</div>
          <div class="w-[25%] px-4 font-light">{{ employee.workingH }}</div>
          <div class="w-[20%] px-4">
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

   <!-- Pagination Controls (only visible if showPagination is true) -->

  

  </div>
</template> 