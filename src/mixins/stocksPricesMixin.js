import { mapGetters, mapActions } from "vuex"

export default {
    computed: {
        ...mapGetters(["funds"])
    },
    methods: {
        ...mapActions(["randomizeStocks"]),
        endDay() {
            this.randomizeStocks();
        }
    },
    
}