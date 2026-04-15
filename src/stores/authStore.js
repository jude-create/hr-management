import { defineStore } from "pinia";

// authStore.js
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      id: 'EMP001',
      name: 'Robert Smith'
    }
  })
})