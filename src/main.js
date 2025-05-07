import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import App from './App.vue';


const pinia = createPinia()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(pinia)

app.mount('#app')
