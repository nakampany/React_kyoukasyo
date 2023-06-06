let num : number = 1;
num = num * 10;
// num = "100" // エラー

let bool : boolean = true;
// bool = 0; // エラー

let str : string = "A";
// str = 0; // エラー

// 配列
const arr1 : number[] = [1, 2, 3];
const arr2 : Array<number> = [1, 2, 3];
const arr3 : (string | number)[] = [1, "2", 3];
const arr4 : Array<string | number> = [1, "2", 3];

// Tuple型
const tuple : [number, string] = [0, "A"];
// tuple = ["B", 1]; // エラー
// tuple = [1, "B", 2]; // エラー
// tuple = [1, "B"]; // エラー

// any型
let any1 : any = false;
any1 = 0;
any1 = "A";

// void型
const funcA = (): void => {
  const test = "TEST";
}
// funcA();

// null型
let null1 : null = null;
// null1 = "A"; // エラー

// undefined型
let undefined1 : undefined = undefined;
// undefined1 = "A"; // エラー

// object型
let obj1 : object = {};
let obj2 : { id: number, name: string } = { id: 0, name: "AAA" };
// obj2 = { id: 1, name: "BBB", age: 20 }; // エラー

// エイリアス
type ObjectType = { id: number, name: string };
let obj3 : ObjectType = { id: 0, name: "AAA" };
// obj3 = { id: 1, name: "BBB", age: 20 }; // エラー

// 関数に型をつける
const funcB = (num1: number, num2: number): number => {
  return num1 + num2;
}
funcB(1, 2);

// 関数の型
type funcBType = (num1: number, num2: number) => number;
const funcC : funcBType = (num1, num2) => {
  return num1 + num2;
}

// オプショナル
type funcCType = (num1: number, num2?: number) => number;
const funcD : funcCType = (num1, num2) => {
  return num1 + (num2 || 0);
}
funcD(1);

// デフォルト
type funcDType = (num1: number, num2: number) => number;
const funcE : funcDType = (num1, num2 = 2) => {
  return num1 + num2;
}
funcE(1);

// ジェネリクス
interface funcFType<T> {
  (num1: T, num2: T): T;
}
const funcF : funcFType<number> = (num1, num2) => {
  return num1 + num2;
}
funcF(1, 2);

// クラスに型をつける
class TestClassA {
  constructor(public id: number, public name: string) {}
}
const testClassA = new TestClassA(1, "AAA");

// クラスの型
class TestClassB {
  constructor(public id: number, public name: string) {}
}
const testClassB : TestClassB = new TestClassB(1, "AAA");

// クラスの継承
class TestClassC extends TestClassB {
  constructor(public age: number) {
    super(1, "AAA");
  }
}
const testClassC : TestClassC = new TestClassC(20);

// クラスの継承(抽象クラス)
abstract class TestClassD {
  constructor(public id: number, public name: string) {}
  abstract getAge(): number;
}

class TestClassE extends TestClassD {
  constructor(public age: number) {
    super(1, "AAA");
  }
  getAge() {
    return this.age;
  }
}
const testClassE : TestClassE = new TestClassE(20);

// クラスの継承(インターフェース)
interface TestClassF {
  id: number;
  name: string;
  getAge(): number;
}

// クラスの継承(インターフェース)
class TestClassG implements TestClassF {
  constructor(public id: number, public name: string, public age: number) {}
  getAge() {
    return this.age;
  }
}
const testClassG : TestClassG = new TestClassG(1, "AAA", 20);

// クラスの継承(ジェネリクス)
class TestClassH<T> {
  constructor(public id: T, public name: string) {}
}
const testClassH : TestClassH<number> = new TestClassH(1, "AAA");

// クラスの継承(ジェネリクス)
class TestClassI<T extends number | string> {
  constructor(public id: T, public name: string) {}
}
const testClassI : TestClassI<number> = new TestClassI(1, "AAA");

// クラスの継承(ジェネリクス)
class TestClassJ<T extends number | string = string> {
  constructor(public id: T, public name: string) {}
}
const testClassJ : TestClassJ<number> = new TestClassJ(1, "AAA");