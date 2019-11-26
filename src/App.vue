<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    }
}
</script>

<style lang="scss">
[v-cloak] {
    display: none;
}

html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
}

#app {
    height: 100%;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
