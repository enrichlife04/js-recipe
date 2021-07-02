// オブジェクトを作ります

// Key: Value -> Property(プロパティ)
const koichi = {
  name: "こーいち",
  age: 22,
  sayHello: function() {
    alert("初めましてこーいちです！")
  },
  hobby: ["プログラミング", "ごはん", "彼女"],
  family: {
    dad: "かつや",
    mom: "ちえ",
  },
  isMentor: true,
}

console.log(koichi.hobby)
console.log(koichi.isMentor)

// const junsei = {
//     name: "じゅんせい",
//     age: 24,
//     sayHello: function() {
//       alert("こんにちはじゅんせいです")
//     },
//     hobby: ["スノーボード", "楽器", "バイク"],
//     familly: {
//       papa: "たつみ",
//       mama: "ゆかり",
//     },
//     isMentor: true,
//   }

//   console.log(junsei.name)
//   console.log(junsei.age)
