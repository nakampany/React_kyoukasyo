
// ||は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee); // 金額未設定です

const num2 = 100;
const fee2 = num2 || "金額未設定です";
console.log(fee2); // 100

// &&は左側がtrueなら右側を返す
const num3 = null;
const fee3 = num3 && "何か設定されました";
console.log(fee3); // null

const num4 = 100;
const fee4 = num4 && "何か設定されました";
console.log(fee4); // 何か設定されました
