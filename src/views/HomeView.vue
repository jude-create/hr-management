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
    <main class="flex-1 md:min-w-0 overflow-hidden ">
      
      <div class="md:flex md:flex-wrap lg:flex-nowrap  md:gap-x-4 md:px-3 px-4 ">
        <div class="flex flex-col md:flex-[2]">
          <Company />
          <AttendanceChart />
        </div>
        <div>
          <Calendar />
        </div>
      </div>
      <AttendanceOverview />
    </main>
  </div>
</template>