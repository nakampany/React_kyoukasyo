// メモを作成するためのコンポーネントを作成
const createMemo = text => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const p = document.createElement("p");

  // テキストエリアの値を取得
  p.textContent = text;
  // 削除ボタンを作成
  // 削除ボタンがクリックされたら、そのメモを削除（li）
  const btn = document.createElement("button");
  btn.textContent = "削除";
  btn.addEventListener("click", () => li.remove());

  div.appendChild(p);
  div.appendChild(btn);
  li.appendChild(div);
  return li;
}

// ボタンをクリック
const onClickAdd = () => {
  const textEl = document.getElementById("memo");
  const text = textEl.value;
  textEl.value = "";

  const memo = createMemo(text);
  const memoList = document.getElementById("memo-list");
  memoList.appendChild(memo);
}


document.getElementById("btn").addEventListener("click", onClickAdd);
