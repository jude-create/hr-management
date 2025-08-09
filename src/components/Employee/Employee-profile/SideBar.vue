<script setup>
import { LayoutGrid, CalendarCheck, BriefcaseBusiness, Users, ClipboardList, CalendarDays, Settings, Layers, SunMedium } from 'lucide-vue-next'
import { 
  UserIcon, 
  CurrencyDollarIcon, 
  MoonIcon,
  ClipboardDocumentListIcon
 
} from '@heroicons/vue/24/outline'
import { 
  Squares2X2Icon as LayoutGridSolid,
  BriefcaseIcon as BriefcaseBusinessSolid,
  UserIcon as UsersSolid,
  ClipboardDocumentListIcon as ClipboardListSolid,
  ClipboardIcon as ClipboardSolid,
  CalendarDaysIcon as CalendarDaysSolid,
  Cog6ToothIcon as SettingsSolid,
  Square3Stack3DIcon as LayersSolid,
   UserGroupIcon as UserGroupIconSolid,
  CurrencyDollarIcon as CurrencyDollarIconSolid,
} from '@heroicons/vue/24/solid'
import { useRoute } from 'vue-router'
import { ref } from 'vue'


const route = useRoute()

const navItems = ref([
   { name: 'Profile', path: '/employees/profile', icon: UserIcon, iconSolid: UsersSolid },
  { name: 'Attendance', path: '/', icon: CalendarCheck, iconSolid: CalendarCheck },
    { name: 'Projects', path: '/', icon: ClipboardDocumentListIcon, iconSolid: ClipboardListSolid },
 
  { name: 'Leaves', path: '/', icon: ClipboardList, iconSolid: ClipboardSolid },

])

const isActive = (path) => {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>

<template>
  <aside class="w-52 h-48 border border-[#A2A1A833] shadow mt-5 rounded-lg ">
    <nav class="flex-1">
      <ul>
        <li v-for="item in navItems" :key="item.name" class="flex items-center">
          <router-link
            :to="item.path"
            class="flex items-center w-full p-3 rounded-lg transition-colors"
            :class="{
              'bg-[#7152F3] text-[#FFFFFF] font-semibold ': isActive(item.path),
              'hover:bg-[#7152F310]  font-light': !isActive(item.path)
            }"
          >
            <component
              :is="isActive(item.path) ? item.iconSolid : item.icon"
              class="size-5 mr-4"
              :class="{
                'text-[#FFFFFF]': isActive(item.path),
                '': !isActive(item.path)
              }"
            />
            <h2 class="text-base ">{{ item.name }}</h2>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>
