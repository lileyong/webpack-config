<template>
    <div class="home">{{ count }}</div>
</template>

<script>
export default {
    created () {
        var count = 0
        setInterval(() => {
            count++
            this.$store.commit('updateCount', count)
        }, 1000)
    },
    computed: {
        count () {
            return this.$store.state.count
        },
    },
}
</script>
