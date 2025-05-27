<template>
  <H1>Day1 : 한국어 데이터로 호출</H1>
  <button @click="getUser">사용자 정보 가져오기</button>
  <div v-if="user">
    <p>이름 {{ user.name }}</p>
    <p>이메일 {{ user.email }}</p>
    <p>회사 {{ user.company.name }}</p>
  </div>
</template>

<script setup>
const user = ref(null);

const getUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
  const data = await response.json();
  user.value = data;
};

/* 
    오늘 배운 것
    1. fetch() 함수로 인터넷에서 데이터 가져오기
    2. await 키워드로 데이터가 올 때까지 기다리기
*/
</script>

