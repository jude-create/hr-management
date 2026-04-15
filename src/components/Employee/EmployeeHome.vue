<script setup>
import { ref, computed } from 'vue'
import { AdjustmentsHorizontalIcon, EyeIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { ChevronLeftIcon, ChevronRightIcon, CirclePlus } from 'lucide-vue-next'
import departments from '@/data/departments'
import EmployeeFilter from '@/modals/EmployeeFilter.vue'



const taskModal = ref(false)
function toggleModal() {
  taskModal.value = !taskModal.value
}

const search = ref('')

// Combine all members from all departments
const allMembers = computed(() => {
  return departments
    .flatMap(department => department.members)
    .sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically by name
})

// Pagination variables
const perPage = ref(10)
const currentPage = ref(1)

// Computed properties for pagination
const filteredMembers = computed(() => {
  if (!search.value) return allMembers.value
  return allMembers.value.filter(member =>
    member.name.toLowerCase().includes(search.value.toLowerCase()) ||
    member.title.toLowerCase().includes(search.value.toLowerCase()) ||
    member.id.includes(search.value)
  )
})

const totalPages = computed(() => {
  return Math.ceil(filteredMembers.value.length / perPage.value)
})

const paginatedMembers = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  const end = start + perPage.value
  return filteredMembers.value.slice(start, end)
})

const showingRange = computed(() => {
  const start = (currentPage.value - 1) * perPage.value + 1
  const end = Math.min(start + perPage.value - 1, filteredMembers.value.length)
  return `Showing ${start} to ${end} of ${filteredMembers.value.length} members`
})

const visiblePages = computed(() => {
  const maxVisible = 5
  const half = Math.floor(maxVisible / 2)
  let start = Math.max(currentPage.value - half, 1)
  let end = Math.min(start + maxVisible - 1, totalPages.value)
  
  if (end - start + 1 < maxVisible) {
    start = Math.max(end - maxVisible + 1, 1)
  }
  
  return Array.from({length: end - start + 1}, (_, i) => start + i)
})

// Add department name to each member
const membersWithDepartment = computed(() => {
  return paginatedMembers.value.map(member => {
    const department = departments.find(dep => 
      dep.members.some(m => m.id === member.id)
    )
    return {
      ...member,
      departmentName: department?.name || 'Unknown Department'
    }
  })
})
</script>

<template>
  <div class="border border-[#A2A1A833] rounded-lg px-3 pt-6 mt-2 shadow-sm mx-3 mb-8">
    <div class="flex justify-between">
      <!-- Search -->
      <div class="lg:relative lg:block hidden">
        <MagnifyingGlassIcon class="h-6 w-6 absolute ml-2 mt-2" />
        <input
          type="text"
          placeholder="Search..."
          class="pl-10 pr-2 px-2 py-2 w-80 bg-transparent placeholder:text-[#8A8D91] text-base border border-gray-300 rounded-lg 
            focus:outline-none focus:border-[#7152F3] focus:ring-2 focus:ring-[#7152F3] transition duration-200"
          v-model="search"
        />
      </div>
      <div class="flex space-x-4">
        <RouterLink
        to="/employees/add-new-employee"
         
          class="flex space-x-3 border border-[#7152F3] bg-[#7152F3] text-[#FFFFFF] 
          rounded-lg p-3 font-light cursor-pointer shadow-sm r-pointer hover:bg-[#5b41cc]
    transition-colors ease-in-out duration-200">
          <CirclePlus />
          <div>Add New Employee</div>
        </RouterLink>
        
        <button
        v-on:click="toggleModal"
        class="flex items-center justify-center space-x-3 border border-[#A2A1A833] rounded-lg py-3 px-7 font-light cursor-pointer shadow-sm">
          <AdjustmentsHorizontalIcon class="h-5 w-5" />
          <div>Filter</div>
        </button>
      </div>
    </div>

    <div class="pt-6">
      <!-- Header -->
      <div class=" border-b-2 border-[#A2A1A81A] pb-3 font-light text-[#655b9e] text-base hidden lg:grid grid-cols-7 gap-x-6 overflow-x-auto">
        <div class=" ">Employee ID</div>
        <div class=" ">Employee Name</div>
        <div class=" ">Department</div>
        <div class=" ">Designation</div>
        <div class=" ">Type</div>
        <div class=" ">Status</div>
        <div class=" ">Action</div>
      </div>

      <!-- Rows -->
      <div class="divide-y-2 divide-[#A2A1A81A] hidden lg:block">
        <div
          v-for="member in membersWithDepartment"
          :key="member.id"
          class="grid grid-cols-7 gap-x-6 py-3 items-center hover:bg-[#7152F310] transition-colors text-base"
        >
          <!-- Employee ID -->
          <div class="font-light">
            {{ member.id }}
          </div>
          
          <!-- Name + Avatar -->
          <div class=" flex items-center space-x-1 ">
            <img
              :src="member.avatar"
              alt="Employee"
              class="w-10 h-10 rounded-full object-cover"
            />
            <p class="font-light">{{ member.name }}</p>
          </div>

          <!-- Department -->
          <div class=" font-light">
            {{member.departmentName }}
          </div>

          <!-- Designation -->
          <div class=" font-light">
            {{ member.title }}
          </div>

          <!-- Type -->
          <div class=" font-light">
            {{ member.type || 'Full Time' }}
          </div>

          <!-- Status -->
          <div class="">
            <span
              class="inline-flex items-center justify-center font-light text-sm px-2 py-2 rounded-lg"
              :style="{ color: member.statusColor || '#7152F3', backgroundColor: (member.statusColor || '#7152F3') + '1A' }"
            >
              {{ member.status || 'Active' }}
            </span>
          </div>

          <!-- Actions -->
          <div class=" font-light flex items-center space-x-1">
            <EyeIcon
             class="h-5 w-5 cursor-pointer"
            @click="$router.push({ name: 'employee-profile', params: { id: member.id } })"

          />

            <PencilIcon class="h-5 w-5 cursor-pointer" />
            <TrashIcon class="h-5 w-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>

    
    <!-- MOBILE CARDS — hidden on desktop -->
    <div class="lg:hidden divide-y-2 divide-[#A2A1A81A]">
      <div
        v-for="member in membersWithDepartment"
        :key="member.id"
        class="py-3 px-2 hover:bg-[#7152F310] transition-colors"
      >
        <!-- Top row: avatar + name + status badge -->

        <div class=" font-light pb-3 text-[#A2A1A8]">
            {{ member.id }}
          </div>
        <div class="flex items-center justify-between mb-2">
          
          
          <div class="flex items-center space-x-2">
            <img :src="member.avatar" alt="Employee" class="w-10 h-10 rounded-full object-cover flex-shrink-0" />
            <div>
              <p class="text-sm font-medium">{{ member.name }}</p>
              <p class="text-xs text-[#A2A1A8] font-light">{{ member.title }}</p>
            </div>
          </div>

           <!-- Actions -->
          <div class=" px-3 font-light flex items-center space-x-1">
            <EyeIcon
             class="h-5 w-5 cursor-pointer"
            @click="$router.push({ name: 'employee-profile', params: { id: member.id } })"

          />

            <PencilIcon class="h-5 w-5 cursor-pointer" />
            <TrashIcon class="h-5 w-5 cursor-pointer" />
          </div>
         
        </div>

        <!-- Bottom row: type + check-in -->
        <div class="flex items-center justify-between pt-3 px-2">
           <!-- Department -->
          <div class="  font-bold text-[#A2A1A8]">
            {{member.departmentName }}
          </div>

            <!-- Type -->
          <div class=" text-center font-light text-[#A2A1A8]">
            {{ member.type || 'Full Time' }}
          </div>

           <!-- Status -->
          <div class="w-fit flex items-end text-[#A2A1A8]">
            <span
              class="inline-flex items-center justify-center font-light text-sm px-2 py-2 rounded-lg"
              :style="{ color: member.statusColor || '#7152F3', backgroundColor: (member.statusColor || '#7152F3') + '1A' }"
            >
              {{ member.status || 'Active' }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4 px-2 py-4">
      <!-- Rows per page selector -->
      <div class="flex items-center space-x-2">
        <label class="text-xs sm:text-sm text-[#A2A1A8]">Showing</label>
        <select 
          v-model="perPage" 
          class="border rounded px-2 py-1 text-xs sm:text-sm"
          @change="currentPage = 1"
        >
          <option :value="5">5</option>
          <option :value="10">10</option>
          <option :value="15">15</option>
        </select>
      </div>

      <!-- Pagination controls -->
      <div class="flex items-center space-x-4">
        <div class="text-sm text-gray-600">{{ showingRange }}</div>
        
        <button
          :disabled="currentPage === 1"
          @click="currentPage--"
          class="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
        >
          <ChevronLeftIcon class="h-5 w-5" />
        </button>

        <div class="flex space-x-1">
          <button
            v-for="page in visiblePages"
            :key="page"
            @click="currentPage = page"
            :class="[
              'px-3 py-1 rounded text-sm',
              currentPage === page 
              ? 'border border-[#7152F3] text-[#7152F3] font-semibold' : 'hover:bg-gray-100'
            ]"
          >
            {{ page }}
          </button>
        </div>

        <button
          :disabled="currentPage === totalPages || totalPages === 0"
          @click="currentPage++"
          class="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
        >
          <ChevronRightIcon class="h-5 w-5" />
        </button>
      </div>
    </div>
     <EmployeeFilter :visible="taskModal" @close="toggleModal" />
  </div>
</template>