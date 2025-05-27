<template>
  <H1>Day1 : 진짜짜 API 호출</H1>
  <button @click="getJoke">농담 가져오기</button>
  <p>{{ joke }}</p>
</template>

<script setup>
const joke = ref("버튼을 눌러서 농담을 들어보세요!.");

const getJoke = async () => {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke')
    const data = await response.json()
    joke.value = data.setup + ' - ' + data.punchline
};
</script>
