<template>
    <v-layout 
        column 
        justify-center
        align-center
        v-if="items.length <= 0"
        class="my-15"
    >
        <v-img 
            src="@/assets/null.png"
            lazy-src="@/assets/null.png"
            max-height="64"
            max-width="64"
            
        />
        <p class="text-h5 mt-5">Nada por aqui...</p>
        <p class="font-weight-thin">{{ message }}</p>
    </v-layout>
</template>

<script>
export default {
    name: "EmptyState",
    props: {
        items: {
            type: Array,
            default: () => [],
            required: true
        },
        message: {
            type: String,
            default: "Não há registros a serem exibidos."
        }
    }
}

</script>

<style>

</style>