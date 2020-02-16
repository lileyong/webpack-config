var obj = {}
obj[Symbol.iterator] = function * () {
    yield 'a'
    yield 'b'
    yield 'c'
    return 'd'
}

for (const value of obj) {
    console.log(value)
}

function draw (count) {
    console.log('剩余抽奖次数:' + count)
}

function * start (count) {
    while (count > 0) {
        yield draw(--count)
    }
}

const step = start(5)
step.next()
step.next()
step.next()
step.next()
step.next()
step.next()

const ajax = function () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                code: -1
            })
        }, 200)
    })
}

const pull = function () {
    ajax().then(res => {
        if (res.code === 0) {
            console.log(res)
        } else {
            setTimeout(() => {
                console.log('wait')
                pull()
            }, 1000)
        }
    })
}

pull()
