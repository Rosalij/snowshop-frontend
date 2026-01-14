<template>
    <div class="modal-backdrop fade show" @click="close"></div>

    <div class="modal d-block fade show" tabindex="-1" style="background: rgba(0,0,0,0.5);">
        <div class="modal-dialog" @click.stop>
            <div class="modal-content">
                <!-- Header -->
                <div class="modal-header">
                    <h5 class="modal-title">Edit Product</h5>
                    <button type="button" class="btn-close" @click="close"></button>
                </div>

                <!-- Body -->
                <div class="modal-body">
                    <form @submit.prevent="save">
                        <div class="mb-2">
                            <label class="form-label">Name</label>
                            <input ref="nameInput" v-model="editProduct.name" class="form-control" required />
                        </div>

                        <div class="mb-2">
                            <label class="form-label">Price</label>
                            <input type="number" min="0" v-model.number="editProduct.price" class="form-control"
                                required />
                        </div>

                        <div class="mb-2">
                            <label class="form-label">Description</label>
                            <textarea v-model="editProduct.description" class="form-control" required></textarea>
                        </div>

                        <div class="mb-2">
                            <label class="form-label">Stock</label>
                            <input type="number" min="0" v-model.number="editProduct.stock" class="form-control"
                                required />
                        </div>
                        <!-- Category dropdown -->
                        <div class="mb-2">
                            <label class="form-label">Category</label>
                            <!-- AddProductModal.vue -->
                            <select v-model="editProduct.category" class="form-control" required>
                                <option disabled value="">Select Category</option>
                                <option v-for="cat in props.categories" :key="cat._id" :value="cat._id">{{ cat.name }}
                                </option>
                            </select>

                        </div>

                        <div class="d-flex gap-2 mb-3">
                            <!-- Color Dropdown -->
                            <select v-model="editProduct.color" class="form-control">
                                <option disabled value="">Select Color</option>
                                <option>Red</option>
                                <option>Blue</option>
                                <option>Green</option>
                                <option>Black</option>
                                <option>Yellow</option>
                                <option>Orange</option>
                                <option>White</option>
                                <option>Purple</option>
                                <option>Gray</option>
                                <option>Brown</option>
                                <option>Pink</option>
                                <option>Multi-color</option>
                            </select>

                            <input type="text" v-model="editProduct.size" class="form-control" placeholder="Size">
                            <!-- Level Dropdown -->
                            <select v-model="editProduct.level" class="form-control">
                                <option disabled value="">Select Level</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                                <option>Expert</option>
                                <option>All Levels</option>
                            </select>
                        </div>
                        <div class="d-flex gap-2">
                            <button class="btn btn-success w-100" type="submit">Save</button>
                            <button class="btn btn-danger w-100" type="button" @click="deleteProduct">
                                Delete
                            </button>
                            <button class="btn btn-secondary w-100" type="button" @click="close">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, watch, ref, nextTick } from 'vue'
// Props and emits
const props = defineProps({
    product: { type: Object, required: true },
    categories: { type: Array, required: true }
})
const emit = defineEmits(['save', 'delete', 'close'])
// Reactive copy of product to edit
const editProduct = reactive({ ...props.product })

// Update reactive copy when prop changes
watch(() => props.product, (newVal) => {
    Object.assign(editProduct, newVal)

    // Auto-focus input when modal opens
    nextTick(() => nameInput.value?.focus())
})

// Reference to name input for auto-focus
const nameInput = ref(null)

// Save edited product
function save() {
    // Send only the _id for category
    const payload = { ...editProduct, category: editProduct.category }
    emit('save', payload)
}

// Delete product
function deleteProduct() {
    if (confirm('Are you sure you want to delete this product?')) {
        emit('delete', editProduct.id || editProduct._id)
    }
    alert("Product deleted")
}

// Close modal
function close() {
    emit('close')
}
</script>

<style scoped>
.modal-dialog {
    top: 20%;
    transform: translateY(-50%);
    max-width: 500px;
}
</style>
