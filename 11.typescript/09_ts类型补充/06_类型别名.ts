// type 用于定义类型别名
type IDType = string | number | boolean;

type PointType = { x: number; y: number };

function printId(id: IDType) {
  console.log(id);
}

function printPoint(point: PointType) {
  console.log(point.x, point.y);
}
