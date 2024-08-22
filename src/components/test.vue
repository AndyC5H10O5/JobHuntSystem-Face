<template>
  <div class="apple-style-card">
    <div class="header">
      <img
        class="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
        alt="Apple Logo"
      />
      <h1>{{ title }}</h1>
    </div>
    <div class="content">
      <p>{{ description }}</p>
    </div>
    <div class="footer">
      <button @click="onActionClick">{{ actionText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppleStyleCard",
  props: {
    title: {
      type: String,
      default: "Welcome to Apple",
    },
    description: {
      type: String,
      default:
        "Experience the best of Apple products and services with a seamless, elegant interface.",
    },
    actionText: {
      type: String,
      default: "Learn More",
    },
  },
  methods: {
    onActionClick() {
      this.$emit("action");
    },
  },
};
</script>

<style scoped>
.apple-style-card {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.apple-style-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.header {
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #f5f5f7;
}

.header .logo {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.header h1 {
  font-size: 18px;
  margin: 0;
  font-weight: 600;
  color: #333;
}

.content {
  padding: 16px;
  font-size: 14px;
  color: #555;
}

.footer {
  padding: 16px;
  text-align: center;
}

.footer button {
  padding: 10px 16px;
  border: none;
  background-color: #0071e3;
  color: white;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.footer button:hover {
  background-color: #005bb5;
}
</style>
