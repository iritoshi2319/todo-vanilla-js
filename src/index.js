const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";
  createIncompleteList(inputText);
};

const createIncompleteList = (text) => {
  // div生成
  const li = document.createElement("li");
  li.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.className = "task-title";
  p.innerText = text;

  // 完了button生成し文字列代入およびクリック時のハンドリング定義
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeItem = completeButton.parentNode;
    const completeItemsTitle = completeItem.querySelector(".task-title");
    const completeItemsTitleText = completeItemsTitle.textContent;

    createCompleteList(completeItemsTitleText);
    document.querySelector("#incomplete-list").removeChild(completeItem);
  });

  // 削除button生成し文字列代入およびクリック時のハンドリング定義
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親要素（li）を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.querySelector("#incomplete-list").removeChild(deleteTarget);
  });

  // li要素の子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了リストに追加
  document.querySelector("#incomplete-list").appendChild(li);
};

document
  .querySelector("#add-button")
  .addEventListener("click", () => onClickAdd());

const createCompleteList = (completeItemsTitleText) => {
  // div生成
  const li = document.createElement("li");
  li.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.className = "task-title";
  p.innerText = completeItemsTitleText;

  // 戻すbutton生成し文字列代入およびクリック時のハンドリング定義
  const revertButton = document.createElement("button");
  revertButton.innerText = "戻す";
  revertButton.addEventListener("click", () => {
    createIncompleteList(completeItemsTitleText);

    // 押された削除ボタンの親要素（li）を完了リストから削除
    const revertTarget = revertButton.parentNode;
    document.querySelector("#complete-list").removeChild(revertTarget);
  });

  // li要素の子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(revertButton);
  // li.appendChild(deleteButton);

  // 未完了リストに追加
  document.querySelector("#complete-list").appendChild(li);
};
