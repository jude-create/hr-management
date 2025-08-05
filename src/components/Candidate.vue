<script setup>
import { ref, computed, watch } from 'vue'
import Image1 from '@/assets/img/image1.png'
import Image2 from '@/assets/img/image2.png'
import Image3 from '@/assets/img/image3.png'
import Image4 from '@/assets/img/image4.png'
import Image5 from '@/assets/img/image5.png'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

const candidates = [
  {
    name: "Leasie Watson",
    image: Image1,
    appliedFor: "UI/UX Designer",
    appliedDate: "July 14, 2023",
    email: "leasie.w@demo.com",
    number: "(629) 555-0129",
    status: "Selected",
    statusColor: "#3FC28A"
  },
  {
    name: "Darlene Robertson",
    image: Image2,
    appliedFor: "Sales Manager",
    appliedDate: "July 14, 2023",
    email: "agujudeifeanyi@gmail.com",
    number: "(629) 555-0129",
    status: "Selected",
    statusColor: "#3FC28A"
  },
  {
    name: "Leslie Alexander",
    image: Image3,
    appliedFor: "Sr. UX Designer",
    appliedDate: "July 14, 2023",
    email: "leasie.w@demo.com",
    number: "(629) 555-0129",
    status: "Selected",
    statusColor: "#3FC28A"
  },
  {
    name: "Leasie Watson",
    image: Image4,
    appliedFor: "Sr. Python Developer",
    appliedDate: "July 14, 2023",
    email: "leasie.w@demo.com",
    number: "(629) 555-0129",
    status: "In Progress",
    statusColor: "#EFBE12"
  },
  {
    name: "Jacob Jones",
    image: Image1,
    appliedFor: "BDE",
    appliedDate: "July 14, 2023",
    email: "leasie.w@demo.com",
    number: "(629) 555-0129",
    status: "In Progress",
    statusColor: "#EFBE12"
  },
   {
    name: "Ronald Richards",
    image: Image5,
    appliedFor: "HR Executive",
    appliedDate: "July 14, 2023",
    email: "leasie.w@demo.com",
    number: "(629) 555-0129",
    status: "Rejected",
    statusColor: "#F45B69"
  }, {
    name: "Leasie Watson",
    image: Image1,
    appliedFor: "Project Manager",
    appliedDate: "July 14, 2023",
    email: "leasie.w@demo.com",
    number: "(629) 555-0129",
    status: "Rejected",
    statusColor: "#F45B69"
  },
  {
    name: "Darlene Robertson",
    image: Image2,
    appliedFor: "Business Analyst",
    appliedDate: "July 14, 2023",
    email: "leasie.w@demo.com",
    number: "(629) 555-0129",
    status: "Selected",
    statusColor: "#3FC28A"
  },
  {
    name: "Leslie Alexander",
    image: Image3,
    appliedFor: "Sr. UI/UX Lead",
    appliedDate: "July 14, 2023",
    email: "leasie.w@demo.com",
    number: "(629) 555-0129",
    status: "Selected",
    statusColor: "#3FC28A"
  },
  {
    name: "Leasie Watson",
    image: Image4,
    appliedFor: "BDM",
    appliedDate: "July 14, 2023",
    email: "leasie.w@demo.com",
    number: "(629) 555-0129",
    status: "In Progress",
    statusColor: "#EFBE12"
  },
  {
    name: "Jacob Jones",
    image: Image1,
    appliedFor: "IOS Developer",
    appliedDate: "July 14, 2023",
    email: "leasie.w@demo.com",
    number: "(629) 555-0129",
    status: "Rejected",
    statusColor: "#F45B69"
  },
   {
    name: "Ronald Richards",
    image: Image5,
    appliedFor: "Delivery Head",
    appliedDate: "July 14, 2023",
    email: "leasie.w@demo.com",
    number: "(629) 555-0129",
    status: "Selected",
    statusColor: "#3FC28A"
  },
];
// Initialize reactive variables
const perPage = ref(10)
const currentPage = ref(1)
const selectedCandidates = ref([])
const selectAll = ref(false)
const showPagination = ref(true)
const limit = ref(10)

// Computed properties
const totalPages = computed(() => Math.ceil(candidates.length / perPage.value))
const paginatedCandidates = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  const end = start + perPage.value
  return candidates.slice(start, end)
})
const currentPageCandidates = computed(() => {
  return showPagination.value ? paginatedCandidates.value : candidates.slice(0, limit.value)
})
const showingRange = computed(() => {
  const start = (currentPage.value - 1) * perPage.value + 1
  const end = Math.min(start + perPage.value - 1, candidates.length)
  return `Showing ${start} to ${end} of ${candidates.length} records`
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

// Checkbox functions
const toggleCandidateSelection = (candidate) => {
  const index = selectedCandidates.value.findIndex(c => c.name === candidate.name)
  if (index > -1) {
    selectedCandidates.value.splice(index, 1)
  } else {
    selectedCandidates.value.push(candidate)
  }
  selectAll.value = selectedCandidates.value.length === currentPageCandidates.value.length
}

const toggleSelectAll = () => {
  const currentCandidates = currentPageCandidates.value

  if (selectAll.value) {
    // Uncheck all
    selectedCandidates.value = selectedCandidates.value.filter(
      c => !currentCandidates.some(pageC => pageC.name === c.name)
    )
    selectAll.value = false
  } else {
    // Check all
    const remaining = currentCandidates.filter(
      c => !selectedCandidates.value.some(sel => sel.name === c.name)
    )
    selectedCandidates.value.push(...remaining)
    selectAll.value = true
  }
}


// Watchers
watch([selectedCandidates, currentPage, perPage], () => {
  const current = currentPageCandidates.value
  selectAll.value = current.every(candidate =>
    selectedCandidates.value.some(c => c.name === candidate.name)
  )
})

</script>

<template>
  <div class="space-y-4">
    <!-- Table Container -->
    <div class="overflow-x-auto">
      <div class="inline-block min-w-full">
        <!-- Table Header -->
        <div class="grid grid-cols-15 border-b-2 border-[#A2A1A81A] pb-3 font-light text-[#A2A1A8] items-center">
          <div class="col-span-1 px-2 flex items-center">
           <input
             type="checkbox"
            :checked="selectAll"
            @change="toggleSelectAll"
          class="h-4 w-4 rounded border-gray-300 text-[#7152F3] focus:ring-[#7152F3]"
          />

          </div>
          <div class="col-span-3 px-2 ">Candidate Name</div>
          <div class="col-span-2 px-2">Applied For</div>
          <div class="col-span-2 px-2">Applied Date</div>
          <div class="col-span-3 px-2">Email Address</div>
          <div class="col-span-2 px-2">Mobile Number</div>
          <div class="col-span-1 px-2 text-right">Status</div>
        </div>

        <!-- Table Rows -->
        <div class="divide-y-2 divide-[#A2A1A81A] ">
          <div
            v-for="(candidate, index) in currentPageCandidates"
            :key="index"
            class="grid grid-cols-15 py-2 items-center hover:bg-[#7152F310] transition-colors"
          >
            <!-- Checkbox -->
            <div class="col-span-1 px-2 flex items-center">
              <input
                type="checkbox"
                :checked="selectedCandidates.some(c => c.name === candidate.name)"
                @change="toggleCandidateSelection(candidate)"
                class="h-4 w-4 rounded border-gray-300 text-[#7152F3] focus:ring-[#7152F3]"
              />
            </div>
            
            <!-- Candidate Name -->
            <div class="col-span-3 px-2 flex items-center space-x-2 min-w-[220px]">
              <img 
                :src="candidate.image" 
                alt="Employee" 
                class="w-10 h-10 rounded-full object-cover flex-shrink-0" 
              />
              <p class="font-light text-sm truncate">{{ candidate.name }}</p>
            </div>
            
            <!-- Applied For -->
            <div class="col-span-2 px-2 font-light text-sm truncate min-w-[150px]">{{ candidate.appliedFor }}</div>
            
            <!-- Applied Date -->
            <div class="col-span-2 px-12 font-light text-sm min-w-[110px]">{{ candidate.appliedDate }}</div>
            
            <!-- Email -->
            <div class="col-span-3 px-2 font-light text-sm truncate min-w-[170px]">{{ candidate.email }}</div>
            
            <!-- Mobile -->
            <div class="col-span-2 px-2 font-light text-sm truncate min-w-[120px]">{{ candidate.number }}</div>
            
            <!-- Status -->
            <div class="col-span-1 px-2 min-w-[90px]">
              <span
                class="inline-flex items-center justify-center font-light text-xs px-3 py-1 rounded-lg whitespace-nowrap "
                :style="{ 
                  color: candidate.statusColor, 
                  backgroundColor: `${candidate.statusColor}1A` 
                }"
              >
                {{ candidate.status }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Selected count display -->
    <div v-if="selectedCandidates.length > 0" class="text-sm text-gray-600 px-2">
      {{ selectedCandidates.length }} candidate(s) selected
    </div>

    <!-- Pagination -->
    <div v-if="showPagination" class="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4 px-2">
      <!-- Rows per page selector -->
      <div class="flex items-center space-x-2">
        <label class="text-xs sm:text-sm text-[#A2A1A8]">Show</label>
        <select 
          v-model="perPage" 
          class="border rounded px-2 py-1 text-xs sm:text-sm bg-white"
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
          :disabled="currentPage === totalPages"
          @click="currentPage++"
          class="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
        >
          <ChevronRightIcon class="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
</template>