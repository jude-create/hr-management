<script setup>
import departments from '@/data/departments'
import DepartmentCard from '@/components/Department/DepartmentCard.vue'
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'



</script>

<template>
  <div class="flex min-h-screen">
   


    <main class="flex-1">
      

      <div class="border border-[#A2A1A833] rounded-lg px-3 pt-5 mt-4 shadow-sm mx-3 mb-9 ">
        <div class="relative hidden md:block">
          <MagnifyingGlassIcon class="h-6 w-6  absolute ml-2 mt-2" />
          <input
            type="text"
            placeholder="Search..."
            class="pl-10 pr-2 px-2 py-2 w-80 bg-transparent placeholder:text-[#8A8D91] text-base border border-gray-300 rounded-lg 
              focus:outline-none focus:border-[#7152F3] focus:ring-2 focus:ring-[#7152F3] transition duration-200"
          />
        </div>

        <div class="md:mt-7 mt-3 mb-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
          <DepartmentCard
            v-for="department in departments"
            :key="department.slug"
            :department="department"
          />
        </div>
      </div>
    </main>
  </div>
</template>
