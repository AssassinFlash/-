type Method = "GET" | "POST";

function request(url: string, method: Method) {}

// const options = {
//   url: "123",
//   method: "GET",
// };
// 会报错，提示options.methods是string类型，不是Method类型
// request(options.url, options.method);

// 使用类型断言
// request(options.url, options.method as Method)

// 使用 as const 把宽泛的类型转换成具体的字面量类型
const options = {
  url: "123",
  method: "GET",
} as const;
request(options.url, options.method);
