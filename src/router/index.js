import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Main',
        redirect: "/home",
        component: () =>
            import ('@/views/Main.vue'),
        children: [],
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/login/Login')
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

//避免重复点击导航，控制台报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

export default router