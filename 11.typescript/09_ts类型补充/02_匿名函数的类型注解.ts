const names = ['abc', 'jzh', 'kobe', 'coderwhy']
// 匿名函数可以不写类型注解，item会由类型推断推导出来
names.forEach(item => {
  console.log(item);
})