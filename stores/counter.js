import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0); // 🔍 분석포인트: 왜 ref를 써요?

  const increment = () => {
    count.value++; // 🔍 분석포인트: 이게 실행되면 화면에서 뭐가 바뀔까요?
  };

  const decrement = () => {
    count.value--;
  };

  // 🔍 분석포인트: computed는 왜 써요?
  const doubled = computed(() => count.value * 2);

  return {
    count,
    increment,
    decrement,
    doubled,
  }; // 🔍 분석포인트: 왜 return 해야 하나요?
});
