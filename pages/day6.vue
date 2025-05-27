<template>
  <h1>6일차: 실시간 검색</h1>
  <p>타이핑하면 바로 검색됩니다:</p>

  <input v-model="searchWord" placeholder="검색어를 입력하세요" />

  <div v-if="searchWord.length > 0">
    <h2>검색 결과 {{ filteredPosts.length }} 개:</h2>
    <div v-for="post in filteredPosts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body.substring(0, 100) }}...</p>
    </div>
  </div>

  <div v-if="searchWord.length === 0">
    <p>검색어를 입력해주세요.</p>
  </div>
</template>

<script setup>
const searchWord = ref("");
const allPosts = ref([]);

// 페이지가 열리자마자 모든 게시글 가졍괴
const loadAllPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  allPosts.value = await response.json();
}

// 검색어에 따라 자동으로 필터링되는 계산된 값
const filteredPosts = computed(()=>{
  if(searchWord.value.length === 0) return []

  return allPosts.value.filter(post =>
    post.title.toLowerCase().includes(searchWord.value.toLowerCase()) ||
    post.body.toLowerCase().includes(searchWord.value.toLowerCase())
  )
})

// 페이지 로드시 실행
loadAllPosts()

/*
   오늘 배운 것:
   1. computed() - 변수가 바뀌면 자동으로 다시 계산
   2. 페이지 열리자마자 실행 - 버튼 없이도 API 호출
   3. 제목과 내용 둘 다 검색 - || (또는) 조건
   4. substring() - 긴 글을 짧게 자르기
*/
</script>
