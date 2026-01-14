<template>
    <header class="d-flex m-3">
        <RouterLink to="/products" class="text-decoration-none text-dark d-flex align-items-center gap-3">
            <p class="display-6">SnowShop AB</p>
        </RouterLink>

        <div class="ms-auto" v-if="isLoggedIn">
            <nav class="nav">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/products">Products</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/profile">Profile</RouterLink>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-outline-danger" @click="logout">Logout</button>
                    </li>
                </ul>
            </nav>
        </div>

    </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const isLoggedIn = computed(() => auth.isLoggedIn)

function logout() {
    auth.logout() // triggers reactive update
    router.push('/login')
}
</script>
