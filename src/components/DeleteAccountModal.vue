<template>
    <div class="modal fade show d-block" tabindex="-1" v-if="show">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Confirm Delete</h5>
                    <button type="button" class="btn-close" @click="$emit('close')"></button>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete your account?</p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" @click="$emit('close')">Cancel</button>
                    <button class="btn btn-danger" @click="$emit('delete')">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    show: Boolean
})
</script>
