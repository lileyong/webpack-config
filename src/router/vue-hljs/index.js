import Console from 'src/components/console/index.vue'
import VueHljs from 'src/views/vue-hljs/index.vue'

const routes = [{
    path: '/',
    component: Console,
    children: [{
        path: 'vue-hljs',
        component: VueHljs
    }]
}]

export default routes
