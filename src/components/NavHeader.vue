<template>
    <v-app-bar app>
        <v-toolbar flat>
            <v-toolbar-title class="mr-10">
                <span class="font-weight-bold">Stock</span> 
                <span class="font-weight-light">Trader</span> 
            </v-toolbar-title>

            <v-toolbar-items class="menu-items">
                <v-btn depressed to="/"> Início </v-btn>
                <v-btn depressed to="/portfolio"> Portfólio </v-btn>
                <v-btn depressed to="/stocks"> Ações </v-btn>
            </v-toolbar-items>

            <v-spacer/>

            <v-toolbar-items class="menu-items" color="transparent">
                <v-btn 
                    depressed 
                    class="body-2"
                    @click="endDay"
                > 
                    Finalizar dia 
                </v-btn>
                <v-btn depressed class="body-2"> Saldo: {{ funds | money }} </v-btn>
            </v-toolbar-items>
            
        </v-toolbar>
    </v-app-bar>

</template>

<script>
import stocksMixin from "@/mixins/stocksMixin"

export default {
    name: "NavHeader",
    mixins: [stocksMixin],
}
</script>

<style>

</style>