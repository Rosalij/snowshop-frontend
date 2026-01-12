import { defineStore } from 'pinia'
// Authentication store
export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token')
  }),

  getters: { 
    isLoggedIn: (state) => !!state.token
  },

  
  actions: {
    login(token) {
      this.token = token
      localStorage.setItem('token', token)
    },

    logout() {
      this.token = null
      localStorage.removeItem('token')
    }
  }
})
