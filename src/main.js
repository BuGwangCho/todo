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