import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard_0',
      component: () => import('../page/PageDashboard')

    },
    {
      path: '/add/payment/:category',
      name: 'addPayment',
      component: () => import('../page/PageAddPayment')
    },
    {
      path: '/add/payment',
      name: 'addPayment_0',
      component: () => import('../page/PageAddPayment')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../page/PageDashboard')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../page/PageAbout')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('../page/Page404')
    }
  ]
})