<script setup>
import { ref } from 'vue'

import SideBar from './SideBar.vue'
import EmployeeTabs from './EmployeeTabs.vue'
import PersonalInfo from './PersonalInfo.vue'
import ProfessionalInfo from './ProfessionalInfo.vue'
import DocumentsSection from './DocumentsSection.vue'
import AccountAccess from './AccountAccess.vue'

const activeTab = ref('personal')

const personalInfo = [
  { label: 'First Name', value: 'Brooklyn' },
  { label: 'Last Name', value: 'Simmons' },
  { label: 'Mobile Number', value: '+1 202 555 0170' },
  { label: 'Email', value: 'brooklyn@example.com' },
  { label: 'Date of Birth', value: '1995-05-20' },
  { label: 'Marital Status', value: 'Married'},
  { label: 'Gender', value: 'Female' },
  { label: 'Nationality', value: 'American' },
  { label: 'Address', value: '123 Main St, Springfield, USA' },
  { label: 'City', value: 'Springfield' },
  { label: 'State', value: 'Illinois' },
  { label: 'Zip Code', value: '62701' },
  
  
  
]

const professionalInfo = [
  { label: 'Department', value: 'Design' },
  { label: 'Designation', value: 'UI/UX Designer' },
  { label: 'Employee Type', value: 'Full-Time' },
  { label: 'Working Days', value: 'Mon - Fri' },
  { label: 'Joining Date', value: '2020-01-15' }
]
</script>

<template>
  <div class="flex min-h-screen justify-between ">
    <div class="mt-5">
    <SideBar />
   </div>
    <div class="mt-7">
     

      <EmployeeTabs v-model:activeTab="activeTab" />
       
      <!-----tab content ----->
      <div class="p-6 ">
        <PersonalInfo v-if="activeTab === 'personal'" :info="personalInfo" />
        <ProfessionalInfo v-else-if="activeTab === 'professional'" :info="professionalInfo" />
        <DocumentsSection v-else-if="activeTab === 'documents'" />
        <AccountAccess v-else />
      </div>
    </div>
  </div>
</template>
