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

const props = defineProps({
  department: {
    type: Object,
    default: null
  }
})

// Map of base routes to title/greeting
const routeMeta = {
  '/employees': {
    title: 'Employees',
    greeting: 'All Employees',
    linkText: 'All Employees',
    linkTo: '/employees'
  },
  '/departments': {
    title: 'All Departments',
    greeting: 'All Departments Information',
    linkText: 'All Departments',
    linkTo: '/departments'
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
  }
}

const basePath = computed(() => {
  const segments = route.path.split('/')
  return '/' + (segments[1] || '')
})

const title = computed(() => {
  // Department case
  if (route.path.startsWith('/departments/') && props.department) {
    return `${props.department.name} Department`
  }

  // Add-new-employee case
  if (route.path === '/employees/add-new-employee') {
    return 'Add New Employee'
  }

  // Default mapping
  return routeMeta[basePath.value]?.title || 'Hello Robert 👋🏻'
})

const greeting = computed(() => {
  // Department breadcrumb
  if (route.path.startsWith('/departments/') && props.department) {
    return {
      clickablePart: routeMeta['/departments'].linkText,
      clickableTo: routeMeta['/departments'].linkTo,
      staticPart: ` >  ${props.department.name} Department`
    }
  }

  // Add-new-employee breadcrumb
  if (route.path === '/employees/add-new-employee') {
    return {
      clickablePart: routeMeta['/employees'].linkText,
      clickableTo: routeMeta['/employees'].linkTo,
      staticPart: ' >  Add New Employee'
    }
  }

  // Default text
  return routeMeta[basePath.value]?.greeting || 'Good Morning'
})

const navigateTo = (path) => {
  router.push(path)
}
</script>


<template>
  <section class="w-full flex items-center px-3 pt-6">
    <!-- Left title -->
    <div class="font-semibold text-lg">
      <h2>{{ title }}</h2>
       <h4 class="text-sm text-gray-500 font-light">
  <template v-if="typeof greeting === 'object'"
  >
    <span 
      class="cursor-pointer hover:text-[#7152F3] transition-colors"
      @click="navigateTo(greeting.clickableTo)"
    >
      {{ greeting.clickablePart }}
    </span>
    <span> {{ greeting.staticPart }}</span>
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