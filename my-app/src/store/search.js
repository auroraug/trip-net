export default {
    state: {
        blur: null
    },
    mutations: {
        blurSearch(state, blur) {
            state.blur = blur
        },
        resetSearch(state) {
            state.blur = null
        }
    }
}