// 1.更容易帮助我们发现问题
// 2.有了类型提示之后，代码提示更加准确
// 3.有类型的说明，使得语义化更好

// ts文件在浏览器和node环境下都是无法执行的
type Point = {
  x: number;
  y: number;
};

function getDistance1(point1: Point, point2: Point) {
  return [point2.x - point1.x + 1, point2.y - point2.y];
}

const [x, y] = getDistance1({ x: 1, y: 1 }, { x: 2, y: 2 });
console.log([x, y]);
