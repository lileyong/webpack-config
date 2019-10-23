export default {
    updateNameAsync (store, obj) {
        setTimeout(() => {
            store.commit('updateName', obj)
        }, 3000)
    }
}
