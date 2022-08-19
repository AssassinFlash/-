// 1.接口可以同名定义，相同的名字将会合并属性
interface IFoo {
  name: string
}
interface IFoo {
  age: number
}

const foo: IFoo = {
  name: 'jzh',
  age: 18
}

// 会报错
// type IBar = {
//   name: string
// }
// type IBar = {
//   age: number
// }