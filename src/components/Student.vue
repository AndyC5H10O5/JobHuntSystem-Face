<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <!-- 注意prop字段为驼峰风格（与java类属性名保持一致），而不是数据库的下划线风格！！！ -->
    <el-table-column prop="stuID" label="学号" width="180" />
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="major" label="专业" width="180" />
    <el-table-column prop="gpa" label="绩点" />
  </el-table>
</template>

<script>
export default {
  created: function () {
    // this.$http 替代 axios （main.js中全局配置过了，无需导入）
    // 全栈开发关键分水岭：前后端正式通信了！
    this.$http.get("/user/findAllStudents").then((response) => {
      this.tableData = response.data; // 把后端拿到的数据交给前端
    });
  },
  data() {
    return {
      tableData: [],
    };
  },
};
</script>