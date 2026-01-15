<template>
    <div class="modal-backdrop fade show" @click="$emit('close')"></div>
    <!-- Add account modal -->
    <div class="modal d-block fade show">
        <div class="modal-dialog" @click.stop>
            <div class="modal-content">
                <div class="modal-header">
                    <h5>Add New User</h5>
                    <button class="btn-close" @click="$emit('close')" />
                </div>
                <!--form-->
                <form @submit.prevent="submit">
                    <div class="modal-body font-">
                        <label class="form-label"><strong>User Details</strong></label> <br>
                        <label form="form-username" class="form-label">Username:</label>
                        <input v-model="form.username" class="form-control mb-2 bg-light" required />
                        <label form="form-email" class="form-label">Email:</label>
                        <input v-model="form.email" type="email" class="form-control mb-2 bg-light" required />
                        <label for="form-password" class="form-label">Password:</label>
                        <input v-model="form.password" type="password" class="form-control mb-2 bg-light" required />
                        <label class="form-label">Role:</label>
                        <select v-model="form.role" class="form-control bg-light">
                            <option value="staff">Staff</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-success">Create</button>
                        <button type="button" class="btn btn-secondary" @click="$emit('close')">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['save', 'close'])

const form = reactive({
    username: '',
    email: '',
    password: '',
    role: ''
})

function submit() {
    emit('save', { ...form })

}
</script>
