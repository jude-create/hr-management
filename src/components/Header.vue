<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import name from '@/assets/img/name.png'
import { BellIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import ProfileModal from '@/modals/ProfileModal.vue'

const route = useRoute()
const router = useRouter()
const isLoggedIn = ref(false)
const profileModal = ref(false)

const toggleLogin = () => (isLoggedIn.value = !isLoggedIn.value)
const toggleModal = () => (profileModal.value = !profileModal.value)

// Props for dynamic department data
const props = defineProps({
  department: {
    type: Object,
    default: null
  }
})

// Title and greeting logic
const title = computed(() => {
  if (route.path.startsWith('/departments/') && props.department) {
    return props.department.name + " Department"
  }
  
  // Default titles for other routes
  const routeTitles = {
    '/employees': 'Employees',
    '/departments': 'All Departments',
    '/attendance': 'Attendance',
    '/holidays': 'Holidays',
    '/candidates': 'Candidates',
    '/payroll': 'Payroll',
    '/jobs': 'Jobs',
    '/notifications': 'Notifications',
    '/settings': 'Settings'
  }
  
  return routeTitles[route.path] || 'Hello Robert 👋🏻'
})

const greeting = computed(() => {
  if (route.path.startsWith('/departments/') && props.department) {
    return {
      clickablePart: 'All Departments',
      staticPart: ` > ${props.department.name}`
    }
  }
  
  // Default greetings for other routes
  const routeGreetings = {
    '/employees': 'All Employees',
    '/departments': 'All Departments Information',
    '/attendance': 'All Employee Attendance',
    '/holidays': 'Company Holidays',
    '/candidates': 'All Candidate Records',
    '/payroll': 'All Employee Records',
    '/jobs': 'Show All Jobs',
    '/notifications': 'All Notifications',
    '/settings': 'All System Settings'
  }
  
  return routeGreetings[route.path] || 'Good Morning'
})

const navigateToDepartments = () => {
  router.push('/departments')
}
</script>

<template>
  <section class="w-full flex items-center px-3 pt-6">
    <!-- Left title -->
    <div class="font-semibold text-lg">
      <h2>{{ title }}</h2>
       <h4 class="text-sm text-gray-500 font-light">
        <template v-if="route.path.startsWith('/departments/') && props.department">
          <span 
            class="cursor-pointer hover:text-[#7152F3] transition-colors"
            @click="navigateToDepartments"
          >
            {{ greeting.clickablePart }}
          </span>
          <span>{{ greeting.staticPart }} Department</span>
        </template>
        <template v-else>
          {{ greeting }}
        </template>
      </h4>
    </div>

    <!-- Right: search + profile -->
    <div class="ml-auto flex items-center space-x-4">
      <!-- Search -->
      <div class="relative">
        <MagnifyingGlassIcon class="h-6 w-6  absolute ml-2 mt-2" />
        <input
          type="text"
          placeholder="Search..."
          class="pl-10 pr-2 px-2 py-2 w-60 border border-gray-300 rounded-lg bg-transparent focus:outline-none placeholder:text-[#8A8D91] text-base focus:border-[#7152F3] focus:ring-2 focus:ring-[#7152F3] transition duration-200"
        />
      </div>

      <!-- Notification -->
      <RouterLink
        to="/notifications"
        class="relative border border-gray-300 rounded-lg px-2 py-2 bg-[#A2A1A81A]">
        <BellIcon class="h-7 w-7  cursor-pointer" />
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
          <p class="text-xs text-gray-500 font-light">HR Manager</p>
        </div>
        <ChevronDownIcon class="h-5 w-5" />
      </div>
    </div>
    <ProfileModal :visible="profileModal" @close="toggleModal" />
  </section>
</template>