<template>
    <div class="vue"></div>
</template>

<script>
import './vue'
import './single'
import './inherit'

export default {
    created () {
        // 嵌套赋值
        const [x, [y], z] = [1, [2, 3]]
        console.log(x, y, z)
        // 省略赋值
        const [, , c] = [1, 2, 3]
        console.log(c)
        // 对象解构赋值
        const { name: myName, age: myAge } = { name: 'zfb', age: 8 }
        console.log(myName, myAge)
        // 模板字符串
        var name = 'zfpx'
        var age = 8
        function desc (strings, ...values) {
            console.log(strings, values)
        }
        desc`${name} is ${age} old!`
        // 剩余操作符
        const rest = function (a, ...rest) {
            console.log(a, rest)
        }
        rest(1, 2, 3)
    }
}
</script>
