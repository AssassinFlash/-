// TS 开发准则：只要是变量或者对象类型，都应该有一个明确的类型

// 类型注解：人工的告诉TS，这个变量或对象的明确类型
const userName: string = "jzh";
// 类型推断：ts帮你推测这个变量或者对象的类型
const age = 18; // 字面量类型

const userInfo = {
  name: "jzh",
  age: 25,
};

// 对象类型解构的类型注解
function getObj({ a, b }: { a: number; b: number }) {
  return a + b;
}
getObj({ a: 1, b: 2 });

// 这种情况需要给变量做类型注解
const rawData = '{name: "jzh"}';
// 不写类型注解的话，ts推断出来这个数据为any类型
const newData: { name: string } = JSON.parse(rawData);
