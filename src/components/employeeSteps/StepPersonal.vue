<script setup>
import { CameraIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import CustomSelect from '../CustomSelect.vue'

const firstName = ref('')
const lastName = ref('')
const mobile = ref('')
const email = ref('')
const dob = ref('')
const maritalStatus = ref('')
const gender = ref('')
const nationality = ref('')
const address = ref('')
const city = ref('')
const state = ref('')
const zip = ref('')

// Image upload state
const photo = ref(null)       // Will hold the preview URL
const fileInput = ref(null)   // Hidden file input reference

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    photo.value = URL.createObjectURL(file)
  }
}
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <!-- Upload Photo -->
    <div class="col-span-2 flex items-center space-x-4 mb-3">
      <div
        class="w-20 h-20 flex items-center justify-center border border-[#A2A1A80D] bg-[#A2A1A80D] rounded-lg shadow-sm overflow-hidden cursor-pointer"
        @click="fileInput.click()"
      >
        <img
          v-if="photo"
          :src="photo"
          alt="Profile Preview"
          class="w-full h-full object-cover"
        />
        <CameraIcon v-else class="text-gray-400" />
      </div>
      <p class="text-gray-500 text-sm cursor-pointer" @click="fileInput.click()">Upload Photo</p>
      <input
        type="file"
        accept="image/*"
        ref="fileInput"
        class="hidden"
        @change="handleImageUpload"
      />
    </div>

    <!-- Inputs -->
    <input type="text" placeholder="First Name" v-model="firstName" class="input" />
    <input type="text" placeholder="Last Name" v-model="lastName" class="input" />
    <input type="text" placeholder="Mobile Number" v-model="mobile" class="input" />
    <input type="email" placeholder="Email Address" v-model="email" class="input" />
    <input type="date" v-model="dob" class="input text-[#8A8D91]" />

    <!-- Custom dropdowns -->
    <CustomSelect v-model="maritalStatus" placeholder="Marital Status" :options="['Single', 'Married']" />
    <CustomSelect v-model="gender" placeholder="Gender" :options="['Male', 'Female']" />
    <CustomSelect v-model="nationality" placeholder="Nationality" :options="['Nigerian']" />

    <!-- Address -->
    <textarea placeholder="Address" v-model="address" class="input col-span-2"></textarea>

    <!-- City, State, ZIP in one line -->
    <div class="col-span-2 flex space-x-4">
      <CustomSelect v-model="city" placeholder="City" :options="['Lagos', 'Abuja', 'Port Harcourt']" class="flex-1" />
      <CustomSelect v-model="state" placeholder="State" :options="['Lagos State', 'FCT', 'Rivers State']" class="flex-1" />
      <input type="text" placeholder="ZIP Code" v-model="zip" class="input flex-1" />
    </div>
  </div>
</template>



