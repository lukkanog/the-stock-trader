<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="grey darken-3 white--text" tile>
            <v-card-title class="headline">
               <strong>{{stock.name}} <small class="font-weight-light">{{stock.price | money}}</small></strong>
            </v-card-title>
        </v-card>
        <v-card tile>
            <v-container fill-height>
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
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: [
        'stock'
    ],
    data: () => ({
        quantity: 0,
    }),
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }

            console.log(order)
            this.quantity = 0
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