// 类也可以使用泛型
class Point<T> {
  x: T;
  y: T;
  z: T;

  constructor(x: T, y: T, z: T) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
// 可以进行类型推导
const p = new Point<number>(10, 20, 30);
const p1 = new Point("10", "20", "30");
