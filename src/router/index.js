import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Home from '@/components/Home'
import Pricing from '@/components/Pricing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    }
  ]
})
