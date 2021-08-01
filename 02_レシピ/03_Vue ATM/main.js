const now = new Date()

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: "#app",
  data: {
    valueOfInput: 0,
    balance: 0,
    logs: [],
  },
  methods: {
    nyukin: function() {
      this.balance += Number(this.valueOfInput)

      // 取引記録の追加
      this.logs.push({
        date: now,
        type: "入金",
        money: Number(this.balance),
      })
    },
    syukkin: function() {
      if (this.balance - this.valueOfInput > 0) {
        this.balance -= Number(this.valueOfInput)

        // 取引記録の追加
        this.logs.push({
          date: now,
          type: "出金",
          money: Number(this.balance),
        })
      }
    },
  },
})
