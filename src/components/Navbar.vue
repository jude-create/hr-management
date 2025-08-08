<script setup>
import { ref } from 'vue'
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

const navItems = ref([
  { name: 'Dashboard', path: '/', icon: LayoutGrid, iconSolid: LayoutGridSolid },
  { name: 'All Employees', path: '/employees', icon: UserGroupIcon, iconSolid: UserGroupIconSolid },
  { name: 'All Departments', path: '/departments', icon: Layers, iconSolid: LayersSolid },
  { name: 'Attendance', path: '/attendance', icon: CalendarCheck, iconSolid: CalendarCheck },
  { name: 'Payroll', path: '/payroll', icon: CurrencyDollarIcon, iconSolid: CurrencyDollarIconSolid },
  { name: 'Jobs', path: '/jobs', icon: BriefcaseBusiness, iconSolid: BriefcaseBusinessSolid },
  { name: 'Candidates', path: '/candidates', icon: Users, iconSolid: UsersSolid },
  { name: 'Leaves', path: '/leaves', icon: ClipboardList, iconSolid: ClipboardListSolid },
  { name: 'Holidays', path: '/holidays', icon: CalendarDays, iconSolid: CalendarDaysSolid },
  { name: 'Settings', path: '/settings', icon: Settings, iconSolid: SettingsSolid }
])

const isActive = (path) => {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>

<template>
  <aside class="fixed top-0 left-0 h-screen flex flex-col rounded-lg bg-[#A2A1A80D] w-64 md:w-60 m-3 px-5 pt-2 shadow-sm ">
    <!-- Logo and Header -->
    <div class="flex-shrink-0">
      <div class="flex items-center space-x-2 mb-4">
        <img class="h-10 w-auto" :src="logo" alt="logo" />
        <h1 class="font-bold text-xl">HRMS</h1>
      </div>
    </div>

    <!-- Navigation (scrollable area) -->
    <nav class="flex-1 overflow-y-auto pr-1">
      <ul class="lg:space-y-1 space-y-2">
        <li v-for="item in navItems" :key="item.name" class="flex items-center">
          <router-link
            :to="item.path"
            class="flex items-center w-full p-2 rounded-lg transition-colors"
            :class="{
              'bg-[#F5F3FF] text-[#7152F3] font-semibold border-l-4 border-[#7152F3]': isActive(item.path),
              'hover:bg-[#7152F310]  font-light': !isActive(item.path)
            }"
          >
            <component
              :is="isActive(item.path) ? item.iconSolid : item.icon"
              class="size-5 mr-4"
              :class="{
                'text-[#7152F3]': isActive(item.path),
                '': !isActive(item.path)
              }"
            />
            <h2 class="text-base ">{{ item.name }}</h2>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Theme Toggle (fixed at bottom) -->
    <div class="flex-shrink-0 pb-11 sticky bottom-0 ">
      <div class="flex items-center border rounded-lg w-fit mx-auto shadow-md overflow-hidden">
        <button
          @click="toggleTheme"
          :class="{
            'bg-[#7152F3] text-white': !isDark,
            'hover:bg-gray-100': isDark
          }"
          class="flex items-center justify-center px-4 py-2 font-light space-x-1 text-sm transition-colors"
        >
          <SunMedium class="size-5" />
          <span>Light</span>
        </button>
        <button
          @click="toggleTheme"
          :class="{
            'bg-[#7152F3] text-white': isDark,
            'hover:bg-gray-100': !isDark
          }"
          class="flex items-center justify-center px-4 py-2 font-light space-x-1 text-sm transition-colors"
        >
          <MoonIcon class="size-5" />
          <span>Dark</span>
        </button>
      </div>
    </div>
  </aside>
</template>