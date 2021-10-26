<template>
    <router-link to="/portfolio" style="text-decoration: none">
    <v-card elevation="5" class="rounded">
        <v-card-text class="pb-0">
            <small class="font-weight-light">
                Quantidade de ações compradas: 
            </small>
            {{ portfolioQuantity }}
        </v-card-text>
        <v-card-text class="pt-1">
            <small class="font-weight-light">
                Saldo: 
            </small>
            {{ funds | money}}
        </v-card-text>
        
        <v-card-title class="text-h6 pt-0">
            <v-img 
                src="@/assets/wallet.png"
                lazy-src="@/assets/wallet.png"
                max-height="24"
                max-width="24"
                class="mr-2"
            />
            Meu Portfólio
        </v-card-title>
    </v-card>
    </router-link>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "Wallet",
    computed: {
        ...mapGetters({
            funds: 'funds',
            portfolioQuantity: 'portfolioQuantity'
        })
    }

}
</script>

<style>

</style>