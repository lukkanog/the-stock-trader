import { mapGetters, mapActions } from "vuex"

export default {
    computed: {
        ...mapGetters(["funds", "stockPortfolio", "stocks"])
    },
    methods: {
        ...mapActions(["randomizeStocks", "loadData"]),
        saveData() {
            this.$http.put("data.json", {
                funds: this.funds,
                stockPortfolio: this.stockPortfolio,
                stocks: this.stocks
            })
        },
        fetchData() {
            this.loadData();
        },
        endDay() {
            this.randomizeStocks()
            this.saveData()
        },
    },
    
}