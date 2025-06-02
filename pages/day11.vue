<template>
  <h1>Day11: 로딩 상태 분석</h1>

  <button @click="fetchData" :disabled="loading">
    {{ loading ? "처리중..." : "데이터 가져오기" }}
  </button>

  <div v-if="loading" style="color: blue">⏳ 로딩중...</div>

  <div v-if="error && !loading" style="color: red">❌ {{ error }}</div>

  <div v-if="data && !loading">✅ {{ data.title }}</div>
</template>

<script setup>
const loading = ref(false);
const error = ref("");
const data = ref(null);

const fetchData = async () => {
  loading.value = true;
  error.value = "";
  data.value = null;

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/9099"
    ); // ← 404 에러!

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    data.value = await response.json();
    loading.value = false; // ← finally 없이 여기서만 false
  } catch (err) {
    error.value = err.message;
    // loading.value = false 없음! ← 이게 문제!
  }
  // finally 없음!
};
</script>
