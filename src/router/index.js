import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '../components/LoginForm'
import Home from '../components/Home'
import Test from '../components/Test'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'login-page',
            component: LoginForm
        },
        {
            path: '/home',
            name: 'home-page',
            component: Home
        },
        {
            path: '/test',
            name: 'test-page',
            component: Test
        },
        {
            path: '*',
            redirect: '/'
        }

    ]
})