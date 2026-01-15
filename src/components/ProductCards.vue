<template>
    <!--Component for products in mobile view for small screens -->
    <div class="row g-3">
        <div v-for="product in products" :key="product._id" class="col-12">
            <div class="card shadow-sm">
                <div class="card-body">

                    <h5 class="card-title">
                        {{ product.name }}
                    </h5>

                    <p class="text-muted mb-1">
                        Categoy: {{ product.category?.name }}
                    </p>

                    <p class="mb-1">
                        Price: {{ product.price }} €
                    </p>

                    <p class="mb-1">
                        In stock: {{ product.stock }}
                    </p>

                    <p v-if="product.color" class="mb-1">
                        Color: {{ product.color }}
                    </p>

                    <div class="d-flex gap-2 mt-3">
                        <button class="w-100 btn btn-sm btn-outline-primary w-50" @click="$emit('edit', product)">
                            Edit
                        </button>


                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    products: {
        type: Array,
        required: true
    }
})
</script>
