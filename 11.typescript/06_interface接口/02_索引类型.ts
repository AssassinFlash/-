// const frontLanguage = {
//   0: "html",
//   1: "css",
//   2: "javascript",
//   3: "typescript",
// }; // 所有的key是number类型，所有的value是字符串类型

// 能不能定义一个更加通用的类型呢？
// 通过 interface 来定义
interface IIndexLanguage {
  [key: number]: string;
}
const frontLanguage: IIndexLanguage = {
  0: "html",
  1: "css",
  2: "javascript",
  3: "typescript",
  // "abc": 'cab' // 会报错
};

// 另一个例子：主要是说明[]里面可以写任意类型
interface ILanguageYear {
  [param: string]: number;
}
const languageYear: ILanguageYear = {
  C: 1975,
  java: 1995,
  javascript: 1996,
  typescript: 2014,
};
