import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  { path: '/employee', component: () => import('@/views/EmployeesView.vue') },
  { path: '/departments', component: () => import('@/views/DepartmentView.vue') },
  { path: '/attendance', component: () => import('@/views/AttendanceView.vue') },
  { path: '/payroll', component: () => import('@/views/PayrollView.vue') },
  { path: '/jobs', component: () => import('@/views/JobsView.vue') },
  { path: '/candidates', component: () => import('@/views/CandidateView.vue') },
  { path: '/holidays', component: () => import('@/views/HolidayView.vue') },
  { path: '/settings', component: () => import('@/views/SettingsView.vue') },
   { path: '/notifications', component: () => import('@/views/NotificationView.vue') },
   { path: '/login', component: () => import('@/views/LoginView.vue') },
   { path: '/forgot-password', component: () => import('@/views/ForgotPasswordView.vue') },
   { path: '/forgot-password/enter-otp', component: () => import('@/views/EnterOtpView.vue') },
//   // Add other routes accordingly
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
