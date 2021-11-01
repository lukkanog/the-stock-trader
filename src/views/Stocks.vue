<template>
  <v-layout row wrap dark>
    <stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
    <empty-state :items="stocks"/>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Stock from "../components/Stock.vue"
import EmptyState from "../components/EmptyState.vue"

export default {
  name: "Stocks",
  components: {
    Stock,
    EmptyState
  },
  computed: {
    ...mapGetters(["stocks"])
  },
  methods: {
    ...mapActions(["initStocks", "loadData"]),
  },
  mounted() {
    this.loadData();
  }
}
</script>

<style>

</style>