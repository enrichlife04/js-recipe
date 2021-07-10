const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function() {
  console.log(memoInput.value)
  const text = memoInput.value

  const div = document.createElement("div")
  div.textContent = text

  memoContainer.append(div)

  memoInput.value = ""
}
