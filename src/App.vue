<template>
  <FindJob> </FindJob>
</template>

<script>
// 导入组件
import FindJob from "./components/FindJob.vue";

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
    FindJob
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
