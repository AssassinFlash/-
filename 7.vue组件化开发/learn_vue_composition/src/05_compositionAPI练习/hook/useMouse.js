import { ref } from "vue";

const THROTTLE_TIME = 300;

export default function () {
  const mouseX = ref(0);
  const mouseY = ref(0);

  let prevTime = null;
  document.addEventListener("mousemove", (event) => {
    let currTime = Date.now();
    if (currTime - prevTime > THROTTLE_TIME) {
      prevTime = currTime;
      // mouseX.value = event.clientX;
      // mouseY.value = event.clientY;
      mouseX.value = event.pageX;
      mouseY.value = event.pageY;
      console.log(event.clientX);
    }
  });

  return {
    mouseX,
    mouseY,
  };
}
