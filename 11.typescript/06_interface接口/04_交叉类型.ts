// 交叉类型
interface ISwim {
  swimming: () => void;
}

interface IFly {
  flying: () => void;
}
// 可以理解成 或 且 的关系
type MyType1 = ISwim | IFly;
type MyType2 = ISwim & IFly;

const obj1: MyType1 = {
  flying() {},
};

const obj2: MyType1 = {
  swimming() {},
};

const obj3: MyType2 = {
  swimming() {},
  flying() {},
};
