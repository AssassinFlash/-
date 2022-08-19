import { add } from "./ts/math";
import { time, price } from "./ts/01_命名空间";
// 没有找到声明文件，这是因为lodash里面都是js文件，ts不识别js文件，需要额外添加一个类型声明文件
// npm install @types/lodash -D  -> 类型声明文件
// 此时就不报错了
import lodash from "lodash";

console.log(lodash.join(["abc", "cba"]));
console.log(time.format());
console.log(price.format());
