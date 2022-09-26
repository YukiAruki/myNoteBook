import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'normalize.css'

import store from '@/store'
import request from './api/request'


const app = createApp(App).use(router).use(store).use(ElementPlus)
for (let [key, comp] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, comp);
}

// 配置axios
app.config.globalProperties.$request = request

app.mount('#app')
