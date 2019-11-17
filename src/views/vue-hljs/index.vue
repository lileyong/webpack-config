<template>
    <div v-highlight>
        <pre>
            <code>render () {
    return isShow ? (new VNode('div', {
        'staticClass': 'demo',
        'class': c
    }, [ /*这里还有子节点*/ ])) : createEmptyVNode();
}
</code>
        </pre>
    </div>
</template>

<style scoped>
.hljs {
    font-size: 20px;
}
</style>
