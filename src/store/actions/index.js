import Vue from "vue"

export default {
    loadData({ commit }) {
        Vue.prototype.$http.get("data.json")
        .then(response => {
            const { data } = response

            commit("setStocks", data.stocks);
            commit("setPortfolio", {
                funds: data.funds,
                stockPortfolio: data.stockPortfolio
            });
        });
    }
}