<script setup>
import { ref, computed } from 'vue'
import Image1 from '@/assets/img/image1.png'
import Image2 from '@/assets/img/image2.png'
import Image3 from '@/assets/img/image3.png'
import Image4 from '@/assets/img/image4.png'
import Image5 from '@/assets/img/image5.png'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import useTheme from '@/config/useTheme'
import TablePagination from '@/components/TablePagination.vue'   // ← NEW

const { isDark } = useTheme()

const employees = [
  { name: "Leasie Watson",      image: Image1, designation: "Team Lead - Design",       type: "Office", checkIn: "9:00 AM",  status: "On Time", statusColor: "#3FC28A" },
  { name: "Darlene Robertson",  image: Image2, designation: "Web Designer",              type: "Remote", checkIn: "10:15 AM", status: "Late",    statusColor: "#F45B69" },
  { name: "Leslie Alexander",   image: Image3, designation: "Medical Assistant",         type: "Office", checkIn: "8:45 AM",  status: "On Time", statusColor: "#3FC28A" },
  { name: "Leasie Watson",      image: Image4, designation: "Marketing Coordinator",     type: "Remote", checkIn: "9:30 AM",  status: "Late",    statusColor: "#F45B69" },
  { name: "Jacob Jones",        image: Image1, designation: "Data Analyst",              type: "Office", checkIn: "10:05 AM", status: "On Time", statusColor: "#3FC28A" },
  { name: "Ronald Richards",    image: Image5, designation: "Team Lead - Design",        type: "Office", checkIn: "9:00 AM",  status: "On Time", statusColor: "#3FC28A" },
  { name: "Jenny Wilson",       image: Image1, designation: "Team Lead - Design",        type: "Office", checkIn: "9:00 AM",  status: "On Time", statusColor: "#3FC28A" },
  { name: "Leasie Watson",      image: Image4, designation: "Marketing Coordinator",     type: "Remote", checkIn: "9:30 AM",  status: "Late",    statusColor: "#F45B69" },
  { name: "Jacob Jones",        image: Image1, designation: "Data Analyst",              type: "Office", checkIn: "10:05 AM", status: "On Time", statusColor: "#3FC28A" },
  { name: "Ronald Richards",    image: Image5, designation: "Team Lead - Design",        type: "Office", checkIn: "9:00 AM",  status: "On Time", statusColor: "#3FC28A" },
  { name: "Jenny Wilson",       image: Image1, designation: "Team Lead - Design",        type: "Office", checkIn: "9:00 AM",  status: "On Time", statusColor: "#3FC28A" },
  { name: "Leasie Watson",      image: Image1, designation: "Team Lead - Design",        type: "Office", checkIn: "9:00 AM",  status: "On Time", statusColor: "#3FC28A" },
  { name: "Darlene Robertson",  image: Image2, designation: "Web Designer",              type: "Remote", checkIn: "10:15 AM", status: "Late",    statusColor: "#F45B69" },
  { name: "Leslie Alexander",   image: Image3, designation: "Medical Assistant",         type: "Office", checkIn: "8:45 AM",  status: "On Time", statusColor: "#3FC28A" },
  { name: "Leasie Watson",      image: Image4, designation: "Marketing Coordinator",     type: "Remote", checkIn: "9:30 AM",  status: "Late",    statusColor: "#F45B69" },
  { name: "Jacob Jones",        image: Image1, designation: "Data Analyst",              type: "Office", checkIn: "10:05 AM", status: "On Time", statusColor: "#3FC28A" },
  { name: "Ronald Richards",    image: Image5, designation: "Team Lead - Design",        type: "Office", checkIn: "9:00 AM",  status: "On Time", statusColor: "#3FC28A" },
  { name: "Jenny Wilson",       image: Image1, designation: "Team Lead - Design",        type: "Office", checkIn: "9:00 AM",  status: "On Time", statusColor: "#3FC28A" },
  { name: "Leasie Watson",      image: Image4, designation: "Marketing Coordinator",     type: "Remote", checkIn: "9:30 AM",  status: "Late",    statusColor: "#F45B69" },
  { name: "Jacob Jones",        image: Image1, designation: "Data Analyst",              type: "Office", checkIn: "10:05 AM", status: "On Time", statusColor: "#3FC28A" },
  { name: "Ronald Richards",    image: Image5, designation: "Team Lead - Design",        type: "Office", checkIn: "9:00 AM",  status: "On Time", statusColor: "#3FC28A" },
  { name: "Jenny Wilson",       image: Image1, designation: "Team Lead - Design",        type: "Office", checkIn: "9:00 AM",  status: "On Time", statusColor: "#3FC28A" },
]

const perPage     = ref(10)
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(employees.length / perPage.value))

const paginatedEmployees = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  return employees.slice(start, start + perPage.value)
})

defineProps({
  showPagination: { type: Boolean, default: false },
  limit:          { type: Number,  default: 10    },
})
</script>

<template>
  <div class="space-y-4">

    <!-- DESKTOP TABLE -->
    <div class="hidden md:block overflow-x-auto">
      <div class="flex border-b-2 border-[#A2A1A81A] pb-3 font-light text-[#A2A1A8] text-base">
        <div class="w-[32%] px-4">Employee Name</div>
        <div class="w-[25%] px-4">Designation</div>
        <div class="w-[12%] px-4">Type</div>
        <div class="w-[18%] px-4">Check In Time</div>
        <div class="w-[18%] px-4">Status</div>
      </div>
      <div class="divide-y-2 divide-[#A2A1A81A]">
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
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center space-x-3">
            <img :src="employee.image" alt="Employee" class="w-10 h-10 rounded-full object-cover flex-shrink-0" />
            <div>
              <p class="text-sm font-medium">{{ employee.name }}</p>
              <p class="text-xs text-[#A2A1A8] font-light">{{ employee.designation }}</p>
            </div>
          </div>
          <span
            class="inline-flex items-center justify-center font-light text-xs px-3 py-1 rounded-lg flex-shrink-0"
            :style="{ color: employee.statusColor, backgroundColor: `${employee.statusColor}1A` }"
          >{{ employee.status }}</span>
        </div>
        <div class="flex items-center gap-4 pl-13 ml-13">
          <div class="flex items-center gap-1 ml-13">
            <svg class="h-3.5 w-3.5 text-[#A2A1A8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            </svg>
            <span class="text-xs text-[#A2A1A8] font-light">{{ employee.type }}</span>
          </div>
          <div class="flex items-center gap-1">
            <svg class="h-3.5 w-3.5 text-[#A2A1A8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <span class="text-xs text-[#A2A1A8] font-light">{{ employee.checkIn }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ↓ REPLACED: was ~20 lines of pagination markup, now 7 ↓ -->
    <TablePagination
      v-if="showPagination"
      v-model:currentPage="currentPage"
      v-model:perPage="perPage"
      :totalPages="totalPages"
      :totalItems="employees.length"
    />

  </div>
</template>