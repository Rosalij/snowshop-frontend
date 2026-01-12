import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Main application entry point
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
const app = createApp(App)
// Use Pinia for state management
app.use(createPinia())
app.use(router)

app.mount('#app')
