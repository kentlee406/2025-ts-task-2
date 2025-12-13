import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/coupon-management',
    name: 'coupon-management',
    component: () => import('@/views/CouponManagement.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory('/2025-ts-task-2/'),
  routes,
})

export default router
