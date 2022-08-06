import { ref } from "vue";

const THROTTLE_TIME = 300;

export default function () {
  const scrollX = ref(0);
  const scrollY = ref(0);

  // 节流(间隔一段时间才执行一次函数，减少执行函数的次数)
  let prevTime = null;
  function reduce() {
    let currTime = Date.now();
    if (currTime - prevTime > THROTTLE_TIME) {
      prevTime = currTime
      scrollX.value = window.scrollX
      scrollY.value = window.scrollY
    }
  }

  document.addEventListener("scroll", reduce);

  return {
    scrollX,
    scrollY,
  };
}
