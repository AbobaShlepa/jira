import BoardView from '@/components/board/BoardView.vue'
import ThemeSelector from '@/components/settings/theme/ThemeSelector.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
    },
    {
      path: '/theme',
      name: 'theme',
      component: ThemeSelector,
      children: [],
    }
  ]
})

export default router
