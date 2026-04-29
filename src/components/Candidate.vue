<script setup>
import { ref, computed, watch } from 'vue'
import Image1 from '@/assets/img/image1.png'
import Image2 from '@/assets/img/image2.png'
import Image3 from '@/assets/img/image3.png'
import Image4 from '@/assets/img/image4.png'
import Image5 from '@/assets/img/image5.png'
import TablePagination from '@/components/TablePagination.vue'   // ← NEW

const candidates = [
  { name: "Leasie Watson",     image: Image1, appliedFor: "UI/UX Designer",    appliedDate: "July 14, 2023", email: "leasie.w@demo.com",          number: "(629) 555-0129", status: "Selected",    statusColor: "#3FC28A" },
  { name: "Darlene Robertson", image: Image2, appliedFor: "Sales Manager",     appliedDate: "July 14, 2023", email: "agujudeifeanyi@gmail.com",   number: "(629) 555-0129", status: "Selected",    statusColor: "#3FC28A" },
  { name: "Leslie Alexander",  image: Image3, appliedFor: "Sr. UX Designer",   appliedDate: "July 14, 2023", email: "leasie.w@demo.com",          number: "(629) 555-0129", status: "Selected",    statusColor: "#3FC28A" },
  { name: "Leasie Watson",     image: Image4, appliedFor: "Sr. Python Dev",    appliedDate: "July 14, 2023", email: "leasie.w@demo.com",          number: "(629) 555-0129", status: "In Progress", statusColor: "#EFBE12" },
  { name: "Jacob Jones",       image: Image1, appliedFor: "BDE",               appliedDate: "July 14, 2023", email: "leasie.w@demo.com",          number: "(629) 555-0129", status: "In Progress", statusColor: "#EFBE12" },
  { name: "Ronald Richards",   image: Image5, appliedFor: "HR Executive",      appliedDate: "July 14, 2023", email: "leasie.w@demo.com",          number: "(629) 555-0129", status: "Rejected",    statusColor: "#F45B69" },
  { name: "Leasie Watson",     image: Image1, appliedFor: "Project Manager",   appliedDate: "July 14, 2023", email: "leasie.w@demo.com",          number: "(629) 555-0129", status: "Rejected",    statusColor: "#F45B69" },
  { name: "Darlene Robertson", image: Image2, appliedFor: "Business Analyst",  appliedDate: "July 14, 2023", email: "leasie.w@demo.com",          number: "(629) 555-0129", status: "Selected",    statusColor: "#3FC28A" },
  { name: "Leslie Alexander",  image: Image3, appliedFor: "Sr. UI/UX Lead",    appliedDate: "July 14, 2023", email: "leasie.w@demo.com",          number: "(629) 555-0129", status: "Selected",    statusColor: "#3FC28A" },
  { name: "Leasie Watson",     image: Image4, appliedFor: "BDM",               appliedDate: "July 14, 2023", email: "leasie.w@demo.com",          number: "(629) 555-0129", status: "In Progress", statusColor: "#EFBE12" },
  { name: "Jacob Jones",       image: Image1, appliedFor: "IOS Developer",     appliedDate: "July 14, 2023", email: "leasie.w@demo.com",          number: "(629) 555-0129", status: "Rejected",    statusColor: "#F45B69" },
  { name: "Ronald Richards",   image: Image5, appliedFor: "Delivery Head",     appliedDate: "July 14, 2023", email: "leasie.w@demo.com",          number: "(629) 555-0129", status: "Selected",    statusColor: "#3FC28A" },
]

const perPage            = ref(10)
const currentPage        = ref(1)
const selectedCandidates = ref([])
const selectAll          = ref(false)

const totalPages = computed(() => Math.ceil(candidates.length / perPage.value))

const paginatedCandidates = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  return candidates.slice(start, start + perPage.value)
})

// Keep selectAll in sync when page or perPage changes
watch([currentPage, perPage], () => {
  selectAll.value = paginatedCandidates.value.every(c =>
    selectedCandidates.value.some(s => s.name === c.name)
  )
})

const isSelected = (c) => selectedCandidates.value.some(s => s.name === c.name)

const toggleOne = (candidate) => {
  const idx = selectedCandidates.value.findIndex(c => c.name === candidate.name)
  idx > -1
    ? selectedCandidates.value.splice(idx, 1)
    : selectedCandidates.value.push(candidate)
  selectAll.value = paginatedCandidates.value.every(c => isSelected(c))
}

const toggleAll = () => {
  if (selectAll.value) {
    selectedCandidates.value = selectedCandidates.value.filter(
      c => !paginatedCandidates.value.some(p => p.name === c.name)
    )
  } else {
    paginatedCandidates.value.forEach(c => {
      if (!isSelected(c)) selectedCandidates.value.push(c)
    })
  }
  selectAll.value = !selectAll.value
}
</script>

<template>
  <div class="space-y-4">

    <!-- DESKTOP TABLE -->
    <div class="overflow-x-auto">
      <div class="inline-block min-w-full">

        <div class="lg:grid hidden grid-cols-15 border-b-2 border-[#A2A1A81A] pb-3 font-light text-[#A2A1A8] items-center">
          <div class="col-span-1 px-2">
            <input type="checkbox" :checked="selectAll" @change="toggleAll"
              class="h-4 w-4 rounded border-gray-300 text-[#7152F3] focus:ring-[#7152F3]" />
          </div>
          <div class="col-span-3 px-2">Candidate Name</div>
          <div class="col-span-2 px-2">Applied For</div>
          <div class="col-span-2 px-2">Applied Date</div>
          <div class="col-span-3 px-2">Email Address</div>
          <div class="col-span-2 px-2">Mobile Number</div>
          <div class="col-span-1 px-2 text-right">Status</div>
        </div>

        <div class="divide-y-2 divide-[#A2A1A81A] hidden lg:block">
          <div
            v-for="(candidate, index) in paginatedCandidates"
            :key="index"
            class="grid grid-cols-15 py-2 items-center hover:bg-[#7152F310] transition-colors"
          >
            <div class="col-span-1 px-2">
              <input type="checkbox" :checked="isSelected(candidate)" @change="toggleOne(candidate)"
                class="h-4 w-4 rounded border-gray-300 text-[#7152F3] focus:ring-[#7152F3]" />
            </div>
            <div class="col-span-3 px-2 flex items-center space-x-2 min-w-[220px]">
              <img :src="candidate.image" alt="" class="w-10 h-10 rounded-full object-cover flex-shrink-0" />
              <p class="font-light text-sm truncate">{{ candidate.name }}</p>
            </div>
            <div class="col-span-2 px-2 font-light text-sm truncate min-w-[150px]">{{ candidate.appliedFor }}</div>
            <div class="col-span-2 px-2 font-light text-sm min-w-[110px]">{{ candidate.appliedDate }}</div>
            <div class="col-span-3 px-2 font-light text-sm truncate min-w-[170px]">{{ candidate.email }}</div>
            <div class="col-span-2 px-2 font-light text-sm truncate min-w-[120px]">{{ candidate.number }}</div>
            <div class="col-span-1 px-2 min-w-[90px]">
              <span
                class="inline-flex items-center justify-center font-light text-xs px-3 py-1 rounded-lg whitespace-nowrap"
                :style="{ color: candidate.statusColor, backgroundColor: `${candidate.statusColor}1A` }"
              >{{ candidate.status }}</span>
            </div>
          </div>
        </div>

        <!-- MOBILE CARDS -->
        <div class="lg:hidden divide-y-2 divide-[#A2A1A81A]">
          <div
            v-for="(candidate, index) in paginatedCandidates"
            :key="'m-' + index"
            class="py-3 px-2 hover:bg-[#7152F310] transition-colors"
          >
            <div class="flex items-start justify-between">
              <div class="flex items-start space-x-3">
                <input type="checkbox" :checked="isSelected(candidate)" @change="toggleOne(candidate)"
                  class="mt-1 h-4 w-4 rounded border-gray-300 text-[#7152F3]" />
                <img :src="candidate.image" class="w-10 h-10 rounded-full object-cover" alt="" />
                <div>
                  <p class="text-sm font-medium">{{ candidate.name }}</p>
                  <p class="text-xs text-[#A2A1A8]">{{ candidate.appliedFor }}</p>
                </div>
              </div>
              <span
                class="text-xs px-3 py-1 rounded-lg whitespace-nowrap"
                :style="{ color: candidate.statusColor, backgroundColor: `${candidate.statusColor}1A` }"
              >{{ candidate.status }}</span>
            </div>
            <div class="mt-3 space-y-1 text-xs text-[#A2A1A8] pl-9">
              <p><span class="font-medium text-gray-500">Date:</span> {{ candidate.appliedDate }}</p>
              <p class="truncate"><span class="font-medium text-gray-500">Email:</span> {{ candidate.email }}</p>
              <p><span class="font-medium text-gray-500">Phone:</span> {{ candidate.number }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Selection count -->
    <p v-if="selectedCandidates.length" class="text-sm text-gray-600 px-2">
      {{ selectedCandidates.length }} candidate(s) selected
    </p>

    <!-- ↓ REPLACED: was ~35 lines of pagination markup, now 7 ↓ -->
    <TablePagination
      v-model:currentPage="currentPage"
      v-model:perPage="perPage"
      :totalPages="totalPages"
      :totalItems="candidates.length"
    />

  </div>
</template>