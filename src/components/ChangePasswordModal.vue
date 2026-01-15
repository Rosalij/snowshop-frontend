<template>
    <div class="modal-backdrop fade show" @click="close"></div>

    <div class="modal d-block fade show" tabindex="-1">
        <div class="modal-dialog" @click.stop>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Change Password</h5>
                    <button type="button" class="btn-close" @click="close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submit">
                        <div class="mb-2">
                            <label>New Password</label>
                            <input type="password" v-model="password" class="form-control bg-light" required />
                        </div>
                        <div class="d-flex gap-2">
                            <button type="submit" class="btn btn-success w-100">Change Password</button>
                            <button type="button" class="btn btn-secondary w-100" @click="close">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close', 'change'])

const password = ref('')

function submit() {
    emit('change', { password: password.value })
    password.value = '' // reset
}

function close() {
    emit('close')
}
</script>
