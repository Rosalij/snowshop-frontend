<template>
    <div class="container my-4">
        <h2 class="text-center mb-4">Products</h2>
        <!-- Search -->
        <div class="col-10 mb-3 d-flex flex-row align-items-center gap-3 m-auto">
            <label for="searchQuery">Search:</label>
            <input v-model="searchQuery" type="text" class="form-control"
                placeholder="Search products by name, description or color..." />
            <!-- Add Product Button -->
            <button class="btn btn-primary col-2" @click="showAddModal = true">Add new product</button>
        </div>
        <!-- Products Table -->
        <ProductsTable :products="filteredProducts" @editProduct="openEditModal" @deleteProduct="deleteProduct" />
        <!-- Edit Product Modal -->
        <EditProductModal v-if="selectedProduct" :product="selectedProduct" @save="updateProduct"
            @delete="deleteProduct" @close="selectedProduct = null" />
        <!-- Add Product Modal -->
        <AddProductModal v-if="showAddModal" @save="addProduct" @close="showAddModal = false" />
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import ProductsTable from '@/components/ProductItem.vue'
import EditProductModal from '@/components/EditProductModal.vue'
import AddProductModal from '@/components/AddProductModal.vue'

// State variables
const token = localStorage.getItem('token')
const products = ref([])
const selectedProduct = ref(null)
const searchQuery = ref('')
const showAddModal = ref(false)

// Computed property for filtering products
const filteredProducts = computed(() => {
    if (!searchQuery.value) return products.value
    return products.value.filter(p =>
        p.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        (p.description && p.description.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
        (p.color && p.color.toLowerCase().includes(searchQuery.value.toLowerCase()))
    )
})


// Fetch products
async function getProducts() {
    try {
        const res = await fetch('https://snowshopbackend.onrender.com/products', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) products.value = await res.json()
        else console.error('Failed to fetch products')
    } catch (err) {
        console.error(err)
    }
}
// Initial fetch on mount
onMounted(getProducts)

// Edit modal
function openEditModal(product) { // Open modal with selected product
    selectedProduct.value = { ...product }
} async function updateProduct(updatedProduct) {
    try { // Send update request
        const res = await fetch(`https://snowshopbackend.onrender.com/products/${updatedProduct._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Updated to get token directly
            },
            body: JSON.stringify(updatedProduct)
        });

        const data = await res.json();

        if (res.ok) {
            // Replace the product in the local list
            const index = products.value.findIndex(p => p._id === data.product._id);
            if (index !== -1) products.value[index] = data.product;

            selectedProduct.value = null; // close modal
        } else {
            console.error('Failed to update product:', data.error);
        }

    } catch (err) {
        console.error('Error updating product:', err);
    }
}


// DELETE product
async function deleteProduct(id) {
    products.value = products.value.filter(p => p._id !== id)

    selectedProduct.value = null
    // Send delete request
    try {
        await fetch(`https://snowshopbackend.onrender.com/products/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` } // use token variable
        });
        console.log("product deleted")
    } catch (err) {
        console.error(err)
    }
}

// Add product 
async function addProduct(newProduct) { // Send add request
    await fetch('https://snowshopbackend.onrender.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }, // use token variable
        body: JSON.stringify(newProduct)
    })
    showAddModal.value = false // close modal
    getProducts() // refresh list
}


</script>
