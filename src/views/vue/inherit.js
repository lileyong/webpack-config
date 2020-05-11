function Parent (value) {
    this.value = value
}
Parent.prototype.getValue = function () {
    return this.value
}

function Child (value) {
    Parent.call(this, value)
}
Child.prototype = Object.create(Parent.prototype, {
    constructor: Child
})

const child = new Child(2)
console.log(
    'inherit',
    child,
    child instanceof Child,
    child instanceof Parent,
    Parent.prototype.constructor
)
