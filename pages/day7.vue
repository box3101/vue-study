<template>
  <h1>7일차: 새 게시글 작성하기</h1>

  <h2>게시글 작성:</h2>

  <input v-model="newPost.title" placeholder="제목을 입력하세요" />
  <br /><br />
  <textarea
    v-model="newPost.body"
    placeholder="내용을 입력하세요"
    rows="5"
    cols="50"
  ></textarea>
  <br /><br />
  <button @click="createPost">게시글 올리기</button>

  <div v-if="createdPost">
    <h2>방금 만든 게시글 :</h2>
    <h3>{{ createdPost.title }}</h3>
    <p>{{ createdPost.body }}</p>
    <p>게시글 ID : {{ createdPost.id }}</p>
  </div>
</template>

<script setup>
const newPost = ref({
  title: "",
  body: "",
});

const createdPost = ref(null);

const createPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST", // GET이 아닌 POST!
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: newPost.value.title,
      body: newPost.value.body,
      userId: 1,
    }),
  });

  createdPost.value = await response.json();

  // 입력창 비우기
  newPost.value.title = "";
  newPost.value.body = "";
};

/*
   오늘 배운 것:
   1. POST 요청 - 데이터를 서버에 보내기
   2. headers - 서버에게 "JSON 데이터 보낼게요" 알리기
   3. JSON.stringify() - 객체를 JSON 문자열로 변환
   4. 객체 형태의 ref - newPost.value.title 같은 사용법
*/
</script>
