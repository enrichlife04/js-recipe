/* eslint-disable no-unused-vars */
const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
let count = 0

plusButton.onclick = function() {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}
