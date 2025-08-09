<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Employee from '@/assets/img/employee.png'
import { BriefcaseBusiness, CirclePlus, PencilLine } from 'lucide-vue-next'

import Profile from '@/components/Employee/Employee-profile/Profile.vue'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'

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

      <div class=" border border-[#A2A1A833] rounded-lg px-3 pt-6 mt-4 shadow-sm mx-3 mb-8">
      <!-- Search -->

    <div class="flex justify-between ">
       <div class="flex items-center space-x-4">
        <div>
            <img :src="Employee" alt="Employee" class="w-24 h-24 rounded-md ">
            
        </div>

        <div class="space-y-2 font-light">
            <h1 class="font-semibold text-xl">Brooklyn Simmons</h1>

            <div class="flex items-center space-x-2">
                 <BriefcaseBusiness class="w-6 h-6 inline-block mr-2" />
                 <p>Project Manager</p>
            </div>

            <div class="flex items-center space-x-2">
                <EnvelopeIcon class="w-6 h-6 inline-block mr-2" />
                <p>brooklyn.s@example.com</p>
            </div>
            
        </div>
       </div>
    
    <div class="flex justify-end items-end">
        <button v-on:click="toggleModal" class="flex space-x-3 border border-[#7152F3] bg-[#7152F3] 
    text-[#FFFFFF] rounded-lg p-3 font-light shadow-sm cursor-pointer hover:bg-[#5b41cc]
    transition-colors ease-in-out duration-200">
        <PencilLine />

        <div>
          Edit Profile
       </div>
    
    
    </button>
    </div>
    </div>
    <div>
        <Profile />
    </div>
     
    </div>

    </main>
    </div>
</template>