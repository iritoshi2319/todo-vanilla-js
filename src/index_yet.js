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

  // 完了button生成し文字列代入およびクリック時のハンドリング定義
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親要素（li）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 未完了リストに追加する要素
    const addTrget = completeButton.parentNode;

    // TODOタイトルテキストを取得
    const text = addTrget.firstElementChild.innerText;

    // li.list-rowを初期化
    addTrget.textContent = null;
  });

  // 削除button生成し文字列代入およびクリック時のハンドリング定義
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親要素（li）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // li要素の子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了リストに追加
  document.querySelector("#incomplete-list").appendChild(li);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.querySelector("#incomplete-list").removeChild(target);
};

document
  .querySelector("#add-button")
  .addEventListener("click", () => onClickAdd());
