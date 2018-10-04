import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '../components/LoginForm'
import Home from '../components/Home'
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
        {
            path: '/log',
            name: 'Log',
            component: Log
        },
        {
            path: '/view',
            name: 'View',
            component: View
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        },
        // {
        //     path: '*',
        //     redirect: '/'
        // }

    ],
    mode: 'history'
})