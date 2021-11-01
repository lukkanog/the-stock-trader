import { mapGetters, mapActions } from "vuex"

export default {
    computed: {
        ...mapGetters(["funds", "stockPortfolio", "stocks"])
    },
    methods: {
        ...mapActions(["randomizeStocks", "loadData", "successToaster"]),
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
            this.successToaster("Dia finalizado com sucesso! Alterações de preços aplicadas às ações.")
        },
    },
    
}