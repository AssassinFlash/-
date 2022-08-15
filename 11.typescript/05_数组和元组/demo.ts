// arr 变量是一个数组，这个数组既可以是number，也可以是string
const arr: (number | string)[] = [1, "2", 3];
const undefinedArr: undefined[] = [undefined];

interface Person {
  name: string;
  age: number;
}
const objArr: Person[] = [
  { name: "jzh", age: 25 },
  { name: "dell", age: 28 },
];

// 元组 tuple
// 约束一个数组，这个数组的长度是固定的，且第一个一定是string，第二个一定是string，第三个一定是number
const teacherInfo: [string, string, number] = ["dell", "teacher", 25];
const teacherList: [string, string, number][] = [
  ["dell", "male", 28],
  ["jzh", "male", 25],
];
