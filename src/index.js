import Vue from 'vue'
import App from 'src/App.vue'
import router from 'src/router/index.js'
import store from 'src/store/index.js'
import ElementUI from 'element-ui'
import MyPlugin from '@promise.li/my-plugin'

Vue.use(ElementUI)
Vue.use(MyPlugin)

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount(root)
