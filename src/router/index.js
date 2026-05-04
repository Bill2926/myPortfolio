import { createRouter, createWebHistory } from 'vue-router'
import AboutMeView from '@/views/AboutMeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'AboutMe',
      component: AboutMeView
    },
    {
      path: "/projects",
      name: 'Projects',
      component: ProjectsView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ],
})

export default router
