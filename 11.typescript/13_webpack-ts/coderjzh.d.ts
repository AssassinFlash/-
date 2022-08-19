// 自定义类型声明文件会被自动扫描
// 无论是使用什么东西，首先都需要有个类型声明
// 自定义模块，用法和命名空间类似
declare module 'lodash' {
  // 导出 join 方法
  export function join(arr: any[]): void;
}
