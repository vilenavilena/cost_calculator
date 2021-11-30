import Vue from 'vue'
import Router from 'vue-router'

import PageDashboard from '../page/PageDashboard'
import PageAbout from '../page/PageAbout'
import Page404 from '../page/Page404'
import PageAddPayment from '../page/PageAddPayment'

Vue.use(Router)

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard_0',
      component: PageDashboard
    },
    {
      path: '/add/payment/:category',
      name: 'addPayment',
      component: PageAddPayment
    },
    {
      path: '/add/payment',
      name: 'addPayment_0',
      component: PageAddPayment
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout
    },
    {
      path: '*',
      name: 'NotFound',
      component: Page404
    }
  ]
})