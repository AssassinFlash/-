// 给参数加上类型注解：num1: number, num2: number
// 给返回值添加类型注解：(): number
// 通常情况下，能够类型推导就尽量不写类型注解
function sum(num1: number, num2: number): number {
  return num1 + num2;
}

export {}