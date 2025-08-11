<script setup>
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import { ComputerDesktopIcon } from '@heroicons/vue/24/solid'
import { ChevronDownIcon, SunIcon, MoonIcon, CheckIcon } from '@heroicons/vue/24/solid';
import { watch } from 'vue'
import { computed } from 'vue'
import useTheme from '@/config/useTheme'

const { theme, isDark, setTheme } = useTheme()




// Appearance options with system
const appearanceOptions = [
  { id: 'light', name: 'Light', icon: SunIcon },
  { id: 'dark', name: 'Dark', icon: MoonIcon },
  { id: 'system', name: 'System', icon: ComputerDesktopIcon }
];



const showAppearanceDropdown = ref(false);

// Update selected appearance
const selectedAppearance = computed({
  get: () => theme.value,
  set: (val) => setTheme(val)
});

// Language options
const languageOptions = [
  { id: 'en', name: 'English' },
  { id: 'fr', name: 'French' },
  { id: 'es', name: 'Spanish' },
  { id: 'de', name: 'German' },
  { id: 'zh', name: 'Chinese' }
];
const selectedLanguage = ref('en');
const showLanguageDropdown = ref(false);

// Toggle dropdowns with proper event handling
const toggleAppearanceDropdown = (e) => {
  e.stopPropagation();
  showAppearanceDropdown.value = !showAppearanceDropdown.value;
  showLanguageDropdown.value = false;
};

const toggleLanguageDropdown = (e) => {
  e.stopPropagation();
  showLanguageDropdown.value = !showLanguageDropdown.value;
  showAppearanceDropdown.value = false;
};

// Close dropdowns when clicking outside
const handleClickOutside = (e) => {
  const isDropdownButton = e.target.closest('.dropdown-button');
  const isDropdownContent = e.target.closest('.dropdown-content');
  
  if (!isDropdownButton && !isDropdownContent) {
    showAppearanceDropdown.value = false;
    showLanguageDropdown.value = false;
  }
};

// Set up and clean up event listeners
onMounted(() => {
 selectedAppearance.value = isDark.value ? 'dark' : 'light'
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  selectedAppearance.value = isDark.value ? 'dark' : 'light'
  document.removeEventListener('click', handleClickOutside);
});


// State variables (equivalent of useState)
const isToggled = ref(true)
const isToggled2 = ref(true)
const isToggled3 = ref(true)
const isToggled4 = ref(true)

// Methods to toggle
const handleToggle = () => {
  isToggled.value = !isToggled.value
}

const handleToggle2 = () => {
  isToggled2.value = !isToggled2.value
}

const handleToggle3 = () => {
  isToggled2.value = !isToggled3.value
}

const handleToggle4 = () => {
  isToggled2.value = !isToggled4.value
}

watch(selectedAppearance, (newVal) => {
  if (newVal === 'dark' && !isDark.value) {
    toggleTheme()
  } else if (newVal === 'light' && isDark.value) {
    toggleTheme()
  }
})


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

      <div class="border border-[#A2A1A833] rounded-lg px-3 pt-6 mt-25 shadow-sm mx-3 mb-8">
        <!-- Settings Sections -->
        <div class=" mb-2  divide-y-2 divide-[#A2A1A81A]">
          <!-- Appearance Section -->
        <div class="relative py-3">
    <div class="flex justify-between items-center">
      <div>
        <p class="font-semibold">Appearance</p>
        <p class="text-sm text-[#A2A1A8]">Customize how your theme looks on your device</p>
      </div>
      <div class="relative">
        <button 
          @click="toggleAppearanceDropdown"
          class="dropdown-button flex items-center justify-between w-32 px-4 py-2 text-sm font-medium border border-gray-300 rounded-md shadow-sm focus:outline-none"
        >
          <span class="flex items-center">
            <component 
              :is="appearanceOptions.find(opt => opt.id === selectedAppearance)?.icon" 
              class="w-4 h-4 mr-2" 
            />
            {{ appearanceOptions.find(opt => opt.id === selectedAppearance)?.name }}
          </span>
          <ChevronDownIcon class="w-4 h-4 ml-2" />
        </button>
        
        <!-- Appearance Dropdown -->
        <div 
          v-if="showAppearanceDropdown"
          class="dropdown-content absolute right-0 z-[1000] w-32 mt-1  border border-gray-200  rounded-md shadow-lg"
          :class="{
          'bg-[#16151C] text-[#FFFFFF]': isDark,
         'bg-[#FFFFFF] text-[#16151C]': !isDark
          }"
        >
          <div class="py-1">
            <button
              v-for="option in appearanceOptions"
              :key="option.id"
              @click="selectedAppearance = option.id; showAppearanceDropdown = false;"
              class="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span class="flex items-center">
                <component :is="option.icon" class="w-4 h-4 mr-2" />
                {{ option.name }}
              </span>
              <CheckIcon v-if="selectedAppearance === option.id" class="w-4 h-4 text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

          <!-- Language Section -->
          <div class="relative py-3">
            <div class="flex justify-between items-center">
              <div>
                <p class="font-semibold">Language</p>
                <p class="text-sm text-[#A2A1A8]">Select your language</p>
              </div>
              <div class="relative">
                <button 
                  @click="toggleLanguageDropdown"
                  class="dropdown-button flex items-center justify-between w-32 px-4 py-2 text-sm font-medium  border border-gray-300 rounded-md shadow-sm focus:outline-none"
                >
                  <span>
                    {{ languageOptions.find(opt => opt.id === selectedLanguage)?.name }}
                  </span>
                  <ChevronDownIcon class="w-4 h-4 ml-2" />
                </button>
                
                <!-- Language Dropdown -->
                <transition name="fade">
                  <div 
                    v-if="showLanguageDropdown"
                    class="dropdown-content absolute right-0 z-[1000] w-32 mt-1  border 0 rounded-md shadow-lg"
                     :class="{
                   'bg-[#16151C] text-[#FFFFFF]': isDark,
                  'bg-[#FFFFFF] text-[#16151C]': !isDark
                     }"
                  >
                    <div class="py-1">
                      <button
                        v-for="option in languageOptions"
                        :key="option.id"
                        @click="selectedLanguage = option.id; showLanguageDropdown = false"
                        class="flex items-center justify-between w-full px-4 py-2 text-sm text-left  hover:bg-gray-100"
                      >
                        <span>{{ option.name }}</span>
                        <CheckIcon v-if="selectedLanguage === option.id" class="w-4 h-4 text-blue-500" />
                      </button>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>

          <!-- Other settings sections -->
          <div class="flex justify-between py-3">
            <div>
              <p class="font-semibold ">Two-factor Authentication</p>
              <p class="text-sm text-[#A2A1A8]">Keep your account secure by enabling 2FA via mail</p>
            </div>
               <div
                 @click="handleToggle"
                 class="relative w-14 h-7 flex items-center rounded-full cursor-pointer transition-colors duration-300"
                 :class="isToggled ? 'bg-[#34C759]' : 'bg-gray-300'"
                >
               <div
                class="absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300"
               :class="isToggled ? 'translate-x-8' : 'translate-x-0'"
            ></div>
        </div>
            
          </div>

          <div class="flex justify-between py-3">
            <div>
              <p class="font-semibold">Mobile Push Notifications</p>
              <p class="text-sm text-[#A2A1A8]">Receive push notification</p>
            </div>
             <div
                 @click="handleToggle2"
                 class="relative w-14 h-7 flex items-center rounded-full cursor-pointer transition-colors duration-300"
                 :class="isToggled2 ? 'bg-[#34C759]' : 'bg-gray-300'"
                >
               <div
                class="absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300"
               :class="isToggled2 ? 'translate-x-8' : 'translate-x-0'"
            ></div>
            </div>
          </div>

          <div class="flex justify-between py-3">
            <div>
              <p class="font-semibold">Desktop Notification</p>
              <p class="text-sm text-[#A2A1A8]">Receive push notification in desktop</p>
            </div>
             <div
                 @click="handleToggle3"
                 class="relative w-14 h-7 flex items-center rounded-full cursor-pointer transition-colors duration-300"
                 :class="isToggled3 ? 'bg-[#34C759]' : 'bg-gray-300'"
                >
               <div
                class="absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300"
               :class="isToggled3 ? 'translate-x-8' : 'translate-x-0'"
            ></div>
            </div>
          </div>

          <div class=" flex justify-between py-3">
            <div>
              <p class="font-semibold">Email Notifications</p>
              <p class="text-sm text-[#A2A1A8]">Receive email notification</p>
            </div>
             <div
                 @click="handleToggle4"
                 class="relative w-14 h-7 flex items-center rounded-full cursor-pointer transition-colors duration-300"
                 :class="isToggled4 ? 'bg-[#34C759]' : 'bg-gray-300'"
                >
               <div
                class="absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300"
               :class="isToggled4 ? 'translate-x-8' : 'translate-x-0'"
            ></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>