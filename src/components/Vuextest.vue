<template>
  <!-- 获取Vuex的全局共享值的两种方法 -->
  <h2>{{ count }}</h2>
  <h2>{{ this.$store.state.count }}</h2>
  <button @click="add">+1</button>

  <ul>
    <li v-for="todo in doneTodos" :key="todo.id">{{todo.text}}</li>
  </ul>
</template>

<script>
export default {
  name: "Vuex测试",
  
  computed: {
    // Vuex核心功能：State计算属性, 省略this.$store.state，通过count直接取值
    count() {
      return this.$store.state.count;
    },

    // Vuex功能：Getters计算属性，省略this.$store.getters，通过doneTodos直接取值
    doneTodos(){
      return this.$store.getters.doneTodos;
    }
  },
  methods: {
    add() {
      this.$store.commit("increment", 2);
    },
  },
};
</script>