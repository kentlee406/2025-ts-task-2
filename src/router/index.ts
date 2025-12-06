import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '@/views/Login.vue'
import Dashboard from '@/components/Dashboard.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/dashboard', component: Dashboard },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
