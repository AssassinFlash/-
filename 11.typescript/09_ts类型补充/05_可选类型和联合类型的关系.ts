// 当一个参数是可选类型的时候，可以把它看作是 类型 | undefined 这样的一个联合类型
function foo(message?: string) {
  console.log(message);
}

foo("123");
