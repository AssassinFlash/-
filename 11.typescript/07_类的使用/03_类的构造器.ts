class Person1 {
  // public name: string;
  // 在new关键字创建实例的时候，constructor就会被自动调用
  // constructor(name: string) {
  //   this.name = name;
  // }

  // 简化形式，等价于上面的写法
  constructor(public name: string) {}
}

class Teacher extends Person1 {
  // 子类也有构造器的时候，需要先调用父类的构造器
  constructor(name: string, public age: number) {
    // super: 父类
    // super()表示调用了父类的构造器
    super(name);
  }
}
const person = new Person1("jzh");
console.log(person.name);

const teacher = new Teacher("dell", 28);
console.log(teacher.name, teacher.age);
