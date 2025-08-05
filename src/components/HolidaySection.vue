<script setup>
import { defineProps, computed } from 'vue'
import {BriefcaseBusiness, MapPin} from 'lucide-vue-next'

const props = defineProps({
  holidays: Array,
  date: String,
  day: String,
  holiday: String
})

// Helper function to check if a date is upcoming
const isUpcoming = (dateString) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0) // Reset time to compare dates only
  const holidayDate = new Date(dateString)
  return holidayDate >= today
}
</script>

<template>
  <main>
    <div class="space-y-4">
      <!-- Table Container -->
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full">
          <!-- Table Header -->
          <div class="grid grid-cols-11 border-b-2 border-gray-200 pb-3 font-light text-[#A2A1A8] items-center pt-6">
            <div class="col-span-3">Date</div>
            <div class="col-span-2">Day</div>
            <div class="col-span-3">Holiday Name</div>
          </div>

          <div class="divide-y divide-gray-100">
            <div v-for="holiday in holidays" :key="holiday.id" class="grid grid-cols-11 items-center py-4 font-light">
              <div class="col-span-3 flex items-center space-x-2">
                <!-- Updated border color conditional -->
                <div 
                  :class="{
                    'border-[#7152F3]': isUpcoming(holiday.date),
                    'border-[#A2A1A81A]': !isUpcoming(holiday.date)
                  }" 
                  class="col-span-3 border-2 bg-[#A2A1A81A] h-10 w-1 rounded-xl" 
                />
                <div class="flex items-center space-x-2"> 
                  <span>{{ holiday.date }}</span>
                </div>
              </div>
              <div class="col-span-2">{{ holiday.day }}</div>
              <div class="col-span-3 flex items-center space-x-2">
                <span>{{ holiday.holiday }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>