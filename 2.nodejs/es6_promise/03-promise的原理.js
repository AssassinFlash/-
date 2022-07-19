/**
 * promise的原理
 * 简单说是一个容器，里面保存着（通常是一个异步操作）的结果
 * 
 * promise对象代表一个异步操作，有三种状态：pending、fulfilled、rejected
 * 
 * 一旦状态改变，就不会再变，状态的改变只有两种可能：从pending变成fulfilled和从pending变成rejected
 * 
 * resolve函数的作用是：将promise对象的状态从“未完成”变为"成功"
 * 
 * reject函数的作用是：将promise对象的状态从"未完成"变成"失败"
 * 
 * promise对象调用then方法，执行哪个回调函数，取决于这个promise对象的状态
 * 如果状态为成功，就调用第一个回调函数
 * 如果状态为失败，就调用第二个回调函数
 */
