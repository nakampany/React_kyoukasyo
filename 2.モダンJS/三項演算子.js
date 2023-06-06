// 三項演算子
// 三項演算子はif文の簡略化
// 条件式 ? trueの時の値 : falseの時の値

const val1 = 1 > 0 ? 'trueです' : 'falseです';
console.log(val1); // trueです

const printFormattedNum = (num) => {
  const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
  console.log(formattedNum);
};

printFormattedNum(1000000000); // 1,000,000,000
printFormattedNum('1000000000'); // 数値を入力してください

const checkSumOver100 = (num1, num2) => {
  return num1 + num2 > 100 ? '100を超えています！！' : '許容範囲内です';
};

console.log(checkSumOver100(10, 20)); // 許容範囲内です
console.log(checkSumOver100(50, 150)); // 100を超えています！！