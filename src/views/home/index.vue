<template>
    <div class="home">
        {{ fullName }}
        {{ count }}
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import './decorators'

export default {
    created () {
        var count = 0
        setInterval(() => {
            count++
            this.updateCount(count)
        }, 1000)
        this.updateNameAsync({
            firstName: 'Promise',
            lastName: 'Li',
        })
    },
    computed: {
        ...mapState({
            count: 'count',
        }),
        ...mapGetters({
            fullName: 'fullName',
        }),
    },
    methods: {
        ...mapMutations(['updateCount']),
        ...mapActions(['updateNameAsync']),
    },
}
</script>
