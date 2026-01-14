<template>
    <div class="modal fade show d-block" tabindex="-1" v-if="show">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Change Password</h5>
                    <button type="button" class="btn-close" @click="$emit('close')"></button>
                </div>
                <div class="modal-body">
                    <input type="password" v-model="newPassword" class="form-control"
                        placeholder="Enter new password" />
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" @click="$emit('close')">Cancel</button>
                    <button class="btn btn-primary" @click="savePassword">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    show: Boolean
})

const newPassword = ref('')

const savePassword = () => {
    if (!newPassword.value) {
        alert("Please enter a new password")
        return
    }

    $emit('save', newPassword.value) // send new password to parent
    newPassword.value = ''
    $emit('close') // close modal
}
</script>
