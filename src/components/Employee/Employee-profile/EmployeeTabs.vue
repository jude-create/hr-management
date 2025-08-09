<script setup>
// Outline icons
import { UserIcon as UserOutline, BriefcaseIcon as BriefcaseOutline, DocumentIcon as DocumentOutline, LockClosedIcon as KeyOutline } from '@heroicons/vue/24/outline'

// Solid icons
import { UserIcon as UserSolid, BriefcaseIcon as BriefcaseSolid, DocumentIcon as DocumentSolid, LockClosedIcon as KeySolid } from '@heroicons/vue/24/solid'
import { ref } from 'vue'
const props = defineProps({
  activeTab: String
})
const emit = defineEmits(['update:activeTab'])

const tabs = [
  { key: 'personal', label: 'Personal Information',  outline: UserOutline, solid: UserSolid },
  { key: 'professional', label: 'Professional Information', outline: BriefcaseOutline, solid: BriefcaseSolid },
  { key: 'documents', label: 'Documents', outline: DocumentOutline, solid: DocumentSolid },
  { key: 'account', label: 'Account Access', outline: KeyOutline, solid: KeySolid }

]
</script>

<template>
  <div class=" border-b">
    <div class="flex space-x-4">
      <button 
        v-for="tab in tabs" 
        :key="tab.key"
        @click="emit('update:activeTab', tab.key)"
        class="py-3 border-b-2 transition-colors duration-200"
        :class="activeTab === tab.key 
          ? 'border-[#7152F3] text-[#7152F3] font-semibold' 
          : 'border-[#A2A1A833]  hover:text-[#7152F3]'"
      >
        <component :is="activeTab === tab.key ? tab.solid : tab.outline" class="w-5 h-5 inline-block" />
        {{ tab.label }}
      </button>
    </div>
  </div>
</template>
