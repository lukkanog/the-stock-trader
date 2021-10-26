<template>
  <v-layout row wrap dark>
    <stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
    <empty-state 
      :items="stocks"
      message="Você ainda não tem nenhuma ação adquirida."
    />
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex"
import Stock from "../components/Stock.vue"
import EmptyState from "../components/EmptyState.vue"

export default {
    name: 'Portfolio',
    components: {
      Stock,
      EmptyState
    },
    computed: {
      ...mapGetters(["stockPortfolio"]),
      stocks() {
        return this.stockPortfolio.map(stock => {
          return {
            ...stock,
            portfolio: true
          }
        })
      }
    },

}
</script>

<style>

</style>