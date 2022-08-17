// function getLength(args: string): number;
// function getLength(args: any[]): number;

// function getLength(args: any): number {
//   return args.length;
// }

console.log(getLength("abc"));
console.log(getLength([1, 2, 3]));

// 联合类型
// 一般来说，能使用联合类型就使用联合类型，因为这样写比较方便
function getLength(args: string | any[]): number {
  return args.length;
}
