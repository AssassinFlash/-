<script>
export default {
  // render() {
  //   return (
  //     <h2>我是Home组件</h2>
  //   )
  // }

  // 使用插槽
  render() {
    return this.$slots.default ? this.$slots.default() : <h2>我是Home组件</h2>;
  },
};
</script>
