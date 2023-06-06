// スプレッド構文
// スプレッド構文は、配列やオブジェクトを展開することができる構文です。
const arr1 = [1, 2];
console.log(arr1); // [ 1, 2 ]
console.log(...arr1); // 1 2

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]); // 3
sumFunc(...arr1); // 3

const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1); // 1
console.log(num2); // 2
console.log(arr3); // [ 3, 4, 5 ]
console.log(arr2); // [ 1, 2, 3, 4, 5 ]

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr4); // [ 10, 20 ]
console.log(arr6); // [ 10, 20 ]
console.log(arr4 === arr6); // false nannde?

const arr7 = [...arr4, ...arr5];
console.log(arr7); // [ 10, 20, 30, 40 ]

const obj4 = {val1: 10, val2: 20};
const obj5 = {val3: 30, val4: 40};

const obj6 = {...obj4};
console.log(obj6); // { val: 10, val2: 20 }
console.log(obj4 === obj6); // false

const obj7 = {...obj4, ...obj5};
console.log(obj7); // { val1: 10, val2: 20, val3: 30, val4: 40 }

const obj8 = obj4;
console.log(obj8); // { val1: 10, val2: 20 }
console.log(obj4 === obj8); // true