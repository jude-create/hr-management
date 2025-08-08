<script setup>
import { ref } from 'vue'
import { CalendarDays, ChevronDown } from 'lucide-vue-next'
import useTheme from '@/config/useTheme'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

defineProps({ visible: Boolean })

// Store multiple selections
const selectedTypes = ref([]) 

const { isDark} = useTheme()
</script>

<template>
  <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center bg-[#A2A1A833] backdrop-blur-sm">
    <div 
     :class="{
      'bg-[#16151C] text-[#FFFFFF]': isDark,
      'bg-[#FFFFFF] text-[#16151C]': !isDark
    }"
    class=" w-full max-w-sm rounded-xl shadow-xl p-6 relative"
    >

      <h2 class="text-lg font-semibold  mb-4">Filter</h2>
      
      <div class="space-y-4 ">
         <div class="relative mb-6">
        <MagnifyingGlassIcon class="h-6 w-6 absolute ml-2 mt-2" />
        <input
          type="text"
          placeholder="Search..."
          class="pl-10 pr-2 px-2 py-2 w-80 bg-transparent placeholder:text-[#8A8D91] text-base border border-gray-300 rounded-lg 
            focus:outline-none focus:border-[#7152F3] focus:ring-2 focus:ring-[#7152F3] transition duration-200"
          v-model="search"
        />
      </div>

      <h2 class="font-semibold">Department</h2>

    <div class="grid grid-cols-2 gap-4 font-light mb-8">
      <div>
        <input
        type="checkbox" class="accent-[#7152F3]"/>
        <label class="ml-2">Design</label>
      </div>

      <div>
        <input
        type="checkbox" class="accent-[#7152F3]"/>
        <label class="ml-2">Java</label>
      </div>

      <div>
        <input
        type="checkbox" class="accent-[#7152F3]"/>
        <label class="ml-2">HR</label>
      </div>

      <div>
        <input
        type="checkbox" class="accent-[#7152F3]"/>
        <label class="ml-2">Python</label>
      </div>

      <div>
        <input
        type="checkbox" class="accent-[#7152F3]"/>
        <label class="ml-2">Sales</label>
      </div>

      <div>
        <input
        type="checkbox" class="accent-[#7152F3]"/>
        <label class="ml-2">React js</label>
      </div>

      <div>
        <input
        type="checkbox" class="accent-[#7152F3]"/>
        <label class="ml-2">Business Analyst</label>
      </div>

      <div>
        <input
        type="checkbox" class="accent-[#7152F3]"/>
        <label class="ml-2">Account</label>
      </div>

      <div>
        <input
        type="checkbox" class="accent-[#7152F3]"/>
        <label class="ml-2">Project Manager</label>
      </div>

      <div>
        <input
        type="checkbox" class="accent-[#7152F3]"/>
        <label class="ml-2">Nodejs</label>
      </div>
      
    </div> 
    
    <h2 class="font-semibold">Select Type</h2>
    <div class="flex space-x-2 mt-4 font-light">
        <div>
            <input type="radio" class="accent-[#7152F3]"/>
            <label class="ml-2">Office</label>
        </div>

         <div>
            <input type="radio" class="accent-[#7152F3]"/>
            <label class="ml-2">Work from Home</label>
        </div>
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
