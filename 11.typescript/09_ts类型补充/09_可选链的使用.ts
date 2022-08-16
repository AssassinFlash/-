type Person = {
  name: string;
  friend?: {
    name: string;
    age?: number;
  };
};

const info: Person = {
  name: "jzh",
  friend: {
    name: "kobe",
  },
};

console.log(info.name);
// 可选链：? 如果有值的时候就取，没有值就取undefined
// ? 作用于前边的属性
console.log(info.friend?.name); // 如果有friend
console.log(info.friend?.age); // 如果有friend，如果有age就返回age，如果没有age就取undefined