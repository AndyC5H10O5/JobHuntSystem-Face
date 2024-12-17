<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <!-- 注意prop字段为驼峰风格（与java类属性名保持一致），而不是数据库的下划线风格！！！ -->
      <el-table-column prop="company" label="公司" width="180" />
      <el-table-column prop="jobName" label="岗位" width="180" />
      <el-table-column prop="workTime" label="实习时间(月)" width="180" />
      <el-table-column prop="dailySalary" label="日薪" />
    </el-table>

    <label for="e">id:</label>
    <input type="text" id="e" v-model="id" /> <br />
    <label for="a">公司名:</label>
    <input type="text" id="a" v-model="company" /> <br />
    <label for="b">岗位名:</label>
    <input type="text" id="b" v-model="jobName" /> <br />
    <label for="c">工作时间:</label>
    <input type="text" id="c" v-model="workTime" /> <br />
    <label for="d">日薪:</label>
    <input type="text" id="d" v-model="dailySalary" /> <br />
    <button @click="add">提交</button>

    <br />

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
  methods: {
    add() {
      console.log({
        id: this.id,
        company: this.company,
        jobName: this.jobName,
        workTime: this.workTime,
        dailySalary: this.dailySalary,
      });
      // this.$http 替代 axios （main.js中全局配置过了，无需导入）
      // 全栈开发关键分水岭：前后端正式通信了！
      this.$http
        .post("/job/insert", "id=123&company=123&jobName=123&dailySalary=123&workTime=123")
        .then((response) => {
          console.log(response.data);
          this.$http.get("/job/findAllJob").then((response) => {
            this.tableData = response.data; // 把后端拿到的数据交给前端
          });
        });
    },
  },
  data() {
    return {
      tableData: [],
      id: "",
      company: "",
      jobName: "",
      dailySalary: "",
      workTime: "",
    };
  },
};
</script>