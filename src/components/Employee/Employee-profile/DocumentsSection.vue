<script setup>
import { ref } from 'vue'
import { Eye, Download, CircleArrowOutUpLeft } from 'lucide-vue-next'

const files = ref([
  { name: 'Appointment Letter.pdf' },
  { name: 'Salary Slip Jan 2025.pdf' },
   { name: 'Appointment Letter.pdf' },
  { name: 'Salary Slip Jan 2025.pdf' },
   { name: 'Appointment Letter.pdf' },
  { name: 'Salary Slip Jan 2025.pdf' }
])



const previewFile = (file) => alert(`Previewing: ${file.name}`)
const downloadFile = (file) => alert(`Downloading: ${file.name}`)
</script>

<template>
  <div  >
     <!-- File List -->
    <div class=" grid grid-cols-2 gap-8">
      <div v-for="file in files" :key="file.name" class="flex items-center justify-between border border-[#A2A1A833] rounded-lg px-4 py-3 shadow-sm ">
        <span>{{ file.name }}</span>
        <div class="flex gap-3">
          <button @click="previewFile(file)" class="text-gray-500 hover:text-purple-500"><Eye /></button>
          <button @click="downloadFile(file)" class="text-gray-500 hover:text-purple-500"><Download /></button>
        </div>
      </div>
    </div>
  </div>
</template>
