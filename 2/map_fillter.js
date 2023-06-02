const nameArr = ["田中", "山田", "佐藤"];

// for分を使って配列の中身を表示
for (let index=0; index < nameArr.length; index++){
  console.log(nameArr[index]);
}
// 田中
// 山田
// 佐藤

// 複雑でわかりにくい！！！
// map
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);
// [ '田中', '山田', '佐藤' ]

const nameArr3 = nameArr.map((name) => console.log(name));
// 田中
// 山田
// 佐藤



const numArr = [1, 2, 3, 4, 5];

const newNumArr = numArr.filter((num) => {
  return num%2 ===1;
});
console.log(newNumArr);
// [ 1, 3, 5 ]

const nameArr4 = ["田中", "山田", "佐藤"];

// for文でindexを使って配列の中身を表示
for (let index=0; index < nameArr.length; index++){
  console.log(`${index+1}番目は${nameArr[index]}です。`);
}

// MAPの中でindexを使うことができる
nameArr4.map((name, index) => console.log(`${index+1}番目は${name}です。`));

nameArr5 = ["田中", "山田", "佐藤", "主田", "中島"];

const nameArr6 = nameArr5.map((name) => {
  if (name == "田中"){
    return name
  } else {
    return `${name}さん`
  }
})
console.log(nameArr6);
// [ '田中', '山田さん', '佐藤さん', '主田さん', '中島さん' ]