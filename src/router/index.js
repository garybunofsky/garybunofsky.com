import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Home from '@/components/Home'
import Portfolio from '@/components/Portfolio'
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
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    }
  ]
})
