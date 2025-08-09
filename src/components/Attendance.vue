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

const employees = [
  {
    name: "Leasie Watson",
    image: Image1,
    designation: "Team Lead - Design",
    type: "Office",
    checkIn: "9:00 AM",
    status: "On Time",
    statusColor: "#3FC28A"
  },
  {
    name: "Darlene Robertson",
    image: Image2,
    designation: "Web Designer",
    type: "Remote",
    checkIn: "10:15 AM",
    status: "Late",
    statusColor: "#F45B69"
  },
  {
    name: "Leslie Alexander",
    image: Image3,
    designation: "Medical Assistant",
    type: "Office",
    checkIn: "8:45 AM",
    status: "On Time",
    statusColor: "#3FC28A"
  },
  {
    name: "Leasie Watson",
    image: Image4,
    designation: "Marketing Coordinator",
    type: "Remote",
    checkIn: "9:30 AM",
    status: "Late",
    statusColor: "#F45B69"
  },
  {
    name: "Jacob Jones",
    image: Image1,
    designation: "Data Analyst",
    type: "Office",
    checkIn: "10:05 AM",
    status: "On Time",
    statusColor: "#3FC28A"
  },
   {
    name: "Ronald Richards",
    image: Image5,
    designation: "Team Lead - Design",
    type: "Office",
    checkIn: "9:00 AM",
    status: "On Time",
    statusColor: "#3FC28A"
  },
   {
    name: "Jenny Wilson",
    image: Image1,
    designation: "Team Lead - Design",
    type: "Office",
    checkIn: "9:00 AM",
    status: "On Time",
    statusColor: "#3FC28A"
  },
  {
    name: "Leasie Watson",
    image: Image4,
    designation: "Marketing Coordinator",
    type: "Remote",
    checkIn: "9:30 AM",
    status: "Late",
    statusColor: "#F45B69"
  },
  {
    name: "Jacob Jones",
    image: Image1,
    designation: "Data Analyst",
    type: "Office",
    checkIn: "10:05 AM",
    status: "On Time",
    statusColor: "#3FC28A"
  },
   {
    name: "Ronald Richards",
    image: Image5,
    designation: "Team Lead - Design",
    type: "Office",
    checkIn: "9:00 AM",
    status: "On Time",
    statusColor: "#3FC28A"
  },
   {
    name: "Jenny Wilson",
    image: Image1,
    designation: "Team Lead - Design",
    type: "Office",
    checkIn: "9:00 AM",
    status: "On Time",
    statusColor: "#3FC28A"
  },
  {
    name: "Leasie Watson",
    image: Image1,
    designation: "Team Lead - Design",
    type: "Office",
    checkIn: "9:00 AM",
    status: "On Time",
    statusColor: "#3FC28A"
  },
  {
    name: "Darlene Robertson",
    image: Image2,
    designation: "Web Designer",
    type: "Remote",
    checkIn: "10:15 AM",
    status: "Late",
    statusColor: "#F45B69"
  },
  {
    name: "Leslie Alexander",
    image: Image3,
    designation: "Medical Assistant",
    type: "Office",
    checkIn: "8:45 AM",
    status: "On Time",
    statusColor: "#3FC28A"
  },
  {
    name: "Leasie Watson",
    image: Image4,
    designation: "Marketing Coordinator",
    type: "Remote",
    checkIn: "9:30 AM",
    status: "Late",
    statusColor: "#F45B69"
  },
  {
    name: "Jacob Jones",
    image: Image1,
    designation: "Data Analyst",
    type: "Office",
    checkIn: "10:05 AM",
    status: "On Time",
    statusColor: "#3FC28A"
  },
   {
    name: "Ronald Richards",
    image: Image5,
    designation: "Team Lead - Design",
    type: "Office",
    checkIn: "9:00 AM",
    status: "On Time",
    statusColor: "#3FC28A"
  },
   {
    name: "Jenny Wilson",
    image: Image1,
    designation: "Team Lead - Design",
    type: "Office",
    checkIn: "9:00 AM",
    status: "On Time",
    statusColor: "#3FC28A"
  },
  {
    name: "Leasie Watson",
    image: Image4,
    designation: "Marketing Coordinator",
    type: "Remote",
    checkIn: "9:30 AM",
    status: "Late",
    statusColor: "#F45B69"
  },
  {
    name: "Jacob Jones",
    image: Image1,
    designation: "Data Analyst",
    type: "Office",
    checkIn: "10:05 AM",
    status: "On Time",
    statusColor: "#3FC28A"
  },
   {
    name: "Ronald Richards",
    image: Image5,
    designation: "Team Lead - Design",
    type: "Office",
    checkIn: "9:00 AM",
    status: "On Time",
    statusColor: "#3FC28A"
  },
   {
    name: "Jenny Wilson",
    image: Image1,
    designation: "Team Lead - Design",
    type: "Office",
    checkIn: "9:00 AM",
    status: "On Time",
    statusColor: "#3FC28A"
  },
];

const perPage = ref(10) // default items per page
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(employees.length / perPage.value))

const paginatedEmployees = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  const end = start + perPage.value
  return employees.slice(start, end)
})

const showingRange = computed(() => {
  const start = (currentPage.value - 1) * perPage.value + 1
  const end = Math.min(start + perPage.value - 1, employees.length)
  return `Showing ${start} to ${end} of ${employees.length} records`
})

defineProps({
  showPagination: {
    type: Boolean,
    default: false
  },
    limit: {
    type: Number,
    default: 10
  }
})





</script>


<template>
  <div class="overflow-x-auto space-y-4">
    <!-- Table -->
    <div>
      <!-- Table Header -->
      <div class="flex border-b-2 border-[#A2A1A81A] pb-3 font-light text-[#A2A1A8] text-base">
        <div class="w-[32%] px-4">Employee Name</div>
        <div class="w-[25%] px-4">Designation</div>
        <div class="w-[12%] px-4">Type</div>
        <div class="w-[18%] px-4">Check In Time</div>
        <div class="w-[18%] px-4">Status</div>
      </div>

      <!-- Table Rows -->
      <div class="divide-y-2 divide-[#A2A1A81A] ">
        <div
         v-for="(employee, index) in showPagination ? paginatedEmployees : employees.slice(0, limit)"
        :key="index"
          class="flex py-2 items-center hover:bg-[#7152F310] transition-colors text-base"
        >
          <div class="w-[32%] px-4 flex items-center space-x-4">
            <img :src="employee.image" alt="Employee" class="w-12 h-12 rounded-full object-cover" />
            <p class="font-light">{{ employee.name }}</p>
          </div>
          <div class="w-[25%] px-4 font-light">{{ employee.designation }}</div>
          <div class="w-[12%] px-4 font-light">{{ employee.type }}</div>
          <div class="w-[18%] px-4 font-light">{{ employee.checkIn }}</div>
          <div class="w-[18%] px-4">
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

  <div
  v-if="showPagination"
  class="flex justify-between items-center mt-4 px-2 flex-wrap gap-4"
>
  <!-- Rows per page selector -->
  <div class="space-x-4 flex items-center">
    <label class="text-sm text-[#A2A1A8]">Showing</label>
    <select v-model="perPage" class="border rounded-md px-3 py-1 text-sm"
      :class="{
      'bg-[#16151C] text-[#FFFFFF]': isDark,
      'bg-[#FFFFFF] text-[#16151C]': !isDark
    }"
    >
      <option :value="5">5</option>
      <option :value="10">10</option>
      <option :value="15">15</option>
    </select>
  </div>

  <!-- Pagination buttons -->
  <div class="flex items-center space-x-4">
    <div class="text-sm text-gray-600">{{ showingRange }}</div>
    
    <!-- Prev -->
    <button
      :disabled="currentPage === 1"
      @click="currentPage--"
      class="px-3 py-1 rounded hover:bg-gray-100 text-sm disabled:opacity-50"
    >
      <ChevronLeftIcon class="h-6 w-6 inline-block" />
    </button>

    <!-- Dynamic Page Numbers -->
    <div class="flex space-x-2">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        :class="[
          'px-3 py-1  text-base',
          currentPage === page ? 'border border-[#7152F3] text-[#7152F3] font-semibold rounded-lg' : 'hover:bg-gray-100'
        ]"
      >
        {{ page }}
      </button>
    </div>

    <!-- Next -->
    <button
      :disabled="currentPage === totalPages || totalPages === 0"
      @click="currentPage++"
      class="px-3 py-1 rounded hover:bg-gray-100 text-sm disabled:opacity-50"
    >
      <ChevronRightIcon class="h-6 w-6 inline-block" />
    </button>
  </div>
</div>

  </div>
</template> 