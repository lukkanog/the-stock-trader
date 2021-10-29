import Vue from "vue"
import axios from "axios"

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: "https://the-stock-trader-16712-default-rtdb.firebaseio.com/",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
})