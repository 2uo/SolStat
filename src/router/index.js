import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Login from '../views/Login'
import Library from '@/views/Library'
import NewBook from '@/views/NewBook'

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
      path: '/library',
      name: 'Бібліотека',
      component: Library,
    },
    {
      path: '/new',
      name: 'Створити',
      component: NewBook
    },
    {
      path: '/login',
      name: 'Вхід',
      component: Login,
    },
  ],
})
