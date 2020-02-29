/*eslint-disable*/
const routes = [{
    path: '/',
    component: () =>
        import ('layouts/MainLayout.vue'),
    children: [{
            path: '',
            component: () =>
                import ('pages/login/Index.vue')
        },
        {
            path: '/index',
            component: () =>
                import ('pages/Index.vue')
        },
        {
            path: '/usermanage',
            component: () =>
                import ('pages/manage/UserManage.vue')
        },
        {
            path: '/deptmanage',
            component: () =>
                import ('pages/manage/DeptManage.vue')
        }
    ]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    })
}

export default routes