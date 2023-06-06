// 関数
function func1(str){
  return str;
}
console.log(func1("func1です"));

const func2 = function(str){
  return str;
}
console.log(func2("func2です"));

// アロー関数
const func3 = (str) => {
  return str;
}
console.log(func3("func3です"));
// 引数が一つの場合は()を省略できる
const func4 = str => {
  return str;
}
console.log(func4("func4です"));
const func5 = (str, str1) => {
  return str, str1;
}
console.log(func5("func5です", "func5-1です"));

const func6 = (num1, num2) => num1 + num2;
console.log(func6(10, 20));

const func7 = (val1, val2) => (
  {
    name: val1,
    age: val2,
  }
);
console.log(func7("nakajima", 24));