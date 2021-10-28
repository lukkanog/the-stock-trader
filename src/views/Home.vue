<template>
  <v-layout column>
    <h2 class="align-self-center mb-15 text-h3">
      <span class="font-weight-bold">Stock</span> 
      <span class="font-weight-light">Trader</span> 
    </h2>
    <v-row justify="space-around" align="stretch">
      <v-col xl="3" lg="3" sm="2" xs="12">
        <wallet />
      </v-col>
      <v-col xl="3" lg="3" sm="2" xs="12">
        <card 
          route="/stocks"
          title="Ações"
          icon="stocks.png"
        />
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import Wallet from '../components/Wallet.vue'
import Card from '@/components/Card'

  export default {
    name: 'Home',
    components: {
      Wallet,
      Card
    },
  }
</script>
