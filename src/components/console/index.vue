<template>
    <div id="console">
        <app-header></app-header>
        <div id="console-body">
            <app-sidebar></app-sidebar>
            <app-content></app-content>
        </div>
    </div>
</template>

<script>
import AppHeader from 'src/components/app-header/index.vue'
import AppSidebar from 'src/components/app-sidebar/index.vue'
import AppContent from 'src/components/app-content/index.vue'

export default {
    components: {
        AppHeader,
        AppSidebar,
        AppContent
    }
}
</script>

<style lang="scss" scoped>
#console {
    display: flex;
    flex-direction: column;
    height: 100%;
    #console-body {
        flex: 1;
        height: 0;
        display: flex;
    }
}
</style>
