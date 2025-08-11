<script setup>
import { UserIcon as UserOutline, BriefcaseIcon as BriefcaseOutline, DocumentIcon as DocumentOutline, LockClosedIcon as KeyOutline } from '@heroicons/vue/24/outline'
import { UserIcon as UserSolid, BriefcaseIcon as BriefcaseSolid, DocumentIcon as DocumentSolid, LockClosedIcon as KeySolid } from '@heroicons/vue/24/solid'
import { ref, onMounted, watch } from 'vue'
import useTheme from '@/config/useTheme'

const { isDark} = useTheme()

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

// Load the last tab on mount
onMounted(() => {
  const savedTab = localStorage.getItem('activeTab')
  if (savedTab) {
    emit('update:activeTab', savedTab)
  }
})

// Save the tab whenever it changes
watch(
  () => props.activeTab,
  (newTab) => {
    localStorage.setItem('activeTab', newTab)
  }
)
</script>

<template>
  <div class="border-b-2 border-[#A2A1A833] fixed z-50"
  :class="{
      'bg-[#16151C] text-[#FFFFFF]': isDark,
      'bg-[#FFFFFF] text-[#16151C]': !isDark
    }"
  >
    <div class="flex space-x-3   ">
      <button 
        v-for="tab in tabs" 
        :key="tab.key"
        @click="emit('update:activeTab', tab.key)"
        class="py-3   transition-colors duration-200"
        :class="activeTab === tab.key 
          ? 'border-b-2 border-[#7152F3] text-[#7152F3] font-semibold' 
          : 'border-[#A2A1A833] hover:text-[#7152F3]'"
      >
        <component :is="activeTab === tab.key ? tab.solid : tab.outline" class="w-5 h-5 inline-block" />
        {{ tab.label }}
      </button>
    </div>
  </div>
</template>