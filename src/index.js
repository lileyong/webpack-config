import Vue from 'vue'
import App from 'src/App.vue'
import router from 'src/router/index.js'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    router,
    render: (h) => h(App)
}).$mount(root)
