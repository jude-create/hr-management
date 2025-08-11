<script setup>
import departments from '@/data/departments'
import DepartmentCard from '@/components/Department/DepartmentCard.vue'
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="flex h-full">
    <aside class="hidden md:block md:w-64">
      <Navbar />
    </aside>

    <main class="flex-1 space-y-6">
      <Header />

      <div class="border border-[#A2A1A833] rounded-lg px-3 pt-6 mt-25 shadow-sm mx-3 mb-8">
        <div class="relative">
          <MagnifyingGlassIcon class="h-6 w-6  absolute ml-2 mt-2" />
          <input
            type="text"
            placeholder="Search..."
            class="pl-10 pr-2 px-2 py-2 w-80 bg-transparent placeholder:text-[#8A8D91] text-base border border-gray-300 rounded-lg 
              focus:outline-none focus:border-[#7152F3] focus:ring-2 focus:ring-[#7152F3] transition duration-200"
          />
        </div>

        <div class="mt-7 mb-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
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
