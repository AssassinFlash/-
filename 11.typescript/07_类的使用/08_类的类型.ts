// 把一个类作为类型去使用
type Person = {
  name: string;
  age: number;
  job: () => void;
};

const p: Person = {
  name: "jzh",
  age: 25,
  job() {
    console.log("前端工程师");
  },
};

function printName(p: Person) {
  console.log(p.name);
}

printName({ name: "coder", age: 18, job() {} });
