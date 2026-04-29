<script setup>
import { ref, computed } from 'vue'
import { AdjustmentsHorizontalIcon, EyeIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { CirclePlus } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import departments from '@/data/departments'
import EmployeeFilter from '@/modals/EmployeeFilter.vue'
import TablePagination from '@/components/TablePagination.vue'   // ← NEW

const router     = useRouter()
const taskModal  = ref(false)
const search     = ref('')
const perPage    = ref(10)
const currentPage = ref(1)

const allMembers = computed(() =>
  departments
    .flatMap(d => d.members)
    .sort((a, b) => a.name.localeCompare(b.name))
)

const filteredMembers = computed(() => {
  const q = search.value.toLowerCase()
  if (!q) return allMembers.value
  return allMembers.value.filter(m =>
    m.name.toLowerCase().includes(q) ||
    m.title.toLowerCase().includes(q) ||
    m.id.includes(q)
  )
})

const totalPages = computed(() => Math.ceil(filteredMembers.value.length / perPage.value))

const paginatedMembers = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  return filteredMembers.value.slice(start, start + perPage.value)
})

const membersWithDepartment = computed(() =>
  paginatedMembers.value.map(member => ({
    ...member,
    departmentName: departments.find(d => d.members.some(m => m.id === member.id))?.name ?? 'Unknown',
  }))
)


</script>

<template>
  <div class="border border-[#A2A1A833] rounded-lg px-3 pt-6 mt-2 shadow-sm mx-3 mb-8">

    <!-- Toolbar -->
    <div class="flex justify-between gap-3 flex-wrap">
      <div class="lg:relative lg:block hidden">
        <MagnifyingGlassIcon class="h-5 w-5 absolute left-2 top-2.5 text-[#8A8D91]" />
        <input
          v-model="search"
          type="text"
          placeholder="Search..."
          class="pl-9 pr-3 py-2 w-72 bg-transparent text-sm border border-gray-300 rounded-lg
                 focus:outline-none focus:border-[#7152F3] focus:ring-2 focus:ring-[#7152F3] transition"
        />
      </div>
      <div class="flex gap-3">
        <RouterLink
          to="/employees/add-new-employee"
          class="flex items-center gap-2 border border-[#7152F3] bg-[#7152F3] text-white
                 rounded-lg px-4 py-2 text-sm font-light cursor-pointer hover:bg-[#5b41cc] transition-colors"
        >
          <CirclePlus class="h-4 w-4" />
          Add New Employee
        </RouterLink>
        <button
          @click="taskModal = !taskModal"
          class="flex items-center gap-2 border border-[#A2A1A833] rounded-lg py-2 px-5 text-sm font-light shadow-sm"
        >
          <AdjustmentsHorizontalIcon class="h-4 w-4" />
          Filter
        </button>
      </div>
    </div>

    <div class="pt-6">
      <!-- DESKTOP TABLE -->
      <div class="border-b-2 border-[#A2A1A81A] pb-3 font-light text-[#655b9e] text-sm hidden lg:grid grid-cols-7 gap-x-6">
        <div>Employee ID</div>
        <div>Employee Name</div>
        <div>Department</div>
        <div>Designation</div>
        <div>Type</div>
        <div>Status</div>
        <div>Action</div>
      </div>

      <div class="divide-y-2 divide-[#A2A1A81A] hidden lg:block">
        <div
          v-for="member in membersWithDepartment"
          :key="member.id"
          class="grid grid-cols-7 gap-x-6 py-3 items-center hover:bg-[#7152F310] transition-colors text-sm"
        >
          <div class="font-light text-[#A2A1A8]">{{ member.id }}</div>
          <div class="flex items-center gap-2">
            <img :src="member.avatar" alt="" class="w-9 h-9 rounded-full object-cover" />
            <p class="font-light">{{ member.name }}</p>
          </div>
          <div class="font-light">{{ member.departmentName }}</div>
          <div class="font-light">{{ member.title }}</div>
          <div class="font-light">{{ member.type || 'Full Time' }}</div>
          <div>
            <span
              class="inline-flex items-center justify-center font-light text-xs px-3 py-1.5 rounded-lg"
              :style="{ color: member.statusColor || '#7152F3', backgroundColor: (member.statusColor || '#7152F3') + '1A' }"
            >{{ member.status || 'Active' }}</span>
          </div>
          <div class="flex items-center gap-2">
            <EyeIcon   class="h-4 w-4 cursor-pointer hover:text-[#7152F3] transition-colors" @click="router.push({ name: 'employee-profile', params: { id: member.id } })" />
            <PencilIcon class="h-4 w-4 cursor-pointer hover:text-[#7152F3] transition-colors" />
            <TrashIcon  class="h-4 w-4 cursor-pointer hover:text-red-500 transition-colors" />
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE CARDS -->
    <div class="lg:hidden divide-y-2 divide-[#A2A1A81A] mt-4">
      <div
        v-for="member in membersWithDepartment"
        :key="'m-' + member.id"
        class="py-3 px-2 hover:bg-[#7152F310] transition-colors"
      >
        <p class="text-xs font-light text-[#A2A1A8] pb-2">{{ member.id }}</p>
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <img :src="member.avatar" alt="" class="w-10 h-10 rounded-full object-cover flex-shrink-0" />
            <div>
              <p class="text-sm font-medium">{{ member.name }}</p>
              <p class="text-xs text-[#A2A1A8]">{{ member.title }}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 px-2">
            <EyeIcon    class="h-4 w-4 cursor-pointer" @click="router.push({ name: 'employee-profile', params: { id: member.id } })" />
            <PencilIcon class="h-4 w-4 cursor-pointer" />
            <TrashIcon  class="h-4 w-4 cursor-pointer" />
          </div>
        </div>
        <div class="flex items-center justify-between px-2 text-xs text-[#A2A1A8]">
          <span class="font-semibold">{{ member.departmentName }}</span>
          <span>{{ member.type || 'Full Time' }}</span>
          <span
            class="inline-flex items-center justify-center font-light px-2 py-1 rounded-lg"
            :style="{ color: member.statusColor || '#7152F3', backgroundColor: (member.statusColor || '#7152F3') + '1A' }"
          >{{ member.status || 'Active' }}</span>
        </div>
      </div>
    </div>

    <!-- ↓ REPLACED: was ~35 lines of pagination markup, now 7 ↓ -->
    <TablePagination
      v-model:currentPage="currentPage"
      v-model:perPage="perPage"
      :totalPages="totalPages"
      :totalItems="filteredMembers.length"
    />

    <EmployeeFilter :visible="taskModal" @close="taskModal = false" />
  </div>
</template>