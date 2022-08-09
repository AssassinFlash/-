// // 假如现在有个counter
// let counter = 100;

// // 这些是对counter进行操作的函数，对counter有依赖
// function doubleCounter() {
//   console.log(counter * 2);
// }

// function powerCounter() {
//   console.log(counter * counter);
// }

// // 当counter的值发生变化，这些依赖于counter的函数如何通知它们重新执行呢？
// counter++;

// 最基本的依赖收集系统
class Dep {
  constructor() {
    this.subscriber = new Set();
  }
  // 收集这些依赖于数据操作的函数
  addEffect(fn) {
    this.subscriber.add(fn);
  }
  // 当数据发生改变时，通知这些函数重新执行
  notify() {
    this.subscriber.forEach((fn) => {
      fn();
    });
  }
}

let counter = 100;

function doubleCounter() {
  console.log(counter * 2);
}
function powerCounter() {
  console.log(counter * counter);
}

const dep = new Dep();
dep.addEffect(doubleCounter);
dep.addEffect(powerCounter);

counter++; // 数据发生改变
dep.notify()
