import { createRouter, createWebHistory } from 'vue-router'
import AddTicket from '@/components/AddTicket.vue'
import BoardView from '@/components/BoardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BoardView,
      redirect: '/board/1'
    },
    {
      path: '/board/:id',
      name: 'board',
      component: BoardView
    },
    {
      path: '/new',
      component: AddTicket
    }
  ]
})

export default router
