<template>
  <router-link to="/Hub"> 主页 </router-link>
  <hr />
  <router-link to="/job"> 管理工作 </router-link>
  <br />
  <router-link to="/Topjob"> 查询高薪工作 </router-link>
  <hr />
  <router-link to="/stu"> 管理学生 </router-link>
  <hr />
  <router-link to="/Stu_Job"> 学生隶属部门 </router-link>
  
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <!-- 注意prop字段为驼峰风格（与java类属性名保持一致），而不是数据库的下划线风格！！！ -->
      <el-table-column prop="id" label="编号" width="180" />
      <el-table-column prop="stuId" label="学生" width="180" />
      <el-table-column prop="jobId" label="岗位" width="180" />

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

    <label for="e">编号:</label>
    <el-input type="text" id="e" v-model="id" style="width: 200px" /> <br />
    <label for="a">学生id:</label>
    <el-input type="text" id="a" v-model="stuId" style="width: 200px" />
    <br />
    <label for="b">岗位id:</label>
    <el-input type="text" id="b" v-model="jobId" style="width: 200px" />
    <br />
    <el-button @click="add">添加</el-button>
    <el-button @click="update">修改</el-button>
    <hr />
    <router-view> </router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created: function () {
    this.$http.get("/multi/findAllMulti").then((response) => {
      // (response)=> 回调函数，且"作用域"与父级一致
      this.tableData = response.data; // 把后端拿到的数据交给了前端（tableData）！
    });
  },
  methods: {
    // 添加
    add() {
      // 全栈开发关键分水岭：前后端正式通信了！
      let param = new URLSearchParams();
      param.append("id", this.id);
      param.append("stuId", this.stuId);
      param.append("jobId", this.jobId);
      console.log(param);
      axios({
        method: "post",
        url: "/multi/addMulti",
        data: param,
      }).then((response) => {
        console.log(response.data);
        axios.get("/multi/findAllMulti").then((response) => {
          this.tableData = response.data; // 把后端拿到的数据交给前端
        });
      });
    },

    // 删除
    handleDelete(index, row) {
      // 向服务器发送DELETE请求
      axios
        .delete(`/multi/deleteMulti?id=${row.id}`)
        .then((response) => {
          console.log(response.data);
          // 删除成功后，更新表格数据
          axios.get("/multi/findAllMulti").then((response) => {
            this.tableData = response.data; // 更新表格数据
          });
        })
        .catch((error) => {
          console.error("删除失败:", error);
        });
    },

    // 修改
    handleEdit(index, row) {
      // 填充编辑表单
      this.id = row.id;
      this.stuId = row.stuId;
      this.jobId = row.jobId;
    },
    update() {
      // 发送PUT请求更新学生信息
      let param = new URLSearchParams();
      param.append("id", this.id);
      param.append("stuId", this.stuId);
      param.append("jobId", this.jobId);
      axios({
        method: "put",
        url: `/multi/updateMulti`,
        data: param,
      })
        .then((response) => {
          console.log(response.data);
          // 更新表格数据
          axios.get("/multi/findAllMulti").then((response) => {
            this.tableData = response.data; // 更新表格数据
          });
        })
        .catch((error) => {
          console.error("修改失败:", error);
        });
    },
  },
  data() {
    return {
      tableData: [],
      id: "",
      stuId: "",
      jobId: "",
    };
  },
};
</script>