<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { CalendarDays, ChevronDown, LogOut } from 'lucide-vue-next'
import useTheme from '@/config/useTheme'
import { UserIcon } from '@heroicons/vue/24/outline'



// Store multiple selections
const selectedTypes = ref([]) 

const { isDark} = useTheme()

defineProps({ visible: Boolean })
const emit = defineEmits(['close']) 

const modalRef = ref(null)

function handleClickOutside(event) {
  if (modalRef.value && !modalRef.value.contains(event.target)) {
    // Emit close if click is outside the modal
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})

</script>

<template>
  <div 
  v-if="visible" 
  
  class="fixed inset-0 z-50 flex  justify-center  bg-[#A2A1A833] backdrop-blur-sm ">
    <div 
    ref="modalRef"
     :class="{
      'bg-[#16151C] text-[#FFFFFF]': isDark,
      'bg-[#FFFFFF] text-[#16151C]': !isDark
    }"
    class="w-[190px]  max-w-xs rounded-lg shadow-xl py-5 px-4 relative   h-28 top-20  left-3/6 transform -translate-x-1/2 mr-14">
    <div class=" flex flex-col space-y-5 justify-center ">

     <div class="flex space-x-3  items-cente  cursor-pointer   hover:bg-[#A2A1A8]
      transition-colors ease-in-out duration-200r">
        <UserIcon class="h-6 w-6 text-gray-500 " />
         <h2>My Profile</h2>
     </div>

     <RouterLink 
     to="/login"
     class="flex space-x-3  items-center text-[#F45B69]  cursor-pointer   hover:bg-[#A2A1A8]
      transition-colors ease-in-out duration-200">
        <LogOut class="h-6 w-6 " />
        <h2>Logout</h2>
     </RouterLink>

    </div>
     
     
    </div>
  </div>
</template>
