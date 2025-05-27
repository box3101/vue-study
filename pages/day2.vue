<template>
  <div style="padding: 20px;">
    <h1>2일차: 여러 명의 사용자 (예쁘게)</h1>
    <button @click="getUsers" style="background: blue; color: white; padding: 10px; border: none; border-radius: 5px;">
      모든 사용자 보기
    </button>
    
    <div v-if="users.length > 0" style="margin-top: 20px;">
      <h2>사용자 목록:</h2>
      
      <div v-for="user in users" :key="user.id" 
           style="border: 1px solid #ccc; margin: 10px 0; padding: 15px; border-radius: 8px; background: #f9f9f9;">
        <h3 style="margin: 0 0 5px 0; color: #333;">{{ user.name }}</h3>
        <p style="margin: 5px 0; color: #666;">📧 {{ user.email }}</p>
        <p style="margin: 5px 0; color: #666;">🏢 {{ user.company.name }}</p>
        <p style="margin: 5px 0; color: #666;">🌐 {{ user.website }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const users = ref([])

const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  users.value = data
}
</script>