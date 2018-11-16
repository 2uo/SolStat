import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Login from '../views/Login'
import Info from '@/views/Info'
import Price from '@/views/Price'
import Signup from '@/views/Signup'
import Payment from '@/views/Payment'
import Statistic from '@/views/Statistic'
import InfoManage from '@/views/InfoManage'
import Description from '@/views/Description'
import PrivacyPolicy from '@/views/PrivacyPolicy'

import store from '../store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next()
        return
    }
    next()
}

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next()
        return
    }
    next('/login')
}

export default new Router({
    mode: 'history',
    linkExactActiveClass: 'is-active',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Головна',
            component: Home,
        },
        {
            path: '/login',
            name: 'Вхід',
            component: Login,
        },
        {
            path: '/signup',
            name: 'Реєстрація',
            component: Signup
        },
        {
            path: '/description',
            name: 'Опис',
            component: Description
        },
        {
            path: '/info',
            name: 'Інформація',
            component: Info
        },
        {
            path: '/info-manage',
            name: 'Керування інформацією',
            component: InfoManage
        },
        {
            path: '/price',
            name: 'Прайс Лист',
            component: Price
        },
        {
            path: '/statistic',
            name: 'Статистика',
            component: Statistic
        },
        {
            path: '/privacy-policy',
            name: 'Політика конфіденційності',
            component: PrivacyPolicy
        },
        {
            path: '/payment',
            name: 'Оплата',
            component: Payment
        },
    ],
})
