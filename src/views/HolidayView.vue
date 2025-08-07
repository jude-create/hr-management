<script setup>
import { ref } from 'vue'

import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/vue/24/solid'
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import JobModal from '@/modals/JobModal.vue'
import { CirclePlus } from 'lucide-vue-next'
import HolidaySection from '@/components/HolidaySection.vue'
import HolidayModal from '@/modals/HolidayModal.vue'

const taskModal = ref(false)
function toggleModal() {
  taskModal.value = !taskModal.value
}

const holidays = ref([
  { id: 1, date: 'January 01, 2025', day: 'Tuesday', holiday: 'New Year' },
  { id: 2, date: 'January 07, 2025', day: 'Saturday', holiday: 'International Programmers'},
  { id: 3, date: 'February 04, 2025', day: 'Thursday', holiday: 'Independence Day' },
  { id: 5, date: 'April 01, 2025', day: 'Saturday', holiday: 'April Fool Day' },
  { id: 6, date: 'May 07, 2025', day: 'Thursday', holiday: 'International Programmers'},
  { id: 7, date: 'May 22, 2025', day: 'Monday', holiday: 'International Day for Biological Diversity' },
  { id: 8, date: 'August 27, 2025', day: 'Monday', holiday: 'International Friendship Day' },
  { id: 9, date: 'September 15, 2025', day: 'Friday', holiday: 'International Day of Democracy' },
  { id: 10, date: 'November 14, 2025', day: 'Thursday', holiday: 'World Diabetes Day' },
  { id: 11, date: 'December 25, 2025', day: 'Tuesday', holiday: 'Merry Chrismas' },
]);



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
        <MagnifyingGlassIcon class="h-6 w-6  absolute ml-2 mt-3" />
       <input
       type="text"
        placeholder="Search..."
       class="pl-10 pr-2 px-2 py-3 w-80 bg-transparent placeholder:text-[#8A8D91] text-base border border-gray-300 rounded-lg 
         focus:outline-none focus:border-[#7152F3] focus:ring-2 focus:ring-[#7152F3] transition duration-200"
      />
    </div>

    <button v-on:click="toggleModal" class="flex space-x-3 border border-[#7152F3] bg-[#7152F3] 
    text-[#FFFFFF] rounded-lg p-3 font-light shadow-sm cursor-pointer hover:bg-[#5b41cc]
    transition-colors ease-in-out duration-200">
        <CirclePlus />

        <div>
          Add New Holiday
       </div>
    </button>
    </div>
    
     
     <div class=" w-full">
    <HolidaySection
    :holidays="holidays"
    />
    </div>
    
    <div class="flex items-center space-x-5 mt-6 mb-5">
        <div class="flex items-center space-x-2">
            <div class="border border-[#7152F3] bg-[#7152F3] rounded-full w-4 h-4" />
            <p class="font-semibold text-sm">Upcoming</p>
        </div>

         <div class="flex items-center space-x-2">
            <div class="border border-[#A2A1A833] bg-[#A2A1A833] rounded-full w-4 h-4" />
            <p class="font-semibold text-sm">Past Holidays</p>
        </div>
    </div>
    <HolidayModal :visible="taskModal" @close="toggleModal" />
  </div>

    </main>
    </div>
</template>