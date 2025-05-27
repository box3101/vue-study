<template>
  <h1>3일차: 다른 API들 써보기</h1>

  <button @click="getPosts">게시글 가져오기</button>
  <button @click="getPhotos">사진 가져오기</button>
  <button @click="getComments">댓글 가져오기</button>

  <div v-if="posts.length > 0">
    <h2>게시글:</h2>
    <div v-for="post in posts" :key="post.id">
      <p>{{ post.title }}</p>
    </div>
  </div>

  <div v-if="photos.length > 0">
    <h2>사진:</h2>
    <div v-for="photo in photos" :key="photo.id">
      <p>{{ photo.title }}</p>
    </div>
  </div>

  <div v-if="comments.length > 0">
    <h2>댓글:</h2>
    <div v-for="comment in comments" :key="comment.id">
      <p>{{ comment.name }}</p>
    </div>
  </div>
</template>

<script setup>
const posts = ref([]);
const photos = ref([])
const comments = ref([])

const getPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  posts.value = await response.json();
};

const getPhotos = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=5"
  );
  photos.value = await response.json();
};

const getComments = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=5"
  );
  comments.value = await response.json();
};

/*
   오늘 배운 것:
   1. 여러 개의 API 사용하기
   2. ?_limit=5 - 5개만 가져오기
   3. 여러 개의 버튼과 함수 만들기
*/
</script>
