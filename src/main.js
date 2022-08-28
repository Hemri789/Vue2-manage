import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/less/index.less'

import router from './router'
import store from './store/index.js'
import http from 'axios'
import '@/api/mock'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$http = http

//导航守卫  访问系统的token验证
router.beforeEach((to, from, next) => {
    store.commit('getToken')
    const token = store.state.user.token
        //判断是否有token，并且是否在登录页
    if (!token && to.name !== 'login') {
        next({ name: 'login' })
    } else if (token && to.name === 'login') {
        next({ name: 'home' })
    } else {
        next();
    }
})

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        store.commit('addMenu', router)
    }
}).$mount('#app')