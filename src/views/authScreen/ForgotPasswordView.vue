<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // ✅ Import router
import DashboardImg from '@/components/DashboardImg.vue'
import { ChevronLeftIcon } from '@heroicons/vue/24/solid'

const email = ref('')
const router = useRouter() // ✅ Setup router instance

const handleLogin = () => {
  console.log('Email:', email.value)

  // TODO: Send OTP logic here (optional)

  // ✅ Redirect to Enter OTP page
  router.push('forgot-password/enter-otp')
}
</script>

<template>
  <main class="flex w-full h-screen justify-between p-10">
    <!-- Left: Image -->
    <DashboardImg />

    <!-- Right: Forgot Password Form -->
    <section class="w-3/6 flex flex-col justify-center px-10">
      <!-- Back Button -->
      <div class="flex items-center space-x-1 mb-6 cursor-pointer" @click="$router.push('/login')">
        <ChevronLeftIcon class="h-6 w-6" />
        <p>Back</p>
      </div>

      <!-- Heading -->
      <div class="mb-6">
        <p class="text-xl font-semibold">Forgot Password</p>
        <p class="text-[#A09B98] text-base font-light">
          Enter your registered email address. We’ll send you a code to reset your password.
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="w-full space-y-6">
        <!-- Email Input -->
        <div class="relative">
          <input
            v-model="email"
            type="email"
            id="email"
            class="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7152F3] placeholder-transparent"
            placeholder="Email"
          />
          <label
            for="email"
            class="absolute left-4 top-2 text-[#7152F3] text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#7152F3]"
          >
            Email Address
          </label>
        </div>

        <!-- ✅ Send OTP Button -->
        <button
          type="submit"
          class="w-full bg-[#7152F3] hover:bg-[#5b41cc] text-white 
          py-3 rounded-lg font-medium mt-2  cursor-pointer 
      transition-colors ease-in-out duration-150"
        >
          Send OTP
        </button>
      </form>
    </section>
  </main>
</template>
