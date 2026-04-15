<script setup>
import { RouterLink } from 'vue-router';
import Attendance from '../Attendance.vue';



</script>

<template>
    <main class=" border border-[#A2A1A833] rounded-lg px-3  pt-6 mt-6 shadow-sm mx-2 mb-8">
         <div class="flex justify-between md:px-5">
        <h1 class="pt-1 md:text-lg font-semibold">Attendance Overview</h1>
        
        
        <RouterLink to="/attendance" class="border border-[#A2A1A833] w-fit p-2 flex space-x-1 rounded-xl">
            <p class="font-light md:text-base text-sm">View</p>
            
        </RouterLink>
    </div>
     <div class="mt-5 mb-6">
        <Attendance :limit="7" />
     </div>
    </main>
</template>