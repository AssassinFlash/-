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

const targetMap = new WeakMap();

function getDep(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}

// vue3的数据劫持：Proxy代理对象
function reactive(raw) {
  // 在代理对象中做数据劫持
  return new Proxy(raw, {
    get(raw, key) {
      // 拿到这个数据的依赖收集对象，在其他地方获取这个数据的时候就进行收集依赖
      const dep = getDep(raw, key);
      dep.depend();
      // 返回数据
      // 这里可以操作raw[key]的原因是这是对代理对象进行了数据劫持，不是直接对raw进行了数据劫持，
      // 所以通过raw[key]拿到value不会触发get函数
      return raw[key];
    },
    set(raw, key, newValue) {
      // 拿到这个数据的依赖收集对象，在其他地方修改这个数据的时候通知依赖收集对象重新执行这些依赖
      if (raw[key] !== newValue) {
        const dep = getDep(raw, key);
        raw[key] = newValue;
        dep.notify();
      }
    },
  });
}

let activeEffect = null;

function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}

const info = reactive({ name: "jzh", age: 25, counter: 100 });
const foo = reactive({ height: 1.7 });

watchEffect(function () {
  console.log(info.counter * 2, info.name);
});

watchEffect(function () {
  console.log(info.counter * info.counter, info.age);
});

watchEffect(function () {
  console.log(foo.height);
});

// 当数据发生修改：
foo.height = 1.8;
info.name = 'coder'
