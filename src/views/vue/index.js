// 更新视图
function cb (val) {
    console.log('视图更新啦')
}

// 响应式
function defineReactive (obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get () {
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

// vue类
class Vue {
    constructor (options) {
        this.data = options.data
        observer(this.data)
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
