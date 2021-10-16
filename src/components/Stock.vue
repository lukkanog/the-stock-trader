<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card>
            <v-card-title class="headline">
               <strong>{{stock.name}} <small class="font-weight-light">{{stock.price | money}}</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field type="number" label="Quantidade"/>
                <v-btn class="green darken-3 white--text ml-5">Comprar</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: [
        'stock'
    ],
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