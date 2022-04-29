import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import { router } from './router'

createApp(App).use(router).mount('#app')
