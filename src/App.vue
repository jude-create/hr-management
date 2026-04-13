<script setup>
import { ref, provide } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'

const isNavCollapsed = ref(false)
const headerDepartment = ref(null)

// Provide so any child page can set it
provide('setHeaderDepartment', (dep) => { headerDepartment.value = dep })
</script>

<template>
  <div class="flex min-h-screen">
    <aside :class="['hidden md:block flex-shrink-0 transition-all duration-300', isNavCollapsed ? 'md:w-20' : 'md:w-64']">
      <Navbar @collapse-change="isNavCollapsed = $event" />
    </aside>
    <main class="flex-1 min-w-0">
      <Header :department="headerDepartment" />  <!-- single header here -->
      <router-view />
    </main>
  </div>
</template>