export default {
    state: {
        cart: []
    },
    mutations: {
        addToCart(state, item) {
            state.cart.push(item)
        },
        removeFromCart(state, index) {
            state.cart.splice(index, 1)
        },
        resetCart(state) {
            state.cart = []
        }
    }
}