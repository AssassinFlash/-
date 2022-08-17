// 接口还可以定义函数类型：
interface Fn {
  // ()里面就是函数的参数
  // 这个函数类型就是 (num1: number, num2: number) => number
  (num1: number, num2: number): number;
}

function getSum(num1: number, num2: number, calcFn: Fn) {
  return calcFn(num1, num2);
}

const calcFn: Fn = (num1: number, num2: number) => {
  return num1 + num2;
};

const result = getSum(20, 30, calcFn);
console.log(result);
