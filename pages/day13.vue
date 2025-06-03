<template>
  <h1>🔢 간단한 카운터 상태관리</h1>

  <!-- 페이지 1: 카운터 -->
  <div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0">
    <h2>📄 페이지 1: 카운터</h2>
    <p>숫자 : {{ counterStore.count }}</p>
    <button @click="counterStore.increment()">+1</button>
    <button @click="counterStore.decrement()">-1</button>
  </div>

  <!-- 페이지 2 : 같은 숫자 표시-->
  <div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0">
    <h2>📄 페이지 2: 숫자 확인</h2>
    <p>현재 숫자: {{ counterStore.count }}</p>
    <p>{{ counterStore.count }}의 2배는: {{ counterStore.doubled }}</p>
  </div>

  <div style="background: #ffe6e6; padding: 15px; margin: 20px 0">
    <h3>🔍 분석포인트:</h3>
    <p>• 페이지1에서 +1을 누르면 페이지2 숫자도 바뀔까요?</p>
    <p>• counterStore.count는 어디에 저장되나요?</p>
    <p>• 새로고침하면 숫자가 어떻게 될까요?</p>
  </div>
</template>

<script setup>
const counterStore = useCounterStore(); // 분석포인트 1 : 이게 뭔가요?
</script>
