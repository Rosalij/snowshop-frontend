<template>
    <header class="container my-2">

        <div class="d-flex flex-column flex-md-row align-items-center justify-content-between">

            <div class="col-5">
                <RouterLink to="/products" class="text-decoration-none  text-dark d-flex align-items-center gap-2">
                    <img src="/public/images/black-winter-snowflake-doodle-style.png" alt="snowflake logo" width="50" />
                    <p class="mb-0 fs-6 fs-md-4 w-100">SnowShop AB</p>
                </RouterLink>
            </div>


            <!-- Menu -->
            <div v-if="isLoggedIn">
                <nav>
                    <ul
                        class="nav nav-pills justify-content-center justify-content-md-end flex-row flex-md-row gap-2 gap-md-3 mb-0">

                        <li class="nav-item">
                            <RouterLink active-class="active" class="nav-link py-1 px-2 py-md-2 px-md-3" to="/products">
                                Products</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink active-class="active" class="nav-link py-1 px-2 py-md-2 px-md-3" to="/profile">
                                Profile</RouterLink>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-outline-danger py-1 px-2 py-md-2 px-md-3"
                                @click="logout">Logout</button>
                        </li>
                    </ul>
                </nav>
            </div>

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
