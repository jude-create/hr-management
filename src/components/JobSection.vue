<script setup>
import { defineProps, defineEmits } from 'vue'
import {BriefcaseBusiness, MapPin} from 'lucide-vue-next'

const props = defineProps({
  tasks: Array,
  title: String,
  color: String,
  sectionKey: String
})



</script>

<template>
  <div class="w-full sm:w-1/3 flex flex-col gap-2 border border-[#A2A1A833] px-3 py-6 rounded-lg my-6 mx-2">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: color }" />
        <p class="font-semibold">{{ title }} </p>
      </div>
    </div>

    <div class="space-y-6 min-h-[170px] ">
      <div
        v-for="task in tasks"
        :key="task.id"
        class="bg-[#A2A1A80D] p-2 rounded-md shadow hover:shadow-md transition-all "
      >
    
      <div class="flex items-center space-x-2">
        <div class="bg-[#A2A1A80D] p-3 rounded-lg">
           <BriefcaseBusiness class="h-6 w-6 text-gray-500" />
        </div>
       
      <div>
         <p class="font-semibold mt-2">{{ task.title }}</p>
        <p class="text-sm font-light text-[#A2A1A8]">{{ task.description }}</p>

      </div>
      </div>  
      
      <!-- roles and job type -->
    <div class="flex flex-wrap gap-2 mt-4 font-light">
      <div
        v-for="(role, index) in task.roles"
       :key="index"
        class="bg-[#7152F3] w-fit px-2 py-1 text-white rounded-lg text-sm mt-2"
     >
      {{ role }}
     </div>
   </div>
       

        <div class="flex justify-between text-sm  mt-8">
          <div class="flex space-x-1 pt-1 ">
                <MapPin class="h-5 w-5" />
               <span>{{ task.location }}</span>
          </div>
          
          <span class="flex" >
            <p class="font-semibold text-lg">{{ task.salary }}</p>
             <p class="mt-1">/Month</p>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>
