<template>
    <div id="scroll">
        <div id="swipper"></div>
        <div id="tab">
            <span v-for="(tab, index) in tabs" :key="tab" @click="handleTabClick(index)">{{ tab }}</span>
        </div>
        <div v-for="(tab, index) in tabs" :key="tab" :id="'content' + (index + 1)">{{ tab }}</div>
    </div>
</template>

<script>
import throttle from 'loadsh/throttle'

export default {
    data () {
        return {
            tabs: ['内容1', '内容2', '内容3', '内容4']
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll, false)
    },
    methods: {
        handleTabClick (index) {
            const dom = document.querySelector('#content' + (index + 1))
            document.scrollingElement.scrollTop = dom.offsetTop - 40
        },
        handleScroll: throttle(function () {
            const container = document.querySelector('#scroll')
            const tab = document.querySelector('#tab')
            const scrollTop = document.scrollingElement.scrollTop
            if (scrollTop > tab.offsetTop) {
                container.classList = ['fixed']
            } else {
                container.classList = []
            }
        }, 50)
    }
}
</script>

<style scoped>
#swipper {
    height: 200px;
    background-color: darkmagenta;
}
#tab {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    background-color: azure;
}
#scroll.fixed {
    padding-top: 40px;
}
#scroll.fixed #tab {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
}
#content1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-color: antiquewhite;
}
#content2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-color: aquamarine;
}
#content3 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-color: beige;
}
#content4 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-color: cadetblue;
}
</style>
