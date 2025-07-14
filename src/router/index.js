import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Products from '../views/Products.vue'
import Categories from '../views/Categories.vue'
import Media from '../views/Media.vue'
import Sales from '../views/Sales.vue'
import Reports from '../views/Reports.vue'
import CameraView from '../views/CameraView.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/products', component: Products },
  { path: '/categories', component: Categories },
  { path: '/media', component: Media },
  { path: '/sales', component: Sales },
  { path: '/reports', component: Reports },
  { path: '/camera', component: CameraView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router