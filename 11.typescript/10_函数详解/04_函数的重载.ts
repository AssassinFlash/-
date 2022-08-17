// 函数重载：函数名称相同，但参数不同。参数不同指的是参数个数或者类型不同
function add(num1: number, num2: number): number; // 没有函数体
function add(num1: string, num2: string): string;
function add(num1: number, num2: number, num3: number): number;

// 最后必须要写一个函数实现
function add(num1: any, num2: any): any {
  return num1 + num2;
}

// 最终会执行第一个函数，然后按照最后一个函数的实现体去实现
// 这是因为遍历到第一个函数符合要求
// 相当于是把函数声明和函数实现给分开了
console.log(add(20, 30));
console.log(add("abc", "cba"));

// 在函数的重载中，函数的实现体是不能被直接调用的
// add({name: 'jzh'}, {age: 25}) // 报错，因为遍历了函数声明都没有匹配到符合的类型

export {};
