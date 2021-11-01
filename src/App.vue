<template>
  <v-app>
    <nav-header/>
    <v-main>
      <v-container class="pt-10">
        <transition name="slide" mode="out-in">
          <router-view/>
        </transition>
        <toaster />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex"
import NavHeader from "./components/NavHeader.vue"
import Toaster from "./components/Toaster.vue"

export default {
  name: 'App',
  components: {
    NavHeader,
    Toaster
  },
  methods: {
    ...mapActions(["initStocks", "loadData"]),
  },
  mounted() {
    this.loadData();
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
