import { createWebHistory, createRouter } from "vue-router";
// createMemoryHistory - 使用内部URL
// createWebHistory - 浏览器显示URL, ' / ' 为根
// createWebHashHistory - 浏览器显示URL, ' /#/ ' 为根

import FindJob from "../components/FindJob.vue";
import Student from "../components/Student.vue";
import Sign from "../components/Sign.vue";
import Announcement from "../components/Announcement.vue";
import Chat from "../components/Chat.vue";
import Company from '../components/Company.vue';

// 指定path与component的对应关系
const routes = [
  {
    // 路由和嵌套的逻辑就是这样，剩下的是css的事情了（好看）
    path: "/job",
    component: FindJob,
    children: [
      // 动态路由 ':id'，一行对应n个 (props:true表示将id值以属性的方式传递)
      { path: ":id", component: Company, props:true },
      { path: "chat", component: Chat },
      { path: "announcement", component: Announcement },
    ],
  },
  {
    path: "/stu",
    component: Student,
  },
  { path: "/sign", component: Sign },

  // 当用户访问'/'时，重定向到 /xxx
  { path: "/", redirect: "/sign" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
