<template>
    <div class="home">
        {{ fullName }}
        {{ count }}
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    created () {
        var count = 0
        setInterval(() => {
            count++
            this.$store.commit('updateCount', count)
        }, 1000)
    },
    computed: {
        ...mapState(['count']),
        ...mapGetters(['fullName']),
    },
}
</script>
