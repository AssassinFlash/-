// 类型断言 as
// const el = document.getElementById("jzh") as HTMLImageElement
// console.log(el.src);

class Person {}

class Student extends Person {
  studying() {}
}

function sayHi(p: Person) {
  // 但是想调用studying，就不能直接调用了，会提示person类缺失studying方法
  // p.studying();
  // 使用类型断言
  (p as Student).studying()
}
const student = new Student()
// student继承Person类，所以可传
sayHi(student)