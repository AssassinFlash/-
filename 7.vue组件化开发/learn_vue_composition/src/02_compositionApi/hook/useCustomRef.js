import { customRef } from "vue";

const DEBOUNCE_TIME = 500;
// 自定义ref，实现输入框防抖(即操作停止了防抖规定的时间之后才执行)
export default function (value) {
  // customRef：创建一个自定义ref，对依赖项跟踪和更新触发进行显式控制
  // 需要一个工厂函数，该函数接收 track 和 trigger 函数作为参数
  // track 收集依赖，trigger触发更新
  // 并且应该返回一个带有 set 和 get 的对象

  let timeId = null;
  return customRef((track, trigger) => {
    return {
      get() {
        // 先收集依赖
        track();
        return value;
      },
      // set(newValue) {
      //   value = newValue
      //   // 然后触发更新
      //   trigger()
      // }

      // 做防抖操作
      set(newValue) {
        clearTimeout(timeId);
        timeId = setTimeout(() => {
          value = newValue;
          trigger();
        }, DEBOUNCE_TIME);
      },
    };
  });
}
