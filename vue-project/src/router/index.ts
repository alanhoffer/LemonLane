import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ContactView from '../views/ContactView.vue'
import ProfileView from '../views/ProfileView.vue'
import CartView from '../views/CartView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import AuthView from '../views/AuthView.vue'
import ProductView from '@/views/ProductView.vue'
import AdminView from '@/views/admin/AdminView.vue'
import NavbarVue from '@/components/Navbar.vue'


import NavbarAdminVue from '@/components/admin/Navbar.vue'
import DashboardAdminView from '@/views/admin/DashboardView.vue'
import UserAdminView from '@/views/admin/UserView.vue'
import ProductAdminView from '@/views/admin/ProductView.vue'
import OrderAdminView from '@/views/admin/OrderView.vue'
import CategoryAdminView from '@/views/admin/CategoryView.vue'
import CollectionAdminView from '@/views/admin/CollectionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        navbar: NavbarVue
      },
    },
    {
      path: '/shop',
      name: 'shop',
      components: {
        default: ShopView,
        navbar: NavbarVue
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: AboutUsView,
        navbar: NavbarVue
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: {
        default: ContactView,
        navbar: NavbarVue
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: CartView,
        navbar: NavbarVue
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: {
        default: ProfileView,
        navbar: NavbarVue
      }
    },
    {
      path: '/auth',
      name: 'auth',
      components: {
        default: AuthView,
        navbar: NavbarVue
      }
    },
    {
      path: '/product/:productId',
      name: 'product',
      components: {
        default: ProductView,
        navbar: NavbarVue
      },
      props: true
    },
    {
      path: '/admin',
      name: 'admin',
      components: {
        default: AdminView,
        navbar: NavbarAdminVue
      },
      children: [
        {
          path: '',
          name: 'dashboard',
          components: {
            default: DashboardAdminView
          }
        },
        {
          path: 'user',
          name: 'adminUser',
          components: {
            default: UserAdminView
          }
        },
        {
          path: 'product',
          name: 'adminProduct',
          components: {
            default: ProductAdminView
          }
        },
        {
          path: 'order',
          name: 'adminOrder',
          components: {
            default: OrderAdminView
          }
        },
        {
          path: 'category',
          name: 'adminCategory',
          components: {
            default: CategoryAdminView
          }
        },        {
          path: 'collection',
          name: 'adminCollection',
          components: {
            default: CollectionAdminView
          }
        }
      ]
    }
  ]
})

export default router
