<script setup>
import { ref, computed } from 'vue'
import Image1 from '@/assets/img/image1.png'
import Image2 from '@/assets/img/image2.png'
import Image3 from '@/assets/img/image3.png'
import Image4 from '@/assets/img/image4.png'
import Image5 from '@/assets/img/image5.png'
import TablePagination from '@/components/TablePagination.vue'   // ← NEW

const employees = [
  { name: "Leasie Watson",     image: Image1, ctc: "$50,000", salary: "$4,166", deduction: "-",    status: "Completed", statusColor: "#3FC28A" },
  { name: "Darlene Robertson", image: Image2, ctc: "$60,000", salary: "$5,000", deduction: "$500", status: "Completed", statusColor: "#3FC28A" },
  { name: "Leslie Alexander",  image: Image3, ctc: "$55,000", salary: "$4,583", deduction: "$300", status: "Completed", statusColor: "#3FC28A" },
  { name: "Leasie Watson",     image: Image4, ctc: "$70,000", salary: "$5,833", deduction: "-",    status: "Pending",   statusColor: "#EFBE12" },
  { name: "Jacob Jones",       image: Image1, ctc: "$65,000", salary: "$5,416", deduction: "-",    status: "Pending",   statusColor: "#EFBE12" },
  { name: "Ronald Richards",   image: Image5, ctc: "$75,000", salary: "$6,250", deduction: "-",    status: "Completed", statusColor: "#3FC28A" },
  { name: "Jenny Wilson",      image: Image1, ctc: "$80,000", salary: "$6,666", deduction: "$200", status: "Pending",   statusColor: "#EFBE12" },
  { name: "Darlene Robertson", image: Image2, ctc: "$90,000", salary: "$7,500", deduction: "-",    status: "Completed", statusColor: "#3FC28A" },
  { name: "Leslie Alexander",  image: Image3, ctc: "$85,000", salary: "$7,083", deduction: "-",    status: "Pending",   statusColor: "#EFBE12" },
  { name: "Leasie Watson",     image: Image1, ctc: "$50,000", salary: "$4,166", deduction: "-",    status: "Completed", statusColor: "#3FC28A" },
  { name: "Darlene Robertson", image: Image2, ctc: "$60,000", salary: "$5,000", deduction: "$500", status: "Completed", statusColor: "#3FC28A" },
  { name: "Leslie Alexander",  image: Image3, ctc: "$55,000", salary: "$4,583", deduction: "$300", status: "Completed", statusColor: "#3FC28A" },
  { name: "Leasie Watson",     image: Image4, ctc: "$70,000", salary: "$5,833", deduction: "-",    status: "Pending",   statusColor: "#EFBE12" },
  { name: "Jacob Jones",       image: Image1, ctc: "$65,000", salary: "$5,416", deduction: "-",    status: "Pending",   statusColor: "#EFBE12" },
  { name: "Ronald Richards",   image: Image5, ctc: "$75,000", salary: "$6,250", deduction: "-",    status: "Completed", statusColor: "#3FC28A" },
  { name: "Jenny Wilson",      image: Image1, ctc: "$80,000", salary: "$6,666", deduction: "$200", status: "Pending",   statusColor: "#EFBE12" },
  { name: "Darlene Robertson", image: Image2, ctc: "$90,000", salary: "$7,500", deduction: "-",    status: "Completed", statusColor: "#3FC28A" },
  { name: "Leslie Alexander",  image: Image3, ctc: "$85,000", salary: "$7,083", deduction: "-",    status: "Pending",   statusColor: "#EFBE12" },
]

const perPage     = ref(10)
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(employees.length / perPage.value))

const paginatedEmployees = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  return employees.slice(start, start + perPage.value)
})

defineProps({
  showPagination: { type: Boolean, default: true },
  limit:          { type: Number,  default: 10   },
})
</script>

<template>
  <div class="overflow-x-auto space-y-4">

    <!-- DESKTOP TABLE -->
    <div class="hidden md:block">
      <div class="flex border-b-2 border-[#A2A1A81A] pb-3 font-light text-[#A2A1A8] text-sm">
        <div class="w-[30%] px-4">Employee Name</div>
        <div class="w-[20%] px-4">CTC</div>
        <div class="w-[20%] px-4">Salary Per Month</div>
        <div class="w-[15%] px-4">Deduction</div>
        <div class="w-[15%] px-4">Status</div>
      </div>
      <div class="divide-y-2 divide-[#A2A1A81A]">
        <div
          v-for="(employee, index) in showPagination ? paginatedEmployees : employees.slice(0, limit)"
          :key="index"
          class="flex py-2 items-center hover:bg-[#7152F310] transition-colors text-sm"
        >
          <div class="w-[30%] px-4 flex items-center gap-3">
            <img :src="employee.image" alt="" class="w-10 h-10 rounded-full object-cover" />
            <p class="font-light">{{ employee.name }}</p>
          </div>
          <div class="w-[20%] px-4 font-light">{{ employee.ctc }}</div>
          <div class="w-[20%] px-4 font-light">{{ employee.salary }}</div>
          <div class="w-[15%] px-4 font-light">{{ employee.deduction }}</div>
          <div class="w-[15%] px-4">
            <span
              class="inline-flex items-center justify-center font-light text-xs px-3 py-1.5 rounded-lg"
              :style="{ color: employee.statusColor, backgroundColor: `${employee.statusColor}1A` }"
            >{{ employee.status }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE CARDS -->
    <div class="md:hidden divide-y-2 divide-[#A2A1A81A]">
      <div
        v-for="(employee, index) in showPagination ? paginatedEmployees : employees.slice(0, limit)"
        :key="'m-' + index"
        class="py-3 px-2 hover:bg-[#7152F310] transition-colors"
      >
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <img :src="employee.image" alt="" class="w-10 h-10 rounded-full object-cover flex-shrink-0" />
            <div>
              <p class="text-sm font-medium">{{ employee.name }}</p>
              <div class="flex items-center gap-2 mt-0.5">
                <span class="text-xs text-[#A2A1A8] font-light">Salary</span>
                <span class="text-xs font-bold text-[#A2A1A8]">{{ employee.salary }}</span>
              </div>
            </div>
          </div>
          <span
            class="inline-flex items-center justify-center font-light text-xs px-3 py-1 rounded-lg flex-shrink-0"
            :style="{ color: employee.statusColor, backgroundColor: `${employee.statusColor}1A` }"
          >{{ employee.status }}</span>
        </div>
        <div class="flex items-center gap-10 px-2">
          <div>
            <p class="text-xs text-[#A2A1A8] font-light">CTC</p>
            <p class="text-xs font-bold text-[#A2A1A8]">{{ employee.ctc }}</p>
          </div>
          <div>
            <p class="text-xs text-[#A2A1A8] font-light">Deduction</p>
            <p class="text-xs font-bold text-[#A2A1A8]">{{ employee.deduction }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ↓ REPLACED: was ~35 lines of pagination markup, now 7 ↓ -->
    <TablePagination
      v-if="showPagination"
      v-model:currentPage="currentPage"
      v-model:perPage="perPage"
      :totalPages="totalPages"
      :totalItems="employees.length"
    />

  </div>
</template>