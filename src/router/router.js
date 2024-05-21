import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/main',
    },
    {
        path: '/main',
        component: layout('DefaultLayout'),
        children: [
            {
                path: '/show', name: 'main.show', component: page('Show'),
            },
            {
                path: '/add', name: 'main.add', component: page('Add'),
            },
            {
                path: '/edit', name: 'main.edit', component: page('Edit'),
            },
            {
                path: '/access', name: 'main.access', component: page('Access'),
            },
        ]
    },
]

function page(path) {
    return () => import(`../views/${path}.vue`).then(m => m.default || m)
}

function layout(path) {
    return () => import(`../layouts/${path}.vue`).then(m => m.default || m)
}

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;