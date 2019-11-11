import Console from 'src/views/console/index.vue'
import Echarts from 'src/views/echarts/index.vue'

const routes = [{
    path: '/',
    component: Console,
    children: [{
        path: 'echarts',
        component: Echarts
    }]
}]

export default routes
