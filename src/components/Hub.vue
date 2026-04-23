<template>
  <router-link to="/Hub"> 主页 </router-link>
  <hr />
  <router-link to="/job"> 管理工作 </router-link><br />
  <router-link to="/Topjob"> 查询高薪工作 </router-link>
  <hr />
  <router-link to="/stu"> 管理学生 </router-link>
  <hr />
  <router-link to="/Stu_Job"> 学生隶属部门 </router-link>
  <hr />

  <div style="padding: 100px">
    <!-- 子路由链接 -->
    <router-link to="/Hub/announcement"> 公告 </router-link>
    <router-link to="/Hub/chat"> 论坛 </router-link>
    <br />
    <router-link to="/Hub/1"> 小米 </router-link>
    <router-link to="/Hub/2"> 华为 </router-link>
    <router-link to="/Hub/3"> 腾讯 </router-link>
  </div>

  <!-- 公司信息，公告、论坛都会加载到此 -->
  <router-view> </router-view>
</template>

<script>
// 导入组件

export default {
  name: "网站首页",

  data: function () {
    return {
      // 在这里放组件的数据
    };
  },

  mounted: function () {
    console.log("根组件被挂载(渲染)了");
  },

  // 注册组件
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
