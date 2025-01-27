<template>
  <div class="not-found-page">
    <div class="error-container">
      <h1>404</h1>
      <p class="message">Oops! The page you’re looking for doesn’t exist.</p>
      <router-link to="/" class="home-button">Go Back Home</router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-family: "Arial", sans-serif;
}

.error-container {
  max-width: 600px;
  padding: 20px;
}

h1 {
  font-size: 6rem;
  font-weight: 900;
  color: #ff6b6b;
  margin: 0;
}

.message {
  font-size: 1.5rem;
  color: #495057;
  margin: 20px 0;
}

.home-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.home-button:hover {
  background-color: #0056b3;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}
</style>
