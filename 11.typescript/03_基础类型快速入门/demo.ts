// 基础类型：string, number, boolean
const teacherName: string = "Dell Lee";
const teacherAge: number = 28;
const isMale: boolean = true;

// 数组类型
const numberArr: number[] = [1, 3, 5];
const stringArr: string[] = ["a", "b", "c"];
const booleanArr: Array<boolean> = [true, false]; // 泛型

// 对象类型
const user: { name: string; age: number } = { name: "dell", age: 28 };
const userOne: { name: string; age?: number } = { name: "dell" };

// 联合类型 Union Type
function union(id: number | string) {
  if (typeof id === "string") {
    // 类型缩小 narrowing
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// 类型别名
type User = { name: string; age: number };
const userTwo: User = { name: "jzh", age: 25 };
const userThree: User = { name: "jzh", age: 25 };

// any类型
function showMessage(message: any) {
  console.log(message);
}

// 函数类型
function abc(message: string): number {
  return 123;
}
const def: (age: number) => number = (age: number) => {
  return 25;
};

// interface 接口类型
interface Student {
  age: number;
  sex?: string;
}
const student: Student = { age: 25, sex: "male", name: "jzh" };
// 接口类型和类型别名不同之处：
// 1.接口类型可继承
// interface OldStudent extends Student {
//   name: string;
// }
// const oldStudent: OldStudent = { name: "jzh", age: 25, sex: "male" };
// 2.接口重名会合并在一起
interface Student {
  name: string;
}

// 交叉类型，和接口的继承合并差不多
type Employee = User & { salary: number };
const employee: Employee = { name: "jzh", age: 25, salary: 0 };

// 断言：as xxx，断定是什么样的类型
// 我这里知道它一定是 undefined，ts帮你推断是 HTMLElement，使用 as undefined，告诉ts这个就是undefined
const dom: undefined = document.getElementById("#root") as undefined;
// 这样写也是可以的
const dom1: undefined = <undefined>document.getElementById("#root");
const testString: string = 123 as any as string;

// 字面量类型
const a: "abc" = "abc"; // 此时 a 只能是 abc
function getPosition(position: "left" | "right"): string {
  // 此时 position 只能是 left 或者 right，其他都不行
  return position;
}
getPosition("left");

// 字面量类型习题
function request(url: string, method: "GET" | "POST"): string {
  return "sending request";
}
interface Param {
  url: string;
  method: string;
}
const params: Param = { url: "imooc.com", method: "POST" };
// 断言成 GET ，否则会报错，因为string类型不是 'GET' | 'POST' 字面量类型
request(params.url, params.method as "GET");

// null 、 undefined
const testNull: null = null;
const testUndefined: undefined = undefined;
function checkNull(a: string | null): void {
  // 表示a一定存在，是个非null的东西
  console.log(a!.toUpperCase());
}
