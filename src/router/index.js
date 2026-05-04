import { createRouter, createWebHistory } from 'vue-router'
import AboutMeView from '@/views/AboutMeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'

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
      path: "/contact",
      name: 'Contact',
      component: ContactView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ],
})

export default router
