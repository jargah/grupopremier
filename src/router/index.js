import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Index.vue'
import About from '../pages/about/Index.vue'
import OceanSpray from '../pages/oceanSpray/Index.vue'
import Contact from '../pages/contact/Index.vue'
import Products from '../pages/products/Index.vue'
import ProductDetail from '../pages/products/Detail.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/somos',
      component: About
    },
    {
      path: '/ocean_spray',
      component: OceanSpray
    },
    {
      path: '/contacto',
      component: Contact
    },
    {
      path: '/productos',
      component: Products
    },
    {
      path: '/productos/detalle',
      component: ProductDetail
    }
  ]
})

export default router
