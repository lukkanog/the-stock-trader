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
                <v-btn depressed class="body-2" > Finalizar dia </v-btn>
                <v-btn depressed class="body-2" > Salvar e carregar </v-btn>
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