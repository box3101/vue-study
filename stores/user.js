import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  // 🔍 분석포인트 1: 하나의 데이터 저장소
  const users = ref([])
  const loading = ref(false)
  const error = ref('')

  // 🔍 분석포인트 2: 딱 한 번만 API 호출하는 함수
  const fetchUsers = async () => {
    // 이미 데이터가 있으면 API 호출 안함!
    if (users.value.length > 0) {
      console.log('이미 데이터 있음! API 호출 안함 🎉')
      return
    }

    loading.value = true
    error.value = ''
    
    try {
      console.log('API 호출! (딱 1번만)')
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      users.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  // 🔍 분석포인트 3: 사용자 수정 함수 (모든 페이지에 반영)
  const updateUser = (userId, newData) => {
    const index = users.value.findIndex(user => user.id === userId)
    if (index !== -1) {
      users.value[index] = { ...users.value[index], ...newData }
      console.log('사용자 정보 수정! 모든 페이지에 반영됨 🎉')
    }
  }

  // 계산된 값들
  const userCount = computed(() => users.value.length)
  const averageId = computed(() => {
    if (users.value.length === 0) return 0
    const sum = users.value.reduce((acc, user) => acc + user.id, 0)
    return (sum / users.value.length).toFixed(1)
  })

  return {
    users,
    loading,
    error,
    userCount,
    averageId,
    fetchUsers,
    updateUser
  }
})