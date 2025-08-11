<script setup>
import { CalendarCheck, ClipboardList } from 'lucide-vue-next'
import { UserIcon, ClipboardDocumentListIcon } from '@heroicons/vue/24/outline'
import {
  UserIcon as UsersSolid,
  ClipboardDocumentListIcon as ClipboardListSolid,
  ClipboardIcon as ClipboardSolid,
} from '@heroicons/vue/24/solid'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const employeeId = computed(() => route.params.id)

const navItems = computed(() => [
  { 
    name: 'Profile', 
    routeName: 'employee-profile', 
    icon: UserIcon, 
    iconSolid: UsersSolid 
  },
  { 
    name: 'Attendance', 
    routeName: 'employee-attendance', 
    icon: CalendarCheck, 
    iconSolid: CalendarCheck 
  },
  { 
    name: 'Projects', 
    routeName: 'employee-projects', 
    icon: ClipboardDocumentListIcon, 
    iconSolid: ClipboardListSolid 
  },
  { 
    name: 'Leaves', 
    routeName: 'employee-leaves', 
    icon: ClipboardList, 
    iconSolid: ClipboardSolid 
  },
])

const isActive = (routeName) => {
  return route.name === routeName
}
</script>

<template>
  <aside class="w-52 h-48 border border-[#A2A1A833] shadow mt-5 rounded-lg">
    <nav class="flex-1">
      <ul>
        <li v-for="item in navItems" :key="item.name" class="flex items-center">
          <router-link
            :to="{ name: item.routeName, params: { id: employeeId } }"
            class="flex items-center w-full p-3 rounded-lg transition-colors"
            :class="{
              'bg-[#7152F3] text-[#FFFFFF] font-semibold': isActive(item.routeName),
              'hover:bg-[#7152F310] font-light': !isActive(item.routeName)
            }"
          >
            <component
              :is="isActive(item.routeName) ? item.iconSolid : item.icon"
              class="size-5 mr-4"
              :class="{
                'text-[#FFFFFF]': isActive(item.routeName),
              }"
            />
            <h2 class="text-base">{{ item.name }}</h2>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>