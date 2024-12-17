<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <!-- 注意prop字段为驼峰风格（与java类属性名保持一致），而不是数据库的下划线风格！！！ -->
    <el-table-column prop="stuID" label="学号" width="180" />
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="major" label="专业" width="180" />
    <el-table-column prop="gpa" label="绩点" />
    <el-table-column align="right">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          Edit
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <label for="a">学号:</label>
  <input type="text" id="a" v-model="stuID" /> <br />
  <label for="b">姓名:</label>
  <input type="text" id="b" v-model="name" /> <br />
  <label for="c">专业:</label>
  <input type="text" id="c" v-model="major" /> <br />
  <label for="d">绩点:</label>
  <input type="text" id="d" v-model="gpa" /> <br />
  <button @click="add">提交</button>
</template>

<script>
import axios from "axios";
export default {
  created: function () {
    // this.$http 替代 axios （main.js中全局配置过了，无需导入）
    // 全栈开发关键分水岭：前后端正式通信了！
    this.$http.get("/stu/findAllStudents").then((response) => {
      this.tableData = response.data; // 把后端拿到的数据交给前端
    });
  },
  methods: {
    add() {
      // 全栈开发关键分水岭：前后端正式通信了！
      let param = new URLSearchParams();
      param.append("stuID", this.stuID);
      param.append("name", this.name);
      param.append("major", this.major);
      param.append("GPA", this.gpa);
      axios({
        method: "post",
        url: "/stu/addStudent",
        data: param,
      }).then((response) => {
        console.log(response.data);
        axios.get("/stu/findAllStudents").then((response) => {
          this.tableData = response.data; // 把后端拿到的数据交给前端
        });
      });
    },
    handleDelete(index, row) {
      // 向服务器发送DELETE请求
      axios.delete(`/stu/deleteStudent?stuID=${row.stuID}`).then((response) => {
        console.log(response.data);
        // 删除成功后，更新表格数据
        axios.get("/stu/findAllStudents").then((response) => {
          this.tableData = response.data; // 更新表格数据
        });
      }).catch((error) => {
        console.error("删除失败:", error);
      });
    },
  },
  data() {
    return {
      tableData: [],
      stuID: "",
      name: "",
      major: "",
      gpa: "",
    };
  },
};
</script>