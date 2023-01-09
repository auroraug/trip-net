export default {
    state: {
        company: null
    },
    mutations: {
        updateCompany(state, company) {
            state.company = company
        },
        resetCompany(state) {
            state.company = null
        }
    }
}