<template>
  <h1>4일차: 특정 사용자 상세 정보</h1>

  <p>사용자 번호를 입력하세요 (1~10):</p>
  <input v-model="userId" type="number" min="1" max="10" />
  <button @click="getUserDetail">사용자 정보 보기</button>

  <div v-if="user">
    <h2>사용자 상세 정보:</h2>
    <p>이름: {{ user.name }}</p>
    <p>사용자명: {{ user.username }}</p>
    <p>이메일: {{ user.email }}</p>
    <p>전화번호: {{ user.phone }}</p>
    <p>웹사이트: {{ user.website }}</p>
    <p>회사: {{ user.company.name }}</p>
    <p>주소: {{ user.address.city }}</p>
  </div>
</template>

<script setup>

const userId = ref(1) // 입력받을 사용자 번호
const user = ref(null);

const getUserDetail = async () =>{
  // 사용자가 입력한 번호로 API 호출
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}`)
  user.value = await response.json()
}

/*
   오늘 배운 것:
   1. v-model = 입력창과 변수 연결하기
   2. 사용자 입력 받아서 API 호출하기
*/
</script>
