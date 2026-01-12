<template>
    <header class="d-flex m-3">
        <p class="display-6">SnowShop AB</p>
        <!-- Navigation links shown only when logged in -->
        <div class="ms-auto" v-if="isLoggedIn">
            <nav class="nav">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <RouterLink class="nav-link" active-class="active" to="/products">
                            Products
                        </RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink class="nav-link" active-class="active" to="/profile">
                            Profile
                        </RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink class="nav-link" active-class="active" to="/categories">
                            Categories
                        </RouterLink>
                    </li>

                    <li class="nav-item">
                        <button class="btn btn-outline-danger" @click="logout">
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>


<script setup>
import { RouterLink } from 'vue-router';
import { computed } from 'vue'
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
const router = useRouter();
const auth = useAuthStore()

const isLoggedIn = computed(() => !!auth.token)

// Logout function
function logout() {
    auth.logout()
    router.push('/login')
}


</script>