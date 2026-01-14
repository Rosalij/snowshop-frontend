import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: null
  }),
  getters: {
    isLoggedIn: (state) => !!state.token
  },
  actions: {
    login(userData, token) {
      this.token = token
      this.user = userData      // ✅ store user data
      localStorage.setItem('token', token)
      console.log("User logged in:", userData)  // Debug log
    },
    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
    },
    setUser(userData) {
      this.user = userData
    }
  }
})
