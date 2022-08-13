import { computed } from "vue";
import { useStore, mapState, mapGetters } from "vuex";

// export function useState(mapper) {
//   // mapState会返回一个对象：{counter: function(){...}}
//   // 我们想要拿到这个counter，但是调用.counter会拿到函数fn
//   // 注意到这个fn有getter，而computed是专门处理getter的
//   const store = useStore();
//   const storeStateFns = mapState(mapper);
//   const storeState = {};

//   Object.keys(storeStateFns).forEach((fnKey) => {
//     // 要绑定store，不然setup函数里因为没有this而丢失store而报错
//     const fn = storeStateFns[fnKey].bind({ $store: store });
//     storeState[fnKey] = computed(fn);
//   });

//   return storeState;
// }

// export function useGetter(mapper) {
//   const store = useStore();
//   const storeGetterFns = mapGetters(mapper);
//   // 同样的，mapGetters会返回一个对象：{totalPrice: function(){...}}
//   // 这个对象里面含有getter, computed正好可以处理getter
//   const storeGetters = {};
//   Object.keys(storeGetterFns).forEach((fnKey) => {
//     const fn = storeGetterFns[fnKey].bind({ $store: store });
//     // computed(fn) 和 computed(()=> fn()) 是一样的效果
//     storeGetters[fnKey] = computed(() => fn());
//   });

//   return storeGetters;
// }

// 再做一层封装，可以通过传过来什么map函数就执行什么函数
export function useMapper(mapFn, mapper) {
  const store = useStore();
  const storeFns = mapFn(mapper);

  const storeMapper = {};
  Object.keys(storeFns).forEach((fnKey) => {
    const fn = storeFns[fnKey].bind({ $store: store });
    storeMapper[fnKey] = computed(() => fn());
  });

  return storeMapper;
}
