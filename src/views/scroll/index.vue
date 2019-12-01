<template>
    <div ref="scroll" id="scroll">
        <div ref="banner" id="banner"></div>
        <div ref="tab" id="tab">
            <span
                v-for="(tab, index) in tabs"
                :key="tab"
                :class="index === moduleIndex ? 'active' : ''"
                @click="handleTabClick(index)"
            >{{ tab }}</span>
        </div>
        <div
            v-for="(tab, index) in tabs"
            :key="tab + 'module'"
            :ref="'module' + (index + 1)"
            :id="'module' + (index + 1)"
        >{{ tab }}</div>
    </div>
</template>

<script>
import throttle from 'loadsh/throttle'

export default {
    data () {
        return {
            tabs: ['内容1', '内容2', '内容3', '内容4'],
            moduleIndex: 0
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll, false)
    },
    methods: {
        handleTabClick (index) {
            const moduleDom = this.$refs['module' + (index + 1)]
            const tabHeight = this.$refs.tab.offsetHeight
            document.scrollingElement.scrollTop = moduleDom[0].offsetTop - tabHeight
            this.moduleIndex = index
        },
        handleScroll: throttle(function () {
            const scrollTop = document.scrollingElement.scrollTop
            const container = this.$refs.scroll
            const tab = this.$refs.tab

            if (scrollTop > tab.offsetTop) {
                container.classList = ['fixed']
                for (const index in this.tabs) {
                    const moduleDom = this.$refs['module' + (Number(index) + 1)]
                    if (scrollTop + tab.offsetHeight >= moduleDom[0].offsetTop) {
                        this.moduleIndex = Number(index)
                    }
                }
            } else {
                container.classList = []
                this.moduleIndex = 0
            }
        }, 50)
    }
}
</script>

<style scoped>
#banner {
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
#tab .active {
    font-weight: bold;
    color: crimson;
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
#module1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background-color: antiquewhite;
}
#module2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-color: aquamarine;
}
#module3 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: beige;
}
#module4 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
    background-color: cadetblue;
}
</style>
