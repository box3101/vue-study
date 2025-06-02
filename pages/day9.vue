<template>
  <div>
    <h1>9일차: 게시글 수정하기</h1>
    
    <h2>수정할 게시글 번호:</h2>
    <input v-model="editId" type="number" placeholder="1~100" />
    <button @click="loadPost">게시글 불러오기</button>
    
    <div v-if="currentPost">
      <h2>게시글 수정:</h2>
      <input v-model="currentPost.title" placeholder="제목">
      <br><br>
      <textarea v-model="currentPost.body" rows="5" cols="50"></textarea>
      <br><br>
      <button @click="updatePost">수정 완료</button>
    </div>
    
    <div v-if="updateResult">  
      <h2>수정 결과:</h2>
      <h3>{{ updateResult.title }}</h3>
      <p>{{ updateResult.body }}</p>  
    </div>
  </div>
</template>

<script setup>
const editId = ref(1)
const currentPost = ref(null)
const updateResult = ref(null)

const loadPost = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${editId.value}`)
  currentPost.value = await response.json();
}

const updatePost = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${editId.value}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: currentPost.value.id,
      title: currentPost.value.title,
      body: currentPost.value.body,
      userId: currentPost.value.userId
    })
  })
  
  updateResult.value = await response.json()
}
</script>