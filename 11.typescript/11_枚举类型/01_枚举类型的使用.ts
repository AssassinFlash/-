// 本质上是一个数字常量
// 默认情况下第一个数字为0，第二个数字为1 ...
// 可以改值
enum Direction {
  LEFT = 100,
  RIGHT,
  TOP,
  BOTTOM,
}

function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log(Direction.LEFT);  // 0
      break;
    case Direction.RIGHT:
      console.log(Direction.RIGHT); // 1
      break;
    case Direction.TOP:
      console.log(Direction.TOP); // 2
      break;
    case Direction.BOTTOM:
      console.log(Direction.BOTTOM);  // 3
      break;
    default:
      const foo: never = direction;

  }
}

turnDirection(Direction.LEFT);
turnDirection(Direction.RIGHT);
turnDirection(Direction.TOP);
turnDirection(Direction.BOTTOM);
