// 1.函数作为参数时，在参数中如何编写类型：
function foo() {}

type Fn = () => void;

function bar(fn: Fn) {
  fn();
}

bar(foo);

// 2.定义常量时，编写函数类型
type AddFn = (num1: number, num2: number) => void;
const add: AddFn = (num1: number, num2: number) => {
  console.log(num1 + num2);
};
