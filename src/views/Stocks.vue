<template>
  <v-layout row wrap dark>
    <stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex"
import Stock from "../components/Stock.vue"

export default {
  name: "Stocks",
  components: {
    Stock
  },
  computed: {
    ...mapGetters(["stocks"])
  }
}
</script>

<style>

</style>