<template>
  <router-link 
        :to="route" 
        style="text-decoration: none;"
    >
    <v-card elevation="5" class="rounded" style="height: 100%" @click="handleClick">
        <v-card-title class="text-h6">
            <v-img 
                :src="require(`@/assets/${icon}`)"
                :lazy-src="require(`@/assets/${icon}`)"
                max-height="24"
                max-width="24"
                class="mr-2"
            />
            {{ title }}	
        </v-card-title>
        <slot name="additionalInfo"></slot>
    </v-card>
    </router-link>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: {
            type: String,
            required: true,
            default: "Card"
        },
        icon: {
            type: String,
            required: true,
            default: "stocks.png"
        },
        route: {
            type: String,
            required: false,
            default: "/"
        },
        redirectTo: {
            type: String,
            required: false,
        }
    },
    methods: {
        handleClick() {
            if (this.redirectTo) {
                window.location.href = this.redirectTo;
            }
        }
    }
}
</script>

<style>

</style>