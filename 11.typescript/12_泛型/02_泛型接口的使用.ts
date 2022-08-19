// 接口的类型也可以不是写死的，而是由外界来决定
// 可以先给定默认类型
interface IPerson<T1 = string, T2 = number> {
  name: T1;
  age: T2;
}

// 接口使用泛型就没有类型推导了
const person: IPerson<string, number> = {
  name: "jzh",
  age: 25,
};
