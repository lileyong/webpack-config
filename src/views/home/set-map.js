const set = new Set()
const map = new Map()
const arr = []

set.add(1).add(2)
map.set(arr, 1).set(arr, 2)

set.forEach((value, key, map) => {
    console.log(value, key, map)
})

console.log(set.constructor, map.constructor)

const wm = new WeakMap()
const key = {}
let value = {
    foo: 1
}

wm.set(key, value)
value = null
console.log(wm.get(key)) // Object { foo: 1 }
