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
    <div class="flex border-b border-gray-200 mb-6 w-full overflow-x-auto">
      <button
        v-for="(step, index) in steps"
        :key="step.label"
        @click="currentStep = index + 1"
        class="flex items-center gap-2 pb-3 font-medium transition-colors duration-200 flex-1 justify-center whitespace-nowrap px-2"
        :class="currentStep === (index + 1)
          ? 'border-b-2 border-[#7152F3] text-[#7152F3]'
          : 'hover:text-[#7152F3]'"
      >
        <!-- Step number circle on mobile, icon on desktop -->
        <span
          class="md:hidden flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold flex-shrink-0"
          :class="currentStep === (index + 1)
            ? 'bg-[#7152F3] text-white'
            : currentStep > (index + 1)
              ? 'bg-[#7152F31A] text-[#7152F3]'
              : 'bg-gray-100 text-gray-400'"
        >
          <!-- Checkmark if step is completed -->
          <svg v-if="currentStep > (index + 1)" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span v-else>{{ index + 1 }}</span>
        </span>

        <!-- Icon — desktop only -->
        <component
          :is="currentStep === (index + 1) ? step.solid : step.outline"
          class="hidden md:block w-5 h-5 flex-shrink-0"
        />

        <!-- Label — desktop only -->
        <span class="hidden md:inline text-sm">{{ step.label }}</span>
      </button>
    </div>

    <!-- Mobile step label — shows current step name below tabs -->
    <div class="md:hidden text-center mb-4">
      <p class="text-sm font-medium text-[#7152F3]">
        Step {{ currentStep }} of {{ totalSteps }}: {{ steps[currentStep - 1].label }}
      </p>
      <!-- Progress bar -->
      <div class="mt-2 h-1 bg-gray-100 rounded-full mx-4">
        <div
          class="h-1 bg-[#7152F3] rounded-full transition-all duration-300"
          :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
        />
      </div>
    </div>

    <!-- Step Components -->
    <div class="md:px-3 px-2">
      <StepPersonal v-if="currentStep === 1" />
      <StepProfessional v-if="currentStep === 2" />
      <StepDocuments v-if="currentStep === 3" />
      <StepAccess v-if="currentStep === 4" />
    </div>

    <!-- Navigation Buttons -->
    <div class="flex justify-end space-x-4 mt-10 px-2">
      <button
        v-if="currentStep > 1"
        @click="prevStep"
        class="px-6 py-2 border-2 border-[#A2A1A833] rounded-lg text-sm"
      >
        Back
      </button>
      <button
        v-if="currentStep < totalSteps"
        @click="nextStep"
        class="px-6 py-2 bg-[#7152F3] text-white rounded-lg text-sm"
      >
        Next
      </button>
      <button
        v-if="currentStep === totalSteps"
        class="px-6 py-2 bg-[#7152F3] text-white rounded-lg text-sm"
      >
        Submit
      </button>
    </div>
  </div>
</template>