class Dep {
  constructor() {
    this.subscriber = new Set();
  }
  depend() {
    if (activeEffect) {
      this.subscriber.add(activeEffect);
    }
  }
  notify() {
    this.subscriber.forEach((effect) => {
      effect();
    });
  }
}

let counter = 100;

const dep = new Dep();

// 把依赖于counter的函数做一层封装，在这个函数里执行
let activeEffect = null;
function watchEffect(effect) {
  // 当前执行的函数，先添加到依赖收集系统中
  activeEffect = effect;
  dep.depend();
  // 随后执行这个函数
  effect();
  activeEffect = null;
}

watchEffect(function () {
  console.log(counter * 2);
});

watchEffect(function () {
  console.log(counter * counter);
});

counter++;
dep.notify()