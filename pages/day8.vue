<template>
  <h1>8일차: 게시글 삭제하기</h1>

  <h2>삭제할 게시글 번호 :</h2>
  <input v-model="deleteId" type="number" placeholder="1~100 사이 숫자" />
  <button @click="deletePost">게시글 삭제</button>

  <div v-if="deleteResult">
    <h2>삭제 결과 :</h2>
    <p>{{ deleteMessage }}</p>
  </div>
</template>

<script setup>
const deleteId = ref(1);
const deleteResult = ref(false);
const deleteMessage = ref("");

const deletePost = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${deleteId.value}`,
    {
      method: "DELETE",
    }
  );

  if (response.ok) {
    deleteMessage.value = `게시글 ${deleteId.value} 번이 삭제 되었습니다!`;
  } else {
    deleteMessage.value = `삭제 실패 ! 에러 코드 ${response.status}`;
  }

  deleteResult.value = true;
};

/*
 새로 배우는 것!
 
 1. DELETE 요청
 method: 'DELETE'  // POST 대신 DELETE

 2. URL에 ID 포함
 // 특정 게시글을 지정해서 삭제
`https://jsonplaceholder.typicode.com/posts/${deleteId.value}`
// 예: posts/5 → 5번 게시글 삭제

 3. 응답 상태 확인
 if (response.ok) {     // 성공 (200번대)
  // 삭제 성공
  } else {               // 실패 (400번대, 500번대)
    // 삭제 실패
  }
*/

/*
 HTTP 상태 코드 (Status Code)
  // 성공 코드들 (200번대)
  200 - "성공!" (GET, PUT에서 많이 봄)
  201 - "새로 만들어졌어!" (POST에서 많이 봄) 
  204 - "성공했는데 보낼 데이터 없어!" (DELETE에서 많이 봄)

  // 클라이언트 오류 (400번대) - 우리가 실수
  400 - "요청이 이상해!"
  401 - "로그인 안했잖아!"
  403 - "권한 없어!"
  404 - "그런 데이터 없어!" (없는 게시글 삭제하려 할 때)

  // 서버 오류 (500번대) - 서버가 실수
  500 - "서버가 고장났어!"
  503 - "서버가 너무 바빠!"

  무신사 예시로 보면:

  주문 성공: 201 "Created"
  품절 상품 주문: 400 "Bad Request"
  로그인 없이 주문: 401 "Unauthorized"
  없는 상품 주문: 404 "Not Found"
*/
</script>
