<template>
<div class="card">
  <slot>
    Template Card
  </slot>
</div>
</template>

<style scooped>
.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.card:hover {
  transform: scale(1.05); 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
  background-color: #f1f1f1; 
  cursor: pointer;
}

.card .logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.card .content h2 {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.card .content p {
  font-size: 14px;
  color: #555;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.data-table td {
  padding: 12px;
  vertical-align: middle;
}

.logo-cell {
  width: 80px;
  text-align: center;
}

.logo {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #ccc;
}

.name-cell {
  padding-left: 12px;
}

.name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.contact-cell {
  text-align: left;
  padding-top: 10px;
}

.email, .phone {
  font-size: 14px;
  color: #555;
}

.placeholder {
  white-space: nowrap;
}

.card {
  margin: 20px;
}
</style>
