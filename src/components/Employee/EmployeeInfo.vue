<script setup>
import { ref } from 'vue'

// Outline icons
import { UserIcon as UserOutline, BriefcaseIcon as BriefcaseOutline, DocumentIcon as DocumentOutline, LockClosedIcon as KeyOutline } from '@heroicons/vue/24/outline'

// Solid icons
import { UserIcon as UserSolid, BriefcaseIcon as BriefcaseSolid, DocumentIcon as DocumentSolid, LockClosedIcon as KeySolid } from '@heroicons/vue/24/solid'


import StepAccess from './employeeSteps/StepAccess.vue'
import StepPersonal from './employeeSteps/StepPersonal.vue'
import StepProfessional from './employeeSteps/StepProfessional.vue'
import StepDocuments from './employeeSteps/StepDocuments.vue'

const currentStep = ref(1)
const totalSteps = 4

const steps = [
  { label: 'Personal Information', outline: UserOutline, solid: UserSolid },
  { label: 'Professional Information', outline: BriefcaseOutline, solid: BriefcaseSolid },
  { label: 'Documents', outline: DocumentOutline, solid: DocumentSolid },
  { label: 'Access Account', outline: KeyOutline, solid: KeySolid }
]

const nextStep = () => {
  if (currentStep.value < totalSteps) currentStep.value++
}
const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
}
</script>


<template>
  <div class="py-2">
    <!-- Step Header -->
    <div class="flex space-x-8 border-b border-gray-200 mb-6 w-full">
      <button
        v-for="(step, index) in steps"
        :key="step.label"
        @click="currentStep = index + 1"
        class="flex items-center gap-2 pb-3 font-medium transition-colors duration-200"
        :class="currentStep === (index + 1)
          ? 'border-b-2 border-[#7152F3] text-[#7152F3]'
          : ' hover:text-[#7152F3]'"
      >
        <component
          :is="currentStep === (index + 1) ? step.solid : step.outline"
          class="w-5 h-5"
        />
        {{ step.label }}
      </button>
    </div>

    <!-- Step Components -->
    <div class="px-3">
      <StepPersonal v-if="currentStep === 1" />
      <StepProfessional v-if="currentStep === 2" />
      <StepDocuments v-if="currentStep === 3" />
      <StepAccess v-if="currentStep === 4" />
    </div>

    <!-- Navigation Buttons -->
    <div class="flex justify-end space-x-4 mt-10">
      <button
        v-if="currentStep > 1"
        @click="prevStep"
        class="px-6 py-2 border-2 border-[#A2A1A833] rounded-lg"
      >
        Back
      </button>
      <button
        v-if="currentStep < totalSteps"
        @click="nextStep"
        class="px-6 py-2 bg-[#7152F3] text-white rounded-lg"
      >
        Next
      </button>
      <button
        v-if="currentStep === totalSteps"
        class="px-6 py-2 bg-[#7152F3] text-white rounded-lg"
      >
        Submit
      </button>
    </div>
  </div>
</template>

