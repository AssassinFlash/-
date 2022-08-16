let message: string | null = null;

// ?? 空值合并操作符，当操作符左侧是 null 或者是 undefined，就返回右侧值，否则返回本身
// 有点类似于三元运算符 message ? message : '你好，jzh'，就是更加简洁了一点
const content = message ?? "你好，jzh";
console.log(content);
