<script setup>
import { ref } from 'vue'
import { CalendarDays, ChevronDown } from 'lucide-vue-next'
import useTheme from '@/config/useTheme'

defineProps({ visible: Boolean })

// Store multiple selections
const selectedTypes = ref([]) 

const { isDark} = useTheme()
</script>

<template>
  <div v-if="visible" class="fixed inset-0 z-100 flex items-center justify-center bg-[#A2A1A833] backdrop-blur-sm ">
    <div 
     :class="{
      'bg-[#16151C] text-[#FFFFFF]': isDark,
      'bg-[#FFFFFF] text-[#16151C]': !isDark
    }"
    class=" w-full max-w-sm rounded-xl shadow-xl p-6 relative"
    >

      <h2 class="text-lg font-semibold  mb-4">Add New Holiday</h2>
      <div class="space-y-4">
        <!-- Inputs -->
        
        <input type="text" placeholder="Holiday Name" class="w-full border border-[#A2A1A833] rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />

        <div class="relative">
          <input type="text" placeholder="Select Department" class="w-full border border-[#A2A1A833] rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
           <CalendarDays class="absolute right-3 bottom-3 h-7 w-7" />
        </div>

       
       
        <div class="flex items-center space-x-4 mt-2">
            <button @click="$emit('close')" class="mt-4 w-full border border-[#A2A1A833] py-3 rounded-lg hover:bg-indigo-700">
          Cancel
        </button>

           <button @click="$emit('close')" class="mt-4 w-full bg-[#7152F3] text-white py-3 rounded-lg hover:bg-indigo-700">
          Add
        </button>
        </div>
       
      </div>
    </div>
  </div>
</template>
