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
   <div class="flex h-full ">
    <!-- Sidebar -->
    <aside class="hidden md:block md:w-64  ">
      <Navbar />
    </aside>

    <!-- Main content -->
    <main class="flex-1  space-y-6">
      <Header />

      <div class=" border border-[#A2A1A833] rounded-lg px-3 pt-6 mt-6 shadow-sm mx-3 mb-8">
      <!-- Search -->

    <div class="flex justify-between">
       <div class=" relative ">
        <MagnifyingGlassIcon class="h-6 w-6 text-gray-500 absolute ml-2 mt-3" />
       <input
       type="text"
        placeholder="Search..."
       class="pl-10 pr-2 px-2 py-3 w-80 bg-transparent placeholder:text-[#8A8D91] text-base border border-gray-300 rounded-lg 
         focus:outline-none focus:border-[#7152F3] focus:ring-2 focus:ring-[#7152F3] transition duration-200"
      />
    </div>

    <button v-on:click="toggleModal" class="flex space-x-3 border border-[#7152F3] bg-[#7152F3] text-[#FFFFFF] rounded-lg p-3 font-light">
        <CirclePlus />

        <div>
          Add New Job
       </div>
    </button>
    </div>
    
     
        <div class="flex space-x-12 w-full">
      <JobSection
        title="Active Jobs"
        :tasks="tasks.active"
        color="#FF304F"
        section-key="active"
        @open-modal="toggleModal"
      />
      <JobSection
        title="Inactive Jobs"
        :tasks="tasks.inactive"
        color="#D89E07"
        section-key="inactive" 
        @open-modal="toggleModal"
      />
      <JobSection
        title="Completed Jobs"
        :tasks="tasks.completed"
        color="#03A12F"
        section-key="completed"
        @open-modal="toggleModal"
      />
    </div>

    <JobModal :visible="taskModal" @close="toggleModal" />
  </div>

    </main>
    </div>
</template>