<template>
    <div id="nav-list">
        <div
            v-for="item in list"
            :key="item.title"
            class="nav-item"
            @mouseenter="handleMouseEnter"
        >{{ item.title }}</div>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
        handleMouseEnter (ev) {}
    }
}
</script>

<style lang="scss" scoped>
#nav-list {
    padding: 0 25px;
    display: flex;
    .nav-item {
        padding: 0 16px;
        line-height: 60px;
        font-size: 15px;
        color: hsla(0, 0%, 100%, 0.7);
        &.active {
            font-weight: 700;
            color: #fff;
        }
    }
}
</style>
