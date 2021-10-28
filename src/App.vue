<template>
  <v-app>
    <nav-header/>
    <v-main>
      <v-container class="pt-10">
        <transition name="slide" mode="out-in">
          <router-view/>
        </transition>
      </v-container>
    </v-main>
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

<style>
  @keyframes slide-in {
    from {
      transform: translateY(-50vh);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-50vh);
      opacity: 1;
    }
  }

  .slide-enter-active {
    animation: slide-in 0.3s ease;
  }

  .slide-leave-active {
    animation: slide-out 0.3s ease;
  }
</style>
