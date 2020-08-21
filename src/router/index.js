import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/page/Main.vue'
import Login from '@/components/page/Login.vue'
import Home from "@/views/Home.vue"
import Admin from "@/components/admin/admin.vue"
import Profile from '../components/admin/Profile.vue'
import Overview from '../components/admin/Overview.vue'
// import {fb} from '../firebase'


Vue.use(Router) // 注册vue-router

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:"/Main",
      name:"Main",
      component:Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:"/admin",
      name:"admin",
      component: Admin,
      meta: { requiresAuth: true },
      children:[
        {
          path: '/dashboard',
          component: () => import(/* webpackChunkName: "dashboard" */ '../components/admin/Dashboard.vue'),
        },
        {
          path: "profile",
          name: "profile",
          component: Profile
        },
        {
          path: "overview",
          name: "overview",
          component: Overview
        }   
      ]
    }
  ]
})

// 权限指令跳转
// router.beforeEach((to, from, next) => {

//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//   const currentUser = fb.auth().currentUser

//   if (requiresAuth && !currentUser) {
//       next('/')
//   } else if (requiresAuth && currentUser) {
//       next()
//   } else {
//       next()
//   }
// })



export default router;