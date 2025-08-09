<script setup>
import { CameraIcon } from 'lucide-vue-next'
import { ref } from 'vue'

import { DatePicker } from 'v-calendar'
import CustomSelect from '@/components/CustomSelect.vue'

const firstName = ref('')
const lastName = ref('')
const mobile = ref('')
const email = ref('')
const dob = ref('')
const maritalStatus = ref('')
const gender = ref('')
const nationality = ref('')
const address = ref('')



</script>

<template>
  <div class="grid grid-cols-2 gap-4">

    <!-- Inputs -->
    <input type="number" placeholder="Employee ID" v-model="employeeId" class="input" />
    <input type="text" placeholder="Username" v-model="userName" class="input" />
     <CustomSelect v-model="employeeType" placeholder="Select Employee Type" />
    <input type="email" placeholder="Email Address" v-model="email" class="input" />
   

    <!-- Custom dropdowns -->
    <CustomSelect v-model="department" placeholder="Select Department" />
     <input type="text" placeholder="Enter Designation" v-model="designation" class="input" />
    <CustomSelect v-model="workingDays" placeholder="Select Working Days"  />
     <input
  type="text"
  placeholder="Select Joining Date"
  class="input text-[#8A8D91]"
  onfocus="(this.type='date')"
  onblur="if(!this.value) this.type='text'"
  v-model="dob"
/>

    

    <!-- Address -->
    <textarea placeholder="Select Office Location" v-model="address" class="input col-span-2  "></textarea>

  
  </div>
</template>



