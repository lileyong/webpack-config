class Parent {
    constructor (name) {
        this.name = name
    }
}

class Child extends Parent {
    constructor (name, age) {
        super(name)
        this.age = age
    }

    get fulleName () {
        return this.name.toUpperCase()
    }

    set fulleName (value) {
        this.name = value
    }

    static tell () {
        console.log('let me tell you.')
    }
}

var xiaoming = new Child('xiaoming', 25)
Child.tell()
xiaoming.name = 'laowang'
console.log(xiaoming, xiaoming.fulleName)
