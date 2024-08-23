<template>
  <movie v-for="movie in movies" :key="movie.id" :title="movie.title" :rating="movie.rating"> </movie>
  <apple
    title="New Apple Product"
    description="Discover the latest innovations from Apple."
    actionText="Buy Now"
    @action="handleAction"
  />
</template>

<script>
// 1. 导入组件
import apple from "./components/apple.vue";
import movie from './components/movie.vue';

export default {
  name: "App.vue根组件",

  data:function(){
    return{
      movies:[
        {id:1, title:"抓娃娃", rating: 8.7},
        {id:2, title:"流浪地球", rating: 9.0},
        {id:3, title:"流浪地球2", rating: 9.1},
      ]
    }
  },

  // 2. 注册组件
  components: {
    apple,
    movie
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
