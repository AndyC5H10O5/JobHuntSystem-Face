<template>
  <div class="login-container">
    <h2>登录</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">用户名</label>
        <input
          type="text"
          v-model="username"
          id="username"
          placeholder="请输入用户名"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input
          type="password"
          v-model="password"
          id="password"
          placeholder="请输入密码"
          required
        />
      </div>
      <button type="submit" :disabled="loading">登录</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      loading: false,
      errorMessage: "",
    };
  },
  methods: {
    async handleLogin() {
      if (!this.username || !this.password) {
        this.errorMessage = "用户名和密码不能为空";
        return;
      }

      this.loading = true;
      this.errorMessage = "";

      try {
        const response = await axios.post("/user/login", {
          username: this.username,
          password: this.password,
        });

        // 假设后端返回的 response.data.success 表示是否登录成功
        if (response.data.success) {
          // 登录成功后跳转到大厅页面
          this.$router.push("/hub");
        } else {
          this.errorMessage = "登录失败：" + response.data.message;
        }
      } catch (error) {
        this.errorMessage = "网络错误，请稍后再试";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 80%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:disabled {
  background-color: #ccc;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>
