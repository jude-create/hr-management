// src/composables/useTheme.js
import { ref, computed, onMounted } from 'vue'

// Create a singleton instance
const themeInstance = (() => {
  const theme = ref(localStorage.getItem('theme') || 'system');
  let initialized = false;
  
  return () => {
    const isDark = computed(() => {
      if (theme.value === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      return theme.value === 'dark';
    });

    function applyTheme() {
      if (isDark.value) {
        document.documentElement.classList.add('dark');
        document.body.style.backgroundColor = '#16151C';
        document.body.style.color = '#FFFFFF';
      } else {
        document.documentElement.classList.remove('dark');
        document.body.style.backgroundColor = '#FFFFFF';
        document.body.style.color = '#000000';
      }
    }

    function setTheme(newTheme) {
      theme.value = newTheme;
      localStorage.setItem('theme', newTheme);
      applyTheme();
    }

    function toggleTheme() {
      setTheme(isDark.value ? 'light' : 'dark');
    }

    if (!initialized) {
      onMounted(() => {
        applyTheme();
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
          if (theme.value === 'system') {
            applyTheme();
          }
        });
      });
      initialized = true;
    }

    return {
      theme,
      isDark,
      setTheme,
      toggleTheme
    };
  };
})();

export default themeInstance;