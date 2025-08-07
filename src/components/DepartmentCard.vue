<script setup>
import { useRouter } from 'vue-router'
import DepartmentMember from './DepartmentMember.vue'

const props = defineProps({
  department: Object
})

const router = useRouter()

function goToDetails() {
  router.push(`/departments/${props.department.slug}`)
}
</script>

<template>
  <div class="p-4 rounded-lg shadow-sm border border-[#A2A1A833] w-full">
    <div class="flex justify-between items-center mb-4 border-b-2 pb-4 border-[#A2A1A833]">
      <div>
        <h3 class="font-semibold text-lg">{{ department.name }} Department</h3>
        <p class="text-sm text-[#A2A1A8] font-light ">{{ department.members.length }} Members</p>
      </div>
      <button @click="goToDetails" class="font-light text-[#7152F3] cursor-pointer">View All</button>
    </div>
    <div class="space-y-1">
      <DepartmentMember v-for="member in department.members.slice(0, 5)" :key="member.name" :member="member" />
    </div>
  </div>
</template>
