<script setup>
import AttendanceChart from '@/components/AttendanceChart.vue';
import AttendanceOverview from '@/components/AttendanceOverview.vue';
import Calendar from '@/components/Calendar.vue';
import Company from '@/components/Company.vue';
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

      <!-- Company + Calendar Section -->
      <div class="flex flex-wrap gap-6 px-2">
        <div class="flex-1 ">
          <Company />
        <AttendanceChart />
        </div>

        <div class="w-auto  ml-auto">
          <Calendar />
        </div>
      </div>

      <!-- Optional: Chart Section -->
      
      <div>
       <AttendanceOverview />
      </div>
    
    </main>
  </div>
</template>
