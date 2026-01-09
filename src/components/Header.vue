<template>
    <header>
        <div>
            <nav>
                <ul>
                    <li>
                        <RouterLink to="/products">Products</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/profile">Profile</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/categories">Categories</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/login">Log out</RouterLink>
                    </li>

                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>