class Person {
  name: string
  constructor() {
    this.name = 'dell'
  }

  getName() {
    return this.name
  }
}

// 类的继承
class Teacher extends Person {
  getTeacherName() {
    return this.name
  }
  // 重写父类方法
  getName() {
    // super：父类，super.getName()即调用了父类的getName()
    return super.getName() + 'coder'
  }
}

const person = new Person()
// console.log(person.getName());
const teacher = new Teacher()
console.log(teacher.getName());