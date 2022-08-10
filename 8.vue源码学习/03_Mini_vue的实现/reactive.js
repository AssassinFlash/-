// 依赖收集对象
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

// 获取该数据对应的依赖收集对象
const getDep = (obj, key) => {
  let depsMap = targetMap.get(obj);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(obj, depsMap);
  }
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }

  return dep;
};

// vue3的数据劫持：Proxy
const reactive = (obj) => {
  return new Proxy(obj, {
    get: (obj, key) => {
      const dep = getDep(obj, key);
      dep.depend();
      return obj[key];
    },
    set: (obj, key, newValue) => {
      if (obj[key] !== newValue) {
        obj[key] = newValue;
        const dep = getDep(obj, key);
        dep.notify();
      }
    },
  });
};

let activeEffect = null;

// 传入依赖，让依赖收集对象进行收集
const watchEffect = (effect) => {
  activeEffect = effect;
  effect();
  activeEffect = null;
};
