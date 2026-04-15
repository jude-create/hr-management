// src/stores/sidebarStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  const isCollapsed = ref(false)
  const isMobile = ref(false)
  const isOpen = ref(false)

  function toggleSidebar() {
    if (isMobile.value) {
      isOpen.value = !isOpen.value
    } else {
      isCollapsed.value = !isCollapsed.value
    }
  }

  function setMobile(val) {
    isMobile.value = val
    if (!val) isOpen.value = false
  }

  function closeMobileDrawer() {
    isOpen.value = false
  }

  return { isCollapsed, isMobile, isOpen, toggleSidebar, setMobile, closeMobileDrawer }
})