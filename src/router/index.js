import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  { path: '/attendance', component: () => import('@/views/AttendanceView.vue') },
   { path: '/payroll', component: () => import('@/views/PayrollView.vue') },
 { path: '/candidates', component: () => import('@/views/CandidateView.vue') },
//   // Add other routes accordingly
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
