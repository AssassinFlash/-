import { computed } from "vue";
import { mapGetters, useStore } from "vuex";

const useGetters = (mapper) => {
  const store = useStore();

  const storeGettersFn = mapGetters(mapper);
  const storeGetters = {};

  Object.keys(storeGettersFn).forEach((fnKey) => {
    const fn = storeGettersFn[fnKey].bind({ $store: store });
    storeGettersFn[fnKey] = computed(fn);
  });

  return storeGetters;
};

export default useGetters
