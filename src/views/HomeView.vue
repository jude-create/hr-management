<script setup>
import { ref } from 'vue'
import AttendanceChart from '@/components/Dashboard/AttendanceChart.vue'
import AttendanceOverview from '@/components/Dashboard/AttendanceOverview.vue'
import Calendar from '@/components/Dashboard/Calendar.vue'
import Company from '@/components/Dashboard/Company.vue'
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'


</script>

<template>
  <div class="flex min-h-screen">
   

    <!-- Main content -->
    <main class="flex-1 min-w-0 ">
      
      <div class="flex flex-wrap lg:flex-nowrap gap-y-6 gap-x-3 px-3 ">
        <div class="flex flex-col flex-[2]">
          <Company />
          <AttendanceChart />
        </div>
        <div class="flex-[1]">
          <Calendar />
        </div>
      </div>
      <AttendanceOverview />
    </main>
  </div>
</template>