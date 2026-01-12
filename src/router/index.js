import CategoriesView from '@/views/categoriesView.vue'
import LoginView from '@/views/loginView.vue'
import ProductsView from '@/views/productsView.vue'
import ProfileView from '@/views/profileView.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Define routes with meta for authentication
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: "/profile",
    name: "profile",
    component: ProfileView,
    meta: { requiresAuth: true }
  }, 
  {
    path: "/products",
    name: "products",
    component: ProductsView,
    meta: { requiresAuth: true }
  },
    {
    path: "/categories",
    name: "categories",
    component: CategoriesView,
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  }
  ],
})
// Navigation guard to protect routes
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  // If route requires auth and user is NOT logged in
  if (to.meta.requiresAuth && !token) {
    next('/login')
    return
  }

  // If user IS logged in and tries to go to login
  if (to.path === '/login' && token) {
    next('/products')
    return
  }

  next()
})


export default router