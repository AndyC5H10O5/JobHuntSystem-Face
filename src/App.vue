<template>
  <test
    title="New Apple Product"
    description="Discover the latest innovations from Apple."
    actionText="Buy Now"
    @action="handleAction"
  />
</template>

<script>
// 1. 导入组件
import test from "./components/test.vue";

export default {
  name: "App.vue根组件",

  // 2. 注册组件
  components: {
    test,
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
