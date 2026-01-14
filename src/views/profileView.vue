<template>
    <div class="container mt-4">
        <h2>Profile</h2>

        <!-- Guard: user must exist -->
        <div v-if="user">
            <p><strong>Username:</strong> {{ user.username }}</p>
            <p v-if="user.email"><strong>Email:</strong> {{ user.email }}</p>
            <p v-if="user.role"><strong>Role:</strong> {{ user.role }}</p>

            <button class="btn btn-danger mt-3" @click="logout">
                Logout
            </button>
        </div>


    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()


const { user } = storeToRefs(auth)

function logout() {
    auth.logout()
    router.push('/login')
}
</script>
