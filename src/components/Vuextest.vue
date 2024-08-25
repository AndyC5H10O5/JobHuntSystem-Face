<template>
  <h2>{{ count }}</h2>
  <h2>{{ this.$store.state.count }}</h2>
  <button @click="add">+1</button>
</template>

<script>
export default {
  name: "Vuex测试",
  // Vuex核心概念：State计算属性, 省略this.$store.state
  computed: {
    count() {
      return store.state.count;
    },
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
  },
};
</script>