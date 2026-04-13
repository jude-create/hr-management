<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import logo from '@/assets/img/logo.png'
import { LayoutGrid, CalendarCheck, BriefcaseBusiness, Users, ClipboardList, CalendarDays, Settings, Layers, SunMedium } from 'lucide-vue-next'
import { 
  UserGroupIcon, 
  CurrencyDollarIcon, 
  MoonIcon,
} from '@heroicons/vue/24/outline'
import { 
  Squares2X2Icon as LayoutGridSolid,
  BriefcaseIcon as BriefcaseBusinessSolid,
  UsersIcon as UsersSolid,
  ClipboardDocumentListIcon as ClipboardListSolid,
  CalendarDaysIcon as CalendarDaysSolid,
  Cog6ToothIcon as SettingsSolid,
  Square3Stack3DIcon as LayersSolid,
  UserGroupIcon as UserGroupIconSolid,
  CurrencyDollarIcon as CurrencyDollarIconSolid,
} from '@heroicons/vue/24/solid'
import useTheme from '@/config/useTheme'

const { isDark, toggleTheme } = useTheme()
const route = useRoute()

const isCollapsed = ref(false)
const isOpen = ref(false)
const isMobile = ref(false)
const isLogoHovered = ref(false)

const emit = defineEmits(['collapse-change'])

const MOBILE_BREAKPOINT = 768

const handleResize = () => {
  isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
  if (!isMobile.value) isOpen.value = false
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const toggleSidebar = () => {
  if (isMobile.value) {
    isOpen.value = !isOpen.value
  } else {
    isCollapsed.value = !isCollapsed.value
    emit('collapse-change', isCollapsed.value)
  }
}

const navItems = ref([
  { name: 'Dashboard', path: '/', icon: LayoutGrid, iconSolid: LayoutGridSolid },
  { name: 'All Employees', path: '/employees', icon: UserGroupIcon, iconSolid: UserGroupIconSolid },
  { name: 'All Departments', path: '/departments', icon: Layers, iconSolid: LayersSolid },
  { name: 'Attendance', path: '/attendance', icon: CalendarCheck, iconSolid: CalendarCheck },
  { name: 'Payroll', path: '/payroll', icon: CurrencyDollarIcon, iconSolid: CurrencyDollarIconSolid },
  { name: 'Jobs', path: '/jobs', icon: BriefcaseBusiness, iconSolid: BriefcaseBusinessSolid },
  { name: 'Candidates', path: '/candidates', icon: Users, iconSolid: UsersSolid },
  { name: 'Leaves', path: '/notifications', icon: ClipboardList, iconSolid: ClipboardListSolid },
  { name: 'Holidays', path: '/holidays', icon: CalendarDays, iconSolid: CalendarDaysSolid },
  { name: 'Settings', path: '/settings', icon: Settings, iconSolid: SettingsSolid }
])

const isActive = (path) => {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>

<template>
  <!-- Overlay (mobile only) -->
  <div
    v-if="isMobile && isOpen"
    @click="isOpen = false"
    class="fixed inset-0 bg-black/40 z-40"
  ></div>

  <!-- Sidebar -->
  <aside
    :class="[
      'fixed top-0 left-0 h-screen flex flex-col rounded-lg bg-[#A2A1A80D] m-3 pt-2 shadow-sm z-50 transition-all duration-300 ease-in-out',
      !isMobile && (isCollapsed ? 'w-18 px-3' : 'w-64 md:w-60 px-5'),
      isMobile && 'w-64 px-5',
      isMobile && (isOpen ? 'translate-x-0' : '-translate-x-[120%]')
    ]"
  >
    <!-- Logo + Toggle -->
    <div class="flex items-center mb-4 h-12 m-3">

      <!-- COLLAPSED: logo/hamburger overlap area -->
      <div
        v-if="isCollapsed && !isMobile"
        class="relative w-10 h-10 cursor-pointer mx-auto"
        @mouseenter="isLogoHovered = true"
        @mouseleave="isLogoHovered = false"
        @click="toggleSidebar"
      >
        <!-- Logo (shown by default, hidden on hover) -->
        <img
          :class="[
            'absolute inset-0 h-10 w-10 object-contain transition-opacity duration-200',
            isLogoHovered ? 'opacity-0' : 'opacity-100'
          ]"
          :src="logo"
          alt="logo"
        />
        <!-- Hamburger (hidden by default, shown on hover) -->
        <div
          :class="[
            'absolute inset-0 flex items-center justify-center rounded-md hover:bg-gray-200 transition-opacity duration-200',
            isLogoHovered ? 'opacity-100' : 'opacity-0'
          ]"
        >
          ☰
        </div>
      </div>

      <!-- EXPANDED: normal logo + hamburger side by side -->
      <template v-else>
        <div class="flex items-center space-x-2">
          <img class="h-10 w-auto" :src="logo" alt="logo" />
          <h1 class="font-bold text-xl">HRMS</h1>
        </div>
        <button
          @click="toggleSidebar"
          class="ml-auto p-2 rounded-md hover:bg-gray-200"
        >
          ☰
        </button>
      </template>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 overflow-y-auto pr-1">
      <ul class="lg:space-y-1 space-y-2">
        <li v-for="item in navItems" :key="item.name">
          <router-link
            :to="item.path"
            :title="isCollapsed && !isMobile ? item.name : ''"
             @click="() => { if (isMobile) isOpen = true }"
            class="flex items-center w-full p-2 rounded-lg transition-colors"
            :class="[
              !isMobile && isCollapsed ? 'justify-center' : '',
              isActive(item.path)
                ? 'bg-[#F5F3FF] text-[#7152F3] font-semibold border-l-4 border-[#7152F3]'
                : 'hover:bg-[#7152F310] font-light'
            ]"
          >
            <component
              :is="isActive(item.path) ? item.iconSolid : item.icon"
              :class="[
                'size-5',
                (!isCollapsed || isMobile) ? 'mr-4' : '',
                isActive(item.path) ? 'text-[#7152F3]' : ''
              ]"
            />
            <h2 v-if="!isCollapsed || isMobile" class="text-base">
              {{ item.name }}
            </h2>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Theme Toggle -->
    <div class="flex-shrink-0 pb-11 sticky bottom-0">

      <!-- COLLAPSED: stacked icon-only buttons -->
      <div
        v-if="isCollapsed && !isMobile"
        class="flex flex-col items-center gap-1"
      >
        <button
          @click="toggleTheme"
          :class="!isDark ? 'bg-[#7152F3] text-white' : 'hover:bg-gray-100'"
          class="flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
          title="Light mode"
        >
          <SunMedium class="size-5" />
        </button>
        <button
          @click="toggleTheme"
          :class="isDark ? 'bg-[#7152F3] text-white' : 'hover:bg-gray-100'"
          class="flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
          title="Dark mode"
        >
          <MoonIcon class="size-5" />
        </button>
      </div>

      <!-- EXPANDED: original pill toggle -->
      <div
        v-else
        class="flex items-center border rounded-lg w-fit mx-auto shadow-md overflow-hidden"
      >
        <button
          @click="toggleTheme"
          :class="{ 'bg-[#7152F3] text-white': !isDark, 'hover:bg-gray-100': isDark }"
          class="flex items-center justify-center px-4 py-2 font-light space-x-1 text-sm transition-colors"
        >
          <SunMedium class="size-5" />
          <span>Light</span>
        </button>
        <button
          @click="toggleTheme"
          :class="{ 'bg-[#7152F3] text-white': isDark, 'hover:bg-gray-100': !isDark }"
          class="flex items-center justify-center px-4 py-2 font-light space-x-1 text-sm transition-colors"
        >
          <MoonIcon class="size-5" />
          <span>Dark</span>
        </button>
      </div>

    </div>
  </aside>
</template>