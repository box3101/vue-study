<template>
  <h1>5일차: 게시글 검색</h1>
  <p>게시글 제목을 검색해보세요:</p>

  <input v-model="searchWord" placeholder="검색어를 입력하세요." />
  <button @click="searchPosts">검색하기</button>

  <div v-if="posts.length > 0">
    <h2>검색 결과 ({{ posts.length }}개):</h2>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <hr />
    </div>
  </div>

  <div v-if="posts.length === 0 && searched">
    <p>검색 결과가 없습니다.</p>
  </div>
</template>

<script setup>
const searchWord = ref("");
const posts = ref([]);
const searched = ref(false);

const searchPosts = async () => {
  // 1단계 : 모든 게시글 가져오기
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const allPosts = await response.json()

  // 2단계 검색어가 포함된 게시글만 찾기
  posts.value = allPosts.filter(post => 
    post.title.toLowerCase().includes(searchWord.value.toLowerCase())
  )

  searched.value = true

}

/*
   오늘 배운 것:
   1. 검색어 입력받기
   2. filter() - 조건에 맞는 것만 골라내기
   3. includes() - 텍스트에 특정 단어가 들어있는지 확인
   4. toLowerCase() - 대소문자 구분 없이 검색
*/
</script>
