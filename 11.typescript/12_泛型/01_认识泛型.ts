// 泛型是让类型具有通用性
// 在定义函数时，不决定参数的类型，而是让调用者以参数的形式告知函数这些参数是什么类型
function sum<Type>(num1: Type, num2: Type): Type {
  return num1;
}

sum<number>(20, 30);
sum<{ name: string }>({ name: "jzh" }, { name: "lmq" });
sum<any[]>(["abc"], [123]);

// 类型推导，不写类型，这样推出来的是字面量类型
sum(30, 50);
sum("abc", "cba");

// 如果有剩余参数，只能应用泛型中的其中一个类型
function foo<T, E, O>(arg1: T, arg2: E, arg3: O, ...arg: T[]) {}

foo<number, string, boolean>(123, "abc", true, 123, 321, 1234);
