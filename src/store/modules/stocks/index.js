import defaultStocks from "@/data/stocks"

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        },
        randomizeStocks(state) {
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
            })
        }
    },
    actions: {
        buyStock({commit}, order) {
            commit("buyStock", order)
        },
        initStocks({commit}) {
            commit("setStocks", defaultStocks)
        },
        randomizeStocks({commit}) {
            commit("randomizeStocks")
        }
    },
    getters: {
        stocks: state => state.stocks
    }
}