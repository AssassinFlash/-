// path是内置模块，引入的时候只需要引入名字即可
const path = require("path");

// 1.path.join() 将path片段连接在一起，生成规范化的路径
console.log(path.join("a", "b", "c"));

// 2.nodejs中有两个可直接使用的关于路径的变量
console.log(__dirname); // 拿到的是当前文件所在的文件夹的绝对路径

console.log(__filename); // 拿到的是当前文件的绝对路径
