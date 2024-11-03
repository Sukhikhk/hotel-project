import { createRouter, createWebHistory } from 'vue-router'
import HotelView from '../views/Hotel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/hotels/:id',
      name: 'hotel',
      component: HotelView
    },
  ]
})

export default router
