// interface 和 type 类似，但不完全一样

interface Person {
  // readonly name: string, // 只读
  name: string;
  age?: number;
  // 表示除了name和age之外还可能有其他属性，这个属性用string表示，类型未知
  [propName: string]: any;
  // 接口里面除了有属性，还可以有方法
  say(): string;
}

// 接口可以继承，既拥有了继承下来的所有属性和方法，还能具备自己的属性和方法
interface Teacher extends Person {
  teach(): string;
}

// 接口还可以定义函数类型：
interface SayHi {
  // 应用起来就是 function xxx(a: string): void {...}
  // 表示定义了一个函数的类型
  (param: string): void;
}

const sayHi: SayHi = (message: string) => {
  console.log(message);
};

const getPersonName = (person: Person) => {
  console.log(person.name);
};
const setPersonName = (person: Person, name: string) => {
  person.name = name;
};

const person = {
  name: "dell",
  sex: "male",
  say() {
    return "hello";
  },
};
getPersonName(person); // 弱校验，只需满足有name即可
// getPersonName({name: 'dell', sex: 'male'}) // 对字面量类型是强校验，必须完全符合Person类型，否则报错
setPersonName(person, "jzh");

// 用类去应用接口，表示类必须具有接口的所有属性，否则报错
class User implements Person {
  name: string;
  constructor() {
    this.name = "123";
  }

  say() {
    return "hello";
  }
}
