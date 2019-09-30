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
}

#app {
    height: 100%;
}
</style>
