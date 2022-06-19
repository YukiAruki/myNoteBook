import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'


import ElementUI from 'element-ui'

Vue.use(ElementUI)

createApp(App).use(router).mount('#app')
