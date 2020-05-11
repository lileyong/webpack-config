<template>
    <div ref="A" class="A">
        <div ref="B" class="B">
            <div ref="C" class="C"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Event',
    mounted () {
        this.$refs.A.addEventListener(
            'click',
            ev => {
                console.log('A冒泡')
            },
            false
        )
        this.$refs.A.addEventListener(
            'click',
            ev => {
                console.log('A捕获')
            },
            true
        )
        this.$refs.B.addEventListener(
            'click',
            ev => {
                console.log('B冒泡')
            },
            false
        )
        this.$refs.B.addEventListener(
            'click',
            ev => {
                console.log('B捕获')
            },
            true
        )
        this.$refs.C.addEventListener(
            'click',
            ev => {
                console.log('C冒泡')
                ev.stopImmediatePropagation()
            },
            false
        )
        this.$refs.C.addEventListener(
            'click',
            ev => {
                console.log('C捕获')
            },
            true
        )
    }
}
</script>

<style lang="scss" scoped>
.A,
.B,
.C {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100px;
    height: 100px;
    background-color: #ff0;
    will-change: transform;
}
.C {
    z-index: -1;
    background-color: #f00;
}
</style>
