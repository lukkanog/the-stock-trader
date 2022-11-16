<template>
  <div class="finish-day">
    <h1 class="mb-5">Resumo do dia</h1>
    <template v-if=!finished>
      <p>O dia ainda não foi finalizado!</p>
      <v-btn @click="handleEndOfTheDay">Atualizar valores das ações</v-btn>
    </template>
    <template v-else>
      <v-btn class="mb-5" @click="handleEndOfTheDay">Atualizar valores das ações</v-btn>
      <div>
        <h3 class="mb-5">Minhas ações</h3>
        <empty-state 
          :items="stockPortfolio"
          message="Você ainda não tem nenhuma ação adquirida."
        />
        <v-layout row wrap dark>
          <stock-summary v-for="stock in stockPortfolio" :key="stock.id" :stock="stock" class="ma-2"/>
        </v-layout>
      </div>
      <v-divider class="my-5"/>
      <div>
        <h3 class="mb-5">Outras ações</h3>
        <v-layout row wrap dark>
          <stock-summary v-for="stock in otherStocks" :key="stock.id" :stock="stock" class="ma-2"/>
        </v-layout>     
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import EmptyState from "@/components/EmptyState.vue"
import StockSummary from "@/components/StockSummary.vue"

export default {
  name: 'FinishDay',
  components: {
    EmptyState,
    StockSummary
  },  
  data: () => ({
    finished: false,
  }),
  computed: {
    ...mapGetters(["stockPortfolio", "stocks"]),
    otherStocks: vm => vm.stocks
      .filter(x => !vm.stockPortfolio.some(y => y.id === x.id))

  },
  methods: {
    ...mapActions(["randomizeStocks", "saveData", "successToaster"]),
    handleEndOfTheDay() {
      this.randomizeStocks()
      this.successToaster("O dia foi finalizado!")
      this.finished = true
    }
  },
  watch: {
    otherStocks() {
      console.log(this.stockPortfolio)
      console.log(this.otherStocks)
    }
  }
}
</script>

<style>

</style>