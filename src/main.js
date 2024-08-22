/*
 * main.js主要运用了模块化(区别于组件化)开发的思想, 
 * 通过import来导入各种模块, 来完成前端代码的组织
 * (早期的前端代码主要通过<script>标签来引入其他的js文件)
 */

import { createApp } from 'vue' // 导入vue的createApp方法
import App from './App.vue'     // 导入了App.vue中的App
                                // 自己创建的js文件也可以通过import方式导入


createApp(App).mount('#app') // 程序的入口, mount到了#app标签上 ( /public/index.html 中)
