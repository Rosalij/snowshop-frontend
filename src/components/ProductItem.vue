<template>
    <div class="container-fluid my-4">



        <!-- Make table responsive on small screens -->
        <div class="table-responsive border">
            <table class="table table-striped table-hover align-middle w-100">
                <!-- Table headers -->
                <thead class="table-light">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Stock</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Level</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td><strong>{{ product.name }}</strong></td>
                        <td class="text-success">${{ product.price }}</td>
                        <td>{{ product.description }}</td>
                        <td>{{ product.stock }}</td>
                        <td>{{ product.color }}</td>
                        <td>{{ product.size }}</td>
                        <td>{{ product.level }}</td>
                        <td class="col-2 m-2">
                            <button class="btn btn-sm btn-warning me-1 m-2" @click="$emit('editProduct', product)">
                                Edit
                            </button>


                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    products: { type: Array, required: true }
})

const emit = defineEmits(['editProduct', 'deleteProduct'])
</script>
