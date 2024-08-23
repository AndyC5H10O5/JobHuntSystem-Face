/*
 * main.js主要运用了模块化(区别于组件化)开发的思想, 
 * 通过import来导入各种模块, 来完成前端代码的组织
 * (早期的前端代码主要通过<script>标签来引入其他的js文件)
 */

import { createApp } from 'vue' // 导入vue的createApp方法
import App from './App.vue'     // 导入了App.vue中的App
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 自己创建的js文件也可以通过import方式导入

const app = createApp(App)  // 程序的入口

app.use(ElementPlus)        // 全局注册了第三方组件(区别于components:{}局部注册)
app.mount('#app')           // mount到了#app标签上 ( /public/index.html 中)