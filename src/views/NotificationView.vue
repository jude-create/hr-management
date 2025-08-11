<script setup>
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import { ref, computed } from 'vue';
import name from '@/assets/img/name.png'
import user from '@/assets/img/user.png'
import Image2 from '@/assets/img/image2.png'
import lock from '@/assets/img/lock.png'
import useTheme from '@/config/useTheme'



const {  isDark } = useTheme()

// Notification data array
const notifications = [
  {
    id: 1,
    icon: name,
    title: 'Leave Request',
    description: '@Robert Fox has applied for leave',
    time: 'Just Now',
    timestamp: new Date().getTime(), // For sorting
    iconClass: 'w-12 h-12 rounded-full',
    read: false
  },
  {
    id: 2,
    icon: user,
    title: 'Check In Issue',
    description: '@Alexa shared a message regarding check in issue',
    time: '11:16 AM',
    timestamp: new Date().setHours(11, 16), // Today 11:16 AM
    iconClass: 'w-12 h-12 rounded-full bg-[#7152F31A] p-2',
    read: false
  },
  {
    id: 3,
    icon: Image2,
    title: 'Applied job for "Sales Manager" Position',
    description: '@shane Watson has applied for job',
    time: '09:00 AM',
    timestamp: new Date().setHours(9, 0), // Today 9:00 AM
    iconClass: 'w-12 h-12 rounded-full',
    read: true
  },
  {
    id: 4,
    icon: lock,
    title: 'Password Update successfully',
    description: 'Your password has been updated successfully',
    time: 'Yesterday',
    timestamp: new Date().setDate(new Date().getDate() - 1), // Yesterday
    iconClass: 'w-12 h-12 rounded-full bg-[#7152F31A] p-2',
    read: true
  }
]



// Sort option
const sortOption = ref('newest');

// Sorted notifications
const sortedNotifications = computed(() => {
  const notificationsToSort = [...notifications];
  
  switch (sortOption.value) {
    case 'newest':
      return notificationsToSort.sort((a, b) => b.timestamp - a.timestamp);
    case 'oldest':
      return notificationsToSort.sort((a, b) => a.timestamp - b.timestamp);
    default:
      return notificationsToSort;
  }
});

// Mark as read function
// const markAsRead = (id) => {
//   const notification = notifications.find(n => n.id === id);
//   if (notification) notification.read = true;
// };

// const markAllAsRead = () => {
//   notifications.forEach(notification => notification.read = true);
// };
</script>

<template>
  <div class="flex h-full">
    <!-- Sidebar -->
    <aside class="hidden md:block md:w-64">
      <Navbar />
    </aside>

    <!-- Main content -->
    <main class="flex-1 space-y-6">
      <Header />

      <div class="border border-[#A2A1A833] rounded-lg px-3 pt-3 mt-25 shadow-sm mx-3 mb-8">
        <!-- Notification Controls -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-4 border-b border-[#A2A1A81A]">
          <div class="flex items-center space-x-4">
            <h2 class="text-lg font-semibold">Notifications</h2>
           
          </div>
          
          <div class="flex flex-col md:flex-row gap-3">

            
            
           
            
            <!-- Sort Dropdown -->
            <div class="relative">
              <select 
                v-model="sortOption"
                class="appearance-none pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#7152F3]"
                  :class="{
                  'bg-[#16151C] text-[#FFFFFF]': isDark,
                 'bg-[#FFFFFF] text-[#16151C]': !isDark
                  }"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>

              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            <!-- Mark All as Read -->
            <!-- <button
              @click="markAllAsRead"
              class="px-3 py-2 text-sm text-[#7152F3] hover:bg-[#7152F310] rounded-md transition-colors"
            >
              Mark all as read
            </button> -->
          </div>
        </div>

        <!-- Notifications List -->
        <div class="divide-y-2 divide-[#A2A1A81A]">
          <!-- Empty State -->
          <div 
            v-if="sortedNotifications.length === 0"
            class="py-12 text-center text-gray-500"
          >
            No notifications found
          </div>
          
          <!-- Notification Item -->
          <div 
            v-for="notification in sortedNotifications" 
            :key="notification.id"
            class="flex items-center justify-between py-4 cursor-pointer hover:bg-[#7152F310] transition-colors"
          >
            <div class="flex space-x-3">
              <div>
                <img 
                  :src="notification.icon" 
                  :alt="notification.title" 
                  :class="notification.iconClass" 
                />
              </div>
              <div>
                <h2 class="font-semibold">
                  {{ notification.title }}
                  <span v-if="!notification.read" class="ml-2 inline-block w-2 h-2 rounded-full bg-[#7152F3]"></span>
                </h2>
                <p class="font-light text-[#A2A1A8]">{{ notification.description }}</p>
              </div>
            </div>

            <div class="flex flex-col items-end">
              <p class="font-light text-[#A2A1A8]">{{ notification.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>