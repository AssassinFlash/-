const demoMixin = {
  data() {
    return {
      message: "hello mixin",
    };
  },
  created() {
    console.log("执行了mixin");
  },
  methods: {
    handleClick() {
      console.log("执行了mixin的方法");
    },
  },
};

export default demoMixin;
