<template>
  <div>
    <!-- $route.params.id可以拿到动态绑定路由的id -->
    <h2>{{ $route.params.id }}公司</h2>
    <h2>{{ $route.params.id }}要求JD</h2>
    <h2>{{ id }}福利</h2>
  </div>
</template>

<script>
export default {
  // 接收Company.vue传来的属性值，得到id
  props: ["id"],
};
</script>