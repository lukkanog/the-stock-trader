<template>
    <v-app-bar
        app
        dark
    >
        <h1 class="title mr-10">
            <span class="font-weight-bold">Stock</span> 
            <span class="font-weight-light">Trader</span> 
        </h1>

        <v-list class="d-flex menu-items" flat color="transparent">
            <v-list-item 
                active-class="active-menu-item" 
                class="menu-item"
                to="/"
            >
                Início
            </v-list-item>

            <v-list-item 
                active-class="active-menu-item" 
                class="menu-item"
                to="/portfolio"
            >
                Portfólio
            </v-list-item>

            <v-list-item 
                active-class="active-menu-item" 
                class="menu-item" 
                to="/stocks"
            >
                Ações
            </v-list-item>
        </v-list>

        <v-spacer/>

        <v-list class="d-flex menu-items" flat color="transparent">
            <v-list-item 
                class="menu-item body-2" 
            >
                Finalizar dia
            </v-list-item>

            <v-list-item 
                class="menu-item body-2" 
            >
                Salvar e carregar
            </v-list-item>

            <v-list-item 
                class="menu-item body-2" 
            >
                Saldo: R$10.000,00
            </v-list-item>
        </v-list>
        
    </v-app-bar>
</template>

<script>
export default {
    name: "NavHeader"
}
</script>

<style>
    .active-menu-item,
    .menu-item:hover{
        filter: brightness(70%);
        transition: .2s ease-in-out;
    }
</style>