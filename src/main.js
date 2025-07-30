import './assets/main.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar'
import 'v-calendar/style.css'

const app = createApp(App)

app.use(router)
app.use(VCalendar, {}) // must come before mount
app.mount('#app')
