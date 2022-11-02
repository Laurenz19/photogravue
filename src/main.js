import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* icon scout */
import '@iconscout/unicons/css/line.css'

/* all css */
import './assets/css/style.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
