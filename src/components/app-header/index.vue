<template>
    <div id="app-header">
        <logo></logo>
        <nav-list :list="navConfigList"></nav-list>
    </div>
</template>

<script>
import Logo from './logo.vue'
import NavList from './nav-list.vue'

export default {
    components: {
        Logo,
        NavList
    },
    data () {
        return {
            navConfigList: [
                {
                    title: '财务管理'
                },
                {
                    title: '系统管理'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
#app-header {
    display: flex;
    width: 100%;
    height: 60px;
    background: #bc4e9c;
    background: linear-gradient(to right, #bc4e9c, #f80759);
}
</style>
