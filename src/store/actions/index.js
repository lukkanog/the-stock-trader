import Vue from "vue"
import { mapActions } from "vuex"

export default {
  ...mapActions(["errorToaster", "initStocks"]),
  async loadData({ commit }) {
    await Vue.prototype.$http.get("data.json")
      .then(response => {
        const { data } = response

        if (!data) {
          this.initStocks()
          return
        }

        commit("setStocks", data.stocks);
        commit("setPortfolio", {
          funds: data.funds,
          stockPortfolio: data.stockPortfolio
        });
      })
      .catch(() => this.errorToaster("Ocorreu um erro ao carregar os dados."))
  },
}