<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <!-- 注意prop字段为驼峰风格（与java类属性名保持一致），而不是数据库的下划线风格！！！ -->
      <el-table-column prop="company" label="公司" width="180" />
      <el-table-column prop="jobName" label="岗位" width="180" />
      <el-table-column prop="workTime" label="实习时间(月)" width="180" />
      <el-table-column prop="dailySalary" label="日薪" />
    </el-table>
    <router-link to="/job/1"> 小米 </router-link>
    <router-link to="/job/2"> 华为 </router-link>
    <router-link to="/job/3"> 腾讯 </router-link>

    <hr />
    <!-- 子路由链接 -->
    <router-link to="/job/announcement"> 公告 </router-link>
    <router-link to="/job/chat"> 论坛 </router-link>
    <hr />

    <!-- 公司信息，公告、论坛都会加载到此 -->
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  /*
   * 生命周期函数create（区别于methods自定义函数）
   * 当组件被创建时，该函数会被自动调用
   * “网络请求”函数一般写在此处，即页面被挂载之前
   * 但是，“Get请求”实际发生在页面被挂载后，因为它是异步的
   */
  created: function () {
    console.log("FindJob组件被创建了");
    // axios.get("/job/findAllJob").then(function(response){
    //   this.tableData = response.data
    // })                                   // error：this的作用域缩小，无法关联到Vue对象（Js语法）

    // this.$http 替代 axios （main.js中全局配置过了，无需导入）
    // 全栈开发关键分水岭：前后端正式通信了！
    this.$http.get("/job/findAllJob").then((response) => {
      // (response)=> 回调函数，且"作用域"与父级一致
      this.tableData = response.data; // 把后端拿到的数据交给了前端（tableData）！
    });
  },
  data() {
    return {
      tableData: [],
    };
  },
};
</script>