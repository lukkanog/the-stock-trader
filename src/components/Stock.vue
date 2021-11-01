<template>
    <v-flex class="px-3 pb-3" xs12 md6 lg4>
        <v-card class="grey darken-3 white--text" tile>
            <v-card-title class="headline">
               <strong>{{stock.name}} <small class="font-weight-light">{{stock.price | money}}</small></strong>
            </v-card-title>
            <v-card-subtitle v-if="stock.portfolio" class="font-weight-light">
                Quantidade de ações adquiridas: <strong class="white--text">{{ this.stock.quantity }}</strong>
            </v-card-subtitle>
        </v-card>
        <v-card tile>
            <v-container v-if="!stock.portfolio" fill-height >
                <v-text-field 
                    type="number" 
                    label="Quantidade"
                    v-model.number="quantity"
                    color="purple lighten-2"
                />
                <v-btn 
                    class="purple darken-3 white--text ml-5"
                    @click="buyStock"
                    :disabled="!canUserBuyStock"
                >
                    Comprar
                </v-btn>
                
            </v-container>
            <v-container v-else fill-height >
                <v-text-field 
                    type="number" 
                    label="Quantidade"
                    v-model.number="quantity"
                    color="teal lighten-2"
                />
                <v-btn 
                    class="teal darken-2 white--text ml-5"
                    @click="sellStock"
                    :disabled="!canUserSellStock"
                >
                    Vender
                </v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import stocksMixin from "@/mixins/stocksMixin"

export default {
    props: {
        stock: {
            type: Object
        },
        portfolio: {
            type: Boolean,
            default: false
        }
    },
    mixins: [stocksMixin],
    data: () => ({
        quantity: 0,
    }),
    computed: {
        ...mapGetters(["funds"]),

        canUserBuyStock() {
            if (this.quantity <= 0 || !Number.isInteger(this.quantity) || this.quantity * this.stock.price > this.funds) {
                return false
            }

            return true
        },

        canUserSellStock() {
            if (this.quantity <= 0) {
                return false
            }

            return true
        }
    },
    methods: {
        ...mapActions({
            buyStockAction: "buyStock", 
            sellStockAction: "sellStock",
            saveDataAction: "saveData",
            successToaster: "successToaster"
        }),
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }

            this.buyStockAction(order)

            this.saveData()

            this.successToaster(`Você comprou ${this.quantity} ações ${this.stock.name}`)

            this.quantity = 0
        },
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }

            this.sellStockAction(order)

            this.saveData()

            this.successToaster(`Você vendeu ${this.quantity} ações ${this.stock.name}`)
            
            this.quantity = this.stock.quantity -= this.quantity
        }
    },
    mounted() {
        if (this.stock.portfolio) {
            this.quantity = this.stock.quantity
        }
    },
    updated() {
        if (this.stock.portfolio && this.quantity > this.stock.quantity) {
            this.quantity = this.stock.quantity
        }
    },
}
</script>

<style>

</style>