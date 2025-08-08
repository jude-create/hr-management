<script setup>
import AttendanceChart from '@/components/AttendanceChart.vue';
import AttendanceOverview from '@/components/AttendanceOverview.vue';
import Calendar from '@/components/Calendar.vue';
import Company from '@/components/Company.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
 <div class="flex min-h-screen">
  <!-- Sidebar -->
  <aside class="hidden md:block md:w-64 flex-shrink-0">
    <Navbar />
  </aside>

  <!-- Main content -->
  <main class="flex-1 space-y-6">
    <Header />
    <!-- Company + Calendar -->
    <div class="flex flex-wrap lg:flex-nowrap gap-y-6 gap-x-3 px-3 ">
      <div class="flex flex-col  flex-[2]">
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
