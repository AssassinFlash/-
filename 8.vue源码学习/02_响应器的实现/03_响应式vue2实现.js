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

// Map: ({key:value}) key是一个字符串
// WeakMap: ({key(对象):value}) key是一个对象 弱引用
// 这里需要给未处理过的数据做一个Map数据结构的保存，原因是多个数据需要建立多个dep依赖收集对象
// 而每个dep需要有相应的key值做一一对应
const targetMap = new WeakMap();

// 根据不同的数据和不同的key获取不同的dep对象
function getDep(target, key) {
  // 1.根据target对象取出对应的Map对象
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  // 2.取出具体的dep对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
  }
  return dep;
}

// 数据劫持：劫持该数据，当该数据发生变化时，会通知数据发生了改变
// vue2的数据劫持：Object.defineProperty()
function reactive(raw) {
  // 1.拿到所有的key
  Object.keys(raw).forEach((key) => {
    // 2.拿到这个数据对应的依赖收集对象
    const dep = getDep(raw, key);

    // 3.进行数据劫持
    let value = raw[key];
    // 参数1：进行劫持的对象
    // 参数2：劫持对象的哪个key值
    // 参数3：劫持的操作
    Object.defineProperty(raw, key, {
      get: () => {
        // 只要某些地方需要获取这个数据，就触发收集依赖，收集到与这个数据相关的函数
        dep.depend();
        // 这里需要return value而不是return raw[key]的原因：
        // 这里是直接对raw进行了数据劫持，通过raw[key]获取value会触发get函数，导致无限循环
        return value;
      },
      set: (newValue) => {
        // 只要这个数据发生了修改，就通知这些依赖重新执行
        if (value !== newValue) {
          value = newValue;
          dep.notify();
        }
      },
    });
  });

  // 返回的是已经被劫持后的数据
  return raw;
}

let activeEffect = null;

function watchEffect(effect) {
  // 把当前依赖于这个数据的函数赋值给一个标记，便于dep对象调用depend收集依赖
  activeEffect = effect;
  effect();
  activeEffect = null;
}

// 测试代码
const info = reactive({ name: "jzh", age: 25, counter: 100 });
const foo = reactive({ height: 1.7 });

// 当数据发生修改时，我需要知道数据发生了修改，这点如何做到呢？通过数据劫持
// info.name = "coder";

// 每次调用watchEffect都会传入与该数据相关的函数，这个函数会被赋值给一个标记，用于dep.depend收集依赖
watchEffect(function () {
  console.log(info.counter * 2, info.name);
});

watchEffect(function () {
  console.log(info.counter * info.counter, info.age);
});

watchEffect(function () {
  console.log(foo.height);
});

// 当数据发生修改
info.name = "coder";
foo.height = 1.75;
