<template>
    <div class="container mt-4">
        <h2>Profile</h2>

        <div v-if="user">
            <p><strong>Username:</strong> {{ user.username }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>Role:</strong> {{ user.role }}</p>

            <button class="btn btn-warning mb-3" @click="showChangePassword = true">Change Password</button>

            <ChangePasswordModal v-if="showChangePassword" @close="showChangePassword = false"
                @change="changePassword" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import ChangePasswordModal from '@/components/ChangePasswordModal.vue'

const auth = useAuthStore()
const { user } = storeToRefs(auth)

const showChangePassword = ref(false)

async function changePassword({ password }) {
    if (!user.value?.id) {
        alert('User not found')
        return
    }

    const token = localStorage.getItem('token')

    try {
        const res = await fetch(`https://snowshopbackend.onrender.com/users/${user.value.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ password })
        })

        const data = await res.json()

        if (res.ok) {
            alert('Password changed successfully')
            showChangePassword.value = false
        } else {
            alert('Error: ' + data.message)
        }
    } catch (err) {
        console.error(err)
        alert('Server error, please try again later')
    }
}
</script>
