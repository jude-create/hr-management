// src/composables/useTheme.js
import { ref, onMounted } from 'vue'

export default function useTheme() {
  const isDark = ref(false)

  const applyDarkTheme = () => {
    isDark.value = true
    document.documentElement.classList.add('dark')
    document.body.style.backgroundColor = '#16151C'
    document.body.style.color = '#FFFFFF'
    localStorage.setItem('theme', 'dark')
  }

  const applyLightTheme = () => {
    isDark.value = false
    document.documentElement.classList.remove('dark')
    document.body.style.backgroundColor = '#FFFFFF'
    document.body.style.color = '#000000'
    localStorage.setItem('theme', 'light')
  }

  const toggleTheme = () => {
    isDark.value ? applyLightTheme() : applyDarkTheme()
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      applyDarkTheme()
    } else {
      applyLightTheme()
    }
  })

  return {
    isDark,
    applyDarkTheme,
    applyLightTheme,
    toggleTheme
  }
} 