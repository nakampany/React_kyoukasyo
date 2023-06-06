// DOMの作成
// createElement
const divEl1 = document.createElement("div");
console.log(divEl1);
// <div></div>

// DOMの追加
// appendChild
const divEl2 = document.createElement("div");
const pEl2 = document.createElement("p");
divEl2.appendChild(pEl2);
console.log(divEl2);
//<div><p></p></div>

// DOMの削除
// 特定の要素のテキストを削除する 
// removeChild
// const h1El = document.getElementById("title");
// const bodyEl = document.querySelector("body");
// bodyEl.removeChild(h1El);

// textContent = null
// 子要素全て削除する
// const bodyEl3 = document.querySelector("body");
// bodyEl3.textContent = null;
