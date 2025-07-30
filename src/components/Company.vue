<script setup>
import CompanyCard from '@/components/CompanyCard.vue'
import { UserGroupIcon, BriefcaseIcon } from '@heroicons/vue/24/outline'
import { CalendarCheck } from 'lucide-vue-next'

const companyStats = [
  {
    title: 'Total Employee',
    value: 560,
    icon: UserGroupIcon,
    percentage: 12,
    trend: 'up',
    date: 'July 14, 2023'
  },
  {
    title: 'Total Applicant',
    value: 1050,
    icon: BriefcaseIcon,
    percentage: 5,
    trend: 'up',
    date: 'July 14, 2023'
  },
   {
    title: 'Today Attendance',
    value: 470,
    icon: CalendarCheck,
    percentage: 8,
    trend: 'down',
    date: 'July 14, 2023'
  }, {
    title: 'Total Projects',
    value: 250,
    icon: BriefcaseIcon,
    percentage: 12,
    trend: 'up',
    date: 'July 14, 2023'
  }
 
]
</script>

<template>
  <section class="grid grid-cols-2 gap-5 pt-6">
    <CompanyCard
      v-for="(card, index) in companyStats"
      :key="index"
      v-bind="card"
    />
  </section>
</template>
