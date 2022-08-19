export namespace time {
  export function format() {
    return '2022-8-18'
  }
}
// 不同的命名空间内可存在相同名字的属性和方法，它们互相之间不冲突
// 命名空间里面的内容默认只属于内部，外部不可调用，如果想要外部调用就必须加上export
// 命名空间还可以导出
export namespace price {
  export function format() {
    return '19.99'
  }
  function foo() {
    console.log('hello');
  }
}
// price.format()
// time.format()
