export default {
    state: {
        funds: 10000,
        stocks: []
    },
    mutations: {
        buyStock(state, { stockId, quantity, stockPrice }) {
            const stockInPortfolio = state.stocks.find(stock => stock.id === stockId)

            state.funds -= stockPrice * quantity

            if (stockInPortfolio) {
                stockInPortfolio.quantity += quantity
                return
            }

            state.stocks.push({
                id: stockId,
                quantity
            })
        },
        sellStock(state, { stockId, quantity, stockPrice}) {
            const stockInPortfolio = state.stocks.find(stock => stock.id === stockId)

            state.funds += stockPrice * quantity

            if (stockInPortfolio.quantity > quantity) {
                stockInPortfolio.quantity -= quantity
                return
            }

            const stockToBeRemoved = state.stocks.indexOf(stockInPortfolio)
            state.stocks.splice(stockToBeRemoved, 1)
        },
        setPortfolio(state, portfolio) {
            state.funds = portfolio.funds
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
        }
    },
    actions: {
        sellStock({commit}, order) {
            commit("sellStock", order)
        },
    },
    getters: {
        stockPortfolio(state, getters) {
            return state.stocks.map(stock => {
                const record = getters.stocks.find(item => item.id === stock.id)

                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price,
                    oldPrice: record.oldPrice
                }
            })
        },
        funds(state) {
            return state.funds
        },
        portfolioQuantity(state) {
            return state.stocks.reduce((total, stock) => total + stock.quantity, 0)
        }
    }
}