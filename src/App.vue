<template>
  <v-app>
    <NavHeader/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavHeader from "./components/NavHeader.vue"

export default {
  name: 'App',
  components: {
    NavHeader
  }
};
</script>
