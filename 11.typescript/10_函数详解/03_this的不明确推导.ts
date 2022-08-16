type ThisType = { name: string };

function eating(this: ThisType, message: string) {
  console.log(this.name + " eating " + message);
}

const info = {
  name: "jzh",
  eating,
};
// info对象调用的 eating 方法，所以this指向info对象
info.eating("哈哈哈");

// 显式绑定
eating.call({ name: "kobe" }, "basketball"); // 绑定了{name: kobe}，this指向这个
eating.apply({ name: "james" }, ['daughter']); // 绑定了 {naem: james}, this指向这个，apply第二个参数必须是数组

export {};
