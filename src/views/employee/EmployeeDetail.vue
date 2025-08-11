<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import departments from '@/data/departments'
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import { BriefcaseBusiness, PencilLine } from 'lucide-vue-next'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import useTheme from '@/config/useTheme'
import SideBar from '@/components/Employee/Employee-profile/SideBar.vue'

const { isDark } = useTheme()
const route = useRoute()
const memberId = route.params.id

const member = computed(() => {
  return departments
    .flatMap(dep => dep.members)
    .find(m => m.id === memberId)
})

const departmentName = computed(() => {
  const dep = departments.find(d => d.members.some(m => m.id === memberId))
  return dep?.name || 'Unknown Department'
})
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Main app sidebar -->
    <aside class="md:block md:w-64">
      <Navbar />
    </aside>

    <div class="flex-1 flex flex-col">
      <Header />

      <div class="flex-1 overflow-y-auto px-3 mt-20">
        <div class="border border-[#A2A1A833] rounded-lg px-3 shadow-sm">
          <!-- Employee header -->
          <div class="flex justify-between border-b-2 border-[#A2A1A833] pb-6 fixed z-100  w-[75%] pt-6"
            :class="{ 'bg-[#16151C] text-white': isDark, 
            'bg-white text-[#16151C]': !isDark }">
            <div class="flex items-center space-x-4">
              <img :src="member.avatar" class="w-24 h-24 rounded-md">
              <div class="space-y-2 font-light">
                <p class="font-semibold text-xl">{{ member.name }}</p>
                <div class="flex items-center space-x-2">
                  <BriefcaseBusiness class="w-6 h-6" />
                  <p>{{ member.title }}</p>
                </div>
                <div class="flex items-center space-x-2">
                  <EnvelopeIcon class="w-6 h-6" />
                  <p>{{ member.id.toLowerCase() }}@example.com</p>
                </div>
              </div>
            </div>
          
             <div class="flex items-end">
            <RouterLink
            to="/employees/add-new-employee"
              class="flex items-center space-x-2 border border-[#7152F3] bg-[#7152F3] text-white rounded-lg p-3 shadow-sm hover:bg-[#5b41cc] transition"
            >
              <PencilLine />
              <span>Edit Profile</span>
            </RouterLink>

            </div>
          </div>

          <!-- Profile content area -->
          <div class="flex gap-2 min-h-[400px] pt-34">
            <!-- Employee profile sidebar -->
             <div class="mb-4 fixed  "
    :class="{
      'bg-[#16151C] text-[#FFFFFF]': isDark,
      'bg-[#FFFFFF] text-[#16151C]': !isDark
    }"
    >
      <SideBar />
    </div>

            <!-- Dynamic content area -->
            <div class="flex-1 overflow-y-auto ml-56 mt-2">
              <RouterView :employee="member" :department="departmentName" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>