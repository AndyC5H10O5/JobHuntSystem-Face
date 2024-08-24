import { createWebHistory, createRouter } from 'vue-router'
// createMemoryHistory - 使用内部URL
// createWebHistory - 浏览器显示URL, ' / ' 为根
// createWebHashHistory - 浏览器显示URL, ' /#/ ' 为根

import FindJob from '../components/FindJob.vue'
import Student from '../components/Student.vue'
import Sign from '../components/Sign.vue'

// 指定path与component的对应关系
const routes = [
  { path: '/job', component: FindJob },
  { path: '/stu', component: Student },
  { path: '/sign', component: Sign },
  // 当用户访问'/'时，重定向到 /xxx
  { path: '/', redirect: '/sign'}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router