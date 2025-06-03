<template>
  <div style="padding: 20px;">
    <h1>✅ Pinia로 해결된 버전</h1>
    
    <!-- 페이지 1: 사용자 목록 -->
    <div style="border: 1px solid green; padding: 15px; margin: 10px 0;">
      <h2>📄 페이지 1: 사용자 목록</h2>
      <button @click="userStore.fetchUsers()" :disabled="userStore.loading">
        {{ userStore.loading ? '로딩중...' : '사용자 가져오기' }}
      </button>
      <div v-if="userStore.users.length > 0">
        <p>사용자 수: {{ userStore.userCount }}명</p>
        <p>첫 번째 사용자: {{ userStore.users[0].name }}</p>
        <button @click="editUser1" style="background: orange; color: white; padding: 5px;">
          첫 번째 사용자 이름 수정
        </button>
      </div>
    </div>
    
    <!-- 페이지 2: 사용자 상세 -->
    <div style="border: 1px solid green; padding: 15px; margin: 10px 0;">
      <h2>📄 페이지 2: 사용자 상세</h2>
      <button @click="userStore.fetchUsers()" :disabled="userStore.loading">
        {{ userStore.loading ? '로딩중...' : '사용자 가져오기' }}
      </button>
      <div v-if="userStore.users.length > 0">
        <p>사용자 수: {{ userStore.userCount }}명</p>
        <p>두 번째 사용자: {{ userStore.users[1].name }}</p>
      </div>
    </div>
    
    <!-- 페이지 3: 사용자 통계 -->
    <div style="border: 1px solid green; padding: 15px; margin: 10px 0;">
      <h2>📄 페이지 3: 사용자 통계</h2>
      <button @click="userStore.fetchUsers()" :disabled="userStore.loading">
        {{ userStore.loading ? '로딩중...' : '사용자 가져오기' }}
      </button>
      <div v-if="userStore.users.length > 0">
        <p>총 사용자: {{ userStore.userCount }}명</p>
        <p>평균 ID: {{ userStore.averageId }}</p>
      </div>
    </div>
    
    <div style="background: #e6ffe6; padding: 15px; margin: 20px 0; border-radius: 5px;">
      <h3>✅ 해결된 점들:</h3>
      <p>• API 딱 1번만 호출됨!</p>
      <p>• 모든 페이지에서 같은 데이터 공유!</p>
      <p>• 한 곳에서 수정하면 모든 곳에 반영!</p>
      <p>• 코드 중복 제거!</p>
    </div>
  </div>
</template>

<script setup>
const userStore = useUserStore()

const editUser1 = () => {
  userStore.updateUser(1, { name: '김수정 (수정됨!)' })
  userStore.updateUser(2, { name: '김수정 (수정됨!)' })
  userStore.updateUser(3, { name: '김수정3 (수정됨!)' })
}
</script>