// 抽象关键字 abstract
abstract class Geom {
  getType() {
    return "Geom";
  }
  // abstract 定义抽象方法，不能写实现，只能定义它的类型
  abstract getArea(): number;
}

// 抽象类只能被继承，且继承了之后必须要实现抽象类里的抽象方法
class Circle extends Geom {
  getArea(): number {
    return 123;
  }
}
