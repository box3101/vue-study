<template>
  <div>
    <h1>10일차: 에러 처리</h1>

    <h2>게시글 번호 입력:</h2>
    <input v-model="postId" type="number" placeholder="숫자 입력" />
    <button @click="getPost">게시글 가져오기</button>

    <div
      v-if="error"
      style="color: red; border: 1px solid red; padding: 10px; margin: 10px 0"
    >
      <h3>❌ 에러 발생!</h3>
      <p>{{ error }}</p>
    </div>

    <div v-if="post && !error">
      <h2>✅ 성공!</h2>
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup>
const postId = ref(1);
const post = ref(null);
const error = ref("");

const getPost = async () => {
  // 에러와 데이터 초기화
  error.value = "";
  post.value = null;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId.value}`
    );

    if (!response.ok) {
      throw new Error(`에러 코드: ${response.status} - ${response.statusText}`);
    }

    post.value = await response.json();
  } catch (err) {
    error.value = err.message;
  }
};

/*
 새로 배우는 것:

 1.try-catch 구문

  try {
    // 에러가 날 수 있는 코드
  } catch (err) {
    // 에러가 났을 때 실행되는 코드
  }

 2. 에러 상황 확인
 
  if (!response.ok) {
    throw new Error('에러 메시지')  // 강제로 에러 발생
  }


*/
</script>
