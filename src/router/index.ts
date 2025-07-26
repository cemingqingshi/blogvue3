import { createWebHashHistory, createRouter} from 'vue-router'

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
}, {
    path: '/post',
    name: 'Post',
    component: () => import('@/pages/Post.vue')
}, {
    path: '/post_detail/:id',
    name: 'PostDetail',
    component: () => import('@/pages/PostDetail.vue')
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router