import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import KTabs from './plugins/index'
new Vue({
    el: '#app',
    router,
    store,
    KTabs,
    render: h => h(App)
})

router.beforeEach((to, from, next) => {
    if (store.state.isAuth === 'true') {
        console.log('전역 네비 가드');
        next();
    }
})