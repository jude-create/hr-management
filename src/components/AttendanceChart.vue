<script setup>
import { AArrowDownIcon, ChevronDown } from 'lucide-vue-next';
import Chart from './Chart.vue';


</script>

<template>
<main class="border border-[#A2A1A833] shadow-sm mt-6 p-4 w-full rounded-lg">
    <div class="flex justify-between">
        <h1 class="pt-1 text-lg font-semibold">Attendance Overview</h1>

        <div class="border border-[#A2A1A833] w-fit p-2 flex space-x-1 rounded-xl">
            <p class="font-light text-base">Today</p>
            <ChevronDown class="text-[#16151C] h-5 w-5 mt-1"/>
        </div>
    </div>


<Chart />
</main>

</template>