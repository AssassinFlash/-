let a = 100
let str = '字符串'
let fn = function() {
  console.log('我是一个函数');
}

// 写模块，要遵循commonJS规范
// 这个规范就2点：导入/导出
// module.exports = a
module.exports = {
  a,
  str,
  fn
}