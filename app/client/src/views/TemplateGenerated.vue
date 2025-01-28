<template>
  <div class="template-generated">
    <div class="content">
      <h1>Template Generated Successfully!</h1>
      <p>Your template has been successfully generated.</p>

      <button @click="generateAnotherTemplate" class="btn secondary">Generate Another Template</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const generateAnotherTemplate = () => {
  router.push('/');
};
</script>

<style scoped>
.template-generated {
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.content {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

h1 {
  font-size: 28px;
  color: #4caf50;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  color: #333;
  margin-bottom: 30px;
}

.btn {
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #45a049;
}

.btn:focus {
  outline: none;
}

.secondary {
  background-color: #f39c12;
}

.secondary:hover {
  background-color: #e67e22;
}
</style>