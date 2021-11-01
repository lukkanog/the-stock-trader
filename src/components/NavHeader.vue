<template>
    <v-app-bar app>
        <v-app-bar-title class="mx-5">
            <span class="font-weight-bold">Stock</span> 
            <span class="font-weight-light">Trader</span> 
        </v-app-bar-title>

        <v-toolbar v-if="!this.$vuetify.breakpoint.xsOnly" flat>
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

        <template v-else >
            <v-spacer />
            <v-menu 
                
                dark 
                transition="slide-y-transition" 
                :offset-y="true"
            >
                <v-spacer></v-spacer>
                <template v-slot:activator="{ on, attrs }">
                    <v-app-bar-nav-icon 
                        v-on="on" 
                        v-bind="attrs" 
                    />
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title>
                            <v-btn depressed to="/"> Início </v-btn>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <v-btn depressed to="/portfolio"> Portfólio </v-btn>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            <v-btn depressed to="/stocks"> Ações </v-btn>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>
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