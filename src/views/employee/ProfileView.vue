<script setup>
import AccountAccess from '@/components/Employee/Employee-profile/AccountAccess.vue'
import DocumentsSection from '@/components/Employee/Employee-profile/DocumentsSection.vue'
import EmployeeTabs from '@/components/Employee/Employee-profile/EmployeeTabs.vue'
import PersonalInfo from '@/components/Employee/Employee-profile/PersonalInfo.vue'
import ProfessionalInfo from '@/components/Employee/Employee-profile/ProfessionalInfo.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()

defineProps({
  employee: Object
})

const activeTab = ref('personal')

const personalInfo = [
  { label: 'First Name', value: 'Brooklyn'},
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
  { label: 'Employee ID', value: '879912390' },
  { label: 'UserName', value: 'brooklyn_simmons' },
  { label: 'Employee Type', value: 'Office' },
  { label: 'Email Address', value: 'brooklyn.s@example.com' },
  { label: 'Department', value: 'Project Manager' },
  { label: 'Designation', value: 'Project Manager' },
  { label: 'Working Days', value: '5 Days' }, 
  { label: 'Joining Date', value: 'July 10, 2022' }, 
   { label: 'Office Location', value: '2464 Royal Ln. Mesa, New Jersey' }, 
]

const accountAccess = [
  { label: 'Email Address', value: 'brooklyn.s@example.com' },
  { label: 'Slack ID', value: 'brooklyn_simmons' },
  { label: 'Skype ID', value: 'brooklyn_simmons' },
  { label: 'Github ID', value: 'brooklyn_simmons' },
  
]
</script>

<template>
   <div>
    <EmployeeTabs v-model:activeTab="activeTab" />
  </div>

  <div class="px-6 pb-6 pt-20 overflow-y-auto">
    <PersonalInfo v-if="activeTab === 'personal'" :info="personalInfo" />
    <ProfessionalInfo v-else-if="activeTab === 'professional'" :info="professionalInfo" />
    <DocumentsSection v-else-if="activeTab === 'documents'" />
    <AccountAccess v-else :account="accountAccess" />
  </div>
</template>