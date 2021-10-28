<template>
    <card 
        route="/portfolio"
        title="Minha Carteira"
        icon="wallet.png"
    >
        <template v-slot:additionalInfo>
            <v-card-text class="pb-0">
                <small class="font-weight-light">
                    Quantidade de ações compradas: 
                </small>
                {{ portfolioQuantity }}
            </v-card-text>
            <v-card-text class="pt-1 pb-0">
                <small class="font-weight-light">
                    Saldo: 
                </small>
                {{ funds | money}}
            </v-card-text>
        </template>
    </card>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from '@/components/Card'

export default {
    name: "Wallet",
    components: {
        Card 
    },
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