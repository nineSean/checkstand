import Vue from 'vue'
import VueRouter from 'vue-router'
import Rmb from '../views/rmb.vue'
import Recharge from '../views/recharge.vue'
import Drawer from '../views/drawer.vue'
import Table from '../views/table.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'rmb',
    component: Rmb
  },
  {
    path: '/rmb',
    name: 'rmb',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/rmb.vue')
    component: Rmb
  },
  {
    path: '/recharge',
    name: 'recharge',
    component: Recharge
  },
  {
    path: '/drawer',
    name: 'drawer',
    component: Drawer
  },
  {
    path: '/table',
    name: 'table',
    component: Table
  },
]
const router = new VueRouter({
  mode: 'hash',
  // base: __dirname,
  routes
})
export default router
