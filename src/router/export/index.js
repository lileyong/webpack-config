import Console from 'src/components/console/index.vue'
import Export from 'src/views/export/index.vue'

const routes = [{
    path: '/',
    component: Console,
    children: [{
        path: 'export',
        component: Export
    }]
}]

export default routes
