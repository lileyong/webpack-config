const async = function(callback) {
    try {
        new Promise(resolve => resolve()).then(callback())
    } catch (err) {
        console.log('caught error in promise', err)
    }
}

async(() => {
    console.log(t)
})
