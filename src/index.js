import Vue from 'vue'
import App from 'src/App.vue'
import router from 'src/router/index.js'
import store from 'src/store/index.js'
import 'src/plugins/element-ui'
import 'src/plugins/vue-hljs'
import 'src/plugins/my-plugin'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount(root)
