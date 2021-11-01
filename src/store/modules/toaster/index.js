export default {
    state: {
        show: false,
        message: '',
        type: '',
    },
    mutations: {   
        showToaster(state, payload) {
            state.show = true;
            state.message = payload.message;
            state.type = payload.type;

            console.log(state)
        },
        
    },
    actions: {
        successToaster({commit}, message) {
            commit('showToaster', {
                message: message,
                type: 'success',
            });
        },
        errorToaster({commit}, message) {
            commit('showToaster', {
                message: message,
                type: 'error',
            });
        }
    },
    getters: {
        toaster(state) {
            return state;
        }
    }
}