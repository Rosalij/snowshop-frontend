import LoginView from '@/views/loginView.vue'
import ProductsView from '@/views/productsView.vue'
import ProfileView from '@/views/profileView.vue'
import StartView from '@/views/startView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: "/",
    name: "start",
    component: StartView
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView
  }, 
  {
    path: "/products",
    name: "products",
    component: ProductsView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  }
  ],
})

export default router
