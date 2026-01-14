<template>
    <!-- Modal Backdrop -->
    <div class="modal-backdrop fade show" @click="close"></div>

    <!-- Modal -->
    <div class="modal d-block fade show" tabindex="-1">
        <div class="modal-dialog" @click.stop>
            <div class="modal-content">

                <!-- Header -->
                <div class="modal-header">
                    <h5 class="modal-title">Add New Product</h5>
                    <button type="button" class="btn-close" @click="close"></button>
                </div>

                <!-- Body -->
                <div class="modal-body">
                    <form @submit.prevent="save">

                        <div class="mb-2">
                            <label class="form-label">Name</label>
                            <input v-model="newProduct.name" class="form-control" required />
                        </div>

                        <div class="mb-2">
                            <label class="form-label">Price</label>
                            <input type="number" min="0" v-model.number="newProduct.price" class="form-control"
                                required />
                        </div>

                        <div class="mb-2">
                            <label class="form-label">Description</label>
                            <textarea v-model="newProduct.description" class="form-control" required></textarea>
                        </div>

                        <div class="mb-2">
                            <label class="form-label">Stock</label>
                            <input type="number" min="0" v-model.number="newProduct.stock" class="form-control"
                                required />
                        </div>

                        <!-- Category dropdown -->
                        <div class="mb-2">
                            <label class="form-label">Category</label>
                            <!-- AddProductModal.vue -->
                            <select v-model="newProduct.category" class="form-control" required>
                                <option disabled value="">Select Category</option>
                                <option v-for="cat in categories" :key="cat._id" :value="cat._id">{{ cat.name }}
                                </option>
                            </select>


                        </div>


                        <!-- Color, Size, Level -->
                        <div class="d-flex gap-2 mb-3">
                            <select v-model="newProduct.color" class="form-control">
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

                            <input type="text" v-model="newProduct.size" class="form-control" placeholder="Size" />

                            <select v-model="newProduct.level" class="form-control">
                                <option disabled value="">Select Level</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                                <option>Expert</option>
                                <option>All Levels</option>
                            </select>
                        </div>

                        <div class="d-flex gap-2">
                            <button class="btn btn-success w-100" type="submit">Add Product</button>
                            <button class="btn btn-secondary w-100" type="button" @click="close">Cancel</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

// Props
defineProps({
    categories: Array
})


const emit = defineEmits(['save', 'close'])

const newProduct = reactive({
    name: '',
    price: 0,
    description: '',
    stock: 0,
    color: '',
    size: '',
    level: '',
    category: ''
})

function save() {
    emit('save', { ...newProduct })
    Object.keys(newProduct).forEach(key => newProduct[key] = (key === 'price' || key === 'stock') ? 0 : '')
}

function close() {
    emit('close')
}
</script>
