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
                path: '/create', name: 'main.create', component: page('Create'),
            },
            {
                path: '/edit', name: 'main.edit', component: page('Edit'),
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