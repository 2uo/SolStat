import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Login from '../views/Login'
import Info from '@/views/Info'
import Links from '@/views/links'
import Logged from '@/views/Logged'
import Signup from '@/views/Signup'
import HowToUse from'@/views/HowToUse'
import TryUsing from '@/views/TryUsing'
import Statistic from '@/views/Statistic'
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
            path: '/logged',
            name: 'Ви вже зареєстровані',
            component: Logged
        },
        {
            path: '/howtouse',
            name: 'Як користуватись сервісом',
            component: HowToUse
        },
        {
            path: '/tryusing',
            name: 'Спробувати',
            component: TryUsing
        },
        {
            path: '/links',
            name: 'Посилання (МАН)',
            component: Links
        }
    ],
})
