<template>
  <router-link to="/Hub"> 主页 </router-link>
  <hr />
  <router-link to="/job"> 管理工作 </router-link><br />
  <router-link to="/Topjob"> 查询高薪工作 </router-link>
  <hr />
  <router-link to="/stu"> 管理学生 </router-link>
  <hr />
  <router-link to="/Stu_Job"> 学生隶属部门 </router-link>
  
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <!-- 注意prop字段为驼峰风格（与java类属性名保持一致），而不是数据库的下划线风格！！！ -->
      <el-table-column prop="company" label="公司" width="180" />
      <el-table-column prop="jobName" label="岗位" width="180" />
      <el-table-column prop="workTime" label="实习时间(月)" width="180" />
      <el-table-column prop="dailySalary" label="日薪" />
    </el-table>

    <!-- 公司信息，公告、论坛都会加载到此 -->
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  created: function () {
    console.log("FindJob组件被创建了");
    this.$http.get("/job/selectJobByMoney").then((response) => {
      // (response)=> 回调函数，且"作用域"与父级一致
      this.tableData = response.data; // 把后端拿到的数据交给了前端（tableData）！
    });
  },
  methods: {},
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