<template>
    <!-- Login form centered on the page -->
    <div class="container d-flex justify-content-center align-items-center p-5">
        <div class="card shadow-sm" style="max-width: 400px; width: 100%">
            <div class="card-body">
                <h2 class="card-title text-center mb-4">Login</h2>

                <!-- Login form -->
                <form @submit.prevent="handleLogin">
                    <!-- Email -->
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input v-model="email" type="email" id="email" class="form-control" placeholder="Enter email"
                            required />
                    </div>

                    <!-- Password -->
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="password" type="password" id="password" class="form-control"
                            placeholder="Enter password" required />
                    </div>

                    <!-- Error message -->
                    <div v-if="error" class="alert alert-danger py-2">
                        {{ error }}
                    </div>

                    <!-- Submit -->
                    <button type="submit" class="btn btn-primary w-100">
                        Login
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const auth = useAuthStore()

async function handleLogin() {
    error.value = ''

    try {
        const res = await fetch('https://snowshopbackend.onrender.com/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.value, password: password.value })
        })

        const data = await res.json()

        if (res.ok) {
            auth.login(data.user, data.token)
            router.push('/products')

        } else {
            error.value = data.message || 'Invalid email or password'
        }
    } catch (err) {
        console.error(err)
        error.value = 'Server error, please try again later'
    }
}
</script>
