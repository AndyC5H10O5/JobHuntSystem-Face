<template>
  <!-- 网页大logo图 -->
  <img alt="Vue logo" src="./assets/logo.png" />

  <!-- 3.使用组件: 自定义标签 -->
  <test> </test>
  <test> </test>
</template>

<script>
// 1. 导入组件
import test from './components/test.vue'

export default {
  name: "App.vue根组件",

  // 2. 注册组件
  components: {
    test
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
