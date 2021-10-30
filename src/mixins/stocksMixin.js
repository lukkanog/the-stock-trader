import { mapGetters, mapActions } from "vuex"

export default {
    computed: {
        ...mapGetters(["funds", "stockPortfolio", "stocks"])
    },
    methods: {
        ...mapActions(["randomizeStocks", "loadData"]),
        endDay() {
            this.randomizeStocks();
        },
        saveData() {
            this.$http.put("data.json", {
                funds: this.funds,
                stockPortfolio: this.stockPortfolio,
                stocks: this.stocks
            })
        },
        fetchData() {
            this.loadData();
        }
    },
    
}