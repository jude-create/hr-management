<script setup>

import EmployeeInfo from '@/components/Employee/EmployeeInfo.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';


</script>

<template>
   <div class="flex min-h-screen ">
  
    <!-- Main content -->
    <main class="flex-1 overflow-hidden ">
      

      <div class=" border border-[#A2A1A833] rounded-lg px-3 pt-5 mt-4 shadow-sm mx-3 mb-9">
    
     
    <div class="mb-2">
       <EmployeeInfo />
    </div>
      
      </div>
    </main>
    </div>
</template>