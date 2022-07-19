/**
 * promise新建后会立即执行里面的代码
 */
const fs = require("fs");
// 做函数封装，得到promise对象
function getPromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/etc/${fileName}`, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

let p1 = getPromise("a.txt");
let p2 = getPromise("b.txt");
let p3 = getPromise("c.txt");

// 例子
// let obj = {
//   name: 'jzh',
//   sayHi: () => {
//     console.log('hello');
//   }
// }

// function test() {
//   return obj
// }

// // 那么，调用test()，它本身就是一个obj，所以可以使用obj的方法
// test().sayHi()

// 第一种写法：
// 那么p1.then()本身就是一个p2对象
// p1.then((value) => {
//   console.log(value);

//   return p2;
// })
//   .then((value) => {
//     console.log(value);

//     return p3;
//   })
//   .then((value) => {
//     console.log(value);
//   });

// 第二种写法：
getPromise("a.txt")
  .then((data) => {
    console.log(data);

    return getPromise("b.txt");
  })
  .then((data) => {
    console.log(data);

    return getPromise("c.txt");
  })
  .then((data) => {
    console.log(data);
  });
