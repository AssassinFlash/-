// private protected public 访问类型

// 类中默认对属性和方法是public
// public 允许我在类的内外被调用
// private 允许在类的内部被调用
// protected 允许在类内及继承的子类中被调用
class Person {
  protected name: string;
  constructor() {
    this.name = "coder";
  }
  public sayHi() {
    this.name
    console.log("hi");
  }
}

class Teacher extends Person {
  public sayBye() {
    console.log(this.name);
  }
}

const person = new Person();
person.sayHi();
// person.name = "jzh";
// console.log(person.name);

const teacher = new Teacher()
teacher.sayBye();
teacher.sayHi()
