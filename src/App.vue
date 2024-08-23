<template>
  <movie
    v-for="movie in movies"
    :key="movie.id"
    :title="movie.title"
    :rating="movie.rating"
  >
  </movie>
  <Hello> </Hello>
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
import movie from "./components/movie.vue";
import Hello from "./components/Hello.vue";
import axios from 'axios';

export default {
  name: "App.vue根组件",

  data: function () {
    return {
      movies: [
        { id: 1, title: "抓娃娃", rating: 8.7 },
        { id: 2, title: "流浪地球", rating: 9.0 },
        { id: 3, title: "流浪地球2", rating: 9.1 },
      ],
    };
  },
  /*
   * 生命周期函数create（区别于methods自定义函数）
   * 当组件被创建时，该函数会被自动调用
   * “网络请求”函数一般写在此处，即页面被挂载之前
   */
  created:function(){
    console.log("根组件被创建了")
    axios.get("http://localhost:8088/job/findAllJob").then(function(response){
      console.log(response)
    })
  },
  mounted:function(){
    console.log("根组件被挂载(渲染)了")
  },

  // 2. 注册组件
  components: {
    apple,
    movie,
    Hello
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
