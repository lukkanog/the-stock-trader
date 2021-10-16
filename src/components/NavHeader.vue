<template>
    <v-app-bar app dark>
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
                <v-btn depressed class="body-2"> Finalizar dia </v-btn>
                <v-menu open-on-hover dark transition="scale-transition" :offset-y="true">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn depressed class="body-2" v-on="on" v-bind="attrs" > Salvar & carregar </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-tile-title>Salvar dados</v-list-tile-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-tile-title>Carregar dados</v-list-tile-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-btn depressed class="body-2"> Saldo: R$10.000,00 </v-btn>
            </v-toolbar-items>
            
        </v-toolbar>
    </v-app-bar>

</template>

<script>
export default {
    name: "NavHeader"
}
</script>

<style>

</style>