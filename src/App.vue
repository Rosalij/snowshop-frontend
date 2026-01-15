<script setup>

import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="app-wrapper d-flex flex-column min-vh-100">
    <Header />
    <main class="flex-fill">
      <RouterView />

    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
