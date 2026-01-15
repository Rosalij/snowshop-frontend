import { defineStore } from 'pinia'

//Get Authentication token and user
export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token')
    }),

    getters: {
        isLoggedIn: (state) => !!state.token
    },

    actions: {
        login(user, token) {
            this.user = user
            this.token = token
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', token)
        },

        logout() {
            this.user = null
            this.token = null
            localStorage.removeItem('user')
            localStorage.removeItem('token')
        }
    }
})
