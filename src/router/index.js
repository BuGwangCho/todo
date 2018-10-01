import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '../components/login/LoginForm'
import Home from '../components/Home'

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
            path: '*',
            redirect: '/'
        }
    ]
})