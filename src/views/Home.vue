<template>
  <v-layout column>
    <h2 class="align-self-center mb-15 text-h3">
      <span class="font-weight-bold">Stock</span> 
      <span class="font-weight-light">Trader</span> 
    </h2>
    <v-row justify="space-around">
      <v-col xl="3" lg="3" sm="6" xs="12">
        <wallet />
      </v-col>

    </v-row>
  </v-layout>
</template>

<script>
  import Wallet from '../components/Wallet.vue'

  export default {
    name: 'Home',
    components: {
      Wallet
    },
  }
</script>
