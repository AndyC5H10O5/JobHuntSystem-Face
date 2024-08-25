/*
 * main.js主要运用了模块化(区别于组件化)开发的思想, 
 * 通过import来导入各种模块, 来完成前端代码的组织
 * (早期的前端代码主要通过<script>标签来引入其他的js文件)
 */
// 自己创建的js文件也可以通过import方式导入
import { createApp } from 'vue' // 导入vue的createApp方法
import App from './App.vue'     // 导入了App.vue中的App
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import router from './router' // index.js无需写明
import store from './store'

// 配置请求根路径，组件发网络请求直接写后半段
axios.defaults.baseURL = "http://localhost:8088" 

const app = createApp(App) // 创建app

app.use(router) // VueRouter
app.use(store) // Vuex
app.use(ElementPlus) // 第三方组件（此处为全局注册，区别于components:{}局部注册）

// 将axios作为全局的自定义属性(挂到Vue身上)，每个组件可以直接通过this.$http调用（减少重复import）
app.config.globalProperties.$http = axios

// 程序入口，mount到了#app标签上 ( /public/index.html 中)
app.mount('#app') 