// 一个类只能生成一个唯一的实例

class Demo {
  // 首先，禁用 new 关键字，使其在类外不能通过new关键字创建实例
  // 然后，通过 static 修饰符，将getInstance()方法挂载到Demo类上，直接通过Demo.getInstance()即可调用方法
  // 最后，声明一个私有的挂载到Demo类上的instance属性，它的类型是Demo类型
  private static instance: Demo;
  static getInstance(): Demo {
    if (!this.instance) {
      this.instance = new Demo();
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();

// 可判断 demo1 和 demo2 都是指向同一个Demo实例
console.log(demo1 === demo2); // true