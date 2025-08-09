<script setup>
import { ref } from 'vue'
import { Eye, Download, CircleArrowOutUpLeft } from 'lucide-vue-next'

const files = ref([
  { name: 'Appointment Letter.pdf' },
  { name: 'Salary Slip Jan 2025.pdf' }
])

const handleFileDrop = (e) => {
  e.preventDefault()
  const uploaded = Array.from(e.dataTransfer.files)
  uploaded.forEach(file => {
    if (['application/pdf', 'image/jpeg'].includes(file.type)) {
      files.value.push({ name: file.name })
    }
  })
}

const handleFileSelect = (e) => {
  const uploaded = Array.from(e.target.files)
  uploaded.forEach(file => {
    if (['application/pdf', 'image/jpeg'].includes(file.type)) {
      files.value.push({ name: file.name })
    }
  })
}

const previewFile = (file) => alert(`Previewing: ${file.name}`)
const downloadFile = (file) => alert(`Downloading: ${file.name}`)
</script>

<template>
  <div>
    <!-- Upload Area -->
    <div 
      class="border-2 border-dashed rounded-lg p-6 text-center text-gray-500 cursor-pointer hover:border-purple-500 mb-6 relative"
      @dragover.prevent
      @drop="handleFileDrop"
    >
      <div class="flex flex-col items-center">
        <div class="bg-purple-500 p-3 rounded-xl text-white mb-4">
          <CircleArrowOutUpLeft class="rotate-45" />
        </div>
        <p class="mb-1">
          Drag & Drop or 
          <label class="text-purple-500 underline cursor-pointer">
            choose file
            <input type="file" accept=".pdf,.jpg" class="hidden" @change="handleFileSelect" />
          </label>
          to upload
        </p>
        <p class="text-xs">Supported formats: .jpg, .pdf</p>
      </div>
    </div>

    <!-- File List -->
    <div class="space-y-3">
      <div v-for="file in files" :key="file.name" class="flex items-center justify-between border rounded-lg px-4 py-2 bg-white">
        <span>{{ file.name }}</span>
        <div class="flex gap-3">
          <button @click="previewFile(file)" class="text-gray-500 hover:text-purple-500"><Eye /></button>
          <button @click="downloadFile(file)" class="text-gray-500 hover:text-purple-500"><Download /></button>
        </div>
      </div>
    </div>
  </div>
</template>
