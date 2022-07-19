/**
 * promise构造函数接收一个函数作为参数，该函数的两个参数分别是 resolve 和 reject，
 * 它们是两个函数，由js引擎提供
 * 
 * 异步操作成功，调用resolve方法
 * 异步操作失败，调用reject方法
 * 
 * 返回的promise对象有then方法，then方法有两个回调函数
 */

const fs = require("fs");
// 创建 promise 对象
const p1 = new Promise((resolve, reject) => {
  fs.readFile(`${__dirname}/etc/a.txt`,'utf-8', (err,data)=> {
    if(err) {
      // 异步调用失败
      reject(err) // 调用reject函数，实际上执行的是promise对象的then方法的第二个回调函数，并传了实参err给回调函数
    } else {
      // 异步调用成功
      resolve(data) // 调用resolve函数，实际上执行的是promise对象的then方法的第一个回调函数，并传了实参data给回调函数
    }
  })
});

p1.then(
  (value) => {
    console.log(value);
  },
  (err) => {
    console.log(err);
  }
);
