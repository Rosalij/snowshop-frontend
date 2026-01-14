<template v-if="show">
    <!-- Modal Backdrop -->


    <!-- Modal -->
    <div class="modal d-block fade show" tabindex="-1">
        <div class="modal-dialog" @click.stop>
            <div class="modal-content">
                <!-- Header -->
                <div class="modal-header">
                    <h5 class="modal-title">Register New User</h5>
                    <button type="button" class="btn-close" @click="close"></button>
                </div>

                <!-- Body -->
                <div class="modal-body text-lg-start">
                    <form @submit.prevent="saveUser">

                        <div class="mb-2">
                            <label class="form-label">Username:</label>
                            <input type="text" v-model="user.username" class="form-control" required />
                        </div>

                        <div class="mb-2">
                            <label class="form-label">Email:</label>
                            <input type="email" v-model="user.email" class="form-control" required />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Password:</label>
                            <input type="password" v-model="user.password" class="form-control" required />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Role:</label>
                            <select v-model="user.role" class="form-control" required>
                                <option disabled value="">Select Role</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <div class="d-flex gap-2">
                            <button class="btn btn-primary w-100" type="submit">
                                Register
                            </button>
                            <button class="btn btn-secondary w-100" type="button" @click="close">
                                Cancel
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    </div>
    <div class="modal-backdrop fade show" @click="close"></div>
</template>
<script setup>
import { reactive } from 'vue'

defineProps({
    show: Boolean
})

const emit = defineEmits(['close', 'register'])

const user = reactive({
    username: '',
    email: '',
    password: '',
    role: ''
})

function saveUser() {
    emit('register', { ...user })
    Object.keys(user).forEach(k => user[k] = '')
}

function close() {
    emit('close')
}
</script>
