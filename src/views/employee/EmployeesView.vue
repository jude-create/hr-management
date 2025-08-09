<script setup>

import EmployeeHome from '@/components/Employee/EmployeeHome.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';



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


      <div class="mt-8 mb-5">
      <EmployeeHome />
      </div>
     
     
   
    
      
      
    </main>
    </div>
</template>