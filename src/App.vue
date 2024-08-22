<template>
  <!-- 网页大logo图 -->
  <img alt="Vue logo" src="./assets/logo.png" />

  <!-- 3.使用Helloworld组件: 自定义标签 -->
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
// 1. 导入HelloWorld组件
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App.vue根组件",

  // 2. 注册组件
  components: {
    HelloWorld,
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
