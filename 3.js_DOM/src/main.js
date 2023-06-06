const onClickAdd = () => {
  
  const textEl = document.getElementById("memo");
  const text = textEl.value;
  textEl.value = "";
  const li = document.createElement("li");
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = text;


  
  const btn2 = document.createElement("button");
  btn2.textContent = "削除";
  btn2.addEventListener("click", () => {
    const deleteTarget = btn2.closest("li");
    document.getElementById("memo-list").removeChild(deleteTarget);
  });
  
  div.appendChild(p);
  div.appendChild(btn2);
  li.appendChild(div);
  document.getElementById("memo-list").appendChild(li);
};

const btn1 = document.getElementById("btn");
btn1.addEventListener("click", () => onClickAdd());


