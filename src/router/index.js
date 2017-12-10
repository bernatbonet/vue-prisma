import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/UserCard'
import Login from '@/components/Login'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
