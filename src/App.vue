<template>
  <v-app>
    <nav-header/>
    <v-content>
      <v-container class="pt-10">
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavHeader from "./components/NavHeader.vue"

export default {
  name: 'App',
  components: {
    NavHeader
  },
  mounted() {
    this.$store.dispatch("initStocks")
  }
};
</script>
