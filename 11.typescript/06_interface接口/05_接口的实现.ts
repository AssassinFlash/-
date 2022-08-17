interface IEat {
  eating: () => void;
}

interface ISwim {
  swimming: () => void;
}

// 类实现接口，一个类可以实现多个接口
// 实现的接口必须要实现其中的方法，否则报错
class Fish implements IEat, ISwim {
  eating() {
    console.log("fish is eating");
  }
  swimming() {
    console.log("fish is swimming");
  }
}

function swim(swimmer: ISwim) {
  swimmer.swimming();
}

class Person implements ISwim {
  swimming() {
    console.log("Person swimming");
  }
}

// 只要是实现了ISwim接口的类，都可以传入swim函数
const p = new Person();
const fish = new Fish();
swim(p);
swim(fish);
