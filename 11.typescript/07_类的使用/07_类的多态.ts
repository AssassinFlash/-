class Animal {
  action() {
    console.log("animal action");
  }
}

class Dog extends Animal {
  action() {
    console.log("dog running");
  }
}

class Fish extends Animal {
  action() {
    console.log("fish swimming");
  }
}

function doActions(animals: Animal[]) {
  animals.forEach((animal) => {
    animal.action();
  });
}

// 会执行Dog类的action，会执行Fish类的action
// 这是因为Dog类实例和Fish类实例也属于Animal类
// 这句话的理解相当于：const animal: Animal = new Dog()，即它虽然是Animal类，但是也是Dog对象
// 也就是说虽然它们都是Animal类，但是执行的都是它们重写后的方法，这个过程就是多态
// 多态的前提就是要有类的继承
doActions([new Dog(), new Fish()]);
