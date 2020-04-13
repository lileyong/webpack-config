const async = function (callback) {
    try {
        setImmediate(callback)
    } catch (err) {
        console.log('caught error', err)
    }
}

async(() => {
    console.log(t)
})
