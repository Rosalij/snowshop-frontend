<template>
    <div class="text-center container m-auto my-4 p-4 border rounded-3">
        <h2 class="">Profile</h2> <br>

        <!-- User info from logged in user -->
        <div v-if="user" class="d-flex flex-column gap-3 mb-4 w-25 m-auto">
            <p><strong>Username:</strong><br> {{ user.username }}</p>
            <p><strong>Email:</strong><br> {{ user.email }}</p>
            <p><strong>Role:</strong><br> {{ user.role }}</p>
            <div class="">
                <button class="m-3 btn btn-primary w-100" @click="showAddUser = true">
                    Add new user
                </button>

                <!--modals-->
                <AddAccountModal v-if="showAddUser" @save="addUser" @close="showAddUser = false" />
                <button class="m-3 btn btn-warning w-100" @click="showChangePassword = true">Change Password</button>
                <ChangePasswordModal v-if="showChangePassword" @close="showChangePassword = false"
                    @change="changePassword" />


                <button class="m-3 btn btn-danger w-100" @click="deleteAccount">
                    Delete Account
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import AddAccountModal from '@/components/AddAccountModal.vue'
import ChangePasswordModal from '@/components/ChangePasswordModal.vue'
import { useRouter } from 'vue-router'
const auth = useAuthStore()
const { user } = storeToRefs(auth)
const router = useRouter()
const showChangePassword = ref(false)
const showAddUser = ref(false)


//Change password API call
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


// Function to delete Account
async function deleteAccount() {
    if (!user.value?.id) {
        alert('User not found')
        return
    }

    if (!confirm('Are you sure? You are about to delete your account.')) {
        return
    }

    const token = localStorage.getItem('token')

    try {
        const res = await fetch(
            `https://snowshopbackend.onrender.com/users/${user.value.id}`,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )

        if (res.ok) {
            alert('Account deleted successfully')
            auth.logout()
            router.push('/login')
        } else {
            const data = await res.json()
            alert(data.error || 'Failed to delete account')
        }
    } catch (err) {
        console.error(err)
        alert('Server error, please try again later')
    }
}

// Add a new user 
async function addUser({ username, email, password, role }) {
    const token = localStorage.getItem('token')

    try {
        const res = await fetch('https://snowshopbackend.onrender.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // if protected
            },
            body: JSON.stringify({
                username,
                email,
                password,
                role
            })
        })

        const data = await res.json()

        if (res.ok) {
            alert('User created successfully')

            return data

        } else {
            alert(data.error || 'Failed to create user')
        }
    } catch (err) {
        console.error(err)
        alert('Server error')
    }

}

</script>
