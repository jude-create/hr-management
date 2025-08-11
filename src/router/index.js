
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/',
    component: () => import('@/views/HomeView.vue') 
  },

  { 
    path: '/employees',
    component: () => import('@/views/employee/EmployeesView.vue') 
  },

  { 
    path: '/departments', 
    component: () => import('@/views/department/DepartmentView.vue')
  },

  { 
    path: '/departments/:slug',
    component: () => import('@/views/department/DepartmentDetailsView.vue'), 
    props: true
  },

  { 
    path: '/attendance',
    component: () => import('@/views/AttendanceView.vue') 
  },

  { 
    path: '/payroll',
    component: () => import('@/views/PayrollView.vue') 
  },

  { 
    path: '/jobs',
    component: () => import('@/views/JobsView.vue')
  },

  { 
    path: '/candidates', 
    component: () => import('@/views/CandidateView.vue') 
  },

  { 
    path: '/holidays', 
    component: () => import('@/views/HolidayView.vue') 
  },

  { 
    path: '/settings', 
    component: () => import('@/views/SettingsView.vue') 
  },

  { 
    path: '/notifications', 
    component: () => import('@/views/NotificationView.vue') 
  },

  { 
    path: '/login', 
    component: () => import('@/views/authScreen/LoginView.vue') 
  },

  { 
    path: '/forgot-password', 
    component: () => import('@/views/authScreen/ForgotPasswordView.vue') 
  },

  { 
    path: '/forgot-password/enter-otp', 
    component: () => import('@/views/authScreen/EnterOtpView.vue') 
  },

  { 
    path: '/employees/add-new-employee', 
    component: () => import('@/views/employee/AddEmployeeView.vue') 
  },

 {
  path: '/employees/:id',
  name: 'employee-detail',
  component: () => import('@/views/employee/EmployeeDetail.vue'),
  props: true,
  children: [
    { 
      path: '/employees/:id', // Default child route (profile)
      name: 'employee-profile', 
      component: () => import('@/views/employee/ProfileView.vue'),
      props: true 
    },
    { 
      path: 'attendance', 
      name: 'employee-attendance', 
      component: () => import('@/views/employee/EmployeeAttendance.vue'),
      props: true 
    },
    { 
      path: 'projects', 
      name: 'employee-projects', 
      component: () => import('@/views/employee/EmployeeProjects.vue'),
      props: true 
    },
    { 
      path: 'leaves', 
      name: 'employee-leaves', 
      component: () => import('@/views/employee/EmployeeLeaves.vue'),
      props: true 
    }
  ]
}
  ]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
