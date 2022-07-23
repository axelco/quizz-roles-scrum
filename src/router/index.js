import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/quizz',
    name: 'quizz',
    // route level code-splitting
    // this generates a separate chunk (quizz.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "quizz" */ '../views/QuizzView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home',
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
