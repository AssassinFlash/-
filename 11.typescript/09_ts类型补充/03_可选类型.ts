// z? 表示这个 z 可能有也可能没有
function printPoint(point: { x: number; y: number; z?: number }) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z);
}
printPoint({ x: 1, y: 2, z: 3 });
printPoint({ x: 4, y: 6 });
export {};
