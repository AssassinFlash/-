class Person {
  // private 定义的属性只能在类内部被调用
  constructor(private _name: string) {}

  // getter
  get name() {
    return this._name;
  }

  // setter
  set name(_name: string) {
    this._name = _name;
  }
}

const person = new Person("jzh");
// 类外调用getter不需要()调用
person.name = "coder";
// 类外调用setter也不需要()调用
console.log(person.name);
