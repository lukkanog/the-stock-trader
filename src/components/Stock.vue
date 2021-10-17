<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="grey darken-3 white--text" tile>
            <v-card-title class="headline">
               <strong>{{stock.name}} <small class="font-weight-light">{{stock.price | money}}</small></strong>
            </v-card-title>
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
                    :disabled="quantity <= 0"
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
                    :disabled="quantity <= 0"
                >
                    Vender
                </v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
import { mapActions } from "vuex"

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
    data: () => ({
        quantity: 0,
    }),
    methods: {
        ...mapActions({buyStockAction: "buyStock", sellStockAction: "sellStock"}),
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }

            this.buyStockAction(order)

            this.quantity = 0
        },
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }

            this.sellStockAction(order)
        }
    },
    mounted() {
        if (this.stock.portfolio) {
            this.quantity = this.stock.quantity
        }
    },
    filters: {
        money(val) {
            const decimalValue = val.toFixed(2)
            const valueWithComma = decimalValue.toString().replace(".",",")
            return `R$${valueWithComma}`
        }
    }
}
</script>

<style>

</style>