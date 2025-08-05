<script setup>
import { ref,  onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import name from '@/assets/img/name.png'
import { BellIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import ProfileModal from '@/modals/ProfileModal.vue'


// Route
const route = useRoute()

// Login state
const isLoggedIn = ref(false)
const toggleLogin = () => (isLoggedIn.value = !isLoggedIn.value)

const profileModal = ref(false)
function toggleModal() {
  profileModal.value = !profileModal.value
}

// Map path to title/greeting
const routeConfig = {
  '/employees': {
    title: 'Employees',
    greeting: 'All Employees'
  },
  '/attendance': {
    title: 'Attendance',
    greeting: 'All Employee Attendance'
  },
  '/holidays': {
    title: 'Holidays',
    greeting: 'Company Holidays'
  },
  '/candidates': {
    title: 'Candidates',
    greeting: 'All Candidate Records'
  },
  '/payroll': {
    title: 'Payroll',
    greeting: 'All Employee Records'
  },
  '/jobs': {
    title: 'Jobs',
    greeting: 'Show All Jobs'
  },
  '/notifications': {
    title: 'Notifications',
    greeting: 'All Notifications'
  },
  '/settings': {
    title: 'Settings',
    greeting: 'All System Settings'
  },
}

// Use computed to react to route changes
const title = computed(() => routeConfig[route.path]?.title || 'Hello Robert 👋🏻')
const greeting = computed(() => routeConfig[route.path]?.greeting || 'Good Morning')


</script>

<template>
  <section class="w-full flex items-center px-3 pt-6">
    <!-- Left title -->
    <div class="font-semibold text-lg">
      <h2>{{ title }}</h2>
      <h4 class="text-sm text-gray-500">{{ greeting }}</h4>
    </div>

    <!-- Right: search + profile -->
    <div class="ml-auto flex items-center space-x-4">
      <!-- Search -->
      <div class="relative ">
        <MagnifyingGlassIcon class="h-6 w-6 text-gray-500 absolute ml-2 mt-2" />
        <input
          type="text"
          placeholder="Search..."
          class="pl-10 pr-2 px-2 py-2 w-60 border border-gray-300  rounded-lg bg-transparent focus:outline-none placeholder:text-[#8A8D91] text-base
           focus:border-[#7152F3] focus:ring-2 focus:ring-[#7152F3] transition duration-200"
        />
      </div>

      <!-- Notification -->
      <RouterLink
      to="/notifications"
      class="relative border border-gray-300 rounded-lg px-2 py-2 bg-[#A2A1A81A]">
        <BellIcon class="h-7 w-7 text-gray-500 cursor-pointer" />
      </RouterLink>

      <!-- Profile -->
      <div 
      
        v-on:click="toggleModal" 
        class="flex items-center border border-gray-300 rounded-lg px-2 py-1 space-x-3 cursor-pointer"
        @click="toggleLogin"
      >
        <img :src="name" alt="Employee" class="w-10 h-10 rounded-full" />
        <div>
          <h3 class="text-base font-medium">Robert Smith</h3>
          <p class="text-xs text-gray-500">HR Manager</p>
        </div>
        <ChevronDownIcon class="h-5 w-5 " />
      </div>

       <!-- If not logged in
     <RouterLink
      v-else
      to="/login"
      class="border border-gray-300 rounded-lg px-4 py-3 hover:bg-[#7152F3] hover:text-white transition-colors cursor-pointer text-base font-medium"
     >
      Login
    </RouterLink> -->
    </div>
    <ProfileModal :visible="profileModal" @close="toggleModal" />
  </section>
</template>
