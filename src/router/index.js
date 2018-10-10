import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '../view/LoginForm'
import Home from '../view/Home'
import Test from '../components/menu/Test'
import Log from '../components/menu/Log'
import View from '../components/menu/View'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            component: LoginForm
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
        // {
        //     path: '/log',
        //     name: 'Log',
        //     component: Log
        // },
        // {
        //     path: '/view',
        //     name: 'View',
        //     component: View
        // },
        // {
        //     path: '/test',
        //     name: 'Test',
        //     component: Test
        // },
        // {
        //     path: '*',
        //     redirect: '/'
        // }

    ],
    mode: 'history',
})


var router = new Router({

})
router.beforeEach((to, from, next) => {
    if (store.state.isAuth === 'true') {
        console.log('전역 네비 가드');
        next();
    } else {
        console.log(store.state.uid);

    }

})