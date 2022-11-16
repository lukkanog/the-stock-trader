import Vue from "vue"

Vue.filter("money", function (val) {
  const decimalValue = val.toFixed(2)
  const valueWithComma = decimalValue.toString().replace(".", ",")
  return `R$${valueWithComma}`
})

Vue.filter("moneyWithSign", function (val) {
  const decimalValue = val.toFixed(2)
  const valueWithComma = decimalValue.toString().replace(".", ",")
  return `${val >= 0 ? "+" : "-"}R$${valueWithComma}`
})