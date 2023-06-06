const sayHello = (name) => {
    console.log(`こんにちは！${name}さん！`);
}
sayHello("nakajima"); // こんにちは！nakajimaさん！

const sayHello1 = (name) => {
  console.log(`こんにちは！${name}さん！`);
}
sayHello1(); //こんにちは！undefinedさん！

const sayHello2 = (name = "ゲスト") => {
  console.log(`こんにちは！${name}さん！`);
}
sayHello2(); //こんにちは！ゲストさん！
sayHello2("nakajima"); //こんにちは！nakajimaさん！
