<script setup>
import { ref } from 'vue'

import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/vue/24/solid'
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import JobSection from '@/components/JobSection.vue'
import JobModal from '@/modals/JobModal.vue'
import { CirclePlus } from 'lucide-vue-next'

const taskModal = ref(false)
function toggleModal() {
  taskModal.value = !taskModal.value
}

const tasks = ref({
  active: [
    { id: 1, title: 'UI/UX Designer', description: 'Design', roles: ["Design", "Full Time", "Remote"],  location: 'California, USA', salary: '$36000' },
    { id: 2, title: 'Software Engineer', description: 'Full Stack', roles: ["Developer", "Full Time", "Remote"], location: 'New York, USA', salary: '$48000' },
    { id: 3, title: 'Data Analyst', description: 'Data Science', roles: [ "Full Time", "Remote"], location: 'New York, USA', salary: '$42000' },
    { id: 4, title: 'Product Manager', description: 'Agile', roles: ["Management", "Full Time"], location: 'London, UK', salary: '$54000' }
  ],
  inactive: [
    { id: 5, title: 'Hr Executive', description: 'HR', roles: ["Hr", "Full Time", "Remote"],  location: 'California, USA', salary: '$36000' },
    { id: 6, title: 'Marketing Specialist', description: 'Digital Marketing', roles: ["Sales", "Full Time"], location: 'New York, USA', salary: '$48000' }
  ],
  completed: [
    { id: 7, title: 'UI/UX Designer', description: 'Design', roles: ["Design", "Full Time", "Remote"],  location: 'California, USA', salary: '$36000' },
    { id: 8, title: 'Software Engineer', description: 'Full Stack', roles: ["Developer", "Full Time", "Remote"], location: 'New York, USA', salary: '$48000' },
    { id: 9, title: 'Data Analyst', description: 'Data Science', roles: [ "Full Time", "Remote"], location: 'New York, USA', salary: '$42000' },
  ]
})


</script>

<template>
  <div class="flex min-h-screen">
    <main class="flex-1 min-w-0">
      <div class="border border-[#A2A1A833] rounded-lg px-3 pt-5 mt-4 shadow-sm mx-3 mb-9">

        <!-- Toolbar -->
        <div class="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center mb-1">
          <div class="relative w-full sm:w-80 hidden md:block">
            <MagnifyingGlassIcon class="h-5 w-5 absolute left-2 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              class="pl-9 pr-2 py-2.5 w-full bg-transparent placeholder:text-[#8A8D91] text-base border border-gray-300 rounded-lg
                focus:outline-none focus:border-[#7152F3] focus:ring-2 focus:ring-[#7152F3] transition duration-200"
            />
          </div>
          <button
            @click="toggleModal"
            class="flex items-center justify-center space-x-2 border border-[#7152F3] bg-[#7152F3]
              text-white rounded-lg px-4 py-2.5 font-light shadow-sm cursor-pointer hover:bg-[#5b41cc]
              transition-colors ease-in-out duration-200 w-full sm:w-auto"
          >
            <CirclePlus class="h-5 w-5" />
            <span>Add New Job</span>
          </button>
        </div>

        <!-- Job columns — stack on mobile, side by side on desktop -->
        <div class="flex flex-col lg:flex-row lg:space-x-4 w-full mt-3">
          <JobSection 
          title="Active Jobs" 
          :tasks="tasks.active" 
          color="#FF304F" 
          section-key="active" 
          @open-modal="toggleModal" />

          <JobSection 
          title="Inactive Jobs" 
          :tasks="tasks.inactive" 
          color="#D89E07" 
          section-key="inactive" 
          @open-modal="toggleModal" />

          <JobSection 
          title="Completed Jobs" 
          :tasks="tasks.completed" 
          color="#03A12F" 
          section-key="completed" 
          @open-modal="toggleModal" />
        </div>

        <JobModal :visible="taskModal" @close="toggleModal" />
      </div>
    </main>
  </div>
</template>