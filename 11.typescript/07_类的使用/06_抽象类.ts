// 抽象关键字 abstract
// 抽象类不能被实例化
abstract class Geom {
  getType() {
    return "Geom";
  }
  // abstract 定义抽象方法，不能写实现，只能定义它的类型
  // 抽象方法必须在抽象类里面
  abstract getArea(): number;
}

// 抽象类只能被继承，且继承了之后必须要实现抽象类里的抽象方法
class Circle extends Geom {
  getArea(): number {
    return 123;
  }
}
