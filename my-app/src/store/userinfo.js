export default {
    state: {
        user: null
    },
    mutations: {
        updateUser(state, user) {
            state.user = user
        },
        resetUser(state) {
            state.user = null
        }
    }
}