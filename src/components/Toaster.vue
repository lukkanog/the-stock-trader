<template>
  <v-snackbar
    v-model="toaster.show"
    :color="toaster.type"
    timeout="4000"
    bottom
    right
  >
    {{ toaster.message }}
  </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "Toaster",
    computed: {
        ...mapGetters({
            toaster: "toaster"
        })
    },
}
</script>

<style>

</style>