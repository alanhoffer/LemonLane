import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ContactView from '../views/ContactView.vue'
import ProfileView from '../views/ProfileView.vue'
import CartView from '../views/CartView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import AuthView from '../views/AuthView.vue'
import ProductView from '@/views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    },
    {
      path: '/product',
      name: 'auth',
      component: ProductView
    }
  ]
})

export default router
