<template>
  <v-layout row wrap dark>
    <stock v-for="stock in stocks" :key="stock.id"/>
  </v-layout>
</template>

<script>
import Stock from "../components/Stock.vue"

export default {
  name: "Stocks",
  components: {
    Stock
  },
  data: () => ({
    stocks: [
      {id: 1, name: "Google", price: 130},
      {id: 2, name: "Apple", price: 150},
      {id: 3, name: "Petrobras", price: 80},
      {id: 4, name: "Banco Inter", price: 56}
    ]
  })
}
</script>

<style>

</style>