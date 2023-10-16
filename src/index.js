const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  // div生成
  const li = document.createElement("li");
  li.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // 完了button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 削除button生成
  const closeButton = document.createElement("button");
  closeButton.innerText = "削除";

  // li要素の子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(closeButton);

  // 未完了リストに追加
  document.querySelector("#incomplete-list").appendChild(li);
};

document
  .querySelector("#add-button")
  .addEventListener("click", () => onClickAdd());
