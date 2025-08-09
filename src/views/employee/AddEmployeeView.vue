<script setup>

import EmployeeInfo from '@/components/Employee/EmployeeInfo.vue';
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
    
     
    <div class="mb-2">
       <EmployeeInfo />
    </div>
      
      </div>
    </main>
    </div>
</template>