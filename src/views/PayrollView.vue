<script setup>
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import Payroll from '@/components/Payroll.vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { CircleArrowOutUpLeft } from 'lucide-vue-next';


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
        <MagnifyingGlassIcon class="h-6 w-6  absolute ml-2 mt-2" />
       <input
       type="text"
        placeholder="Search..."
       class="pl-10 pr-2 px-2 py-2 w-80 bg-transparent placeholder:text-[#8A8D91] text-base border border-gray-300 rounded-lg 
         focus:outline-none focus:border-[#7152F3] focus:ring-2 focus:ring-[#7152F3] transition duration-200"
      />
    </div>

     <button v-on:click="toggleModal" class="flex space-x-3 border border-[#7152F3] bg-[#7152F3]
     text-[#FFFFFF] rounded-lg p-3 font-light shadow-sm cursor-pointer hover:bg-[#5b41cc]
      transition-colors ease-in-out duration-200">
        <CircleArrowOutUpLeft class="rotate-45 " />

        <div>
          Export
       </div>
    </button>
     
    </div>
     
    <div class="mt-6 mb-5">
      <Payroll />
    </div>
      
      </div>
    </main>
    </div>
</template>