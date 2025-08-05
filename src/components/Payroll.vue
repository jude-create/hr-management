<script setup>
import { ref, computed } from 'vue'
import Image1 from '@/assets/img/image1.png'
import Image2 from '@/assets/img/image2.png'
import Image3 from '@/assets/img/image3.png'
import Image4 from '@/assets/img/image4.png'
import Image5 from '@/assets/img/image5.png'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

const employees = [
  {
    name: "Leasie Watson",
    image: Image1,
    ctc: "$50,000",
    salary: "$4,166",
    deduction: "-",
    status: "Completed",
    statusColor: "#3FC28A"
  },
  {
    name: "Darlene Robertson",
    image: Image2,
    ctc: "$60,000",
    salary: "$5,000",
    deduction: "$500",
    status: "Completed",
    statusColor: "#3FC28A"
  },
  {
    name: "Leslie Alexander",
    image: Image3,
    ctc: "$55,000",
    salary: "$4,583",
    deduction: "$300",
    status: "Completed",
    statusColor: "#3FC28A"
  },
  {
    name: "Leasie Watson",
    image: Image4,
    ctc: "$70,000",
    salary: "$5,833",
    deduction: "-",
    status: "Pending",
    statusColor: "#EFBE12"
  },
  {
    name: "Jacob Jones",
    image: Image1,
    ctc: "$65,000",
    salary: "$5,416",
    deduction: "-",
    status: "Pending",
    statusColor: "#EFBE12"
  },
   {
    name: "Ronald Richards",
    image: Image5,
    ctc: "$75,000",
    salary: "$6,250",
    deduction: "-",
    status: "Completed",
    statusColor: "#3FC28A"
  },
   {
    name: "Jenny Wilson",
    image: Image1,
    ctc: "80,000",
    salary: "$6,666",
    deduction: "$200",
    status: "Pending",
    statusColor: "#EFBE12"
  },
  {
    name: "Darlene Robertson",
    image: Image2,
    ctc: "$90,000",
    salary: "$7,500",
    deduction: "-",
    status: "Completed",
    statusColor: "#3FC28A"
  },
  {
    name: "Leslie Alexander",
    image: Image3,
    ctc: "$85,000",
    salary: "$7,083",
    deduction: "-",
    status: "Pending",
    statusColor: "#EFBE12"
  }, {
    name: "Leasie Watson",
    image: Image1,
    ctc: "$50,000",
    salary: "$4,166",
    deduction: "-",
    status: "Completed",
    statusColor: "#3FC28A"
  },
  {
    name: "Darlene Robertson",
    image: Image2,
    ctc: "$60,000",
    salary: "$5,000",
    deduction: "$500",
    status: "Completed",
    statusColor: "#3FC28A"
  },
  {
    name: "Leslie Alexander",
    image: Image3,
    ctc: "$55,000",
    salary: "$4,583",
    deduction: "$300",
    status: "Completed",
    statusColor: "#3FC28A"
  },
  {
    name: "Leasie Watson",
    image: Image4,
    ctc: "$70,000",
    salary: "$5,833",
    deduction: "-",
    status: "Pending",
    statusColor: "#EFBE12"
  },
  {
    name: "Jacob Jones",
    image: Image1,
    ctc: "$65,000",
    salary: "$5,416",
    deduction: "-",
    status: "Pending",
    statusColor: "#EFBE12"
  },
   {
    name: "Ronald Richards",
    image: Image5,
    ctc: "$75,000",
    salary: "$6,250",
    deduction: "-",
    status: "Completed",
    statusColor: "#3FC28A"
  },
   {
    name: "Jenny Wilson",
    image: Image1,
    ctc: "80,000",
    salary: "$6,666",
    deduction: "$200",
    status: "Pending",
    statusColor: "#EFBE12"
  },
  {
    name: "Darlene Robertson",
    image: Image2,
    ctc: "$90,000",
    salary: "$7,500",
    deduction: "-",
    status: "Completed",
    statusColor: "#3FC28A"
  },
  {
    name: "Leslie Alexander",
    image: Image3,
    ctc: "$85,000",
    salary: "$7,083",
    deduction: "-",
    status: "Pending",
    statusColor: "#EFBE12"
  }
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
    default: true
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
      <div class="flex border-b-2 border-gray-[#A2A1A81A] pb-3 font-light text-[#A2A1A8] text-base">
        <div class="w-[30%] px-6">Employee Name</div>
        <div class="w-[20%] px-6">CTC</div>
        <div class="w-[20%] px-6">Salary Per Month</div>
        <div class="w-[20%] px-6">Deduction</div>
        <div class="w-[20%] px-6">Status</div>
      </div>

      <!-- Table Rows -->
      <div class="divide-y-2 divide-[#A2A1A81A]">
        <div
         v-for="(employee, index) in showPagination ? paginatedEmployees : employees.slice(0, limit)"
        :key="index"
          class="flex py-2 items-center hover:bg-[#7152F310] transition-colors text-base"
        >
          <div class="w-[30%] px-6 flex items-center space-x-4">
            <img :src="employee.image" alt="Employee" class="w-12 h-12 rounded-full object-cover" />
            <p class="font-light">{{ employee.name }}</p>
          </div>
          <div class="w-[20%] px-6 font-light">{{ employee.ctc }}</div>
          <div class="w-[20%] px-6 font-light">{{ employee.salary }}</div>
          <div class="w-[20%] px-6 font-light">{{ employee.deduction }}</div>
          <div class="w-[20%] px-6">
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
    <select v-model="perPage" class="border rounded-md px-3 py-1 text-sm">
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
      class="px-3 py-1 rounded hover:bg-gray-100 text-sm"
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
      :disabled="currentPage === totalPages"
      @click="currentPage++"
      class="px-3 py-1 rounded hover:bg-gray-100 text-sm"
    >
      <ChevronRightIcon class="h-6 w-6 inline-block" />
    </button>
  </div>
</div>

  </div>
</template> 