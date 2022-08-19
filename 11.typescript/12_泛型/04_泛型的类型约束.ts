// extends 表示这个泛型必须是某个类型的子类型，即这个泛型T必须要包含后边类型的某些属性
// 这就相当于是在给泛型添加了一个约束
interface ILength {
  length: number;
}
function getLength<T extends ILength>(arg: T) {
  return arg.length;
}

getLength("abc");
getLength(["abc", "cba"]);
getLength({ length: 100, name: "jzh" });
