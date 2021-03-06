import Console from 'src/components/console/index.vue'
import Home from 'src/views/home/index.vue'

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/',
        component: Console,
        children: [
            {
                path: 'home',
                component: Home,
            },
        ],
    },
]

export default routes
