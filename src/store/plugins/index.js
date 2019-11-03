export default [
    function (store) {
        console.log('vuex plugins inited')
        store.watch(
            (state) => state.count + 1,
            (newCount) => {
                console.log('watch:', newCount)
            }
        )
        store.subscribe((mutation) => {
            console.log('subscribe:' + mutation.type, mutation.payload)
        })
        store.subscribeAction((action) => {
            console.log('subscribeAction:' + action.type, action.payload)
        })
    }
]
