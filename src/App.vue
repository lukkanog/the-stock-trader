<template>
  <v-app>
    <NavHeader/>
    <v-content>
      <v-container>
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
  }
};
</script>
