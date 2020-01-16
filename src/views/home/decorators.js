function desc() {
    console.log('desc: decorators')
}

// eslint-disable-next-line
@desc
class A {
    say() {
        console.log('hello')
    }
}

new A().say()
