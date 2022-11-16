<template>
  <v-card class="stock-summary my-2">
    <v-card-title class="justify-center">
      {{stock.name}}
    </v-card-title>
    <v-card-text class="justify-center">
      <p>Preço anterior: {{stock.oldPrice | money}}</p>
      <p>Preço atual: {{stock.price | money}}</p>
      <p :class="getClass">{{variation | moneyWithSign}}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'StockSummary',
  props: {
    stock: {
      type: Object
    }
  },
  computed: {
    variation: vm => vm.stock.price - vm.stock.oldPrice, 
    getClass() {
      return {
        'red--text': this.stock.price < this.stock.oldPrice,
        'green--text': this.stock.price > this.stock.oldPrice,
      }
    }
  },
  mounted() {
    console.log(this.stock)
  }
}
</script>

<style>

</style>