export default {
    state: {
        admin: null
    },
    mutations: {
        updateAdmin(state, admin) {
            state.admin = admin
        },
        resetAdmin(state) {
            state.admin = null
        }
    }
}