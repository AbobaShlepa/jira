import { createRouter, createWebHistory } from 'vue-router'
import BoardView from '@/components/board/BoardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BoardView,
      redirect: '/board/1',
      children: []
    },
    {
      path: '/board/:id',
      name: 'board',
      component: BoardView,
      children: []
    }
  ]
})

export default router
