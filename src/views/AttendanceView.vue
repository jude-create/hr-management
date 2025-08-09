<script setup>
import Attendance from '@/components/Attendance.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';


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
     <div class=" relative ">
        <MagnifyingGlassIcon class="h-6 w-6  absolute ml-2 mt-2" />
       <input
       type="text"
        placeholder="Search..."
       class="pl-10 pr-2 px-2 py-2 w-80 bg-transparent placeholder:text-[#8A8D91] text-base border border-gray-300 rounded-lg 
         focus:outline-none focus:border-[#7152F3] focus:ring-2 focus:ring-[#7152F3] transition duration-200"
      />
    </div>
     
    <div class="mt-8 mb-5">
       <Attendance 
        :show-pagination="true"
        :per-page="10"
        :limit="10"
       />
    </div>
      
      </div>
    </main>
    </div>
</template>