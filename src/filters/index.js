import Vue from "vue"

Vue.filter("money", function(val) {
    const decimalValue = val.toFixed(2)
    const valueWithComma = decimalValue.toString().replace(".",",")
    return `R$${valueWithComma}`
})