import './assets/main.css'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import router from './router'

createApp(App).use(bootstrap).use(router).mount('#app')
