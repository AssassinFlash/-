// 联合类型是由两个或多个其他类型组成的类型
// 表示可以是这些类型中的任何一个值
// 联合类型中的每一个类型被称为联合成员

// number|string 联合类型
function printID(id: number | string) {
  // 使用联合类型的值，需要特别小心
  // 类型缩小
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  }
}

printID("123");
printID(123);
