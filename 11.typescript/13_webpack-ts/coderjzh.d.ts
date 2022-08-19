// 自定义类型声明文件会被自动扫描
// 无论是使用什么东西，首先都需要有个类型声明，所以之后找不到类型的时候，先考虑做类型声明
// 声明模块，表示这部分内容可以当作模块被导入
declare module "lodash" {
  // 导出 join 方法
  export function join(arr: any[]): void;
}

// 声明变量/函数/类
interface Person {
  name: string;
  age: number;
}
declare const info: Person;
declare function foo(): void;
declare class Teacher implements Person {
  constructor(public name: string, public age: number);
}

// 声明文件
declare module "*.jpg";

// 声明命名空间
declare namespace $ {
  export function ajax(setting: any): any;
}
