/**
 * 1.promise用来干什么的？
 *    为了解决回调地狱（在回调函数中嵌套了回调函数，可读性差，不便于维护）
 *
 * 需求：依次地去执行异步代码(fs读文件)
 */

// 引入fs模块
const fs = require("fs");
// 回调地狱
fs.readFile(`${__dirname}/etc/a.txt`, "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);

  fs.readFile(`${__dirname}/etc/b.txt`, "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  fs.readFile(`${__dirname}/etc/c.txt`, "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
