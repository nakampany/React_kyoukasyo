const myProfile = {
  name: "nakajima",
  age: 28,
};

// 分割代入なし
const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message1);

// 分割代入あり
const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}です。`;
console.log(message2);

const {name: myName, age: myAge} = myProfile;
const message3 = `名前は${myName}です。年齢は${myAge}です。`;
console.log(message3);

// 配列の分割代入
const myProfile1 = ["nakajima", 28];

// 配列のindexを指定して分割代入
const message4 = `名前は${myProfile1[0]}です。年齢は${myProfile1[1]}です。`;
console.log(message4);

// 配列の分割代入
// 配列の格納順に分割代入される
const [name1, age1] = myProfile1;
const message5 = `名前は${name1}です。年齢は${age1}です。`;
console.log(message5);

