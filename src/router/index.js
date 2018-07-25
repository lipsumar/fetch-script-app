import Vue from 'vue'
import Router from 'vue-router'
import Browser from '@/components/Browser'
import Login from '@/components/Login'
import tokenManager from '@/api/tokenManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'browser',
      component: Browser,
      beforeEnter (to, from, next) {
        if (tokenManager.hasToken()) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
