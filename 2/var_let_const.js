// varは再宣言可能　プロジェクトの規模が大きくなると、意図しない変数の再宣言が起きてしまう可能性がある
var val1 = "var変数";
console.log(val1);

// es2015 以降はlet,constを使う
// letは再宣言不可能
let val2 = "let変数";
console.log(val2);
// constは再宣言、再代入不可能 (定数)
const val3 = "const変数";
console.log(val3);

const odj = {
  name: "主田",
  age: 24,
}
console.log(odj);
odj.name = "nakajima";
console.log(odj);

odj.address = "Tokyo";
console.log(odj);

const aar =[
  "dog",
  "cat",
];
console.log(aar);
aar[0] = "bird";
console.log(aar);
aar.push("monkey");
console.log(aar);

// 結論：　ReactではConstを使うことが多い
// letはStateで管理せず処理の中で値を上書きしていくような変数のみ

const name = "主田";
const age = 24;
// ``バッククォートを使うと変数を埋め込める
const message = `私の名前は${name}です。年齢は${age}です。`;
console.log(message);