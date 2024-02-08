import './assets/main.css'
import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from './App.vue'
// @ts-ignore
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
// @ts-ignore
import router from './router'

createApp(App).use(bootstrap).use(router).mount('#app')
