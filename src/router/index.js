import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var routes = []
const context = require.context('.', true, /^\.\/[^/]+\/.+\.js$/)
context.keys().forEach(key => {
    routes = routes.concat(context(key).default)
})

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
