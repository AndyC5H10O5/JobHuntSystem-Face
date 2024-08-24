<template>
  <!-- 声明路由链接 -->
  <router-link to="/job"> 寻找工作 </router-link>
  <hr>
  <router-link to="/stu"> 管理学生 </router-link>
  <hr>
  <router-link to="/sign">  </router-link>

  <!-- 声明路由占位标签, 点击链接后，界面被渲染到此处 -->
  <router-view> </router-view>

</template>

<script>
// 导入组件
import FindJob from "./components/FindJob.vue";
import Student from './components/Student.vue';

export default {
  name: "App.vue根组件",

  data: function () {
    return {
      // 在这里放组件的数据
    };
  },

  mounted:function(){
    console.log("根组件被挂载(渲染)了")
  },

  // 注册组件
  components: {
    FindJob,
    Student
  },
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
