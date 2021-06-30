const number = 24

// Step 1

// if (number % 3 === 0) {
//   console.log(number + "ああああああああ")
// } else {
//   console.log(number)
// }

// Step 2
// for (let n = 1; n <= number; n++) {
//   if (n % 3 === 0) {
//     console.log(n + "!!!!!!!!!!!!!!")
//   } else {
//     console.log(n)
//   }
// }

// Step 3

const genkiFunction = function(number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}
