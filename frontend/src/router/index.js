import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'
import ProductView from '../views/products/ProductView.vue'
import CategoryView from '../views/categories/CategoryView.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/register',
    component: RegisterView,
  },
  {
    path: '/products',
    component: ProductView,
  },
  {
    path: '/categories',
    component: CategoryView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
