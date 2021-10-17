<template>
  <v-layout row wrap dark>
    <stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
  </v-layout>
</template>

<script>
import Stock from "../components/Stock.vue"

export default {
  name: "Stocks",
  components: {
    Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  }
}
</script>

<style>

</style>