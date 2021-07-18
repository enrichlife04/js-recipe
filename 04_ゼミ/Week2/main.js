const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

let memos = []

addButton.onclick = function() {
  console.log(memoInput.value)
  // 1.入力内容を取得
  const text = memoInput.value

  // 2. 配列memosに保存
  memos.push(text)
  console.log(memos)

  // 3. 配列memosの内容を全部表示
  memoContainer.innerHTML = ""

  for (let i = 0; i < memos.length; i++) {
    //3-1 divを作って
    const div = document.createElement("div")
    div.textContent = memos[i]

    memoContainer.append(div)
  }

  memoInput.value = ""
}
