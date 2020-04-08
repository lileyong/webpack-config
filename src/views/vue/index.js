// 更新视图
function cb (val) {
    console.log('视图更新啦')
}

// 响应式
function defineReactive (obj, key, val) {
    const dep = new Dep()

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get () {
            dep.addSub(Dep.target)
            return val
        },
        set (newVal) {
            if (val !== newVal) {
                cb(newVal)
            }
        }
    })
}

// observe
function observer (obj) {
    if (!obj || typeof obj !== 'object') {
        return
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}

// 订阅者
class Dep {
    constructor () {
        this.subs = []
    }

    addSub (sub) {
        this.subs.push(sub)
    }

    notify () {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}

// 观察者
class Watcher {
    constructor () {
        Dep.target = this
    }

    update () {
        cb()
    }
}
Dep.target = null

// vue类
class Vue {
    constructor (options) {
        this.data = options.data
        observer(this.data)
        new Watcher()
    }
}

const vm = new Vue({
    data: {
        test: 1
    }
})

setTimeout(() => {
    vm.data.test = 'hello world'
}, 1000)
