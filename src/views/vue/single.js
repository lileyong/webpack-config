// 单例模式
class Wife {
    constructor (husband) {
        this.husband = husband
    }
}
const myWife = (function () {
    var wife = null
    return function () {
        if (!wife) {
            wife = new Wife()
        }
        return wife
    }
})()
const wife1 = myWife()
const wife2 = myWife()
console.log(wife1 === wife2)
